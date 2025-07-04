import React from 'react'
import Container from './layouts/Container'
import HeadPhone from '../icons/HeadPhone'
import Shield from '../icons/Shield'
import Shipping from '../icons/Shipping'
import Transparent from '../icons/Transparent'

const Facility = () => {
  return (
    <div className='mb-20 '>
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-6 items-center ">
            <div>
              <HeadPhone />
            </div>
            <div className='text-[#303030] font-["Montserrat"] text-base leading-6'>
              <h6 className=' font-bold  '>Responsive</h6>
              <p className='font-normal'>Customer service available 24/7</p>
            </div>
          </div>
          <div className="flex gap-6 items-center ">
            <div>
              <Shield />
            </div>
            <div className='text-[#303030] font-["Montserrat"] text-base leading-6'>
              <h6 className=' font-bold  '>Secure</h6>
              <p className='font-normal'>Certified marketplace since 2017</p>
            </div>
          </div>
          <div className="flex gap-6 items-center ">
            <div>
              <Shipping />
            </div>
            <div className='text-[#303030] font-["Montserrat"] text-base leading-6'>
              <h6 className=' font-bold  '>Shipping</h6>
              <p className='font-normal'>Free, fast, and reliable worldwide</p>
            </div>
          </div>
          <div className="flex gap-6 items-center ">
            <div>
              <Transparent />
            </div>
            <div className='text-[#303030] font-["Montserrat"] text-base leading-6'>
              <h6 className=' font-bold  '>Transparent</h6>
              <p className='font-normal'>Hassle-free return policy</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Facility