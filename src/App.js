import React from 'react';
import { Routes , Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';


const App=()=> {
  return (
    <div>
      <Routes>
      <Route path="/" Component={Home}/>
     
      </Routes>
    </div>
  );
}

export default App;
