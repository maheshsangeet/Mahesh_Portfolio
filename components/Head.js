import React from 'react';
import Head from 'next/head'

const Heading = ({ title}) => {
  return (
    <>
        <Head>
          <title>{title} | Mahesh Portfolio</title>
          <meta name="description"content="Mahesh Sangeet's detailed information build by using Next.js"/>
          <meta name="description"content="Next js portfolio"/>
          <link rel="icon" type="image/png" sizes="96x96"   href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="180x180" href="/android-chrome-192x192.png" />
        </Head>
    </>
  )
}

export default Heading;