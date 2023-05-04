
import {
    createStyles,
    Header,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    ThemeIcon,
    rem,
    Flex,
    Image
  } from '@mantine/core';

  import { useDisclosure } from '@mantine/hooks';
  import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
  } from '@tabler/icons-react';
  
  const useStyles = createStyles((theme) => ({
    headerBox:{
        position:"fixed",
        border:0,
        backgroundColor: "rgb(36, 38, 43)",
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
  
  export default function MobileHeader() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = useStyles();
  
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
        <Header height={"4rem"} px="md" className={classes.headerBox}>        
            <Flex style={{alignItems:"center",justifyContent:"space-between",width:"100%"}}>
              <Flex style={{alignSelf:"center"}}>
              <Image style={{width:"32px",marginRight:"10px"}} 
              src="https://static.nanogames.io/assets/logo_small.c965cce9.png" alt="logo"/>
              </Flex>
            <Flex style={{alignItems:"center"}}>
              <p className={classes.signIn}>Sign in</p>
              <Button className={classes.signUpBtn}>Sign Up</Button>
              </Flex>  
            </Flex>
        </Header>
    );
  }