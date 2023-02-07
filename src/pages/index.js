import Head from 'next/head'
import Image from 'next/image'

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Productfeed from '@/components/Productfeed'

import {  getSession } from "next-auth/react"
import Footer from '@/components/Footer'
import { useState } from 'react'










export default function Home({ products }) {

  const [searchItem , setSearchItem] = useState("");
  let searchProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchItem.toLowerCase())
     
  })
  
  return (
    <>
    <Head>
        <title>Amazon</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?20171005153412" />
      </Head>
      

        <div className='max-w-screen-2xl mx-auto bg-gray-100'> 
        
          <Header searchItem={searchItem} setSearchItem={setSearchItem}/>
           
            <Banner />

          
            <Productfeed  products={searchItem.length > 0 ? searchProducts : products} />

            <Footer />
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