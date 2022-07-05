
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
const Header = () => {


    const [show,setsShow]=useState(false)
  return (
<>
  
<MDBNavbar expand='lg' light style={{ backgroundColor: '#541b1b' }}>
    <MDBContainer fluid>
      <NavLink to='/'>
          <img src='./images/logo.jpg'  style={{height:"30px"}}  />
      </NavLink>
      <MDBNavbarToggler
        type='button'
        data-target='#navbarColor02'
        aria-controls='navbarColor02'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setsShow(!show)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>
      <MDBCollapse show={show} navbar>
        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
          <MDBNavbarItem className='active ms-3'>
            <NavLink aria-current='page' to='/' style={{color:"#fff"}} >
              Home
            </NavLink>
          </MDBNavbarItem>
          <MDBNavbarItem className=' ms-3'>
            <NavLink to='/addblog' style={{color:"#fff"}}>AddBlog</NavLink>
          </MDBNavbarItem>
          <MDBNavbarItem className=' ms-3'>
            <NavLink to='/about' style={{color:"#fff"}}>About</NavLink>
          </MDBNavbarItem>
       
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
 


</>
  )
}

export default Header