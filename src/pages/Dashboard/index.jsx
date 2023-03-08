import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth"

const Dashboard = () => {

  // hooks
  const {user, setUser} = useAuth();
  const navigate = useNavigate();

  // check if user already in context, if not load user
  useEffect(() => {
    if (!user) {
      console.log('[+] No user found in context, loading user');
      loadUser();
    }
  })

  // fetch user and set context
  const loadUser = async () => {
    const res = await fetch('http://localhost:4000/users/me', {
      credentials: 'include'
    })
    if (res.status != 200) {
      navigate('/login');
    }
    const json = await res.json();
    setUser(json.data.name);
  }

  // send logout request
  const logoutUser = async () => {
    const res = await fetch('http://localhost:4000/auth/logout', {
      credentials: 'include'
    })
    if (res.status != 200) {
      console.log('[+] Unable to logout user');
      return;
    }
    navigate('/login');
  }

  return (
    <div className='Dashboard'>
      <h1>Hallo {user}</h1>
      <button onClick={logoutUser}>Logout</button>
    </div>
  )
}

export default Dashboard