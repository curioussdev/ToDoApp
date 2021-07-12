import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => {
    return(
        <div className="uk-container">
            <nav className="uk-navbar">
                <div className="uk-navbar-left">
                    <Link to="#" className="uk-navbar-item uk-logo">My <span className="todos">Todos</span></Link>
                </div>
                
                
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link to="">
                                <span uk-icon="icon: plus; ratio: 1.2"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};


export default Navbar;