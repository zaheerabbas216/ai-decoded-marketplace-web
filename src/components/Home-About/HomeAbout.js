import React from "react";
import images from "../../assets/images";
import "./HomeAbout.scss";

const HomeAboutComponent = () => {
  return (
    <>
      <div className="homeabout_component_section mb-4">
        <div className="homeabout_heading">
          <h2 className="heading_two">Lorem ipsum dolor sit amet.</h2>
        </div>

        <div className="home_about_description my-3">
          <h4 className="heading_four">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, nam.
            Fuga repudiandae ad veritatis asperiores minus qui incidunt dolor,
            eum quos architecto obcaecati distinctio vitae!
          </h4>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div class="card">
              <img
                src={images.home_about_icon}
                class="card-img-top"
                alt={images.home_about_icon}
              />
              <div class="card-body">
                <p class="card-text p_tag_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img
                src={images.home_about_icon}
                class="card-img-top"
                alt={images.home_about_icon}
              />
              <div class="card-body">
                <p class="card-text p_tag_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img
                src={images.home_about_icon}
                class="card-img-top"
                alt={images.home_about_icon}
              />
              <div class="card-body">
                <p class="card-text p_tag_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img
                src={images.home_about_icon}
                class="card-img-top"
                alt={images.home_about_icon}
              />
              <div class="card-body">
                <p class="card-text p_tag_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAboutComponent;
