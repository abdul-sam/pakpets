import React from "react";
import Header from "../components/navbar/Header";
import TopNavbar from "../components/navbar/TopNavbar";
import Banner from "../components/hero/Banner";
import Categories from "../components/category/Categories";
import Listings from "../components/listing/Listings";

const Home = () => {
  return (
    <>
      {/* <TopNavbar/> */}
      <Header/>
      <Banner/>
      <Categories/>
      <Listings/>
    </>
  );
}

export default Home;