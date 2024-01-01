import React from 'react'
import {BsStarFill} from 'react-icons/bs'
import {BsStarHalf} from 'react-icons/bs'

export default function DishesCard(props) {
  return (
    <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.50)_0px_3px_5px] rounded-lg">
        <img className='rounded-xl' src={props.img} alt="img"/>

        <div className='space-y-4'>
            <h3 className='font-semibold text-center text-xl pt-6'>{props.title}</h3>
            <div className='flex flex-row justify-center'>
                <BsStarFill className='text-brightColor' />
                <BsStarFill className='text-brightColor' />
                <BsStarFill className='text-brightColor' />
                <BsStarFill className='text-brightColor' />
                <BsStarHalf className='text-brightColor' />
            </div>
            <div className='flex md:flex-col sm:flex-row items-center justify-center gap-4'>
                <h3 className=' font-semibold text-lg'>{props.price}</h3>
                <div className='px-6 py-2 border-2 w-36 text-center border-brightColor text-brightColor hover:border-slate-800 hover:text-slate-800 transition-all rounded-full cursor-pointer'>
                    <p className='text-lg'>Buy Now</p>
                </div>
            </div>
        </div>
    </div>
  )
}
