import Header from '@/components/Header'
import { getSession, useSession } from 'next-auth/react'
import React,{ useEffect } from 'react'
import { db } from '../../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import moment from 'moment';
import Order from '@/components/Order';

function Orders({ orders }) {
    
    const { data: session } = useSession()



  return (
    <div className=''>
        <Header />
        <main className='max-width-screen-lg mx-auto p-10'>
            <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>Your Orders</h1>
            
            {
                (session) ?
                (<h2 className='font-semibold'>{orders.length} Orders</h2>):
                (<h2>Please, Sign IN to view your orders</h2>)

            }

            <div className='mt-5 space-y-5'>
                {
                    (orders)?
                    (orders.map(({id , amount, amountShipping, items, timestamp, images}) => (
                        <Order 
                            key={id}
                            id={id}
                            amount={amount}
                            amountshipping={amountShipping}
                            items={items}
                            timestamp={timestamp}
                            images={images}
                        />
                    ))):
                    (<h2>Orders Will Soon be Displayed</h2>)
                }
            </div>

        </main>
    </div>
  )
}

export default Orders

export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    //Get the user logged in credentials
    const session =  await getSession(context);
    
    if(!session){
        return{
            props:{
            }
        }
    }
    
    //Firebase data
    const q = query(collection(db,`/users/${session.user.email}/orders/`),orderBy('timestamp',"desc"))
    const stripeOrders = await getDocs(q);
    



    //Stripe orders
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {limit:100})
            ).data,
        }))
    )


    return {
        props:{
            orders,
        }
    }

}