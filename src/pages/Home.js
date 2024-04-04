import React from "react";
import Header from "../components/navbar/Header";
import TopNavbar from "../components/navbar/TopNavbar";
import Banner from "../components/hero/Banner";
import Categories from "../components/category/Categories";
import ListingWrapper from "../components/listing/ListingWrapper";
import ShopsWrapper from "../components/shop/ShopsWrapper";
import BreedersWrapper from "../components/breeders/BreedersWrapper";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      {/* <TopNavbar/> */}
      <Header/>
      <Banner/>
      <Categories/>
      <ListingWrapper/>
      <ShopsWrapper/>
      <BreedersWrapper/>
      <Footer/>
    </>
  );
}

export default Home;