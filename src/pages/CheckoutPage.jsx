import React from 'react'
import Container from '../components/layouts/Container'

const CheckoutPage = () => {
  return (
    <Container>
      <div className=" mt-16 ">
        <div className="flex gap-4 items-center text-black font-montserrat text-base leading-6 ">
          <span>Home</span> <span>|</span> <span>Cart</span>
          <span>|</span>
          <span className="font-bold ">
            Checkout
          </span>
        </div>

        <div className='mt-12'>
          <h1 className=' text-center font-poppins font-bold text-[56px] leading-17 mb-[34px]  '>
            Checkout

          </h1>

        </div>
      </div>
    </Container>
  )
}

export default CheckoutPage