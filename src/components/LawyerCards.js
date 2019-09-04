import React from "react";
import Card from "./Card";
import {MDBRow} from "mdbreact";
import {lawyers} from '../libs/lawyers.json'
const LawyerCards = () => {
  return (
      <>
    <h2 class="text-center mt-3">Юристи</h2>
    <hr className="mb-3" />
        <MDBRow>
        {lawyers.map(lawyer => <Card name={lawyer.name} position={lawyer.position} speciality={lawyer.speciality} characteristics={lawyer.characteristics} email={lawyer.mail} avatar={lawyer.avatar}/>)}
      </MDBRow>
      </>
  );
};

export default LawyerCards;
