import React from "react";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Shared/Footer";
import HomeBanner from "./HomeBanner";
import ScreenCare from "./ScreenCare";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
     <HomeBanner></HomeBanner>
     <Services></Services>
     <ScreenCare></ScreenCare>
     <Testimonials></Testimonials>
     <ContactUs></ContactUs>
     <Footer></Footer>
    </div>
  );
};

export default Home;
