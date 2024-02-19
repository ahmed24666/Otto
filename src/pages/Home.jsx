import React from 'react'
import CategorySlider from '../components/CategorySlider'
import CommonProductSlider from '../components/CommonProductSlider'

const Home = () => {
  return (
    <div>
      <CategorySlider/>
      <CommonProductSlider title={"Recommendations for you"}/>
      <CommonProductSlider title={"Min. 30% reduced for you"}/>
      <CommonProductSlider title={"Sustainable items for you"}/>
      <CommonProductSlider title={"Outfits for you"}/>
    </div>
  )
}

export default Home