import React from "react";
import Hero from "../components/Hero/Hero";
//import WalletClient from "../components/WalletClient/WalletClient";
import Marquees from "../components/Marquee/Marquee";
import Mint from "../components/Mint/Mint";
import AboutUs from "../components/AboutUs/AboutUs";
import FAQContainer from "../components/FAQContainer/FAQContainer";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <div className="home">
        <Hero />
        <Marquees />
        <AboutUs />
        <Mint />
        <FAQContainer />
        <Footer />
      </div>
          
      {/* <WalletClient /> */}
    </>
  );
};

export default Home;
