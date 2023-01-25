import React from 'react'
import Product from './Product'

function Productfeed({ products }) {
  return (
    <div className=''>
        {
            products.map(({id , title, price, description, category, image, rating}) => (
                <Product key={id} 
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    rating={rating}
                />
            ))
        }
    </div>
  )
}

export default Productfeed