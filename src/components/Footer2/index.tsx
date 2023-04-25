import { useContext } from "react";
import {createStyles, Flex,Image,Text,Anchor,rem} from "@mantine/core";

import { TransistionContext } from "@/providers/LayoutProvider";

const useStyles=createStyles((theme)=>({
    footer:{
        display:"flex",
        flexDirection:"column",
        marginTop: "2.5rem",
        backgroundColor: 'rgb(27, 29, 33)',
        padding: '48px 10px 48px 20px',
        [theme.fn.smallerThan("sm")]:{
            alignItems:"center"
        },
        [theme.fn.largerThan("sm")]:{
            marginLeft:60
        }
    },

    sidebarDisplaying:{
        [theme.fn.largerThan("sm")]:{
            marginLeft: 240
        }
    },
    
    footerWrapper:{
        width:"100%",
        justifyContent:"space-between",
        paddingBottom:20,
        [theme.fn.smallerThan("sm")]:{
            display:"flex",
            flexDirection:"column",
        },
        [theme.fn.largerThan("sm")]:{
            borderBottom:"1px grey solid"
        }
    },

    footerDescriptionContainer:{
        [theme.fn.largerThan("sm")]:{
            borderRight:"1px grey solid",
            width:"45%"
        }
    },

    footerDescription:{
        fontSize: '14px',
        lineHeight: 2.3,
        color: 'rgba(153, 164, 176, 0.8)',
        [theme.fn.largerThan("sm")]:{
            width:400,
        },
        [theme.fn.smallerThan("sm")]:{
            textAlign:"center"
        }
    },

    linkStyling:{
        fontSize:"12px",
        padding: '0px 12px 0px 12px',
        whiteSpace: 'nowrap',
        lineHeight:(2),
        color:"white",
        '&:hover':{
            color:"#43b309",
            cursor:"pointer",
            textDecoration:"none"
        }
    },
   
    
    linksWrapper:{
        display:"flex",
        flexDirection:"column",
        [theme.fn.smallerThan('sm')]:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            flexWrap:"wrap",
            borderBottom:"1px grey solid",
            padding:"20px 0 20px 0"
        },
        
    },
    
    contactUsSection:{
        display:"flex",
        flexDirection:"column",
        [theme.fn.smallerThan("sm")]:{
            alignItems:"center",
            marginTop:20
        }
    },

    contactUs:{
        color:"rgba(153, 164, 176, 0.8)",
        fontSize:"12px",
    },
    
    email:{
        color:"rgba(153, 164, 176, 0.8)",   
        fontSize:"11px",
        fontWeight:600,
        marginRight:10
    },

}))

interface FooterLinksProps {
    data: {
      title: string;
      link: string;
    }[];
  }

export default function Footer2({ data }: FooterLinksProps){
    const {transistion}=useContext(TransistionContext)
    const{classes}=useStyles()
    
    const groups = data.map((each,index) => {
     
  
      return (<Anchor key={each.title} className={classes.linkStyling} href={each.link}>{each.title}</Anchor>);
    });

    return(
        <Flex className={`${classes.footer} ${transistion? classes.sidebarDisplaying : ""}`}>
          <Image src="https://static.nanogames.io/assets/logo.cebcfe09.png"
          alt="logo"
          width={160}/>
          <Flex className={classes.footerWrapper}>
            <Flex className={classes.footerDescriptionContainer}>
                <Text className={classes.footerDescription}>
                    NANOGAMES.IO is built by gamblers for gamblers. 
                    With our unique community and a huge selection of games like Crash,
                    HashDice, Plinko, Slots, and many more. Your greatest casino adventure 
                    is waiting for you!
                </Text>
            </Flex>
            <Flex className={classes.linksWrapper}>
                {groups}
            </Flex>
            <div>
            <div className={classes.contactUsSection}>
                <Text className={classes.contactUs}>CONTACT US</Text>
                <Text className={classes.email}>Email <span style={{color:"#43b309"}}>Support@sample.com</span></Text>
            </div>
            <div className={classes.contactUsSection}>
                <Text className={classes.contactUs}>Accpeted Currencies</Text>
            </div>
            </div>
          </Flex>
        </Flex>
    )
}