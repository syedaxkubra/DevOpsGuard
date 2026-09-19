import { useEffect, useState } from "react";

function App() {
  const [backendStatus, setBackendStatus] = useState("Checking...");

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((response) => response.json())
      .then((data) => {
        setBackendStatus(data.status);
      })
      .catch(() => {
        setBackendStatus("Backend Offline");
      });
  }, []);

  return (
    <div>
      <h1>DevOpsGuard</h1>

      <h2>System Status</h2>

      <p>Python API: {backendStatus}</p>
      <p>Frontend: Running</p>
    </div>
  );
}

export default App;