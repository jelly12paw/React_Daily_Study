import { useState } from 'react';
import './App.css';
import ToDos from './components/ToDos';

function App() {
  const [showToDos, setShowToDos] = useState([]);
  return (
    <div className='todos'>
      {showToDos && <ToDos/>}
      <button className='dateBtn' onClick={() => setShowToDos((show) => !show)}>
        2023년 2월 18일 할 일
      </button>
    </div>
  );
}

export default App;
