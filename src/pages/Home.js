import React from "react";
import Header from "../components/navbar/Header";
import TopNavbar from "../components/navbar/TopNavbar";
import Banner from "../components/hero/Banner";
import Categories from "../components/category/Categories";

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