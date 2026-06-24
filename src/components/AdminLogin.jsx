import { useState } from "react";
import styles from './components-css/MainArea.module.css'

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      onLogin(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" style={{marginBottom: '10px' }}>Login</button>
        <button type="text" name="Signup" style={{marginBottom: '10px' }}>SignUp</button>
      </form>
    </div>
  );
}

export default AdminLogin;
