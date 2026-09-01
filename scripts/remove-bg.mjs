// Removes the near-black background from public/photo.jpg -> public/photo.png
// Strategy: flood-fill from the image borders across near-black pixels only,
// so dark areas INSIDE the subject (hair, suit) survive.
import sharp from "sharp";

const SRC = "public/photo.jpg";
const OUT = "public/photo.png";
const THRESH = 26; // pixels with max-channel <= this count as background

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const lum = new Float32Array(width * height);
for (let i = 0; i < width * height; i++) {
  const o = i * channels;
  lum[i] = Math.max(data[o], data[o + 1], data[o + 2]);
}

// BFS flood fill from all border pixels
const visited = new Uint8Array(width * height);
const stack = [];
for (let x = 0; x < width; x++) {
  stack.push(x, (height - 1) * width + x);
}
for (let y = 0; y < height; y++) {
  stack.push(y * width, y * width + width - 1);
}

while (stack.length) {
  const p = stack.pop();
  if (visited[p]) continue;
  visited[p] = 1;
  if (lum[p] > THRESH) continue; // hit the subject, stop spreading
  data[p * channels + 3] = 0; // background -> transparent
  const x = p % width;
  const y = (p / width) | 0;
  if (x > 0) stack.push(p - 1);
  if (x < width - 1) stack.push(p + 1);
  if (y > 0) stack.push(p - width);
  if (y < height - 1) stack.push(p + width);
}

// Feather: soften the cutout edge by smoothing alpha in a 2px band
for (let pass = 0; pass < 2; pass++) {
  const alphaCopy = new Uint8Array(width * height);
  for (let i = 0; i < width * height; i++)
    alphaCopy[i] = data[i * channels + 3];
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const i = y * width + x;
      const o = i * channels;
      if (alphaCopy[i] === 0) continue;
      const avg =
        (alphaCopy[i] +
          alphaCopy[i - 1] +
          alphaCopy[i + 1] +
          alphaCopy[i - width] +
          alphaCopy[i + width]) /
        5;
      data[o + 3] = Math.round(avg);
    }
  }
}

// Trim transparent margins so the subject fills the frame
await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(OUT);

const meta = await sharp(OUT).trim().toFile(OUT + ".tmp");
await sharp(OUT + ".tmp").toFile(OUT);
console.log(`Done: ${OUT} (${meta.width}x${meta.height} after trim)`);
