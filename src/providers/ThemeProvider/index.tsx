import React,{FC,useContext} from "react"

import {MantineProvider,useMantineTheme} from '@mantine/core'

import { ThemeContext } from "@/Context/ThemeContext"


export const  ThemeProvider:FC<{children:any}>=({children})=>{
    const{isDark}=useContext(ThemeContext)
    return(
        <MantineProvider withGlobalStyles
        theme={{
            colorScheme: `${isDark? "dark":"light"}`,
        }}>
            {children}
        </MantineProvider>
    )
}