import React from "react";
import {Link, useLocation } from "react-router-dom";
import "./style.css";

function NavTabs() {

    const location = useLocation();

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/" || location.pathname === "/my-portfolio"|| location.pathname === "/my-portfolio/" ? "nav-link active" : "nav-link"}>
                    About
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                    Portfolio
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                    Contact
                </Link>
            </li>
      </ul>
    );
}

export default NavTabs;