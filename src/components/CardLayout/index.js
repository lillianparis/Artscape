import React from "react";
import Card from "../Cards";
import "./style.css";

function cardlayout () {
    return (
<>
<div class="container-fluid">
  <div class="row">
    <div class="col">
    <Card />
    </div>
    <div class="col">
    <Card />
    </div>
    <div class="col">
    <Card />
    </div>
    <div class="col">
    <Card />
    </div>
  </div>
  <div class="row">
    <div class="col">
    <Card />
    </div>
    <div class="col">
    <Card />
    </div>
    <div class="col">
    <Card />
    </div>
    <div class="col">
    <Card />
    </div>
  </div>
</div>
</>
    );
}

export default cardlayout;