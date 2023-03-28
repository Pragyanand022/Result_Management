import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='app' style={{display:'flex', flexDirection:'column'}}>
    <Navbar UserName="User1" SchoolName="School1"/>
    <Dashboard/>
    </div>
  );
}

export default App;
