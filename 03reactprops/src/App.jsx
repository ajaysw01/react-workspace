/* eslint-disable react/no-children-prop */

import { useState } from 'react'
import './App.css'
import Button from './components/Button'
// import Card from './components/Card'

function App() {
  const [count ,setCount] = useState(0)

  function handleClick(){
    setCount(count+1)
  }

  return (
   <div>

    <Button handleClick = {handleClick} 
    text="Click me">
      <h1>{count}</h1>

    </Button>


    
    {/* <Card name="Ajay Wankhade">
    <h1>kakdfjljadfkl;jklajkd</h1>
    <p>adsklfjklajdklfjakljda;</p>
    <p>JKAJDKLFJLKJDSKLJKLAJ</p>
    </Card>

    <Card children= "overiden chidren">
      <p>overriding children</p>
    </Card> */}
   </div>
  )
}

export default App
