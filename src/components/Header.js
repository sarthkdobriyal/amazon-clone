import React from 'react'
import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,

} from '@heroicons/react/outline'


import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { selectItems } from '@/slices/basketSlice'
import { useSelector } from 'react-redux'


function Header() {


    const { data: session } = useSession()
    const router = useRouter()
    const items = useSelector(selectItems);



  return (
    <header >
        
            {/* Top NAv */} 
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2 '>

                {/* Logo */}
            <div className='mt-2 mx-6 flex items-center flex-grow  sm:flex-grow-0'>
                <Image onClick={ () => router.push('/')} src="/logo.png" width={100} height={40} style = {{objectFit:"contain"}} className='cursor-pointer' alt=""/>
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
                <div onClick={!session? signIn:signOut} className='  link'>
                    <p >{session ? `Hello ${session.user.name}`: "Sign In" }</p>
                    <p className='font-extrabold md:text-sm'>Account & Lists</p>
                </div>



                    {/* Orderes */}
                <div className=' link'>
                    <p className=''>Returns</p>
                    <p className='font-extrabold md:text-sm'>& orders</p>
                </div>



                    {/* Basket */}
                <div onClick={() => router.push('/checkout')} className=' link relative flex items-center '>
                    <span className='absolute rounded-full bg-[#fedb69] h-4 w-4 flex items-center justify-center font-extrabold text-amazon_blue text-xs top-0 right-0 md:right-10'>{items.length}</span>
                    <ShoppingCartIcon className='h-8 text-white'/>
                    <p className='hidden md:inline font-extrabold mt-2 md:text-sm'>Basket</p>
                </div>
            </div>

            
        </div>



            {/* bottom nav */}
        <div className='text-white flex items-center space-x-3 p-1 pl-6 bg-amazon_blue-light text-xs '>
            <p className='link flex items-center'>
                <MenuIcon className='h-6 mr-1' />
                All
            </p>
            
            <p className='link'>
                Prime Video
            </p>
            <p className='link'>
                Amazon Business
            </p>
            <p className='link'>
                Today&apos;s Deals
            </p>
            <p className='hidden lg:inline-flex link'>
                Electronics
            </p>
            <p className='hidden lg:inline-flex link'>
                Food & Grocery
            </p>
            <p className='hidden lg:inline-flex link'>
                Prime
            </p>
            <p className='hidden lg:inline-flex link'>
                Buy Again
            </p>
            <p className='hidden lg:inline-flex link'>
                Shopper Toolkit
            </p>
            <p className='hidden lg:inline-flex link'>
                Health & Personal Care
            </p>
            <p className='hidden lg:inline-flex link'>
                Electronics
            </p>

        </div>
    </header>
  )
}

export default Header