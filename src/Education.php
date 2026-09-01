<?php
declare(strict_types=1);

class Education
{
    public function __construct(
        private string $level,
        private string $school,
        private string $detail,
        private string $years
    ) {}

    public function getLevel(): string { return $this->level; }
    public function getSchool(): string { return $this->school; }
    public function getDetail(): string { return $this->detail; }
    public function getYears(): string { return $this->years; }
}
