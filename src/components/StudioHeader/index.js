import React from "react";
import "./style.css";

function studioheader() {
  return (
    <section class="jumbotronheader text-center">
    <div class="container">
    <img
        src="https://via.placeholder.com/200"
        alt="..."
        class="rounded-circle"
      ></img>
      <h1>Artist Name</h1>
      <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
      <p>
        <a href="#" class="btn btn-primary my-2">ADD Artist</a>
        <a href="#" class="btn btn-secondary my-2">Message Artist</a>
      </p>
    </div>
  </section>
   
    
  );
}

export default studioheader;
