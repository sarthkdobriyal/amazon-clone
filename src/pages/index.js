import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Productfeed from '@/components/Productfeed'

import { useSession, signIn, signOut, getSession } from "next-auth/react"








const inter = Inter({ subsets: ['latin'] })

export default function Home({ products }) {
  
  return (
    <>
    <Head>
        <title>Amazon</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?20171005153412" />
      </Head>
      

        <div className='max-w-screen-2xl mx-auto bg-gray-100'> 
        
          <Header />
           
            <Banner />

          
            <Productfeed  products={products} />


        </div>
    </>
  )
}



export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products/").then((res) => res.json())
  const session = await getSession(context)
  return {
    props: {
      products,
      session
    }
  }
}