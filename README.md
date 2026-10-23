# JS Study Lab — Assignment #5

**Student:** Begaliev Bakdaulet  
**Group:** SE2526  
**Course:** Front-End Development  
**Topic:** JavaScript Basics (DOM Manipulation & Events)

## About

A simple four-page website made with HTML, CSS and beginner-level JavaScript. No frameworks or database are used.

## Tasks

| Page | Tasks | What is implemented |
| --- | --- | --- |
| `index.html` | 0–1 | `console.log`, alert, variables, arithmetic and string concatenation |
| `dom.html` | 2–4 | Change text, change background/font size, create/remove list items |
| `events.html` | 5–7 | Mouse events, `keyup`, calculator (+, −, ×, ÷) |
| `todo.html` | 8 | Add, complete and delete tasks using a JavaScript array |

All four pages have a navbar to navigate between assignment parts.

## Project structure

```text
assignment5-js-simple/
├── index.html
├── dom.html
├── events.html
├── todo.html
├── css/
│   └── style.css
├── js/
│   ├── intro.js
│   ├── dom.js
│   ├── events.js
│   └── todo.js
└── README.md
```

## How to run

1. Open this folder in VS Code.
2. Open `index.html` in the browser (or use the **Live Server** extension).
3. Open other parts using the navbar.
4. Press **F12 → Console** to check Tasks 0 and 1.
5. Try each button, type in the input, test the calculator and add tasks to the To-Do List.

**Note:** The greeting alert when opening `index.html` is required for Task 0. The To-Do list is temporary and is cleared when the page reloads.

## Publish using GitHub Pages

1. Create a public GitHub repository for this project.
2. Open a terminal in the project folder. For a new Git repository, run:

```powershell
git init
git branch -M main
git add .
git commit -m "Add JavaScript Assignment 5"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

3. On GitHub open **Settings → Pages**.
4. Select **Deploy from a branch**, choose **main** and **/(root)**, then save.
5. Test the published website and submit the GitHub repository link in Moodle.

The assignment also includes an **individual oral defense** and **live coding**, which must be completed by the student. Publishing is not automatic; the student needs to follow the steps above.
