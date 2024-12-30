import React from 'react'
import {products} from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section className='max-container max-sm:mt-12' id='products'>
      <div className="flex flex-col justify-start gap-5">
      <h2 className='text-4xl font-palanquin font-bold'>
        <span className='text-coral-red'>Popular</span> products</h2>

      <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray ">expreience to notch devs for design in nike company </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gird-cols-1 sm:gap-6 gap-14">
        {products.map((product)=>(
          <PopularProductCard key={product.name} {...product} />

        ))}
      </div>
    </section>

  )
}

export default PopularProducts