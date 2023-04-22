import type { AppProps } from 'next/app'
import { useState } from 'react'
import {MantineProvider , Flex } from '@mantine/core'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import NavbarSimple from '@/components/SideNav'

import {TransistionContext} from "../providers/LayoutProvider"

export default function App({ Component, pageProps }: AppProps) {
  const[transistion,setTransistion]=useState(false)

  const onClickTransistion=()=>{
    setTransistion(!transistion)
  }
  
  return (
    <TransistionContext.Provider value={{transistion,onClickTransistion}}>
      <MantineProvider withGlobalStyles>
      <div>
     <Header/>
    <Flex style={{height:"100vh"}}>
    <NavbarSimple/>
      <Component {...pageProps} />
    </Flex>     
      <Footer data={[{title:"HELP CENTER",link:"/help-center"},
      {title:"USER AGREEMENT",link:"/user-agreement"}, {title:"USER AGREEMENT",link:"/user-agreement"}
      ]}/>
    </div>
    </MantineProvider>
    </TransistionContext.Provider>
  )
}
