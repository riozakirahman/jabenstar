import React, { Fragment } from "react";
import { Intro } from "./About/Intro";
import { Divider } from "./Divider";
import BigFeature from "./About/BigFeature";
import Post from "./About/Post";
import Join from "./About/Join";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      <main>
        <Intro></Intro>
        <Divider></Divider>
        <BigFeature></BigFeature>
        <Post></Post>
        <Divider></Divider>
        <Join></Join>
        <Footer></Footer>
      </main>
    </>
  );
};

export default About;
