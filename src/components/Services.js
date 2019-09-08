import React, {Component} from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader
} from "mdbreact";
import {services} from "../libs/services"

class Services extends Component {
  state = {
    collapseID: 'collapse1'
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  render() {
    return (<div className="mt-4 mb-4">
            <div className="text-center">
      <h2 class="text-center mt-3">Послуги</h2>
      <hr className="mb-4" />
      </div>
      {services.map((elem, i) => (<MDBContainer className="accordion md-accordion accordion-1">
          <MDBCardHeader
            onClick={this.toggleCollapse(`collapse${i + 1}`)}
            tag="h4"
            tagClassName="red-text d-flex justify-content-between align-items-center"
          >
            {elem.name}
            <MDBIcon
              icon={
                this.state.collapseID === `collapse${i + 1}`
                  ? "angle-up"
                  : "angle-down"
              }
              className="grey-text pl-2"
              size="2x"
            />
          </MDBCardHeader>
          <MDBCollapse id={`collapse${i + 1}`} isOpen={this.state.collapseID}>
            <MDBCardBody class="pt-0">
              <ul>
                {elem.list.map(service => (<li>{service}</li>))}
              </ul>
            </MDBCardBody>
          </MDBCollapse>
      </MDBContainer>))}
    </div>);
};
}
export default Services;
