import React from "react";
import "./style.css";

function cards () {
    return (
<>
<div class="card">
  <img src="https://images.unsplash.com/photo-1560160990-1c830b639bfd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHBhaW50aW5nJTIwY2FudmFzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Artwork Name</h5>
    <p class="card-text">Artwork price and info.</p>
    <a href="#" class="btn btn-primary">Buy Now </a>
  </div>
</div>
</>
    );
}

export default cards;