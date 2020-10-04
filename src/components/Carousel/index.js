import React from "react";
import "./style.css";

function carousel() {
  
  
    return (
<div
      id="carouselExampleInterval"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active"     data-interval="2000">
          <div class="jumbotron text-center">
            <h1 class="display-4">Hello, And Welcome!</h1>
            <p class="lead">
              Artscape is a place where Artist and Art Collectors can get
              together and connect.
            </p>
            <hr class="my-4" />
            <p>
              Find your Favorite Artist connect, and buy your favorite artwork
              and or sculptures from anywhere around the world! Stop waiting for
              your favorite artist to come to your area for an artshow. contact
              them Today!
            </p>
          </div>
        </div>
          <div class="carousel-item" data-interval="100000">
            <div class="jumbotron2 text-right">
              <h1 class="atrist">Are you a Artist?</h1>
              <p class="ad2">
                Create you'r Studio page and place your artwork for sale! why
                have galleries carge up to 60% commision on your paintings!
              </p>
              <hr class="my-4" />
              <p>
                Get full price what you ask for your art piece! here at Artscape
                we know how much time and dedication you put in to your
                masterpieces!{" "}
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="jumbotron3 text-center">
              <h1 class="display-4">Are you a Art Collector ?</h1>
              <p class="lead">
                Search for your favorite artist or genre of art that you
                like!connect with the artist and even purchase your favorite
                masterpiece.
              </p>
              <hr class="my-4" />
              <p>
               check out Artist Today, hang your painting tomorrow on your wall.
              </p>
            </div>
          </div>
        
        <a
          class="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    )
    }
    export default carousel;