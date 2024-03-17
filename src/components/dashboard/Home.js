import React from "react";
import Header from "../navbar/Header";
import TopNavbar from "../navbar/TopNavbar";
import Banner from "../hero/Banner";
import Categories from "../category/Categories";

const Home = () => {
  return (
    <>
      {/* <TopNavbar/> */}
      <Header/>
      <Banner/>
      <Categories/>
    </>
  );
}

export default Home;