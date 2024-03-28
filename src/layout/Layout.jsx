import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="mt-[60px]">
          <Routers />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
