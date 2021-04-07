import React from "react";
import "./style.css";

function Button(props) {

    return (
        <a class="btn btn-outline-secondary" href={props.link} role="button">{props.landing}</a>
    );
}

export default Button;

