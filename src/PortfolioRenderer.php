<?php
declare(strict_types=1);

class PortfolioRenderer
{
    public function __construct(private Portfolio $portfolio) {}

    public function render(): void
    {
        $p = $this->portfolio;
        $profile = $p->getProfile();
        $contact = $p->getContact();
        $initials = $this->getInitials($profile->getName());
        ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($profile->getName()) ?> | Portfolio</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-brand"><?= htmlspecialchars($profile->getName()) ?></div>
        <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <header class="hero" id="about">
        <div class="hero-avatar"><?= htmlspecialchars($initials) ?></div>
        <h1><?= htmlspecialchars($profile->getName()) ?></h1>
        <p class="hero-title"><?= htmlspecialchars($profile->getTitle()) ?></p>
        <p class="hero-bio"><?= htmlspecialchars($profile->getBio()) ?></p>
        <a class="btn" href="#contact">Get In Touch</a>
    </header>

    <main>
        <section id="education">
            <h2>Education</h2>
            <div class="cards">
                <?php foreach ($p->getEducation() as $edu): ?>
                <div class="card">
                    <span class="tag"><?= htmlspecialchars($edu->getLevel()) ?></span>
                    <h3><?= htmlspecialchars($edu->getSchool()) ?></h3>
                    <p><?= htmlspecialchars($edu->getDetail()) ?></p>
                    <span class="years"><?= htmlspecialchars($edu->getYears()) ?></span>
                </div>
                <?php endforeach; ?>
            </div>
        </section>

        <section id="skills">
            <h2>Skills</h2>
            <div class="cards">
                <?php foreach ($p->getSkills() as $skill): ?>
                <div class="card">
                    <h3><?= htmlspecialchars($skill->getCategory()) ?></h3>
                    <ul>
                        <?php foreach ($skill->getItems() as $item): ?>
                        <li><?= htmlspecialchars($item) ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <?php endforeach; ?>
            </div>
        </section>

        <section id="experience">
            <h2>Work Experience</h2>
            <div class="cards">
                <?php foreach ($p->getExperience() as $exp): ?>
                <div class="card">
                    <h3><?= htmlspecialchars($exp->getPlace()) ?></h3>
                    <p><?= htmlspecialchars($exp->getDescription()) ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </section>

        <section id="seminars">
            <h2>Seminars &amp; Trainings</h2>
            <div class="cards">
                <?php foreach ($p->getSeminars() as $sem): ?>
                <div class="card">
                    <span class="tag"><?= htmlspecialchars($sem->getYear()) ?></span>
                    <p><?= htmlspecialchars($sem->getTitle()) ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </section>

        <section id="achievements">
            <h2>Achievements</h2>
            <div class="cards">
                <?php foreach ($p->getAchievements() as $ach): ?>
                <div class="card">
                    <span class="tag"><?= htmlspecialchars($ach->getPeriod()) ?></span>
                    <p><?= htmlspecialchars($ach->getDescription()) ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <div class="cards">
                <div class="card">
                    <ul>
                        <li>📞 <?= htmlspecialchars($contact->getPhone()) ?></li>
                        <li>✉️ <a href="mailto:<?= htmlspecialchars($contact->getEmail()) ?>"><?= htmlspecialchars($contact->getEmail()) ?></a></li>
                        <li>📍 <?= htmlspecialchars($contact->getAddress()) ?></li>
                        <li>🌐 <a href="<?= htmlspecialchars($contact->getGithub()) ?>" target="_blank" rel="noopener"><?= htmlspecialchars($contact->getGithub()) ?></a></li>
                    </ul>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; <?= date('Y') ?> <?= htmlspecialchars($profile->getName()) ?>. All rights reserved.</p>
    </footer>

    <script src="assets/js/main.js"></script>
</body>
</html>
        <?php
    }

    private function getInitials(string $name): string
    {
        $parts = preg_split('/\s+/', trim($name));
        $initials = '';
        foreach ($parts as $part) {
            $initials .= mb_strtoupper(mb_substr($part, 0, 1));
        }
        return $initials;
    }
}
