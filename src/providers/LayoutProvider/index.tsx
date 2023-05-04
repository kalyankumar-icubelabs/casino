import { useContext } from "react";
import { createStyles,Box } from "@mantine/core"
import { TransistionContext } from "@/Context/TransistionContext";


const useStyles=createStyles((theme)=>({
    pageWrapper:{
        marginTop:"4rem",
        border:"1px red solid",
        width:"100vw",
        [theme.fn.smallerThan("sm")]:{
            alignItems:"center"
        },
        [theme.fn.largerThan("sm")]:{
            marginLeft:80,
            
        },
        [theme.fn.largerThan("md")]:{
            padding:"48px 60px 48px 60px"
        },
    },

    sidebarDisplaying:{
        [theme.fn.largerThan("sm")]:{
            marginLeft: 250
        }
    },
}))
export default function LayoutProvider(props:any){
    const{transistion}=useContext(TransistionContext)
    const{classes}=useStyles()
    return(
        <Box className={`${classes.pageWrapper} ${transistion? classes.sidebarDisplaying : ""}`}>
            {props.children}
        </Box>
    )
}