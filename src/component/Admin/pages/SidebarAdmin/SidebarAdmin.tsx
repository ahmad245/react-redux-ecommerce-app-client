import React from 'react'
import { ThemeProvider } from 'styled-components';

import { Link } from 'react-router-dom';
import { StyledMenu, theme } from '../../../../shared/Sidebar/Sidebar.element';
const SidebarAdmin = () => {
  return (

    <ThemeProvider theme={theme}>
      <>

        <StyledMenu>

          <Link to="/admin/dashboard/category/create">
            <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
       Categories
      </Link>
          <Link to="/admin/dashboard/subCategory/create">
            <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
       Sub Categories
      </Link>
          <Link to="/admin/dashboard/product/create">
            <span role="img" aria-label="price">&#x1f4b8;</span>
        Create Product
        </Link>
          <Link to="/admin/dashboard/product/List">
            <span role="img" aria-label="price">&#x1f4b8;</span>
        Products List
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