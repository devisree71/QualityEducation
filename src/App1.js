import Navbar from "./stunavbar"
import Scholar from './pages/SCHOLARSHIPS/scholar'
import Home from './pages/HOME/home'
import Quizes from "./pages/QUIZES/quizes"
import Courses from './pages/COURSES/courses'
import Career from "./pages/CAREERGUIDANCE/career"
import Post from "./pages/POSTS/post"
import { Route, Routes } from "react-router-dom"
function App() {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Courses" element={<Courses/>}/>
        <Route path="/Quizes" element={<Quizes/>}/>
        <Route path="/Career" element={<Career/>}/>
        <Route path="/Scholar" element={<Scholar/>}/>
        <Route path="/post" element={<Post/>}/>
      </Routes>
    </>
  )
}
export default App;