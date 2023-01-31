import React from 'react'
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

    console.log(title);
  return (
    <div className='grid grid-cols-5'>
        {/* Letf image */}
        <Image
        src={image}
        width={200}
        height={500}
        style={{objectFit:"contain"}}
        />
        {/* middle descripyion  */}
        <div className='sol-span-3 mx-5'>
            <p>{title}</p>
            <div>
                {
                    Array(rating).fill().map((_,i) => {
                        <StarIcon key={i} className="h-6 text-yellow-600" /> 
                    })
                }
            </div>
        </div>
        {/* right  */}
    </div>
  )
}

export default CheckoutProduct