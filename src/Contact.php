<?php
declare(strict_types=1);

class Contact
{
    public function __construct(
        private string $phone,
        private string $email,
        private string $address,
        private string $github
    ) {}

    public function getPhone(): string { return $this->phone; }
    public function getEmail(): string { return $this->email; }
    public function getAddress(): string { return $this->address; }
    public function getGithub(): string { return $this->github; }
}
