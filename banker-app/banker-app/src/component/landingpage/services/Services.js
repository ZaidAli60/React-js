import React from "react";
import MoneySaving from "../../../Assets/money saving.svg";
import Cart from "../../../Assets/cart.svg";
import Cards from "../../../Assets/cards.svg";

function Services() {
  return (
    <div className="container my-5">
      <div className="row text-center">
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <img src={MoneySaving} alt="moneySaving" style={{width:"30%"}} />
          <h3 className="mt-3">Money Saving</h3>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <img src={Cart} alt="Cart"  style={{width:"30%"}} />
          <h3 className="mt-3">Money Saving</h3>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <img src={Cards} alt="Cards"  style={{width:"30%"}} />
          <h3 className="mt-3">Money Saving</h3>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
