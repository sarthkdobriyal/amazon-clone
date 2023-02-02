import React,{ useState, useEffect } from 'react'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '@/slices/basketSlice';

function CheckoutProduct({
    id,
    title,
    description,
    price,
    rating,
    category,
    image,
    hasPrime
}) {

    const [rate , setRate] = useState(
        Math.floor(rating.rate)
    )     

    const dispatch = useDispatch();


    const addItemToBasket = () => {
        const product = {
            id,
            title,
            description,
            price,
            rating,
            category,
            image,
            hasPrime
        }
        //push item into redux
        dispatch(addToBasket(product))
    }
    

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }))
    }

    
  return (
    <div className='grid grid-cols-5'>
        {/* Letf image */}
        <Image
        src={image}
        width={170}
        height={200}
        style={{objectFit:"contain"}}
        />
        {/* middle descripyion  */}
        <div className='col-span-3 mx-5'>
            <p className='text-sm '>{title}</p>
            <div className='flex'>
            
            {/* //Creating empty array of size rating to generate stars */}
              {
              
              Array(rate).fill().map(( _, i) => (
                    <StarIcon key={i} className="h-4 text-yellow-600" /> 
                 ))
            }
            </div>
            <p className='text-xs my-2 line-clamp-3'>{description}</p>
            <Currency quantity={price*78} currency="INR" className="font-bold"></Currency>

            {
            (hasPrime) &&

            (<div className='flex items-center space-x-2 '>
                <img className='w-10' src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png" alt="" />
                <p className='text-xs text-gray-500'>FREE Next-Day Delivery</p>
            </div>)
        }



        </div>
        {/* right  */}

        <div className='flex flex-col justify-center items-center space-y-2'>
            <button className='button w-full' onClick={addItemToBasket}>Add More</button>
            <button className='button w-full focus:ring-red-400 active:from-red-400 focus:' onClick={removeItemFromBasket}>Remove</button>
        </div>

        

        





    </div>
  )
}

export default CheckoutProduct