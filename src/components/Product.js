import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter';

function Product({id , title, price, description, category, image}) {

    //Random generated stars
    const MAX_RATING = 5;
    const MIN_RATING = 1;
    
    //Random generated stars state
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );


    //Randomly generated if prime or not
    const [prime, setPrime] = useState(
        //If less than 0.5 means true otherwise false
        Math.floor(Math.random() < 0.5)
    )




  return (
    <div>
        {/* category */}
        <p>
            {category}
        </p>
        
        <Image width={200} height={200} style={{objectFit:"contain"}} src={image}  />
        
        <h4>{title}</h4>

        <div className='flex'>
            {
                //Creating empty array of size rating to generate stars
                Array(rating).fill().map((_, i) => (
                    <StarIcon key={i} className="h-5 text-yellow-600" /> 
                ))
            }
        </div>

        <p>{description}</p>

        <div>
            <Currency quantity={price * 78} currency="INR" />
        </div>

        {
            prime &&
            <img src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png" alt="" />
        }

    </div>
  )
}

export default Product