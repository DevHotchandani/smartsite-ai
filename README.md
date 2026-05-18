# SmartSite AI

SmartSite AI is an AI-powered frontend website generator built using React and Vite.  
The application allows users to generate modern website layouts from text prompts using AI-assisted workflows with a clean and responsive interface.

---

## Features

- AI-powered website generation
- Modern responsive UI
- Dark and Light theme support
- Live preview rendering
- Prompt-based frontend generation
- Reusable React component structure
- Fast Vite-powered development setup

---

## Tech Stack

### Frontend
- React.js
- Vite
- JavaScript (ES6+)
- CSS3

### Libraries & Tools
- React Icons
- UUID
- YAML
- Git & GitHub

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

:contentReference[oaicite:0]{index=0}

---

## Installation & Setup

### Clone Repository

```bash
git clone <your-repository-url>
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

---

## Author

**Dev Hotchandani**  
B.Tech CSE (AI & ML)  
Shri Ramdeobaba College of Engineering and Management

---

## License

This project is developed for educational and portfolio purposes.