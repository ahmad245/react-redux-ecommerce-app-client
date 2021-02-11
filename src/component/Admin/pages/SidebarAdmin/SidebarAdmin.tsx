import React from 'react'
import { ThemeProvider } from 'styled-components';

import { Link } from 'react-router-dom';
import { StyledMenu, theme } from '../../../../shared/Sidebar/Sidebar.element';
const SidebarAdmin=()=>{
    return (
       
        <ThemeProvider theme={theme}>
        <>
        
          <StyledMenu>

          <Link to="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
       Categories
      </Link>
      <Link to="/">
        <span role="img" aria-label="price">&#x1f4b8;</span>
        Products
        </Link>
      <Link to="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Users
        </Link>
          </StyledMenu>
        </>
      </ThemeProvider>
    )
}

export default SidebarAdmin;