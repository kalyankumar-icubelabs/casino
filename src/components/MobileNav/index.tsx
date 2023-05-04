import { useState } from "react";
import { createStyles,Flex,UnstyledButton,Text} from "@mantine/core"
import { SportBillard,PokerChip,Home,Search } from 'tabler-icons-react';


import MobileMenu from '@/components/MobileMenu'

type NavigationButtonsData={buttonIcon:any,label:string}[]

const useStyles=createStyles((theme)=>({
    navWrapper:{
        height: "3.75rem",
        width:"100%",
        position:'fixed',
        bottom:0,
        padding:"0rem 1rem 0rem 1rem",
        backgroundColor:"rgb(36, 38, 43)"
    },

    navContainer:{
        width:"100%",
        justifyContent:"space-between",
        alignItems:"center",
    },

    navButton:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
    },

    navButtonIcon:{
        
        margin:0
    },

   
}))

const navigationButtonsData:NavigationButtonsData=[
    {buttonIcon:SportBillard,label:"Sports"},
    {buttonIcon:PokerChip,label:"Casino"},
    {buttonIcon:Home,label:"Home"},
    {buttonIcon:Search,label:"Search"},
]

export default function MobileNav(){
    const[activeButton,setActiveButton]=useState("Home")
    const[openMenu,setMenuStatus]=useState(false)
    const{classes}=useStyles()
    console.log(activeButton)
    const onClickNavigationButton=((label:string)=>{
        setActiveButton(label)
    })
    console.log(activeButton)
    const navigationButtons=navigationButtonsData.map((item)=>(
        <UnstyledButton 
        key={item.label} 
        onClick={()=>onClickNavigationButton(item.label)}
        style={{color:`${activeButton===item.label? "rgb(116, 201, 23)":"white"}`}}
        className={classes.navButton}>
            <item.buttonIcon size={28} className={classes.navButtonIcon}/>
            <Text size={"sm"} inline >{item.label}</Text>
        </UnstyledButton>
    ))

    return(
       
        <Flex className={classes.navWrapper}>
            <Flex className={classes.navContainer}>
            {navigationButtons}
            <MobileMenu/>
            </Flex>
        </Flex>
       
       
    )
}