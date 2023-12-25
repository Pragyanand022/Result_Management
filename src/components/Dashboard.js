import React from 'react'
import Card from './Card'
import '../ham.css';

function Dashboard({toggleScale}) {
  return (

    <div className={`dash-container ${toggleScale?'dashbordScaleToggle':''}`}>
      <h1 className='dash-head'>Dashboard</h1>
        <div className="cardBox" style={{display:'flex',flexWrap:"wrap",marginLeft:'3rem'}}>
          <Card head={'Classes'} detail={'5'}/>
          <Card head={'Students'} detail={'200'}/>
          <Card head={'Subjects'} detail={'3'}/>
          <Card head={'Subjects'} detail={'3'}/>
          <Card head={'Subjects'} detail={'3'}/>
          <Card head={'Subjects'} detail={'3'}/>
        </div>
    </div>

  )
}

export default Dashboard;