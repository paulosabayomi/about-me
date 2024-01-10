import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";

const AboutComponent = React.memo((props: any) => {
    return (
        <MDBRow className="d-flex justify-content-center mx-0">
            <MDBCol sm={12} lg={8} className="about-title py-4">
                About me
            </MDBCol>

            <MDBCol sm={12} lg={8} className="py-4">
                <MDBRow>
                    <MDBCol xs={12} md={8} className="about-description">
                        I am a full stack Web and cross-platform Mobile app developer, with additional experience in 
                        desktop app development, currently venturing into Machine Learning/Artificial Intelligence.
                    </MDBCol>
                    <MDBCol xs={12} md={4} className="order-xs-first order-lg-last">
                        <div className="profile-pic">
                            <img src={require('../../assets/profile-pic.jpg')} alt="Abayomi Amusa picture" />
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        </MDBRow>
    )
});

export default AboutComponent;