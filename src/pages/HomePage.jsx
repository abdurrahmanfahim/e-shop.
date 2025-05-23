import React from 'react'
import Banner from '../components/Banner'
import Facility from '../components/Facility'
import FeatureProduct from '../components/FeatureProduct'
import Offers from '../components/Offers'
import NewProducts from '../components/NewProducts'
import BestSeller from '../components/BestSeller'
import FAQ from '../components/FAQ'
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
      <FAQ />
      <Brands />
    </>
  )
}

export default HomePage