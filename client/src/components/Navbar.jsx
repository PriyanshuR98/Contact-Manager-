import React from "react";
import { AppBar, Toolbar,styled } from "@mui/material";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <div>
     
      <Header position="static">
        <Toolbar>
          <Tabs to='/'>About</Tabs>
          <Tabs to='/all'> All User</Tabs>
          <Tabs to='/add'>Add User</Tabs>
        </Toolbar>
      </Header>
    </div>
  );
};



export default Navbar;
const Header=styled(AppBar)`
background :black;  
`;

const Tabs= styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: inherit;
text-decoration: none;
`;
