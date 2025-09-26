import { styled } from "@mui/material"
import type { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
    onClick: () => void                                                                                                                            
}
const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick}) =>  {
  
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
        '&:hover, &:focus': {
            backgroundColor: theme.palette.secondary.light,
        }
    }))  
    return(
        <>
            <StyledButton onClick={onClick}>
                {children}
            </StyledButton>
        </>
    )
}

export default StyledButton
