const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


//own endpoint for the stripe api payment own backend
export default async (req,res) => {
    const { items, email } = req.body;
    //Need to transform the array of objects(items) into a format that stripe would understand
    const transformedItems = items.map((item) => ({ 
        quantity:1,
        price_data:{
            currency:"inr",
            unit_amount:(Math.floor(item.price*78)*100),
            product_data: {
                name: item.title,
                description:item.description,
                images:[item.image]
            },
        }
    }));
    
    //creating checkout session
    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        shipping_options: [{shipping_rate: 'shr_1MX6WvSCq1duO0K40mb09i9i'}],
        shipping_address_collection: {
            allowed_countries:['US', 'GB', 'CA', 'IN']
        },
        line_items:transformedItems,
        mode:'payment',
        success_url:`${process.env.HOST}/success`,
        cancel_url:`${process.env.HOST}/checkout`,
        metadata:{
            email:email,
            images: JSON.stringify(items.map((item) => item.image)),
        },
    })

    res.status(200).json({id: session.id})

}