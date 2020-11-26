import React from "react";
import Carousel from "../../components/Carousel/index";
import Marketing from "../../components/marketing";
import Footer from "../../components/Footer";
import "./style.css";

function home() {
  return (
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <Carousel />
      <Marketing />
      <Footer />
    </main>
  );
}

export default home;
