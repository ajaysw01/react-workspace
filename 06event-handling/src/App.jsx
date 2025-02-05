
import './App.css'

function App() {
  function handleClick(){
    alert("Button clicked")
  }

  function handleMouseOver() {
    alert("mouse on paragraph")
  }

  return (
    <>
    <p onMouseOver={handleMouseOver}>
      This is a paragraph
    </p>
    <button onClick={handleClick}>
      Click me
    </button>
    </>
  )
}

export default App
