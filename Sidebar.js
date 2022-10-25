import React from 'react'
import {Box} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';
 
const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={0.80} padding={1} sx={{display:{xs: "none", sm: "block"}}}>
      <Box height={810}>
   
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='https://www.phn.net.au/' target='_blank' >
              <ListItemIcon>
              <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='https://phn-booking-form.herokuapp.com/' target='_blank'>
              <ListItemIcon>
              <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Form" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
              <AdminPanelSettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Admin Entry" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
              <ModeStandbyIcon/>
              </ListItemIcon>
              <ListItemText primary="SOW Entry" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
              <AttachMoneyIcon/>
              </ListItemIcon>
              <ListItemText primary="Cost Estimation" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
              <RequestQuoteIcon/>
              </ListItemIcon>
              <ListItemText primary="Job Costing" />
            </ListItemButton>
            
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
              <FormatQuoteIcon/>
              </ListItemIcon>
              <ListItemText primary="Quotes" />
            </ListItemButton>
            
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
              <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Instructions" />
            </ListItemButton>
            
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
              <InfoIcon/>
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
            
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
              <DarkModeIcon/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
            
          </ListItem>
        </List>
        </Box>
        </Box>

  )
}
export default Sidebar
