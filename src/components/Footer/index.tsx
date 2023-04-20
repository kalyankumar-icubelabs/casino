import { createStyles, Text, Container,ActionIcon,Image, Group, rem, Title} from '@mantine/core';
import styles from "./index.module.css"


const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },


  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    link: string;
  }[];
}

export function Footer({ data }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((each,index) => {
      (<Text<'a'>
        key={index}
        className={styles.linksStyling}
        component="a"
        href={each.link}
        onClick={(event) => event.preventDefault()}
      >
        {each.title}
      </Text>
    );

    return (
      <div className={classes.wrapper} key={each.title}>
        <Text className={styles.linksStyling}>{each.title}</Text>
      </div>
    );
  });

  return (
    <footer className={styles.footerContainer}>
        <div className={styles.footerWrap}>
        <Image alt="Logo" src="" className={styles.logo}/>
        <div className={styles.descritpionAndGroupContainer}>
        <div>
            <Text className={styles.description}>
            NANOGAMES.IO is built by gamblers for gamblers. 
            With our unique community and a huge selection of games like Crash, 
            HashDice, Plinko, Slots, and many more. Your greatest casino adventure is waiting for you!
            </Text>
        </div>
        <div className={styles.linksContainer}>{groups}</div>
        <div className={styles.contactusSection}>
            <div>
                <Title order={4} className={styles.contactUsTitle}>Contact Us</Title>
            </div>
            <div className={styles.contactUsDetails}>
            <span>
                Email
            </span>
                 <a href="mailto:support@nanogames.io" className={styles.anchorStyle}>
                    Support@nanogames.io
                </a>
            </div>
            <div>
                <Title order={5} className={styles.acceptedCurrenciesTitle}>Accepted Currencies</Title>
            </div>
        </div>
        </div>
        </div>
      <Container className={styles.footerBottom}>
        
      </Container>
    </footer>
  );
}