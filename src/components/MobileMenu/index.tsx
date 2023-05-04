
import {
    createStyles,
    Group,
    Button,
    UnstyledButton,
    Text,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    Flex,
    Image
  } from '@mantine/core';


import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
  } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';  
import ThemeButton from '../ThemeButton';

import { Menu2 } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
    link: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      textDecoration: 'none',
      color: '#f5f6f7',
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
  
      [theme.fn.smallerThan('sm')]: {
        height: rem(42),
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      },
  
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      }),
    },
  
    subLink: {
      width: '100%',
      padding: `${theme.spacing.xs} ${theme.spacing.md}`,
      borderRadius: theme.radius.md,
  
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      }),
  
      '&:active': theme.activeStyles,
    },
  
    dropdownFooter: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      margin: `calc(${theme.spacing.md} * -1)`,
      marginTop: theme.spacing.sm,
      padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
      paddingBottom: theme.spacing.xl,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    hiddenMobile: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    hiddenDesktop: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
     
    },

    headerStyle:{
      color:"white",
      backgroundColor: 'rgb(30, 32, 36)',
    },
    

    signIn:{
      color: "rgb(116, 201, 23)",
      fontWeight: "bold",
      paddingRight:"10px"
    },

    signUpBtn:{
      fontSize:"15px",
      fontWeight: "bold",
      backgroundColor:"#43b309",
      borderRadius:"22px"
    },

    sideMenuScroll:{
      height:"100vh",
      border:"1px red solid",
      backgroundColor: 'rgb(30, 32, 36)'
    },

    burgerSpan:{
      textAlign:"center",
      border:"1px grey solid",
      width:33,
      paddingBottom:6,
      borderRadius:"100%",
    },
    navButton:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
    },

  }));
  
const mockdata = [
    {
      icon: IconCode,
      title: 'Open source',
      description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
      icon: IconCoin,
      title: 'Free for everyone',
      description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
      icon: IconBook,
      title: 'Documentation',
      description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
      icon: IconFingerprint,
      title: 'Security',
      description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
      icon: IconChartPie3,
      title: 'Analytics',
      description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
      icon: IconNotification,
      title: 'Notifications',
      description: 'Combusken battles with the intensely hot flames it spews',
    },
  ];



export default function MobileMenu() {
  const [opened, { open, close }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const{classes,theme}=useStyles()
  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));


  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Navigation"
        zIndex={10000}
      >
        <ScrollArea h={"100vh"} mx="-md" className={classes.sideMenuScroll}>
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
  
            <a href="#" className={classes.link}>
              Home
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Features
                </Box>
                <IconChevronDown size={16} color={theme.fn.primaryColor()} />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a>
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
            <ThemeButton/>
          </ScrollArea>
      </Drawer>
        <UnstyledButton 
        onClick={open} 
        className={classes.navButton}
        style={{color:`${opened? "rgb(116, 201, 23)":"white"}`}}>
            <Menu2 size={28}/>
            <Text size={"sm"} inline>Menu</Text>
        </UnstyledButton>
     
    </>
  );
}