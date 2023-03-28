import React from 'react'

function Card(props) {
    return (
        <div className="row" style={{margin:'2rem 4rem',width:'20rem'}}>
            <div className="card border-start border-0 border-3">
                <div className="card-body">
                    <div className="d-flex" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'5px'}}>
                        <div className="d-flex widgets-icons-2 bg-gradient align-items-center"><i className="fa fa-graduation-cap"></i></div>
                        <div style={{textAlign:"center"}}>
                            <p className="text-secondary">{props.head}</p>
                            <h4>{props.detail}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
