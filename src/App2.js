import Navbar from "./Mentornav"
import Home from './pages/Home'
import Studlist from './pages/Studlist'
import Mentorposts from "./pages/Mentorposts"
import Mentorqueries from "./pages/MentorQueries"
import {Routes,Route} from 'react-router-dom';
function App1() {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Student' element={<Studlist/>}/>
        <Route path='/Mentorposts' element={<Mentorposts/>} />
        <Route path='/Mentorqueries' element={<Mentorqueries/>}/>
      </Routes>
    </div>
  )
}
export default App1;