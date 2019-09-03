import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol} from 'mdbreact';

const Card = () => {
    return (
<MDBCol md='4'className="mt-4 mb-4">
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src='https://mdbootstrap.com/img/Photos/Others/men.jpg'
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Billy Coleman</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Wev developer</p>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
}

export default Card;