import Container from './layouts/Container'
import HeadPhone from '../icons/HeadPhone'
import Shield from '../icons/Shield'
import Shipping from '../icons/Shipping'
import Transparent from '../icons/Transparent'
import { facilityData } from '../productDetailsArrays'

const iconMap = {
  HeadPhone: <HeadPhone />,
  Shield: <Shield />,
  Shipping: <Shipping />,
  Transparent: <Transparent />,
}

const Facility = () => {
  return (
    <div className='mb-6 lg:mb-20'>
      <Container>
        <div className="flex justify-center sm:justify-between flex-wrap items-center gap-4 lg:gap-6 mx-auto">
          {facilityData.map((item) => (
            <div key={item.title} className="flex flex-1 gap-3 lg:gap-6 items-center text-start lg:text-left">
              <div className="flex-shrink-0">
                {iconMap[item.icon]}
              </div>
              <div className='text-[#303030] font-["Montserrat"] text-sm lg:text-base leading-5 lg:leading-6'>
                <h6 className='font-bold'>{item.title}</h6>
                <p className='font-normal line-clamp-2'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Facility
