import React from 'react'
import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline'

function Header() {
  return (
    <header className=' '>
        
            {/* Top NAv */} 
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2 '>

            <div className='mt-2 mx-6 flex items-center flex-grow  sm:flex-grow-0'>
                {/* Logo */}
                <Image src="/logo.png" width={100} height={40} objectFit="contain" className='cursor-pointer '/>
            </div>


            {/* Search */}
            <div className='hidden sm:flex items-center h-10 flex-grow cursor-pointer bg-[#fedb69] hover:bg-[#c6a743] rounded-lg ' >

                <input type="text" placeholder='Search Amazon' 
                className='rounded-l-lg p-2 h-full w-6 flex-grow flex-shrink focus:outline-none px-4' />
                <SearchIcon className="h-12  p-3 text-amazon_blue" />

            </div>


            {/* Right */}
            <div className='mx-6 flex text-white items-center text-xs space-x-6 whitespace-nowrap' >
                    {/* Accoutn */}
                <div className='  link'>
                    <p className=''>Hello Sarthak</p>
                    <p className='font-extrabold md:text-sm'>Account & Lists</p>
                </div>



                    {/* Orderes */}
                <div className=' link'>
                    <p className=''>Returns</p>
                    <p className='font-extrabold md:text-sm'>& orders</p>
                </div>



                    {/* Basket */}
                <div className=' link relative flex items-center '>
                    <span className='absolute rounded-full bg-[#fedb69] h-4 w-4 flex items-center justify-center font-extrabold text-amazon_blue text-xs top-0 right-0 md:right-10'>3</span>
                    <ShoppingCartIcon className='h-8 text-white'/>
                    <p className='hidden md:inline font-extrabold mt-2 md:text-sm'>Basket</p>
                </div>
            </div>

            
        </div>



            {/* bottom nav */}
        <div className=''>
                   
        </div>
    </header>
  )
}

export default Header