import React from 'react'
import Container from './layouts/Container'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='mt-8 mb-20 '>
      <Container>
        <Link to={"#"}>
          <img src="./images/banner.jpg" alt="banner" />
        </Link>
      </Container>
    </div>
  )
}

export default Banner