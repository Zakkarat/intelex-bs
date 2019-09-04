import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol} from 'mdbreact';

const Card = ({name, position, characteristics, speciality, email, avatar}) => {
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
              <strong>{name}</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>{position}</p>
            <MDBCardText>
              {characteristics}
            </MDBCardText>
            <MDBCardText>
              {speciality}
            </MDBCardText>
            <MDBCardText className='font-weight-bold blue-text'>{email}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
}

export default Card;