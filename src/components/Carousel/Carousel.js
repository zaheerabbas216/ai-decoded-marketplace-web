import React from "react";
import images from "../../assets/images";
import "./Carousel.scss";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={images.bannerone}
              class="d-block w-100 banner_image"
              alt="bannerone"
            />
          </div>
          <div class="carousel-item">
            <img
              src={images.bannertwo}
              class="d-block w-100 banner_image"
              alt="bannertwo"
            />
          </div>
          <div class="carousel-item">
            <img
              src={images.bannerthree}
              class="d-block w-100 banner_image"
              alt="bannerthree"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleFade"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleFade"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
