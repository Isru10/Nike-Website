import React from 'react'
import {reviews} from '../constants'
import ReviewCard from '../components/ReviewCard'
const CustomerReviews = () => {
  return (
    <section className='max-container '>
      <h3 className='font-palanquin text-center font-bold text-4xl'>What Our 
      <span className='text-coral-red'> Customers </span>Say?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>Hear genuine stories form our 
        customers say about our nike product 
        the old wise owl in an oak the more he 
        saw the less he spoke the less he spoke
         the more he heard why cant we all be 
         like the old wise bird.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
        {
          reviews.map((review)=>(
            <ReviewCard 
              key={review.customerName}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))
          
        }

      </div>

    </section>
  )
}

export default CustomerReviews