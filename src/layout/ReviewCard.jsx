import React from 'react'

export default function ReviewCard(props) {
  return (
    <div className='w-full md:w-1/3 flex flex-col justify-between bg-white border-2 border-lightText md:boder-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.50)_0px_3px_5px]'>
        <div>
            <p className='text-lightText'>{props.msg}</p>
        </div>

        <div className='flex flex-row justify-center items-center mt-4 gap-4'>
            <img src={props.img} alt='Img' className='rounded-full w-1/6'/>
            <h3 className='font-semibold'>{props.name}</h3>
        </div>
    </div>
  )
}
