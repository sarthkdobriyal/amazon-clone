import Header from '@/components/Header'
import { CheckCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import { useRouter } from 'next/router'

function Success() {

  const router = useRouter();
  return (
    <div className='bg-gray-100 h-screen'>
      <Header />
      <main className='max-w-screen-lg mx-auto'>
        <div className='bg-white p-10 flex flex-col'>
            <div className='flex items-center space-x-2 mb-5'>
              <CheckCircleIcon className='h-10 text-green-500' />
              <h1 className='text-3xl '>Your Order has been Confirmed</h1>
            </div>
            <p>Thank you for shopping with us. We&apos;ll send you a confirmation when the item ships.If you would like to check the details of your order click the button below</p>
            <button onClick={() => router.push('/orders')} className='button mt-5'>Go to my Orders</button>
        </div>
      </main>
    </div>
  )
}

export default Success