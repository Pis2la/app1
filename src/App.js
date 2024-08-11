import React from 'react'
import Calendar from './class-components'
import { Header,Content,Footer } from './func-components'
export default function app(){
  return(
    <>
      <Header/>
      <Content/>
      <Footer/>
      <p><center><Calendar/></center></p>
    </>
  )
}