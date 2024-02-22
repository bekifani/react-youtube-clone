
import { Navbar } from "./Components/Navbar/Navbar"
import { Route, Routes } from 'react-router-dom'
import Video from "./Pages/Video/Video.jsx"
import Home from './Pages/Home/Home.jsx'
import { useState } from "react"

function App() {

  const [sidebar , setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />}/>
        <Route path="/video/:category/:videoId" element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App
