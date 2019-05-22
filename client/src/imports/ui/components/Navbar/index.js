import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-md fixed-top shadow-sm" style={{height: '50px'}}>
            <div className="container"><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse justify-content-end"
                    id="navcol-1">
                    <ul className="nav navbar-nav flex-fill">
                        <li className="nav-item" role="presentation"><Link className="nav-link active justify-content-start" to="/">Home</Link></li>
                        <li className="nav-item" role="presentation"><Link className="nav-link active justify-content-start" to="/about">About</Link></li>
                    </ul>
                    <ul className="nav navbar-nav">
                       <li className="nav-item" role="presentation"></li>
                        <li className="nav-item" role="presentation"><Link className="nav-link" to="/signup">SignUp</Link></li>
                        <li className="nav-item" role="presentation"><Link className="nav-link" to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}
export default Navbar