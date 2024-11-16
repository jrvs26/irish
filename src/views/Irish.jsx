import React, { useEffect } from 'react'
import Heart from '../components/Heart'

function Irish() {

  useEffect (() => {
    document.title = "Hello Irish";
  }, []);
  

  return (
    <>
    <Heart />
    </>
  )
}

export default Irish