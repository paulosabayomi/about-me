import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import githubLogo from '../../assets/github-logo.svg'
import youtubelogo from '../../assets/youtube-logo.svg'
import twitterlogo from '../../assets/twitter-logo.svg'
import linkedinlogo from '../../assets/linkedin-logo.svg'

const HeroComponent = React.memo((props: any) => {
    return (
        <MDBRow className="hero d-flex mx-0 flex-column align-items-center justify-content-center">
            <div className="intro-text text-center">Hello, I'm Abayomi</div>
            <div className="social-media-icons d-flex justify-content-center">
                <a href="https://github.com/paulosabayomi">
                    <img src={githubLogo} />
                </a>
                <a href="https://youtube.com/@paulos_ab">
                    <img src={youtubelogo} />
                </a>
                <a href="https://twitter.com/paulos_ab">
                    <img src={twitterlogo} />
                </a>
                <a href="https://www.linkedin.com/in/amusa-abayomi">
                    <img src={linkedinlogo} />
                </a>
            </div>
        </MDBRow>
    )
})

export default HeroComponent;