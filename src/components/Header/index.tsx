import Image from "next/image"
import {Flex,Button} from "@mantine/core"
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./index.module.css"

export default function Header(){
    console.log("jai shri ram")
    return(
        <Flex className={styles.headerContainer}>
            <Flex className={styles.headerWrap}>
                <Flex className={styles.header}>
                    <Flex className={`${styles.iconAndSearchContainer} 
                    ${styles.iconAndSearchContainer1}`}>
                        <Flex className={styles.iconContainer}>
                        <Image alt="logo" src=""/>
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
                        <p>Sign In</p>
                        <Button className={styles.signupButton}>Sign up</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}