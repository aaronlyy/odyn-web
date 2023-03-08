import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserContext } from './context/UserContext'

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
            <Route path="/" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  )
}

export default App
