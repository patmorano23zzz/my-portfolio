<?php
declare(strict_types=1);

class Skill
{
    /** @param string[] $items */
    public function __construct(
        private string $category,
        private array $items
    ) {}

    public function getCategory(): string { return $this->category; }

    /** @return string[] */
    public function getItems(): array { return $this->items; }
}
