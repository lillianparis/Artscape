import React from "react";
import Carousel from "../../components/Carousel/index";
import Marketing from "../../components/marketing";
import "./style.css";

function home() {
  return (
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <Carousel />
      <Marketing />
    </main>
  );
}

export default home;
