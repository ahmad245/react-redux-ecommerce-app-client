import React from 'react'
import { ThemeProvider } from 'styled-components';
import { theme, StyledMenu } from './SidebarUser.element';
import { Link } from 'react-router-dom';
const SidebarUser=()=>{
    return (
       
        <ThemeProvider theme={theme}>
        <>
        
          <StyledMenu>

          <Link to="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        About us
      </Link>
      <Link to="/">
        <span role="img" aria-label="price">&#x1f4b8;</span>
        Pricing
        </Link>
      <Link to="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
        </Link>
          </StyledMenu>
        </>
      </ThemeProvider>
    )
}

export default SidebarUser;