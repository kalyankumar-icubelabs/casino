import { useContext,useEffect } from "react";
import {Flex,Image,Button} from "@mantine/core"
import { AiOutlineSearch } from "react-icons/ai";
import {IconMenu2} from '@tabler/icons-react';
import styles from "./index.module.css"
import { TransistionContext } from "@/providers/LayoutProvider";

export default function Header(){
    const transistionEffect=useContext(TransistionContext)
    
    return(
    <>
        <Button onClick={transistionEffect.onClickTransistion}
        className={`${styles.burgerIcon} 
        ${transistionEffect.transistion? styles.burgerFullSideNav: styles.burgerSideNavIcons}`}>
        <IconMenu2 size={20} />    
    </Button>
         <Flex className={transistionEffect.transistion? `${styles.sidebarDisplaying}` :`${styles.headerContainer}`}>
        <Flex className={styles.headerWrap}>
            <Flex className={styles.header}>
                <Flex className={`${styles.iconAndSearchContainer} 
                ${styles.iconAndSearchContainer1}`}>
                    <Flex className={styles.iconContainer}>
                    <Image alt="logo" src="https://static.nanogames.io/assets/logo.cebcfe09.png"/>
                    <Flex className={styles.searchContainer}>
                        <AiOutlineSearch/>
                        <input 
                        type="text" 
                        placeholder="Game name | Provider | Category Tag" 
                        value=""
                        className={styles.searchInput}/>
                    </Flex>
                    </Flex>
                </Flex>
                <Flex className={styles.loginContainer}>
                    <p className={styles.signIn}>Sign In</p>
                    <Button className={styles.signupButton}>Sign up</Button>
                   
                </Flex>
            </Flex>
        </Flex>
    </Flex>
    </>
    )
}