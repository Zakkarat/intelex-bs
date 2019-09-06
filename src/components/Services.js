import React from 'react';
import {
    MDBContainer,
    MDBCollapse,
    MDBCard,
    MDBCardBody,
    MDBCollapseHeader,
    MDBIcon,
  } from 'mdbreact';

const Services = () => {
    return (
        <MDBContainer>
        <MDBContainer
          className='accordion md-accordion accordion-3 z-depth-1-half'
        >
          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse1')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
              How awesome accordion I am?
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse1'
                    ? 'angle-up'
                    : 'angle-down'
                }
                className='red-text'
                size='2x'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse1' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse2')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
              You're the greatest accordion!
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse2'
                    ? 'angle-up'
                    : 'angle-down'
                }
                className='red-text'
                size='2x'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse2' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse3')}
              tag='h3'
              tagClassName='red-text d-flex justify-content-between align-items-center'
            >
              Thank you my dear!
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse3'
                    ? 'angle-up'
                    : 'angle-down'
                }
                className='red-text'
                size='2x'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse3' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
    );
}

export default Services
