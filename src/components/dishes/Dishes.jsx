import React from 'react'
import DishesCard from '../../layout/DishesCard'

import img1 from '../../assets/img/dishe1.jpg'
import img2 from '../../assets/img/dishe2.jpg'
import img3 from '../../assets/img/dishe3.jpg'
import img4 from '../../assets/img/dishe4.jpg'
import img5 from '../../assets/img/dishe5.jpg'
import img6 from '../../assets/img/dishe6.jpg'


export default function Dishes() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center pt-24 pb-10'>Our dishes</h1>

      <div className='flex flex-wrap gap-8 justify-center'>
        <DishesCard img={img1} title='Gyoza' price="$10.99"/>
        <DishesCard img={img2} title='Sushis Platter' price="$10.99"/>
        <DishesCard img={img3} title='Skewers' price="$10.99"/>
        <DishesCard img={img4} title='Sushis' price="$10.99"/>
        <DishesCard img={img5} title='Gyoza' price="$10.99"/>
        <DishesCard img={img6} title='Gyozas' price="$10.99"/>
      </div>
    </div>
  )
}
