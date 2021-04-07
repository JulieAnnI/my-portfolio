import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import Bio from "../assets/images/biophoto.jpg";
import Resume from "../assets/images/Resume 9_2020.pdf";

function About() {
    return (
        <Container>
            <article class="a">
                <h1>About Me</h1>
                <section className = "row">
                    <figure className="col-md-6 col-sm-12">
                        <img src={Bio} alt="Bio" className="img-thumbnail"/>
                    </figure>            
                    <section className="col-md-6 col-sm-12">
                        <h3>Welcome!</h3>
                    <p>My name is Julie Ann Iwinski. I am currently a full-stack web development student looking to make a career in front-end web development. I am currently employed full-time as a photographer. My Bachelor's degree is in Film, Video, and Interactive Media with a minor in Business Management.</p>
                    <section className="box space-around">
                        <Button
                            link="https://github.com/JulieAnnI"
                            landing="Github"
                        /> 
                        <Button
                            link={Resume}
                            landing="Resume"
                        />
                    </section>
                    </section>
                </section>
            </article>  
        </Container>
    );
}



export default About;