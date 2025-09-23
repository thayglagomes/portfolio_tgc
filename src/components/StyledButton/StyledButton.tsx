import { styled } from "@mui/material"
import type { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
}
const StyledButton: React.FC<StyledButtonProps> = ({ children }) =>  {
  
   const StyledButton = styled("button")(({theme})=>({
        backgroundColor: "transparent",   
        border: `0.1rem solid ${theme.palette.primary.contrastText}`, 
        borderRadius: "0.3rem",
        padding: "0.5rem 1rem",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.0rem",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        }
    }))  
    return(
        <>
            <StyledButton>
                {children}
            </StyledButton>
        </>
    )
}

export default StyledButton
