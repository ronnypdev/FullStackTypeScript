import { useState } from 'react';
import './App.css';
import Home from './Home';

function App() {
  const [label, setLabel] = useState('hello world');
  return <Home label={label} />;
}

export default App;
