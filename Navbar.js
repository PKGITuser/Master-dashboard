import { AppBar, styled, Toolbar, Typography, theme, InputBase } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'
// import useState from 'react-hook-use-state';
import logo from"../assets/PHN_Logo.png";
import "./Navbar.css";



const StyledToolbar = styled(Toolbar) ({
  display:"flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor:"grey",
       Padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    
}));
const Icons = styled("Box")(({ theme }) => ({
display:"flex",
gap: "10px",
[theme.breakpoints.up("sm")] : {
  display:"flex"
}
}));

 const Navbar = () => {
  // const [open, setOpen] = React.useState(false)
  return (
<AppBar position='sticky' style={{ background: '#055574' }} >

  <StyledToolbar>
    {/* <Typography variant='h6' sx={{display: { xs: "none" , sm: "block" } }}>PHN</Typography> */}
    <img src={logo} className="App-logo" alt="logo" />
    {/* <GitHubIcon sx={{ display: {xs:"block", sm:"none"} }} /> */}

    <Search><InputBase placeholder="  Search... "/>

    </Search>
    <Icons>
      <AccountCircleIcon/>
      <LogoutIcon/>

    </Icons>
   </StyledToolbar>
</AppBar> 
  )
}
export default Navbar
