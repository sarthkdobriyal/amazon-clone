import React,{ useState } from 'react'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';

function CheckoutProduct({
    id,
    title,
    description,
    price,
    rating,
    category,
    image,
}) {

    const [rate , setRate] = useState(
        Math.floor(rating.rate)
    )     
    


    
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
        <div className='sol-span-3 mx-5'>
            <p className='text-sm'>{title}</p>
            <div className='flex'>
            
            {/* //Creating empty array of size rating to generate stars */}
              {
              
              Array(rate).fill().map(( _, i) => (
                    <StarIcon key={i} className="h-4 text-yellow-600" /> 
                 ))
            }
            </div>
            <p className='text-xs my-2 line-clamp-3'>{description}</p>



        </div>
        {/* right  */}
    </div>
  )
}

export default CheckoutProduct