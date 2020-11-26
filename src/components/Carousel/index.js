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
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
        <div class="container">
          <div class="carousel-caption text-left">
            <h1>Welcome to Artscape</h1>
            <p>Connecting the people to Art and Artist from around the world!</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
        <div class="container">
          <div class="carousel-caption">
            <h1>Are you an Artist?</h1>
            <p>Connect with other Artist, Create a Studio page and place you'r art for sale. and post on a feed about upcoming live classes.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
        <div class="container">
          <div class="carousel-caption text-right">
            <h1>Love Art?</h1>
            <p>At Artscape you can follow search for artist worldwide, follow, contact and even purchase their artwork!</p>
            <p><a class="btn btn-lg btn-primary" href="#" role="button">Search Artist</a></p>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>


    // <div
    //   id="carouselExampleInterval"
    //   class="carousel slide"
    //   data-ride="carousel"
    // >
    //   <div class="carousel-inner">
    //     <div class="carousel-item active" data-interval="5000">
    //       <div class="jumbotron text-center">
    //         <h1 class="display-4">Hello, And Welcome!</h1>
    //         <p class="lead">
    //           Artscape is a place where Artist and Art Collectors can get
    //           together and connect.
    //         </p>
    //         <hr class="my-4" />
    //         <p className="lead2">
    //           Find your Favorite Artist connect, and buy your favorite artwork
    //           and or sculptures from anywhere around the world! Stop waiting for
    //           your favorite artist to come to your area for an artshow. contact
    //           them Today!
    //         </p>
    //       </div>
    //     </div>
    //     <div className="carousel-item" data-interval="5000">
    //       <div className="jumbotron2 text-center">
    //         <h1 className="display-4">Are you a Artist?</h1>
    //         <p className="lead">
    //           Create you're Studio page and place your artwork for sale! why
    //           have galleries charge up to 60% commision on your paintings!
    //         </p>
    //         <hr className="my-4" />
    //         <p className="lead2">
    //           Get full price what you ask for your art piece! here at Artscape
    //           we know how much time and dedication you put in to your
    //           masterpieces!{" "}
    //         </p>
    //       </div>
    //     </div>
    //     <div class="carousel-item">
    //       <div class="jumbotron3 text-center">
    //         <h1 class="display-4">Are you a Art Lover ?</h1>
    //         <p class="lead">
    //           Search for your favorite artist or genre of art that you
    //           like!connect with the artist and even purchase your favorite
    //           masterpiece.
    //         </p>
    //         <hr class="my-4" />
    //         <p className="lead2">
    //           check out Artist Today, hang your painting tomorrow on your wall.
    //         </p>
    //       </div>
    //     </div>

    //     <a
    //       class="carousel-control-prev"
    //       href="#carouselExampleInterval"
    //       role="button"
    //       data-slide="prev"
    //     >
    //       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span class="sr-only">Previous</span>
    //     </a>
    //     <a
    //       class="carousel-control-next"
    //       href="#carouselExampleInterval"
    //       role="button"
    //       data-slide="next"
    //     >
    //       <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span class="sr-only">Next</span>
    //     </a>
    //   </div>
    // </div>
  );
}
export default carousel;
