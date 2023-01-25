import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter';

function Product({id , title, price, description, category, image, rating}) {
    
    useEffect(() => {
        setHasPrime(
            //If less than 0.5 means true otherwise false
            Math.random() < 0.5? true :false
        )
     }, []);

    //Random generated stars
    const MAX_RATING = 5;
    const MIN_RATING = 1;
    
    //Random generated stars state
    const [rate, setRate] = useState(
        // Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
        Math.floor(rating.rate)
    );


    //Randomly generated if prime or not
    const [hasPrime, setHasPrime] = useState(
        false
    )




  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10 rounded-lg '>

        {/* category */}
        
        <p className='absolute top-2 right-2 text-xs italic text-gray-400 tracking-widest '>
            {category}
        </p>
        
        
        <Image width={200} height={200} style={{objectFit:"contain"}} src={image} className='mx-auto my-4'  />

        
        <h4 className='my-3 font-bold tracking-wide'>{title}</h4>

        <div className='flex'>
            
                {/* //Creating empty array of size rating to generate stars */}
                  {
                  
                  Array(rate).fill().map(( _ , i) => (
                        <StarIcon className="h-6 text-yellow-600" /> 
                     ))
                }
        </div>

        <div>
        <p className='text-xs  my-2 line-clamp-2'>{description}</p>

        </div>


        <div className='mb-5'>
            <Currency quantity={(price) * 78} currency="INR" />
        </div>

       
        {
            (hasPrime) &&

            (<div className='flex items-center space-x-2 -mt-5 '>
                <img className='w-12' src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png" alt="" />
                <p className='text-xs text-gray-500'>FREE Next-Day Delivery</p>
            </div>)
        }

        


        
        <button className='mt-auto button'>Add to Basket</button>
       


    </div>
  )
}

export default Product