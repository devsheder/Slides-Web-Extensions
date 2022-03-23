import './App.scss'
import { useMemo }from 'react';
import { useSelector } from './store';
import { LogList } from './components/LogList';
import { LogDetails } from './components/LogDetails';


function App() {
  const logs = useSelector((state) => state.logs);
  const currentLogIndex = useSelector((state) => state.currentLogIndex);
  const currentLog = useMemo(() => logs[currentLogIndex], [logs, currentLogIndex]);
  
  return <div className="container">
    <LogList logs={logs} currentLogIndex={currentLogIndex} />
    <LogDetails currentLog={currentLog} />
  </div>
}

export default App
