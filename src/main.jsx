import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Register service worker
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  // Save the event for later
  window.deferredPrompt = e;
});

const handleInstallClick = () => {
  if (window.deferredPrompt) {
    window.deferredPrompt.prompt();
    window.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      }
      window.deferredPrompt = null;
    });
  }
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
