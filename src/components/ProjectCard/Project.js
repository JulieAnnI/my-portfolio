import React from "react";
import "./style.css";

function Project(props) {

    return (
        <div className="card">
            <img src={props.image} class="card-img-top" alt={props.alt}></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href={props.url} className="btn btn-primary">Github</a>
            </div>
        </div>
    );
}

export default Project;