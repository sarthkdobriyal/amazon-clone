# An E-commerce app build with Reactjs and nextjs
## This build has everything you expect in the e-commerce app.

## Features:

- Items listed out in a beautiful responsive manner
- Add items to your basket supported by redux-state management library
- A basket page to change quantities of items
- Google authentication using nextAuth Authentication
- Login/Logout using google
- Actually pay for your order using stripe payment processor
- Backend is supported by firebase firestore db
- Backend database updates automatically using webhook when payment completes
- It leads back to the order confirmed page.
- Deployed over vercel


## Tech Stack :
- ReactJS
- NextJs framework for server side rendering
- Tailwind css for the responsive beautiful UI/UX
- Redux is used to handle the state management
- Stripe payment checkout for all the payment processor
- NextAuth powering the google authentication
- Firebase to support the backend database
- Fake store rest API is used to populate the items


## installed dependencies -->
- hero icons for the awesome icons
- react-responsive-carousel for the carousel
- react-currency-formatter for the currency
- stripe / @stripe/stripe-js for the payment
- axios for the backend and stripe payment functionality
- micro for the webhook
- firebase-admin which runs on the server side to interact with the DB

## Steps to use the app -->
- At first you'll land on the homepage where you can view all the items available to buy in the store(Fake items are used currently)
- In order to make a purchase or create a bucket you need to sign in
- Click on the sign in button next to the search icon 
- Use your google account to sign in
- Once signed in you will be able to see your name in place of sign in
- After signing in add the desired items to your basket
- You can view your basket by clicking on the cart icon on the top right
- A number on the cart icon indicates the number of items in the basket currently
- After you have added all the items in the basket you can proceed to checkout
- Click on the cart icon and the proceed to checkout button on the right
- You will redirected to a Payments Gateway powered by stripe
- You can view your total bill and its breakdown on left
- Fill in the payment details on the right and click on pay
- Once the payment is completed you'll be redirected to the confirmation page
- From the confirmation page you can either go to the homepage by clicking the amazon logo or view your orders by clicking on the view my orders button
- Your orders are saved for lifetime and can be visited anytime you wish to
- You can sign out from the app by clicking on your name and accounts and lists


