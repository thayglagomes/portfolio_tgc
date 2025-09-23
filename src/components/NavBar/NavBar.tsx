import { AppBar, MenuItem, styled , Toolbar} from "@mui/material"

const NavBar = () =>  {
    const StyleadToobar = styled(Toolbar)(({ theme })=>({
        display: "flex",
        justifyContent: "center",
    }))

  return(
    <>
        <AppBar position="absolute">
            <StyleadToobar>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Projetos</MenuItem>
            </StyleadToobar>
        </AppBar>
    </>
  )
}

export default NavBar
