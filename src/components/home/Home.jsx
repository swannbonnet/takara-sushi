import React from 'react'
import './home.css'

export default function Home() {
  return (
    <div className="bg-[url('/src/assets/img/home_img.jpg')] bg-cover bg-no-repeat">
        <div className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-opacity-layer'>
            <div className='w-full lg:w-2/3 space-y-5'>
                <h1 className='text-backgroundColor font-semibold text-6xl'>Takara Sushi: The Elegance of Tradition</h1>
                <p className='text-backgroundColor'>
                    Welcome to Takara Sushi, where tradition meets elegance in an unforgettable culinary ballet. Nestled in the heart of the city, our restaurant offers an authentic and refined sushi experience, celebrating the ancient art of Japanese cuisine.
                </p>
                <div className='px-6 py-2 border-2 w-36 text-center border-brightColor text-brightColor hover:border-white hover:text-white transition-all rounded-full cursor-pointer'>
                    <p>Order Now</p>
                </div>
            </div>
        </div>
    </div>
  )
}
