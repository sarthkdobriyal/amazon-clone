import Header from '@/components/Header'
import React from 'react'
import Image from 'next/Image';

function checkout() {
  return (
    <div className='bg-gray-100'>
        <Header />

        <main className='lg:flex max-w-screen-2xl '>
            {/* Left section */}
            <div className='flex-grow m-5 shadow-sm'>
                <Image
                    src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
                    width={1020}
                    height={250}
                    obj
                />

                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-2xl border-b pb-4'>Your Shopping Basket</h1>
                    



                </div>



            </div>



            {/* right section */}
            <div></div>

        </main>
    </div>
  )
}

export default checkout