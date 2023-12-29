import React, {useState} from 'react'
import { Link } from 'react-scroll'

import { MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";


export default function Navbar() {

    const [menu, setMenu] = useState(false);


    const handleChange = () => {
        console.log('test')
        setMenu(!menu)
    }
    const closeMenu = () => {
        setMenu(false)
    }

  return (
    <div className='fixed w-full'>
        <div>
            <div className='flex flex-row justify-between p-5 bg-slate-800 shadow-[0_3px_10px_rgba(0,0,0,0,.2)] md:px-32'>
                <div className='flex flex-row items-center cursor-pointer'>
                    <img src='/src/assets/img/favicon.png' alt='takara sushi' className='w-12 h-12 rounded-full mr-5'/>
                    <h1 className='text-xl text-white font-semibold'>TAKARA <span className='text-brightColor'>SUSHI</span></h1>
                </div>

                <nav className='hidden lg:flex flex-row items-center text-lg font-medium gap-8'>
                    <Link to='home' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-brightColor text-white transition-all'>Home</Link>
                    <Link to='dishes' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-brightColor text-white transition-all'>Dishes</Link>
                    <Link to='menu' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-brightColor text-white transition-all'>Menu</Link>
                    <Link to='reviews' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-brightColor text-white transition-all'>Reviews</Link>
                    <Link to='about' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-brightColor text-white transition-all'>About</Link>
                    <div className='px-6 py-2 border-2 border-brightColor text-brightColor hover:border-white hover:text-white transition-all rounded-full'>
                        <MdOutlineShoppingBag className='cursor-pointer'/>
                    </div>
                </nav>

                <div className='lg:hidden flex items-center text-white'>
                    {
                        menu ? (
                            <AiOutlineClose size={25} onClick={handleChange}/>
                        ):(
                            <AiOutlineMenu size={25} onClick={handleChange}/>
                        )
                    }
                </div>
            </div>

            <div className={`${menu ? "translate-x-0":"-translate-x-full"} lg:hidden flex flex-col absolute bg-slate-800 text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                <Link to='home' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-brightColor text-white transition-all'>Home</Link>
                <Link to='dishes' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-brightColor text-white transition-all'>Dishes</Link>
                <Link to='menu' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-brightColor text-white transition-all'>Menu</Link>
                <Link to='reviews' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-brightColor text-white transition-all'>Reviews</Link>
                <Link to='about' spy={true} smooth={true} duration={500} className='cursor-pointer hover:text-brightColor text-white transition-all'>About</Link>
                <div className='flex self-center px-10 py-2 border-2 border-brightColor text-brightColor rounded-full'>
                    <MdOutlineShoppingBag className='cursor-pointer'/>
                </div>
            </div>

        </div>
    </div>
  )
}
