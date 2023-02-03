import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useSelector } from 'react-redux';
import {  selectItems, selectTotal } from '@/slices/basketSlice';
import CheckoutProduct from '@/components/CheckoutProduct';
import { useSession } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
const axios = require('axios')


const stripePromise = loadStripe(process.env.stripe_public_key);


function Checkout() {

    const items = useSelector(selectItems);

    const total = useSelector(selectTotal)

    const { data: session } = useSession()

    //On clicking the button this function will send all the data of the products to the stripe and create a checkout session for payment
    const createCheckoutSession = async () => {   
        const stripe = await stripePromise;
        
        //call the backend to create a checkut session in api folder
        const checkoutSession = await axios.post('/api/create-checkout-session', {
            items,
            email:session.user.email,
        })

        // Redirect the user to stripe checkout
        const result = stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        })

        if(result.error){
            alert(result.error.message)
        }


    }
    

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
            <div className='flex-col flex bg-white p-12 shadow-md mt-5'>

                {
                    (items.length>0)  &&
                    (<>
                        <h2 className='whitespace-nowrap'>Subtotal ({items.length} items):{' '}
                        <span className='font-bold'>
                            <Currency quantity={total} currency="INR"></Currency>
                        </span>
                        </h2>

                        <button 
                            role="link"
                            onClick={createCheckoutSession}
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

export default Checkout