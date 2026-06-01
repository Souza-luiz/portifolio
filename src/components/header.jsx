import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"
import "./header.css"

function Header() {


    return (
        <div className='header'>
            <img src={logo} className='logo' />
          

            <nav className="nav-center">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    Home
                </Link>
                <Link to="/eu" className={location.pathname === "/projetos" ? "active" : ""}>
                    Projetos
                </Link>
                <Link to="/amo_a" className={location.pathname === "/contato" ? "active" : ""}>
                    Contato
                </Link>
            </nav>
        </div>
    )

}

export default Header