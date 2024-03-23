'use client'
import { useEffect } from 'react'

const Breakpoints = () =>{
  useEffect(() => {
    const sizeShow = () => {
      if(window.innerWidth < 639){
        console.log('for-mobile-only')
      }
      if(window.innerWidth < 1023){
        console.log('for-phone-and-tablet-only')
      }
      if(window.innerWidth > 640){
        console.log('from-tablet-portrait-up')
      }
      if(window.innerWidth > 768){
        console.log('from-tablet-landscape-up')
      }
      if(window.innerWidth > 1024){
        console.log('from-desktop-up')
      }
      if(window.innerWidth > 1440){
        console.log('from-big-desktop-up')
      }
    }
    sizeShow()
    window.addEventListener('resize', sizeShow)
    return () => {
      window.removeEventListener('resize', sizeShow)
    }
  }, [])

  return(<></>)
}

export default Breakpoints