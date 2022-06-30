import React from 'react';
import Head from 'next/head'

const Heading = ({ title}) => {
  return (
    <>
        <Head>
          <title>{title} | Mahesh Portfolio</title>
          <meta name="description"content="Mahesh Sangeet's detailed information build by using Next.js"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
    </>
  )
}

export default Heading;