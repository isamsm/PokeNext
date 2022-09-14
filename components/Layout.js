import Navbar from "./Navbar"
import Footer from "./Footer"

import Head from 'next/head'

export default function Layout({ children }){
    return(
        <>
        <Head>
            <link rel="shourchut icon" href="/assets/images/favicon.ico" />
            <title> PokeNext </title>
        </Head>
            <Navbar />
            <main className="main-container"> {children} </main>
            <Footer />
        </>
    )
}