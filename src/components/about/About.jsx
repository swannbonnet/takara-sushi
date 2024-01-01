import React from 'react'

import aboutImg from '../../assets/img/about_img.jpg'

export default function About() {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 gap-5 py-40'>
        <img src={aboutImg} alt='About Image' className='lg:w-1/3 w-1/1 rounded-xl'/>

        <div className='space-y-4 lg:pt-14'>
            <h1 className='font-semibold text-4xl text-center md:text-start'>Why Choose Us ?</h1>
            <p>At <span>Takara Sushi</span>, we offer more than just a meal; we provide a journey into the heart of authentic Japanese cuisine. Our passion for traditional flavors is matched only by our commitment to innovation, blending time-honored techniques with contemporary culinary trends. This fusion creates a unique dining experience that tantalizes your taste buds while honoring the rich heritage of Japanese cooking. From our hand-selected, fresh ingredients to our expertly crafted dishes, every element is chosen to ensure a memorable and delicious experience.</p>
            <p>Furthermore, our dedication to excellence extends beyond the plate. We pride ourselves on creating an inviting atmosphere where every guest feels valued and welcomed. Our team’s attention to detail and exceptional service set us apart, ensuring your time with us is not just a meal, but a memorable event. We believe in sustainability and community involvement, striving to make a positive impact both on the environment and in our local area. Join us at <span>Takara Sushi</span> and discover a blend of tradition, innovation, and impeccable service that makes us the ideal choice for your next dining adventure.</p>
            <div className='px-6 py-2 border-2 w-36 text-center border-brightColor text-brightColor hover:border-slate-800 hover:text-slate-800 transition-all rounded-full cursor-pointer'>
                <p>Learn More</p>
            </div>
        </div>
    </div>
  )
}
