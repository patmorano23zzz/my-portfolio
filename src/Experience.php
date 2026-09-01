<?php
declare(strict_types=1);

class Experience
{
    public function __construct(
        private string $place,
        private string $description
    ) {}

    public function getPlace(): string { return $this->place; }
    public function getDescription(): string { return $this->description; }
}
