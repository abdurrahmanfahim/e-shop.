import React from 'react'
import Banner from '../components/Banner'
import Facility from '../components/Facility'
import FeatureProduct from '../components/FeatureProduct'
import Offers from '../components/Offers'
import NewProducts from '../components/NewProducts'
import BestSeller from '../components/BestSeller'
import FrequentlyQuestions from '../components/FrequentlyQuestions'
import Brands from '../components/Brands'

const HomePage = () => {
  return (
    <>
      <Banner />
      <Facility />
      <FeatureProduct />
      <Offers />
      <NewProducts />
      <BestSeller />
      <FrequentlyQuestions />
      <Brands />
    </>
  )
}

export default HomePage