import { useState, useEffect } from 'react';
import './App.css';

// 1. Define the API URL based on the environment
const API_URL = import.meta.env.DEV
  ? 'http://127.0.0.1:8000' // For local development
  : import.meta.env.VITE_API_URL; // For the deployed site on Render

function App() {
  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 2. Use the API_URL variable in your fetch call
    fetch(`${API_URL}/data`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProjectData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading data from the API...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  // 3. Render the data once it's loaded
  return (
    <div>
      <h1>{projectData.name}</h1>
      <p>Version: {projectData.version}</p>
      <p>Location: {projectData.location}</p>
    </div>
  );
}

export default App;