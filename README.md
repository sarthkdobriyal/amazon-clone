# E-Commerce Website
The E-Commerce website is a platform that allows users to browse and purchase products. It is built using ReactJS and Next.js framework for server-side rendering, with a responsive and visually appealing UI/UX design created using Tailwind CSS. Redux is used for state management, Stripe is used for the payment checkout process, and NextAuth is used for Google authentication. The backend database is supported by Firebase Firestore, and the items are populated using the Fake Store REST API. The website is deployed on Vercel.

# Technical Skills: 
ReactJS, Next.js, Tailwind CSS, Redux, Stripe, NextAuth, Firebase Firestore

# Architecture: 
The E-Commerce website is built using a client-server architecture with Next.js as the server and ReactJS as the client. It utilizes the following components:

# Navigation:
The app uses Next.js dynamic routes to create a navigation structure that allows users to browse different categories of products and view individual product details.

# API Integration:
The app integrates with the Fake Store REST API to fetch product details, which are then parsed and formatted for display within the app. Stripe is used for the payment checkout process, and NextAuth is used for Google authentication.

# Data Management:
Redux is used for state management, allowing for efficient data flow throughout the app. Firebase Firestore is used as the backend database to support the storage of user information, orders, and payment information.

# Responsibilities:

- Designed and implemented the app's navigation structure using Next.js dynamic routes.
- Integrated the Fake Store REST API and implemented parsing and formatting of the fetched data.
- Utilized Tailwind CSS to style the app's components and ensure consistency across screens.
- Developed the Redux data management system for efficient state management.
- Implemented Stripe payment checkout for all the payment processing and NextAuth to power Google authentication.
- Utilized Firebase Firestore as the backend database and implemented webhook for database updates when payment completes.

# Challenges:

- One of the main challenges was integrating Stripe payment checkout and ensuring that the payment process was secure and reliable.
Another challenge was designing the app's responsive and visually appealing UI/UX using Tailwind CSS while maintaining consistency across screens.
Achievements:

- Successfully integrated Stripe payment checkout and NextAuth authentication, allowing for secure and reliable payment processing and user authentication.
Created a visually appealing and responsive UI/UX design using Tailwind CSS.
Implemented Firebase Firestore as the backend database, supporting the storage of user information, orders, and payment information.
Deployed the app on Vercel, ensuring high availability and scalability.


## installed dependencies -->
- hero icons for the awesome icons
- react-responsive-carousel for the carousel
- react-currency-formatter for the currency
- stripe / @stripe/stripe-js for the payment
- axios for the backend and stripe payment functionality
- micro for the webhook
- firebase-admin which runs on the server side to interact with the DB

How to use the app:
1. When you first open the app, you'll land on the homepage where you can view all the items available to buy in the store (using fake items).
2. To make a purchase or create a basket, you need to sign in to the app.
3. Click on the sign-in button located next to the search icon.
4. Sign in using your Google account credentials.
5.After signing in, your name will replace the sign-in button.
6. Add desired items to your basket.
7. To view your basket, click on the cart icon located on the top right of the app.
8. The number displayed on the cart icon represents the number of items in your basket.
9. Once you have added all the items you want to purchase to your basket, click on the cart icon and then click the "Proceed to Checkout" button located on the right.
10. You will be redirected to a Stripe-powered Payments Gateway, where you can view your total bill and its breakdown on the left.
11. Fill in your payment details on the right and click on the "Pay" button.
12. Once the payment is completed, you'll be redirected to the confirmation page.
13. From the confirmation page, you can either go back to the homepage by clicking the Amazon logo or view your orders by clicking on the "View My Orders" button.
14. Your orders are saved for a lifetime and can be accessed at any time.
15. To sign out from the app, click on your name and select "Accounts and Lists".


