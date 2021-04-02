import React from "react";
import {Link, useLocation } from "react-router-dom";

function NavTabs() {

    const location = useLocation();

    return (
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    About
                </Link>
            </li>
            <li class="nav-item">
                <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                    Portfolio
                </Link>
            </li>
            <li class="nav-item">
                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                    Contact
                </Link>
            </li>
      </ul>
    );
}

export default NavTabs;