import React from "react";
import Card from "./Card";
import {MDBRow} from "mdbreact";

const LawyerCards = () => {
  return (
      <>
    <h2 class="text-center mt-3">Юристи</h2>
    <hr className="mb-3" />
        <MDBRow>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </MDBRow>
      </>
  );
};

export default LawyerCards;
