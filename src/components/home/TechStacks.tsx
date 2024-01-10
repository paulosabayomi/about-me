import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import TechStackPill from "../../shared/TechStackPill";

const TechStacksComponent = React.memo((props: any) => {
    return (
        <MDBRow className="d-flex justify-content-center mx-0">
            <MDBCol sm={12} lg={8} className="about-title py-4">
                My tech stack
            </MDBCol>
            
            <MDBCol sm={12} lg={8} className="py-4 d-flex justify-content-center flex-wrap">
                <div className="stack-category-text text-white w-100 mb-4" style={{fontSize: '110%'}}>
                    Front End
                </div>
                <TechStackPill 
                    name="JavaScript" 
                    image={require('../../assets/javascript-logo.svg').default} 
                />
                <TechStackPill 
                    name="React JS" 
                    image={require('../../assets/reactjs-logo.svg').default} 
                />
                <TechStackPill 
                    name="Typescript" 
                    image={require('../../assets/typescript-logo.svg').default} 
                />
                <TechStackPill 
                    name="Redux Toolkit" 
                    image={require('../../assets/redux-logo.svg').default} 
                />
                <TechStackPill 
                    name="JQuery" 
                    image={require('../../assets/jquery-logo.svg').default} 
                />
                <TechStackPill 
                    name="React Native" 
                    image={require('../../assets/reactjs-logo.svg').default} 
                />
                <TechStackPill 
                    name="React Native Expo" 
                    image={require('../../assets/reactjs-logo.svg').default} 
                />
                <TechStackPill 
                    name="Bootstrap" 
                    image={require('../../assets/bootstrap-logo.svg').default} 
                />
                <TechStackPill 
                    name="Electron JS" 
                    image={require('../../assets/electronjs-logo.svg').default} 
                />
                <TechStackPill 
                    name="Apache Cordova" 
                    image={require('../../assets/apache-cordova-logo.svg').default} 
                />

            </MDBCol>
            
            <MDBCol sm={12} lg={8} className="py-4 d-flex justify-content-center flex-wrap">
                <div className="stack-category-text text-white w-100 mb-4" style={{fontSize: '110%'}}>
                    Server side
                </div>
                <TechStackPill 
                    name="PHP" 
                    image={require('../../assets/php-logo.svg').default} 
                />
                <TechStackPill 
                    name="Laravel" 
                    image={require('../../assets/laravel-logo.svg').default} 
                />
                <TechStackPill 
                    name="SQL" 
                    image={require('../../assets/sql-logo.svg').default}
                />
                <TechStackPill 
                    name="MySQL" 
                    image={require('../../assets/mysql-logo.svg').default} 
                />
                <TechStackPill 
                    name="Node JS" 
                    image={require('../../assets/nodejs-logo.svg').default} 
                />
                <TechStackPill 
                    name="Express JS" 
                    image={require('../../assets/express-logo.svg').default} 
                />
                <TechStackPill 
                    name="Socket.io" 
                    image={require('../../assets/socket-logo.svg').default} 
                />
                <TechStackPill 
                    name="Python" 
                    image={require('../../assets/python-logo.svg').default} 
                />
                <TechStackPill 
                    name="Docker" 
                    image={require('../../assets/docker-logo.svg').default} 
                />
                <TechStackPill 
                    name="nginx" 
                    image={require('../../assets/nginx-logo.svg').default} 
                />
                <TechStackPill 
                    name="Supervisord" 
                    image={require('../../assets/supervisord.png')} 
                />

            </MDBCol>
            
            <MDBCol sm={12} lg={8} className="py-4 d-flex justify-content-center flex-wrap">
                <div className="stack-category-text text-white w-100 mb-4" style={{fontSize: '110%'}}>
                    Tools
                </div>
                <TechStackPill 
                    name="Grunt" 
                    image={require('../../assets/grunt-logo.svg').default} 
                />
                <TechStackPill 
                    name="Jest" 
                    image={require('../../assets/jest-logo.svg').default} 
                />
                <TechStackPill 
                    name="Git" 
                    image={require('../../assets/git-logo.svg').default}
                />
                <TechStackPill 
                    name="GitHub Actions" 
                    image={require('../../assets/github-logo.svg').default} 
                />
                <TechStackPill 
                    name="Selenium" 
                    image={require('../../assets/selenium-logo.svg').default} 
                />
                <TechStackPill 
                    name="ngrok" 
                    image={require('../../assets/ngrok-logo.png')} 
                />

            </MDBCol>

        </MDBRow>
    )
});

export default TechStacksComponent;