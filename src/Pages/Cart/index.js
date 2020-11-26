import React from "react";
import Shopform from "../../components/ShopForm";
import Footer from "../../components/Footer";

function cart() {
  return (
    <div>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <Shopform />
        <Footer />
      </main>
    </div>
  );
}

export default cart;
