import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import MapContainer from "./MapContainer"
import 'mdbreact/dist/css/mdb.css'
import 'font-awesome/css/font-awesome.min.css';
const Footer = () => {
  return (
    <MDBFooter
      color="stylish-color"
      className="page-footer font-small pt-1 "
    >
      <MDBContainer className="mt-2 text-center text-md-left">
        <MDBRow className="mt-3 d-flex justify-content-between">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Intelex</strong>
            </h6>
            <hr
              className="blue-grey darken-4 accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos, qui ratione
              voluptatem sequi nesciunt.
            </p>
          </MDBCol>
          <MDBCol  md="3" lg="4" xl="4" className="mb-4">
          <h6 className="text-uppercase font-weight-bold">
              <strong>How to find us?</strong>
            </h6>
            <hr
              className="blue-grey darken-4 accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <MapContainer />
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr
              className="blue-grey darken-4 accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <i className="fa fa-home mr-3" /> Ivano-Frankivsk, UA
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright{" "}
          <a href="kek"> Intelex </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
