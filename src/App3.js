import First from './First'
import { Route, Routes } from 'react-router-dom';
import Stureg from './REGISTRATION/Stureg'
import Login from './LOGIN/login';
import Reg1 from './REGISTRATION/Reg1';
import Navbar from './App1'
import Scholar from './pages/SCHOLARSHIPS/scholar'
import Quizes from "./pages/QUIZES/quizes"
import Courses from './pages/COURSES/courses'
import Career from "./pages/CAREERGUIDANCE/career";
import Post from "./pages/POSTS/post"
import Mentor from './REGISTRATION/Mentorreg';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<First/>} />
      <Route path='/Login/' element ={<Login/>} />
      <Route path='/App1/*' element ={<Navbar/>} />
      <Route path="/Courses" element={<Courses/>}/>
        <Route path="/Quizes" element={<Quizes/>}/>
        <Route path="/Career" element={<Career/>}/>
        <Route path="/Scholar" element={<Scholar/>}/>
        <Route path="/Post" element={<Post/>}/>
      <Route path='/Reg1' element={<Reg1/>} />
      <Route path='/Mentorreg' element={<Mentor/>} />
      <Route path='/Stureg' element={<Stureg/>} />
    </Routes>
    </>
  )
}
export default App;