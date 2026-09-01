<?php
declare(strict_types=1);

class Seminar
{
    public function __construct(
        private string $year,
        private string $title
    ) {}

    public function getYear(): string { return $this->year; }
    public function getTitle(): string { return $this->title; }
}
