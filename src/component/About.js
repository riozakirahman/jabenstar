import React, { Fragment } from "react";
import Header from "./Header";
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
        <Header></Header>
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
