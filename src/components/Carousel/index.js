import React from "react";
import "./style.css";

function carousel() {
  return (
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
          >
            <rect width="100%" height="100%" fill="#345" />
          </svg>
          <div class="container">
            <div class="carousel-caption text-left">
              <h1>Welcome to Artscape</h1>
              <p>
                Connecting the people to Art and Artist from around the world!
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
          >
            <rect width="100%" height="100%" fill="#345" />
          </svg>
          <div class="container">
            <div class="carousel-caption">
              <h1>Are you an Artist?</h1>
              <p>
                Connect with other Artist, Create a Studio page and place you'r
                art for sale. and post on a feed about upcoming live classes.
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
          >
            <rect width="100%" height="100%" fill="#345" />
          </svg>
          <div class="container">
            <div class="carousel-caption text-right">
              <h1>Love Art?</h1>
              <p>
                At Artscape you can follow search for artist worldwide, follow,
                contact and even purchase their artwork!
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#" role="button">
                  Search Artist
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
export default carousel;
