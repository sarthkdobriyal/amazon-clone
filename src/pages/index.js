import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?20171005153412" />
      </Head>
      
        <Header />

      
    </>
  )
}
