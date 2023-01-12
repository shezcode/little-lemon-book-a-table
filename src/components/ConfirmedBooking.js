import React, {useEffect} from 'react'
import Footer from './Footer'
import Header from './Header'
import toast, { Toaster } from 'react-hot-toast';


const ConfirmedBooking = () => {

  useEffect(() => {
    toast.success('Your booking has been confirmed!')
    setTimeout(() => {
      window.location.href = '/'
    }, 5000)
  }, [])

  return (
    <>
    <Header />
    <Toaster
      toastOptions={{
        duration: 5000,
      }} />
    <Footer />
    </>
  )
}

export default ConfirmedBooking