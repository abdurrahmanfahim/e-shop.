import React from 'react'
import Banner from '../components/Banner'
import Facility from '../components/Facility'
import FeatureProduct from '../components/FeatureProduct'
import Offers from '../components/Offers'
import NewProducts from '../components/NewProducts'

const HomePage = () => {
  return (
    <>
      <Banner />
      <Facility />
      <FeatureProduct />
      <Offers />
      <NewProducts />
    </>
  )
}

export default HomePage