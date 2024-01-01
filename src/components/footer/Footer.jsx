import React from 'react'
import { Link } from 'react-scroll'

export default function Footer() {
  return (
    <div className='bg-slate-800 text-white rounded-t-3xl mt-8 md:mt-0'>
        <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
            <div className='w-full md:w-1/4'>
                <h1 className='font-semibold text-xl pb-4'>Takara Sushi</h1>
                <p className='text-sm'>Welcome to Takara Sushi, where tradition meets elegance in an unforgettable culinary ballet. Nestled in the heart of the city, our restaurant offers an authentic and refined sushi experience, celebrating the ancient art of Japanese cuisine.</p>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
                <nav className='flex flex-col gap-2'>
                    <Link className='hover:text-brightColor transition-all cursor-pointer' to='home'>Home</Link>
                    <Link className='hover:text-brightColor transition-all cursor-pointer' to='dishes'>Dishes</Link>
                    <Link className='hover:text-brightColor transition-all cursor-pointer' to='about'>About</Link>
                    <Link className='hover:text-brightColor transition-all cursor-pointer' to='reviews'>Reviews</Link>
                </nav>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contact Us</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>takarasushi@email.com</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>+336 00 00 00 00</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Social media</a>
                </nav>
            </div>
        </div>

        <div>
            <p className='text-center py-4'>@coppyright developed by <span className='text-brightColor'>SWANN</span> | all rights reserved</p>
        </div>
    </div>
  )
}
