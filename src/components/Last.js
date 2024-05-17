import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Last(props) {
  return (
    <MDBFooter className={`bg-${props.mode} text-center text-${props.mode==='light'?'dark':'light'}`} style={{boxShadow: "0px -12px 15px -3px rgba(0,0,0,0.2) " , maxWidth:"100% !important"}} >
      <MDBContainer className='p-4 pb-0'  >
        <section className='mb-4'>
          <MDBBtn target='_blank' outline color={props.mode==='light'?'dark':'light'} floating className='m-1' href='https://www.instagram.com/abhayrawat55/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn target='_blank' outline color={props.mode==='light'?'dark':'light'} floating className='m-1' href='https://www.linkedin.com/in/abhay-rawat-b58b2226b' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn target='_blank' outline color={props.mode==='light'?'dark':'light'} floating className='m-1' href='https://github.com/Known-user' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3'>
        © 2023 Copyright : 
        <a className={`text-${props.mode==='light'?'dark':'light'}`} href=''>
        ABHAY SINGH RAWAT
        </a>
      </div>
    </MDBFooter>
  );
}