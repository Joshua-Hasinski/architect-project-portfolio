// In frontend-app/src/App.jsx

import { useState, useEffect } from 'react';
import './App.css';

// 1. Define the API URL based on the environment
const API_URL = import.meta.env.DEV
  ? 'http://127.0.0.1:8000' // Your local FastAPI server URL
  : import.meta.env.VITE_API_URL; // The deployed URL from Render

function App() {
  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 2. Use the API_URL variable in your fetch call
    fetch(`${API_URL}/data`)
      .then(response => {
        // ... (rest of the fetch logic is the same)
      })
      // ...
  }, []);

  // ... (rest of your component is the same)
}

export default App;