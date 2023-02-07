import React, { useState } from 'react'
import Header from '@/components/Header'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '@/slices/basketSlice';
import Footer from '@/components/Footer';


const Product = ({id , title, price, description, category, image, rating}) => {

    const dispatch = useDispatch();

    //Adding Items to the baket
    const addItemToBasket = () => {
        const prouct = {
            id, title, price,description,category,image,rating
        }
        dispatch(addToBasket(prouct))
    }

    const [rate, setRate] = useState(
        // Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
        Math.ceil(rating.rate)
    );
    
  return (
    <div className='overflow-hidden border-b mb-8'>
        <Header />
        <div className='px-2 text-sm my-2 text-gray-700'>{category + " > " + title} </div>
        <div className='flex flex-grow h-screen w-screen'>
                
                {/* Left image */}
                <div className='  w-[33%]  h-screen '>
                <Image width={200} height={200} style={{objectFit:"contain"}} src={image} className='mx-auto my-32' alt="" />
                </div>

                {/* Producr Details */}
                <div className=' w-[38%] py-10 px-2'>

                    {/* Title */}
                    <div className='border-b mb-5'>
                    <h1 className='font-bold text-3xl my-4'>{title}</h1>


                    <div className='flex my-4'>
                        <div className='flex mr-3'>
                {
                Array(rate).fill().map(( _, i) => (
                        <StarIcon key={i} className="h-6 text-yellow-600" /> 
                    )) 
                }
                </div>
                <div>{rating.rate + " | " + rating.count + " ratings"}</div>
                    </div>

                </div>
                
                {/* Price */}
                <div className='border-b mb-3 '>
                    <div>
                        <span className='text-gray-800 mr-4 text-md'>Price:</span>
                        <span className='text-2xl text-red-800'>
                        <Currency quantity={(price) * 78} currency="INR"  />
                        </span>
                    </div>
                    <div className='ml-14 mt-2'>Inclusive of all taxes</div>
                    <div className='flex justify-start gap-4 mt-4 mb-4 ml-4'>
                        <div className='flex flex-col items-center gap-4'>
                        <Image src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" 
                                height={50} width={50} style={{objectFit:"contain"}} 
                        />
                        <div className='text-xs text-blue-400'>Free Delivery</div>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                        <Image src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" 
                                height={50} width={50} style={{objectFit:"contain"}} 
                        />
                        <div className='text-xs text-blue-400'>Pay on Delivery</div>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                        <Image src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" 
                                height={50} width={50} style={{objectFit:"contain"}} 
                        />
                        <div className='text-xs text-blue-400'>Non - returnable</div>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                        <Image src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" 
                                height={50} width={50} style={{objectFit:"contain"}} 
                        />
                        <div className='text-xs text-blue-400'>Amazon Delivered</div>
                        </div>
                    </div>
                </div>
                    <h1 className='font-bold text-lg my-2'>About this item:</h1>
                    <p>{description}</p>

                </div>

                {/* Pricing Details */}
                <div className=' w-[28%] px-3 py-7'>
                    <div className='border rounded-lg  p-6'>
                        <span className='text-3xl text-black'>
                            <Currency quantity={(price) * 78} currency="INR"  />
                        </span>
                        <div className=' ml-4 mt-2'> <span className='text-blue-600'>Free Delivery</span> in 8-10 days </div>
                        <div className='text-xl ml-2 mt-2 text-green-800'>
                            In Stock.
                        </div>
                        <div className='ml-2 mt-2 text-blue-500'>
                            Fulfilled by Amazon
                        </div>
                        <button className='button w-full mt-3' onClick={addItemToBasket}>Add to cart</button>
                    </div>

                </div>
                

        </div>
        {/* Footer */}
        <Footer />
    </div>
  )
}
Product.getInitialProps = async ({ query }) => {
    const productId = query.id;
    const product = await fetch(`https://fakestoreapi.com/products/${productId}`).then((res) => res.json())
    return product
  }

export default Product