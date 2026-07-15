# Task Manager

A Persian, RTL task manager built with vanilla JavaScript and Tailwind CSS. The app lets users create, edit, delete, prioritize, complete, and organize tasks in a clean dashboard layout. Tasks are stored in `localStorage`, so data remains available after refresh.

## Features

- Create new tasks with a title and optional description
- Edit existing tasks from the task menu
- Delete tasks
- Mark tasks as completed or active
- Assign priority levels: high, medium, and low
- Toggle between light and dark themes
- Responsive sidebar navigation for desktop and mobile
- Dynamic task counts for active and completed items
- Persian UI with RTL layout support

## Tech Stack

- HTML5
- Vanilla JavaScript (ES modules)
- Tailwind CSS v4
- `localStorage` for persistence

## Project Structure

- `index.html` - main application shell
- `src/css/input.css` - Tailwind source styles and theme variables
- `src/css/output.css` - generated Tailwind output
- `src/script/index.js` - app entry point
- `src/script/module/` - task features and UI modules

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Install dependencies

```bash
npm install
```

### Build Tailwind CSS

Run Tailwind in watch mode so `src/css/output.css` stays in sync with `src/css/input.css`:

```bash
npm run watch
```

### Open the app

Open `index.html` in a browser, or use a local static server such as Live Server in VS Code.

## Notes

- The app is fully client-side and does not require a backend.
- Task data is saved in the browser, so clearing site data will remove stored tasks.
- The UI text is in Persian and the page uses RTL direction.

## Scripts

| Script | Description |
| --- | --- |
| `npm run watch` | Watches Tailwind input CSS and rebuilds `src/css/output.css` |
