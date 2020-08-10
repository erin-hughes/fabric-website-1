import React from 'react';
import './NavBar.css';
import fabricLogo from '../../res/Hyperledger Fabric Logo.png';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends React.Component {

    render() {

        return (
            <div className="navbar-container">
                <Link exact to='/'>
                    <img src={fabricLogo} alt="Fabric" className="navbar-logo"></img>
                </Link>
                <div className="navbar-title">Hyperledger <span className="navbar-title-red">Fabric</span></div>
                <div className="navbar-link-container">
                    <NavLink exact to='/'>Overview</NavLink>
                    <NavLink exact to='/operators'>Operators</NavLink>
                    <NavLink exact to='/developers'>Developers</NavLink>
                    <NavLink exact to='/communitycontributors'>Community</NavLink>
                </div>
            </div>
        )
    }
}

export default NavBar;
