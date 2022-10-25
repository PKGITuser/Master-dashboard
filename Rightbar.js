import { Avatar, Box, Typography } from '@mui/material'
import AvatarGroup from '@mui/material/AvatarGroup';

import React from 'react'

 const Rightbar = () => {
  return (
    <Box 
    flex={1} padding={1} 
    sx={{display:{xs: "none", sm: "block"} }}>
     <Box position="fixed" width={300}>
<Typography variant="h6" fontWeight={100}>Recent users</Typography>
<AvatarGroup max={4} variant="string">
  <Avatar alt="Pritam Karanjit" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Aaron Luttenberger" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Talia Schubert" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Kaysie Ryan" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>

     </Box>


     </Box>


  
  
  )
}
export default Rightbar