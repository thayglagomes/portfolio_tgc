import { Container, styled } from "@mui/system"
import Avatar from "../../../../assets/imagem/avatar.jpg"
import { Button, Grid, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () =>  {
    const StyleadHero = styled("div")(()=>({
        backgroundColor: "black",
        height: "100vh",
    }))
    const StyleadImg = styled("img")(()=>({
        backgoundColor: "black",
        width: "100%",
        borderRadius: "50%",
    }))

  return(
    <>
        <StyleadHero>
            <Container maxWidth="lg" >
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <StyleadImg src={Avatar} />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Typography color="primary" variant="h2" textAlign="center">Thaygla GC</Typography>
                    <Typography color="primary" variant="h3"  textAlign="center">I'm Backend Developer</Typography>
                    <Grid container  display="flex" justifyContent="center">  
                        <Grid size={{xs:12, md: 4 }} display="flex" justifyContent="center" >  
                            <Button variant="contained" color="primary">
                                <DownloadIcon />
                                Donwload CV
                            </Button>
                        </Grid>
                        <Grid size={{xs:12, md: 4}} display="flex" justifyContent="center">  
                            <Button variant="outlined" color="primary">
                                <EmailIcon/>
                                Contact me
                            </Button>  
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
