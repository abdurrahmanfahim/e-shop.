import React from 'react'
import Container from './layouts/Container'
import HeadPhone from '../icons/HeadPhone'
import Shield from '../icons/Shield'
import Shipping from '../icons/Shipping'
import Transparent from '../icons/Transparent'

const Facility = () => {
  return (
    <div className='mb-12 lg:mb-20'>
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 items-center text-center lg:text-left">
            <div className="flex-shrink-0">
              <HeadPhone />
            </div>
            <div className='text-[#303030] font-["Montserrat"] text-sm lg:text-base leading-5 lg:leading-6'>
              <h6 className='font-bold'>Responsive</h6>
              <p className='font-normal hidden sm:block'>Customer service available 24/7</p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 items-center text-center lg:text-left">
            <div className="flex-shrink-0">
              <Shield />
            </div>
            <div className='text-[#303030] font-["Montserrat"] text-sm lg:text-base leading-5 lg:leading-6'>
              <h6 className='font-bold'>Secure</h6>
              <p className='font-normal hidden sm:block'>Certified marketplace since 2017</p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 items-center text-center lg:text-left">
            <div className="flex-shrink-0">
              <Shipping />
            </div>
            <div className='text-[#303030] font-["Montserrat"] text-sm lg:text-base leading-5 lg:leading-6'>
              <h6 className='font-bold'>Shipping</h6>
              <p className='font-normal hidden sm:block'>Free, fast, and reliable worldwide</p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 items-center text-center lg:text-left">
            <div className="flex-shrink-0">
              <Transparent />
            </div>
            <div className='text-[#303030] font-["Montserrat"] text-sm lg:text-base leading-5 lg:leading-6'>
              <h6 className='font-bold'>Transparent</h6>
              <p className='font-normal hidden sm:block'>Hassle-free return policy</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Facility