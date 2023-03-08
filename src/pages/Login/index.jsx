import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  // functions
  const loginUser = async () => {
    const res = await fetch('http://localhost:4000/auth/login', {
      credentials: 'include',
      method: 'POST'
    });
    if (res.status != 201) {
      console.log('[+] Error logging in');
      return;
    }
    navigate('/');
  }

  return (
    <div className="Login">
      <h1>Login</h1>
      <button onClick={loginUser}>Login</button>
    </div>
  )
}

export default Login