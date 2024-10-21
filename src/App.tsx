import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ReactTagManager } from 'react-gtm-ts';
import './App.css'


ReactTagManager.init({
  code: 'GTM-M72PBQJ7', // GTM Code
  debug: false, // debug mode (default false)
  performance: false, // starts GTM only after user interaction (improve initial page load)
});

function App() {
  const [count, setCount] = useState(0)

  const onClickHandler = () => {
    setCount((count) => count + 1)
    ReactTagManager.action({
      event: 'sani princess',
      clickText: 'login text',
    })
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
