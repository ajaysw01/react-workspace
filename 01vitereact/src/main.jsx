import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <p>Custom my app !</p>
//     </div>
//   )
// }
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
