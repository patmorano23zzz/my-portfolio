<?php
declare(strict_types=1);

class Profile
{
    public function __construct(
        private string $name,
        private string $title,
        private string $bio
    ) {}

    public function getName(): string { return $this->name; }
    public function getTitle(): string { return $this->title; }
    public function getBio(): string { return $this->bio; }
}
