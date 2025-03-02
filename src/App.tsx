import { useState } from 'react'
import Button from '@mui/material/Button';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components';
import { StyledEngineProvider } from '@mui/material';

const BaseButton = styled(Button)`
  padding: 10px 20px;
  border-radius: 5px;
`;

// the work is started

function App() {
  const [count, setCount] = useState(0)

  return (
    <StyledEngineProvider injectFirst>
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
        <BaseButton onClick={() => setCount((count) => count + 1)} variant="outlined">count is {count}</BaseButton>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </StyledEngineProvider>
  )
}

export default App
