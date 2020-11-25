import React from "react";
import StudioHeader from "../../components/StudioHeader";
import Cardlayout from "../../components/CardLayout";
import "./style.css";

function studio() {
  return (
    <>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
    <StudioHeader />
    <Cardlayout />
    </main>
    </>
  );
}

export default studio;
