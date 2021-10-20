import React from 'react';
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <i className="fas fa-bars mobile-nav-toggle d-lg-none mt-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLift" aria-controls="offcanvasLift"></i>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLift" aria-labelledby="offcanvasLiftLabel">
                <div className="offcanvas-header justify-content-end">
                    <button type="button" className="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <nav className="navbar nav-menu navbar">
                        <ul>
                            <li><NavLink exact to="/" className="nav-link active "><i className="fas fa-home"></i><span>Home</span></NavLink></li>
                            <li><NavLink exact to="/about" className="nav-link "><i className="fas fa-user"></i> <span>About</span></NavLink></li>
                            <li><NavLink exact to="/skills" className="nav-link "><i className="far fa-file"></i> <span>Skills</span></NavLink></li>
                            <li><NavLink exact to="/project" className="nav-link "><i className="fas fa-bookmark"></i> <span>Project</span></NavLink></li>
                            <li><NavLink exact to="/services" className="nav-link "><i className="fas fa-server"></i><span>Services</span></NavLink></li>
                            <li><NavLink exact to="/contact" className="nav-link "><i className="far fa-envelope"></i> <span>Contact</span></NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <header className="d-flex flex-column justify-content-center header">
                <nav className="navbar nav-menu navbar">
                    <ul>
                        <li><NavLink exact to="/" className="nav-link active justify-content-center"><i className="fas fa-home"></i><span>Home</span></NavLink></li>
                        <li><NavLink exact to="/about" className="nav-link justify-content-center"><i className="fas fa-user"></i> <span>About</span></NavLink></li>
                        <li><NavLink exact to="/skills" className="nav-link justify-content-center"><i className="far fa-file"></i> <span>Skills</span></NavLink></li>
                        <li><NavLink exact to="/project" className="nav-link justify-content-center"><i className="fas fa-bookmark"></i> <span>Project</span></NavLink></li>
                        <li><NavLink exact to="/services" className="nav-link justify-content-center"><i className="fas fa-server"></i><span>Services</span></NavLink></li>
                        <li><NavLink exact to="/contact" className="nav-link justify-content-center"><i className="far fa-envelope"></i> <span>Contact</span></NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;
