// import React from "react";
import { Component } from "react";
import "./Navbar.css";
import "./Nav-res.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import Logo from '../assets/Img/logo2.png'

class Navbar extends Component {
    state = {clicked:false};
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }
  render() {
    return (
      <nav className="NavbarItems">
        {/* <h1 className="Navbar-logo">TraShip</h1> */}
        <img src={Logo} alt="logo" />
        <div className="menu-icons" onClick={this.handleClick}>
        <i className={this.state.clicked ? 'bi bi-x-lg' : 'bi bi-list' }></i>
        </div> 
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
                return(
                    <li key={index}>
                    <Link to={item.URL} className={item.cName}>{item.title}</Link>
                    {/* <i className="bi bi-house"></i> */}
                    </li>
                )
            })}
          
        </ul>
      </nav>
    );
  }
}
export default Navbar;
