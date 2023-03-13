import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserContext } from './context/UserContext'

import './App.css'

// pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Dashboard/>}>
              <Route path="/" element={<h1>Dashboard</h1>}/>
              <Route path="/ddns" element={<h1>DDNS</h1>}/>
              <Route path="/users" element={<h1>Benutzer</h1>}/>
              <Route path="/settings" element={<h1>Einstellungen</h1>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  )
}

export default App
