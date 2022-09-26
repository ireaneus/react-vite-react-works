import { useState, useCallback } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import DemoOutput from './components/DemoOutput';

function App() {
  const [showCount, setShowCount] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP Running');

  const toggleShowCount = useCallback(() => {
    if (allowToggle) {
      setShowCount((prevShowCount) => !prevShowCount);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={toggleShowCount}>show paragraph below</button>
        <button onClick={allowToggleHandler}>Enable Button above</button>
        <DemoOutput show={showCount} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
