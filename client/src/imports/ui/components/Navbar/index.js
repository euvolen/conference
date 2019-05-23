import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-md fixed-top shadow-sm" style={{height: '50px'}}>
            <div className="container"><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse"
                    id="navcol-1">
                        <div className="col-md-6 justify-content-start">
                   
                    <ul className="nav navbar-nav flex-fill">
                        <li className="nav-item" role="presentation"><Link className="nav-link active justify-content-start" to="/">Home</Link></li>
                        <li className="nav-item" role="presentation"><Link className="nav-link active justify-content-start" to="/catalog">Catalog</Link></li>
                        <li className="nav-item" role="presentation"><Link className="nav-link active justify-content-start" to="/about">About</Link></li>
                    </ul>
                    </div>
                       
                        <div className="col-md-6 ">
                    
                    <ul className="nav navbar-nav justify-content-end">
                       <li className="nav-item" role="presentation"></li>
                        <li className="nav-item" role="presentation"><Link className="nav-link" to="/signup">SignUp</Link></li>
                        <li className="nav-item" role="presentation"><Link className="nav-link" to="/login">Login</Link></li>
                    </ul>
                    </div>
                     
                     
            
                </div>
            </div>
        </nav>
        )
    }
}
export default Navbar