import React from "react";
import "./style.css";

function Project(props) {

    return (
        <figure className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card">
                <div className="embed-responsive embed-responsive-4by3">
                    <img src={props.image} class="card-img-top embed-responsive-item" alt={props.alt}></img>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <p><a href={props.link}>{props.linkname}</a></p>
                    <p><a href={props.linkgit}>Github</a></p>
                </div>
            </div>
        </figure>
    );
}

export default Project;