import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initGA } from './analytics'

// Initialize Google Analytics
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-L8B6W33V8Y';

if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
  initGA(GA_MEASUREMENT_ID);
}

createRoot(document.getElementById("root")!).render(<App />);
