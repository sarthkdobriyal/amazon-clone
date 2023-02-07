//webhooks have more than one event that gets them fired but here only on event that is checkout
import { buffer } from 'micro'
import * as admin from 'firebase-admin'


//getting the admin permissions of the firebase SB
const serviceAccount = require('../../../permissions.json')

//If app not started: start the app
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}): admin.app();


//establish connection to stripe

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET



const fulfilOrder = async(session) => {
    console.log("fulfilling order", session)
    return app
    .firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set({
        amount:session.amount_total/100,
        amount_shipping: session.total_details.amount_shipping/100,
        images:JSON.parse(session.metadata.images),
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
        console.log(`SUCCESS: Order ${session.id} has been added to the database`)
    })

}


export default async (req,res) => {
    if(req.method === 'POST'){
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();
        const sig = req.headers["stripe-signature"]
        let event;

        //verify that the event posted came from stripe
        try{
            event = stripe.webhooks.constructEvent(payload,sig,endpointSecret)
        }catch (err){
            console.log(err.message);
            return res.status(400).send(`Webhook Error: ${err.message}`)
        }

        //Handle the checkout session complete event
        if(event.type === 'checkout.session.completed'){
            const session = event.data.object;
            //fulfil the order
            return fulfilOrder(session)
            .then(() => res.status(200))
            .catch(err => res.status(400).send(`Webhook Error: ${err,message}`) )
        }

    }
}


export const config = {
    api: {
        bodyParser:false,
        externalResolver: true,
    }
}