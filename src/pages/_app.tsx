import type { AppProps } from 'next/app'
import { useState,useEffect } from 'react'
import {MantineProvider , Flex,useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Header from '@/components/Header'
import MobileHeader from '@/components/MobileHeader'
import { Footer } from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import NavbarSimple from '@/components/SideNav'

import {TransistionContext} from "../providers/LayoutProvider"

export default function App({ Component, pageProps }: AppProps) {
  const[transistion,setTransistion]=useState(false)
  const theme=useMantineTheme()
  const extraSmallScreen=useMediaQuery(`(max-width: ${theme.breakpoints.xs})`)
  const smallScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);
  const mediumScreen=useMediaQuery(`(min-width: ${theme.breakpoints.md})`)
  useEffect(()=>{
    if(smallScreen){
      setTransistion(false)
    }if(mediumScreen){
      setTransistion(true)
    }
  },[smallScreen,mediumScreen])



  const onClickTransistion=()=>{
    setTransistion(!transistion)
  }
  
  return (
    <TransistionContext.Provider value={{transistion,onClickTransistion}}>
      <MantineProvider 
       withGlobalStyles>
       {extraSmallScreen? <MobileHeader/> : <Header/>}
    <Flex style={{height:"100vh"}}>
   {extraSmallScreen? "" : <NavbarSimple/>}
       <Component {...pageProps} /> 
  </Flex>  
      <Footer2 data={[
        {title:"HELP CENTER",link:"/help-center"},
        {title:"USER AGREEMENT",link:"/user-agreement"},
        {title:"PRIVACY POLICY",link:"/privacy-policy"},
        {title:"APP",link:"/app"},
      ]}/>
    </MantineProvider>
    </TransistionContext.Provider>
  )
}
