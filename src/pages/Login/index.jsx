import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // functions
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/auth/login', {
      credentials: 'include',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username,
        password
      })
    });

    if (res.status != 201) {
      const json = await res.json()
      console.log(json);
      return;
    }

    navigate('/');
  }

  return (
    <div className="Login">
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor="password">Passwort</label>
        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" value='Login' onClick={loginUser}/>
      </form>
    </div>
  )
}

export default Login