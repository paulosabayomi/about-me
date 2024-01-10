import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import HeroComponent from "./Hero";
import WorksComponent from "./Works";
import AboutComponent from "./About";
import TechStacksComponent from "./TechStacks";
import { Outlet } from "react-router-dom";

const WrapperComponent = React.memo((props: any) => {
    return (
        <MDBContainer fluid className="px-0 mx-0">
            <HeroComponent />
            <AboutComponent />
            <TechStacksComponent />
            <WorksComponent />
            <Outlet />
        </MDBContainer>
    )
});

export default WrapperComponent;