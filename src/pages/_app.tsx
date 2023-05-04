import type { AppProps } from 'next/app'
import { useState,useEffect,useReducer } from 'react'
import {MantineProvider , Flex,useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Header from '@/components/Header'
import MobileHeader from '@/components/MobileHeader'
import Footer from '@/components/Footer'
import NavbarSimple from '@/components/SideNav'
import MobileNav from '@/components/MobileNav'


import { ThemeProvider } from '@/providers/ThemeProvider'
import LayoutProvider from '@/providers/LayoutProvider'
import { ThemeContext } from '@/Context/ThemeContext'
import { TransistionContext } from "@/Context/TransistionContext";

const reducer=(state:any,action:any)=>{
  switch(action.type){
    case "dark_mode":
      return true 
    case "light_mode":
      return false
  }
}


export default function App({ Component, pageProps }: AppProps) {
  const[isDark,dispatch]=useReducer(reducer,false)
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

 const setDarkThemeFunction=()=>{
  dispatch({type:"dark_mode"})
  console.log("dark_mode");
  
 }

 const setLightThemeFunction=()=>{
  dispatch({type:"light_mode"})
  console.log("light_mode")
 }

  const onClickTransistion=()=>{
    setTransistion(!transistion)
  }
  
  return (
    <TransistionContext.Provider value={{transistion,onClickTransistion}}>
      <ThemeContext.Provider value={{isDark:isDark!,setDarkMode:setDarkThemeFunction,setLightMode:setLightThemeFunction}}>
      <ThemeProvider> 
      {extraSmallScreen? <MobileHeader/> : <Header/>}
        <Flex  style={{height:"100vh"}}>
        {extraSmallScreen? "" : <NavbarSimple/>}
          <LayoutProvider>
            <Component {...pageProps} /> 
          </LayoutProvider>
        </Flex>
        <Footer data={[
        {title:"HELP CENTER",link:"/help-center"},
        {title:"USER AGREEMENT",link:"/user-agreement"},
        {title:"PRIVACY POLICY",link:"/privacy-policy"},
        {title:"APP",link:"/app"},
      ]}/>
      {extraSmallScreen&&<MobileNav/>}
      </ThemeProvider>
      </ThemeContext.Provider>
   </TransistionContext.Provider>
  )
}
