# ⏱ Stop Watch - Stopwatch & Timer Application

A modern, responsive web application built with React and Vite that provides both stopwatch and timer functionality.

## Features

- **Stopwatch Mode** ⏱
  - Start/Pause functionality
  - Reset to zero
  - Real-time display with millisecond precision
  - Clean, intuitive interface

- **Timer Mode** ⏰
  - Set custom time input
  - Start/Pause functionality
  - Reset capability
  - Countdown display

- **Responsive Design**
  - Works seamlessly on desktop and mobile devices
  - User-friendly controls
  - Clear time display

## Tech Stack

- **Frontend Framework:** React 19.2.6
- **Build Tool:** Vite 8.0.12
- **Language:** JavaScript (ES Modules)
- **Styling:** CSS
- **Linting:** ESLint with React plugin support
- **Package Manager:** pnpm

## Installation

1. **Clone or download the project**
   ```bash
   cd "Stop Watch"
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

## Available Scripts

### Development
```bash
pnpm run dev
```
Starts the development server with hot module reloading. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build
```bash
pnpm run build
```
Builds the application for production to the `dist/` folder. The build is optimized and ready for deployment.

### Preview
```bash
pnpm run preview
```
Previews the production build locally before deployment.

### Lint
```bash
pnpm run lint
```
Runs ESLint to check code quality and identify potential issues.

## Project Structure

```
src/
├── main.jsx                 # Application entry point
├── App.jsx                  # Main application component
├── index.css                # Global styles
├── assets/                  # Static assets
├── components/
│   ├── Controls.jsx         # Button controls (Start, Pause, Reset)
│   ├── TimeDisplay.jsx      # Time display component
│   └── TimeInput.jsx        # Time input for timer mode
├── features/
│   ├── Stopwatch.jsx        # Stopwatch feature component
│   └── Timer.jsx            # Timer feature component
└── utils/
    └── formatTime.js        # Time formatting utility function
```

## Usage

### Stopwatch Mode
1. Click the **Start** button to begin timing
2. Click **Pause** to temporarily stop the timer
3. Click **Reset** to return to 00:00:00

### Timer Mode
1. Enter the desired time using the time input
2. Click **Start** to begin the countdown
3. Click **Pause** to pause the countdown
4. Click **Reset** to clear the timer

## Development

### Getting Started
1. Install dependencies: `pnpm install`
2. Start the dev server: `pnpm run dev`
3. Open your browser and navigate to the provided localhost URL

### Code Quality
- ESLint is configured to maintain code quality
- Run `pnpm run lint` to check for issues
- Follow React best practices and hooks conventions

## Browser Support

Works on all modern browsers that support:
- ES Modules
- React 19
- CSS3

## License

This project is part of the Web App Cohort learning initiative.

---

**Happy timing! 🚀**
