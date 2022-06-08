import React from 'react';
import Title from 'next/head'

const Head = ({ title}) => {
  return (
    <>
        <Title>{title} | Mahesh Portfolio</Title>
    </>
  )
}

export default Head;