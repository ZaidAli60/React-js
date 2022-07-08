import React from "react";
import "./MainHeader.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function MainHeader() {
  return (
    <div className="bgImage ">
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <OwlCarousel
          className="owl-carousel owl-theme "
          items={1}
          margin={1}
          autoplay={true}
          loop={true}
        >
          <div className="item  d-flex justify-content-center align-items-center">
            <div>
              <h1 className="text-uppercase fw-bold fs-1 text-light">bank solution</h1>
              <p className="text-light fw-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque tempora aliquid sint, quam, ipsam cumque aspernatur
                laborum, est et provident asperiores quod ea vero eligendi? Vero
                doloremque laborum totam optio.
              </p>
            </div>
          </div>

          <div className="item ">
            <div>
              <h1 className="text-uppercase fw-bold fs-1 text-light">saving accounts</h1>
              <p className="text-light fw-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque tempora aliquid sint, quam, ipsam cumque aspernatur
                laborum, est et provident asperiores quod ea vero eligendi? Vero
                doloremque laborum totam optio.
              </p>
            </div>
          </div>

          <div className="item ">
            <div>
              <h1 className="text-uppercase fw-bold fs-1 text-light">financing solution</h1>
              <p className="text-light fw-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque tempora aliquid sint, quam, ipsam cumque aspernatur
                laborum, est et provident asperiores quod ea vero eligendi? Vero
                doloremque laborum totam optio.
              </p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default MainHeader;
