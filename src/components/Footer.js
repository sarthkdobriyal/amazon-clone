import Image from 'next/image'
import {  useRouter } from 'next/router'
import React from 'react'

function Footer() {
    const router = useRouter()
  return (
    <div className='bg-amazon_blue  text-white flex justify-center items-center flex-col relative'>
        <div className='absolute w-full h-3 bg-gradient-to-b from-gray-100 to-amazon_blue-light top-0 z-20 mb-2' />
        {/* Logo */}
        <div onClick={ () => router.push('/')} className='pt-4 pb-2 mx-6 flex items-center flex-grow  sm:flex-grow-0 bg-amazon_blue-light w-full justify-center'>
                <Image  src="/logo.png" width={100} height={40} style = {{objectFit:"contain"}} className='cursor-pointer' alt=""/>
        </div>
        {/* <div className='space-x-4 text-center py-2'>
            <span>Conditions of use</span>
            <span>Privacy notice</span>
            <span>Your ads Privacy choices</span>
        </div> */}
        <div className='py-4'>
            <span className='pb-1'>Copyright © 2001-2023, Sarthak Dobriyal, Inc. or its affiliates</span>
        </div>

    </div>
  )
}

export default Footer