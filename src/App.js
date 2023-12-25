import React,{useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [showSidebar,setShowSidebar]=useState(false);
  

  return (
    <div className='app' style={{display:'flex', flexDirection:'column'}}>
    <Navbar UserName="User1" SchoolName="School1" toggleSidebar={()=>setShowSidebar(!showSidebar)}/>
    {showSidebar && <Sidebar/>}
    <Dashboard toggleScale={showSidebar}/>
    </div>
  );
}

export default App;
