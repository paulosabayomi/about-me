import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

const CardComponent = React.memo(({title, desc, image, href}: {title: string; desc: string; image: string; href?: string}) => {
  return (
    <MDBCol sm={12} className='mb-3'>
      <a className='card app-card'>
        <MDBRow className='g-0'>
          <MDBCol md='4 d-flex justify-content-center'>
            <MDBCardImage src={image} alt='...' fluid />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle className='mb-3' style={{fontSize: '115%', fontWeight: '700'}}>{title}</MDBCardTitle>
              <MDBCardText>
                {desc}
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </a>
    </MDBCol>
  );
})

export default CardComponent;