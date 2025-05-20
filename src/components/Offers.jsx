import React from 'react'
import { Link } from 'react-router-dom'
import Container from './layouts/Container'

const Offers = () => {
  return (
    <Container>
      <div className='flex justify-between items-center mb-20  '>
      <Link to={"#"}>
          <img className='rounded-[15px] ' src="./images/offers/offer.webp" alt="banner" />
      </Link>
      <Link to={"#"}>
          <img className='rounded-[15px] ' src="./images/offers/black_friday.webp" alt="banner" />
      </Link>
    </div>
    </Container>
  )
}

export default Offers