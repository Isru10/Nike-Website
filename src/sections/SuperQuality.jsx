import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 max-container w-full'>
      
      <div className="flex flex-1 flex-col">
      <h2 className=' font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
        We provide you
        <span className='text-coral-red' > Super</span> Shoes
        <span className='text-coral-red' > Quality</span> Shoes

      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>discover quality cofiosd sdkfjsd ksogira ahdjasd</p>
      <p className='mt-6 lg:max-w-lg info-text'>discover quality cofiosd sdkfjsd ksogira ahdjasd</p>
          <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View details" />
          </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className='object-contain' />

      </div>
    </section>
  )
}

export default SuperQuality