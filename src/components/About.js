import React from "react";
import {aboutText} from "../libs/aboutText.json";
import { TextBlockStyles } from "../stylesheets/style-components";

const About = () => {
  return (
    <TextBlockStyles>
      <div className="text-center">
      <h2 class="text-center mt-3">Про нас</h2>
      <hr className="mb-4" />
      </div>
      <div className="mb-5">
          {aboutText.map(text => (<p className="para-styled">{text}</p>))}
      </div>
    </TextBlockStyles>
  );
};

export default About;
