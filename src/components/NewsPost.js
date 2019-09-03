import React from "react";
import Card from "react-bootstrap/Card";

const NewsPost = (props) => {
  return (<>
    <hr className="mb-5" />
    <div className="row wow fadeIn">
      <div className="col-lg-5 col-xl-4 mb-4">
        <div className="view overlay rounded z-depth-1-half">
          <div className="view overlay">
            <div className="embed-responsive embed-responsive-16by9">
              <img className="embed-responsive-item" src="https://www.youtube.com/embed/cXTThxoywNQ"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-xl-7 ml-xl-4 mb-4">
        <h3 className="mb-3 font-weight-bold dark-grey-text">
          <strong>MDB Quick Start</strong>
        </h3>
        <p className="grey-text">Get started with MDBootstrap, the world's most popular Material Design framework for building responsive,
        mobile-first sites.</p>
        <p>
          <strong>5 minutes, a few clicks and... done. You will be surprised at how easy it is.</strong>
        </p>
        <a href="https://www.youtube.com/watch?v=cXTThxoywNQ" target="_blank" className="btn btn-primary btn-md">Start tutorial
        <i className="fas fa-play ml-2"></i>
        </a>
      </div>


    </div>
  </>
  )
};

export default NewsPost;
