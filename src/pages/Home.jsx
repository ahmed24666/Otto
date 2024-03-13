import React, { useEffect } from 'react'
import CategorySlider from '../components/CategorySlider'
import CommonProductSlider from '../components/CommonProductSlider'
import FullScreenSlider from '../components/FullScreenSlider'
import Banar from '../components/Banar'
import { SignupApi } from '../services/apis'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);
  useEffect(() => {
    SignupApi().then((res) => {
      console.log(res);
    });
  }, [])
  
  return (
    <div>
      <FullScreenSlider/>
      <CategorySlider/>
      <CommonProductSlider title={"Recommendations for you"}/>
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