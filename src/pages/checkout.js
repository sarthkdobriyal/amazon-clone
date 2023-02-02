import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useSelector } from 'react-redux';
import { removeFromBasket, selectItems, selectTotal } from '@/slices/basketSlice';
import CheckoutProduct from '@/components/CheckoutProduct';
import { useSession } from 'next-auth/react';

function checkout() {

    const items = useSelector(selectItems);

    const total = useSelector(selectTotal)

    const session = useSession(); 
    

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
                                    hasPrime={item.hasPrime}
                                />
                            )
                        })
                    }




                </div>



            </div>



            {/* right section */}
            <div className='flex-col flex bg-white p-12 shadow-md'>

                {
                    (items.length>0)  &&
                    (<>
                        <h2 className='whitespace-nowrap'>Subtotal ({items.length} items):{' '}
                        <span className='font-bold'>
                            <Currency quantity={total} currency="INR"></Currency>
                        </span>
                        </h2>

                        <button 
                            disabled={!session}
                        className={`button w-full mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}` } >
                            {
                                !session ? 'SignIn to Checkout' :
                                "Proceed to Checkout"
                            }
                        </button>
                    </>)
                }
            </div>

        </main>
    </div>
  )
}

export default checkout