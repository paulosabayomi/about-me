import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Outlet } from "react-router-dom";
import ProjectIntro from "./Intro";

const ProjectWrapper = React.memo((props: any) => {
    return (
        <MDBContainer fluid className="">
            <ProjectIntro />
            <Outlet />
        </MDBContainer>
    )
});

export default ProjectWrapper