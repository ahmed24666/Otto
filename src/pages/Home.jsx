import React, { useEffect, useState } from 'react'
import CategorySlider from '../components/CategorySlider'
import CommonProductSlider from '../components/CommonProductSlider'
import FullScreenSlider from '../components/FullScreenSlider'
import Banar from '../components/Banar'
import { SignupApi } from '../services/apis'

const Home = () => {
  const [productRecomendations, setProductRecomendations] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  useEffect(() => {
    fetch(
      "https://siedra-shop.com/api/products/recommendation",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setProductRecomendations(result.data.products))
      .catch((error) => console.error(error));
  }, [])
  
  return (
    <div>
      <FullScreenSlider/>
      <CategorySlider/>
      <CommonProductSlider title={"Recommendations for you"} arrayOfProducts={productRecomendations}/>
      <Banar/>
      <CommonProductSlider title={"Min. 30% reduced for you"}/>
      <Banar/>
      <CommonProductSlider title={"Sustainable items for you"}/>
      <Banar/>
      <CommonProductSlider title={"Outfits for you"}/>
    </div>
  )
}

export default Home