import { useState } from 'react'

// Extend the Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'GTM-M72PBQJ7'
}
TagManager.initialize(tagManagerArgs)

function App() {
  const [count, setCount] = useState(0)

  const onClickHandler = () => {
    setCount((count) => count + 1)
    window.dataLayer.push({
      event: 'hola pan'
    });
  }

  const text = `Amorcita, la cuenta es ${count}`
      
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{text}</h1>
      <div className="card">
        <button onClick={onClickHandler}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
