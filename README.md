# My Portfolio

A personal portfolio website for **Patrick Morano** — BS Computer Science student — built with **Object-Oriented PHP**.

## Features
- OOP PHP structure (separate classes for Profile, Education, Skills, Experience, Seminars, Achievements, Contact, and a Renderer)
- Responsive design matching the CV's navy/blue theme
- Smooth scrolling and scroll-based fade-in animations (vanilla JS)

## Project Structure
```
my portfolio/
├── index.php              # Entry point — builds Portfolio and renders it
├── src/
│   ├── Portfolio.php      # Main model: assembles all CV data (factory: fromCV())
│   ├── PortfolioRenderer.php  # View: renders the full HTML page
│   ├── Profile.php
│   ├── Education.php
│   ├── Skill.php
│   ├── Experience.php
│   ├── Seminar.php
│   ├── Achievement.php
│   └── Contact.php
├── assets/
│   ├── css/style.css
│   └── js/main.js
└── README.md
```

## Run Locally (XAMPP)
1. Place this folder inside `C:\xampp\htdocs\`
2. Start Apache from the XAMPP Control Panel
3. Open http://localhost/my%20portfolio/

## GitHub
https://github.com/patmorano23zzz/my-portfolio
