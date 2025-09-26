import { Container, styled } from "@mui/system"
import Avatar from "../../../../assets/imagem/avatar.jpg"
import { Box, Grid, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/StyledButton/AnimatedBackground/AnimatedBackground";

const Hero = () =>  {
    const StyleadHero = styled("div")(({theme})=>({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]: { //>=mobile
            paddingTop: "0px"
        }
    }))
    const StyleadImg = styled("img")(({theme})=>({
        width: "80%",
        borderRadius: "50%",
        border: `0.1rem solid ${theme.palette.primary.contrastText}`,
    }))

  return(
    <>
        <StyleadHero>
            <Container maxWidth="lg" >
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Box position="relative" >
                        <Box position="absolute" width="150%" top="-1000%" left="50%">
                        <AnimatedBackground/>
                        </Box>
                        <Box position="relative" textAlign="center" >
                            <StyleadImg src={Avatar} />
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Typography pb={2} color="primary.contrastText" variant="h2" textAlign="center">Thaygla GC</Typography>
                    <Typography color="primary.contrastText" variant="h3"  textAlign="center">I'm Backend Developer</Typography>
                    <Grid container  display="flex" justifyContent="center" spacing={3} pt={3}>  
                        <Grid size={{xs:12, md: 4 }} display="flex" justifyContent="center" >  
                            <StyledButton onClick={()=>console.log("download cv")}>
                                <DownloadIcon />
                                <Typography> Donwload CV </Typography>
                            </StyledButton>
                        </Grid>
                        <Grid size={{xs:12, md: 4}} display="flex" justifyContent="center">  
                            <StyledButton  onClick={()=>console.log("Contact Me")}>
                                <EmailIcon/>
                                <Typography>Contact Me</Typography>
                            </StyledButton>  
                        </Grid>
                    </Grid>
               </Grid>
            </Grid>
            </Container>
        </StyleadHero>
    </>
  )
}

export default Hero
