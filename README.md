# SmartSite AI

SmartSite AI is an AI-powered frontend website generator built using React, Vite, Tailwind CSS, and Gemini AI.  
The application allows users to generate modern website layouts from text prompts with live preview support and a responsive interface.

---

## Features

- AI-powered website generation
- Live website preview
- Dark and Light theme support
- Responsive modern UI
- Monaco code editor integration
- Download generated HTML files
- Prompt-based frontend generation
- Fast Vite-powered development setup

---

## Tech Stack

### Frontend
- React.js
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- CSS3

### Libraries & Tools
- Google GenAI SDK
- Monaco Editor
- React Icons
- React Toastify
- React Spinners
- Git & GitHub
- npm

---

## Project Structure

```text
smartsite-ai/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── helper.js
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_GEMINI_API_KEY=YOUR_API_KEY
```

Get Gemini API key from:

[Google AI Studio API Keys](https://aistudio.google.com/apikey)

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/DevHotchandani/smartsite-ai.git
cd smartsite-ai
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Application runs on:

```text
http://localhost:5173
```

---

## Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build Production Version

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Components

### Navbar
- Theme switching support
- Responsive navigation layout
- User interface controls

### Main Application
- AI prompt handling
- Dynamic website rendering
- Live preview workflow
- Code editor integration

---

## Author

**Dev Hotchandani**  
---

## License

This project is developed for educational and portfolio purposes.
