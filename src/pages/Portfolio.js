import React from "react";
import Project from "../components/ProjectCard";
import Container from "../components/Container"
import Gametagr from "../assets/images/gametagr.png";
import Playlist from "../assets/images/splash_screenshot.png";
import RMGenerator from "../assets/images/image3.png";
import PassGenerator from "../assets/images/PassGen1.png";
import Scheduler from "../assets/images/wds1.png";

function Portfolio() {
    return (
        <Container>
            
            <section className="row">
                <Project
                    image={Gametagr}
                    alt="Gamtagr"
                    title="Gametagr"
                    text ="Video Game Reviewer"
                    link="https://gametagr.herokuapp.com/"
                    linkname="View"
                    linkgit="https://github.com/JulieAnnI/GameTagr"
                />
                 <Project
                    image={Playlist}
                    alt="Playlist"
                    title="My Cool Playlist"
                    text ="Playlist Creator"
                    link="https://sossw1.github.io/Playlist-Creator/"
                    linkname="View"
                    linkgit="https://github.com/JulieAnnI/Playlist-Creator"
                />
                <Project
                    image={RMGenerator}
                    alt="ReadMeGenerator"
                    title="ReadMe Generator"
                    text ="Creates professional ReadMe"
                    link="https://drive.google.com/file/d/17ymAM94xsFlzWtQws0jQhNdict073R-j/view?usp=sharing"
                    linkname="Demo"
                    linkgit="https://github.com/JulieAnnI/Professional-README-Generator"
                />
            
                <Project 
                    image={PassGenerator}
                    alt="PassGenerator"
                    title="Password Generator"
                    text ="Generators random password"
                    link="https://julieanni.github.io/Javascript-Password-Generator/"
                    linkname="View"
                    linkgit="https://github.com/JulieAnnI/Javascript-Password-Generator"
                />
                 <Project 
                    image={Scheduler}
                    alt="Scheduler"
                    title="Work Day Scheduler"
                    text ="Personal scheduling app"
                    link="https://julieanni.github.io/Work-Day-Scheduler/"
                    linkname="View"
                    linkgit="https://github.com/JulieAnnI/Work-Day-Scheduler"
                />
           </section>

        </Container>
       
    );
}



export default Portfolio;