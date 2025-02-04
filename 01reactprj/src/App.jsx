
import './App.css'
import UserCard from './components/UserCard'
import profile from "./assets/profile.jpg"

function App() {

  return (
    <div className='container'>
    <UserCard name="ajay" desc = "desc1" image={profile} style={{"border-radius":"10px"}}/>
    <UserCard name="vijay" desc = "desc1"/>
    <UserCard name="jay" desc = "desc1"/>
    </div>
  )
}

export default App
