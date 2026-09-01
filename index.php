<?php
require_once __DIR__ . '/src/Profile.php';
require_once __DIR__ . '/src/Education.php';
require_once __DIR__ . '/src/Skill.php';
require_once __DIR__ . '/src/Experience.php';
require_once __DIR__ . '/src/Seminar.php';
require_once __DIR__ . '/src/Achievement.php';
require_once __DIR__ . '/src/Contact.php';
require_once __DIR__ . '/src/Portfolio.php';
require_once __DIR__ . '/src/PortfolioRenderer.php';

$portfolio = Portfolio::fromCV();
$renderer = new PortfolioRenderer($portfolio);
$renderer->render();
