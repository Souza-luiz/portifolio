import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "./header.css";

function Header() {

    const location = useLocation();

    return (
        <div className="header">

            <img src={logo} className="logo" />

            <nav className="nav-center">

                <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                >
                    Home
                </Link>

                <Link
                    to="/projetos"
                    className={location.pathname === "/projetos" ? "active" : ""}
                >
                    Projetos
                </Link>

                <Link
                    to="/contato"
                    className={location.pathname === "/contato" ? "active" : ""}
                >
                    Contato
                </Link>

            </nav>

        </div>
    );
}

export default Header;