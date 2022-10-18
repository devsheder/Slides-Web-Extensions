import { MouseEvent, useCallback } from 'react';
import './App.css'
import { Logger } from './logger'

function App() {
  const onClick = useOnClick();
  return (
    <div className="App" onClick={onClick}>
    </div>
  )
}

function useOnClick() {
  return useCallback((event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    Logger.warn('click on image', { x, y })
  }, []);
}

export default App
