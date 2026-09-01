<?php
declare(strict_types=1);

class Portfolio
{
    /** @param Education[] $education @param Skill[] $skills @param Experience[] $experience @param Seminar[] $seminars @param Achievement[] $achievements */
    public function __construct(
        private Profile $profile,
        private array $education,
        private array $skills,
        private array $experience,
        private array $seminars,
        private array $achievements,
        private Contact $contact
    ) {}

    public static function fromCV(): self
    {
        $profile = new Profile(
            'Patrick Morano',
            'BS Computer Science',
            'A creative and detail-oriented Computer Science student who builds clean, efficient, and purposeful web solutions. With hands-on experience in PHP, JavaScript and database management, I approach every project with a balance of technical precision and creative problem-solving. I thrive in collaborative environments, communicate clearly with my team, and take ownership of every task I am given. Outside of coding, I recharge through gaming and drawing and carry that same strategic and creative mindset into everything I do professionally.'
        );

        $education = [
            new Education('Tertiary', 'PRMSU Sta. Cruz — BS Computer Science', 'Currently enrolled', '2023 - Present'),
            new Education('Senior High School', 'TVL-ICT (CSS), Cato National High School', 'Graduated with honors', '2020 - 2022'),
            new Education('Junior High School', 'Cato National High School', 'Consistent with honors', '2016 - 2020'),
            new Education('Primary', 'Atel-Batang Elementary School', 'Graduated as Salutatorian', '2010 - 2016'),
        ];

        $skills = [
            new Skill('Soft Skills', ['Management Skills', 'Creativity', 'Time Management', 'Collaborative Mindset', 'Critical Thinking', 'Leadership']),
            new Skill('Languages, Frameworks & Tools', ['HTML / CSS / JavaScript', 'PHP', 'VB.NET', 'Visual Studio Code', 'MySQL', 'Infinity Free / Hostinger / XAMPP', 'Git / GitHub']),
            new Skill('Computer Skills', ['Troubleshooting, hardware and software installation, and networking', 'Efficient in Microsoft Word, Excel, and PowerPoint']),
        ];

        $experience = [
            new Experience('Cato National High School', 'Experienced in diagnosing, repairing, and maintaining computer hardware, software systems, and office printers to ensure smooth daily operations.'),
        ];

        $seminars = [
            new Seminar('2026', 'Smarter & Greener Future: Inclusive Computer Literacy Training for All Through Environmental Sustainability, Climate Change Awareness, and Gender-Responsive Development — President Ramon Magsaysay State University, Sta. Cruz Campus, May 11, 2026'),
        ];

        $achievements = [
            new Achievement('2025 - 2026', 'Successfully completed 25+ academic and technical projects within the school year'),
        ];

        $contact = new Contact(
            '09913123145',
            'patmorano23@gmail.com',
            'Brgy. Gama Sta. Cruz, Zambales',
            'https://github.com/patmorano23zzz'
        );

        return new self($profile, $education, $skills, $experience, $seminars, $achievements, $contact);
    }

    public function getProfile(): Profile { return $this->profile; }

    /** @return Education[] */
    public function getEducation(): array { return $this->education; }

    /** @return Skill[] */
    public function getSkills(): array { return $this->skills; }

    /** @return Experience[] */
    public function getExperience(): array { return $this->experience; }

    /** @return Seminar[] */
    public function getSeminars(): array { return $this->seminars; }

    /** @return Achievement[] */
    public function getAchievements(): array { return $this->achievements; }

    public function getContact(): Contact { return $this->contact; }
}
