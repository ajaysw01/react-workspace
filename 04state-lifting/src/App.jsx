import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  //create state
  //manange state
  //change state
  //sabhi child me state ko syn karo
  const [name, setName] = useState('')

  return (
    <div>
      <Card title="card1" name= {name} setName = {setName}/>
      <Card title="card2" name= {name} setName = {setName}/>

      <p>parent componennt {name}</p>
    </div>
  )
}

export default App
