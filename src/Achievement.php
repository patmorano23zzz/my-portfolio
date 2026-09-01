<?php
declare(strict_types=1);

class Achievement
{
    public function __construct(
        private string $period,
        private string $description
    ) {}

    public function getPeriod(): string { return $this->period; }
    public function getDescription(): string { return $this->description; }
}
