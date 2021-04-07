import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";

function Contact() {
    return (
        <Container>
            <h1>Contact Me</h1>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <Button 
                    landing="Submit"
                />
        </Container>
    );
}



export default Contact;