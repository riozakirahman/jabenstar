import React, { Fragment } from "react";
import { Intro } from "./About/Intro";
import { Divider } from "./Divider";
import BigFeature from "./About/BigFeature";
const About = () => {
  return (
    <main>
      <Intro></Intro>
      <Divider></Divider>
      <BigFeature></BigFeature>
    </main>
  );
};

export default About;
