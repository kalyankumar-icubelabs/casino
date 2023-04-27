import { useContext } from 'react';
import { Sun,MoonStars } from 'tabler-icons-react';
import { createStyles,Flex,Button,Text } from '@mantine/core';
import { ThemeContext } from '@/Context/ThemeContext';



const useStyles=createStyles((theme)=>({
    themeButtonWrapper:{
        marginTop:10,
        marginLeft:10,
        [theme.fn.smallerThan("sm")]:{
            width:200
        }
    },
    buttonContainer:{
        width:"40%",
        backgroundColor:'rgba(45, 48, 53, 0.5)',
        borderRadius:30,
        justifyContent:"space-between",
        alignItems:"center",
        height:45,
        
    },

    themeButton:{
        backgroundColor:"transparent",
        color:"grey",
        width:45,
        height:45,
        padding:0,
    },

    activeButton:{
        color:"black",
        backgroundImage:"linear-gradient(180 deg,green,grey)",
        border:"none",
        borderRadius:"50%",
        width:45,
        height:45,
        padding:0,
    },

    themeText:{
        color:"rgb(245, 246, 247)",
        fontSize:12,
        fontWeight:"bold",
        marginLeft:10,
        alignSelf:"center"
    },
}))


export default function ThemeButton(){
    const{isDark,setDarkMode,setLightMode}=useContext(ThemeContext)
    const {classes}=useStyles()
    
    return(
       <Flex className={classes.themeButtonWrapper}>
         <Flex className={classes.buttonContainer}>
            <Button variant={'white'} 
             className={`${isDark? `${classes.activeButton}`: `${classes.themeButton}`}`} onClick={setDarkMode}>
                <MoonStars/>
            </Button>
            <Button variant={'white'} 
            className={`${isDark? `${classes.themeButton}`: `${classes.activeButton}`}`} onClick={setLightMode}>
                <Sun />
            </Button>
        </Flex>
        <Text className={classes.themeText}>
            {isDark? "DarkMode":"LightMode"} <br/> 
            <span style={{color: 'rgba(153, 164, 176, 0.8)'}}>Currently</span>
        </Text>
       </Flex>
    )
}