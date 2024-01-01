import React from 'react'
import ReviewCard from '../../layout/ReviewCard'

import img1 from '../../assets/img/r1.jpg'
import img2 from '../../assets/img/r2.jpg'
import img3 from '../../assets/img/r3.jpg'

export default function Reviews() {
  return (
    <div className='flex flex-col items-center justify-center md:px-32 px-5 mb-40'>
        <h1 className='text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10'>Customer's Review</h1>

        <div className='flex flex-col md:flex-row gap-5 mt-5'>
            <ReviewCard img={img1} name={"Yumi Nakamura"} msg={"An Unforgettable Experience ! I visited Takara Sushi last week and I'm still thinking about the incredible sushi platter we had. The ingredients were fresh, flavors were authentic, and the presentation was simply stunning. The staff was friendly and knowledgeable, providing excellent recommendations. A must-visit for any sushi lover !"} />
            <ReviewCard img={img2} name={"Carlos Mendez"} msg={"Great Ambiance, Excellent Food ! The atmosphere at Takara Sushi is serene and perfect for a romantic dinner. The tempura veggies were the best I've had. Only wish the wait time was a bit shorter, but the food was definitely worth it !"} />
            <ReviewCard img={img3} name={"Emily Durant"} msg={"Exquisite Culinary Journey. Dining at Takara Sushi was an experience I'll treasure. Each dish was a masterpiece of flavors. The chefs here truly understand the art of Japanese cuisine. The service was impeccable, making us feel valued and taken care of throughout our meal. A top-notch dining destination that I highly recommend !"} />
        </div>
    </div>
  )
}
