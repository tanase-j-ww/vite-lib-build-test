import { useState } from 'react'
import { Hoge } from 'vite-lib-build-test'
import { Button } from "vite-lib-build-test/components"
import "vite-lib-build-test/dist/style.css"
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  const newHoge = new Hoge()
  console.log(newHoge)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className='custom-button' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button hoge="hogehogehoge">hoge</Button>
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
