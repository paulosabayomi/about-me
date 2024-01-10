import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import CardComponent from "../../shared/Card";

const WorksComponent = React.memo((props: any) => {
    return (
        <MDBRow className="d-flex justify-content-center mx-0">
            <MDBCol sm={12} lg={8} className="work-title py-4">
                Works I'm proud of
            </MDBCol>
            
            <MDBCol sm={12} lg={8} className="work-title py-4">
                <MDBRow>
                    <CardComponent 
                        title="CustUp"  
                        desc="Highly Customizable JavaScript file upload library"
                        image={require("./../../assets/custup logo.png")}
                        href="https://custup.pryxy.com"
                    />
                    <CardComponent 
                        title="Studio Lite Audio Mobile App"  
                        desc="The mobile app is a cross platform mobile app for taking audio from artists to the Studio Lite VST3 running inside the producer's DAW."
                        image={require("../../assets/studio-lite-audio.png")}
                        href="https://apps.apple.com/ng/app/studio-lite-audio/id6464985604"
                    />
                    <CardComponent 
                        title="Studio Lite Video Conferencing Mobile App"  
                        desc="The mobile app is a cross platform mobile app for Studio Lite which is a platform where artists and producers can connect together for professional music production."
                        image={require("../../assets/studio-lite-video.png")}
                    />
                    <CardComponent 
                        title="Studio Lite Video Conferencing Desktop App"  
                        desc="The Desktop app is a cross platform app for connecting users for a video conferencing session for professional music production, the project is part of Studio Lite project."
                        image={require("../../assets/SL desktop app.jpg")}
                    />
                    <CardComponent 
                        title="Studio Lite VST3 plugin for DAW"  
                        desc="The VST3 plugin is a DAW plugin that connects to the Studio Lite Audio mobile app and takes in audio coming from the Studio Lite Audio mobile app directly into any DAW."
                        image={require("../../assets/SL VST3.jpg")}
                    />
                    <CardComponent 
                        title="Baskeet Mobile App"  
                        desc="A mobile app available for Android and iOS that allows users to share their audio sounds, and it also enables artists to connect with producers to schedule music production."
                        image={require("../../assets/baskeet.png")}
                        href="https://apps.apple.com/ng/app/baskeet/id6443642354"
                    />
                    <CardComponent 
                        title="Electricity utility billing system"  
                        desc="A web application for creating electricity utility bills for electricity consumers."
                        image={require("../../assets/DBS dashboard.png")}
                    />
                </MDBRow>
            </MDBCol>


        </MDBRow>
    )
})

export default WorksComponent;