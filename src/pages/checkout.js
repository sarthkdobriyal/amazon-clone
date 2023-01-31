import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image';

import { useSelector } from 'react-redux';
import { removeFromBasket, selectItems } from '@/slices/basketSlice';
import CheckoutProduct from '@/components/CheckoutProduct';

function checkout() {

    const items = useSelector(selectItems);
    console.log(items);

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
                    <h1 className='text-2xl border-b pb-4'>{items.length == 0 ? "Your Basket is Empty": "Your Shopping Basket"}</h1>

                    {
                        items.map((item, idx) => {
                            return (
                                <CheckoutProduct 
                                    key={idx}
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    rating={item.rating}
                                    category={item.category}
                                    image={item.image}
                                />
                            )
                        })
                    }




                </div>



            </div>



            {/* right section */}
            <div></div>

        </main>
    </div>
  )
}

export default checkout