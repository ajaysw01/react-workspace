/* eslint-disable no-unused-vars */

import './App.css'

function App() {
  function handleClick(){
    alert("Button clicked")
  }

  function handleMouseOver() {
    alert("mouse on paragraph")
  }

  function handleInputChange(e) {
    console.log("Value in change in input",e.target.value);
    
  }

  function handleSubmit(e) {
    e.preventDefault();
    // custom behabviro
    alert("form submit karu ka")
  }

  return (
    <>
    {/* we should pass function reference rather than immediate invocation */}

    <button onClick={() => alert("button click hua h")} >  
      Click Me !
    </button>

    {/* <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} />
      <button type='submit'>Submit</button>
    </form>
 */}

    
    {/* <p onMouseOver={handleMouseOver}>
      This is a paragraph
    </p>
    <button onClick={handleClick}>
      Click me
    </button> */}
    </>
  )
}

export default App
