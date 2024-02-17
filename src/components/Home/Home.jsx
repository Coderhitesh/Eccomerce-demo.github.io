import React from 'react'
import Hero from '../Hero/Hero'
import FeatureProduct from '../FeatureProduct/FeatureProduct'
import ProductOfTheDay from '../ProductOfTheDay/ProductOfTheDay'
import GrabProduct from '../GrabProduct/GrabProduct'
import HomeProduct from '../HomeProduct/HomeProduct'
import ProductDesign from '../ProductDesign/ProductDesign'
import PrintedItem from '../PrintedItem/PrintedItem'

const Home = () => {
  return (
    <main>
      <Hero />
      <FeatureProduct />
      <ProductOfTheDay />
      <GrabProduct />
      <HomeProduct />
      <ProductDesign />
      <PrintedItem />
    </main>
  )
}

export default Home
