import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = React.memo(() => {
  return (
    <MDBFooter className='footer-container text-center text-lg-start text-light m-0'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with me on social media:</span>
        </div>

        <div>
          <a href='https://twitter.com/paulos_ab' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.linkedin.com/in/amusa-abayomi' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://githu.com/paulosabayomi' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Copyright: {' '}
        <a className='text-reset fw-bold' href='https://github.com/paulosabayomi'>
          Abayomi Amusa (Paulos Ab)
        </a>
      </div>
    </MDBFooter>
  );
})

export default Footer;