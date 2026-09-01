"use client";

import { useState } from "react";
import type { Certificate } from "@/lib/data";

export default function CertificateCard({ cert }: { cert: Certificate }) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <div className="certificate-card">
      <div className="certificate-frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cert.image}
          alt={`Certificate — ${cert.title}`}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      </div>
      <span className="certificate-caption">
        📜 Certificate of Participation — click to view full size
      </span>
    </div>
  );
}
