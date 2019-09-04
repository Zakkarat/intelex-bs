import React from "react";
import Card from "react-bootstrap/Card";

const NewsPost = (props) => {
  return (<>
    <hr className="mb-4" />
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
          <strong>Lorem ipsum</strong>
        </h3>
        <p className="grey-text">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt..</p>
        <p>
          <strong>Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur</strong>
        </p>
        <a href="home" className="btn btn-primary btn-md float-right">Детальніше
        </a>
      </div>


    </div>
  </>
  )
};

export default NewsPost;
