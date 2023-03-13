import { useNavigate, Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth"

import './index.css'

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
  }, [])

  // fetch user and set context
  const loadUser = async () => {
    const res = await fetch('http://localhost:4000/users/me', {
      credentials: 'include'
    })
    if (res.status != 200) {
      navigate('/login');
    }
    const json = await res.json();
    setUser(json.data.username);
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
      <div className="Dashboard__sidebar">
        <div className="Dashboard__sidebar-nav">
        <h1>Odyn Web v0.0.1</h1>
          <ul>
            <li><Link to='/'><div className="nav-btn">Dashboard</div></Link></li>
            <li><Link to='/ddns'><div className="nav-btn">DDNS</div></Link></li>
            <li><Link to='/users'><div className="nav-btn">Benutzer</div></Link></li>
            <li><Link to='/settings'><div className="nav-btn">Einstellungen</div></Link></li>
          </ul>
        </div>
        <div className="Dashboard__sidebar-user">
          <p>Eingeloggt als: {user}</p>
          <button onClick={logoutUser}>Logout</button>
        </div>
      </div>
      <div className="Dashboard__content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard