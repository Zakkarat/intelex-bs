import React from "react";
import {aboutText} from "../libs/aboutText.json";
import { TextBlockStyles } from "../stylesheets/style-components";

const About = () => {
  return (
    <TextBlockStyles>
      <div className="text-center">
        <h1 className="">Про нас</h1>
      </div>
      <div>
          {aboutText.map(text => (<p className="para-styled">{text}</p>))}
      </div>
    </TextBlockStyles>
  );
};

export default About;
