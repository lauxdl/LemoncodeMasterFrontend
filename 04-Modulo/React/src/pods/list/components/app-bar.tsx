import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CodeOff from '@mui/icons-material/CodeOff';
import { ProfileContext } from '@/core/providers/profile';
import { AccountCircle } from '@mui/icons-material';
import  ButtonMantra from "@/common/components/button-mantra";

export default function AppNavBar() {

  const { username } = React.useContext(ProfileContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <CodeOff />          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            List Members Organization 
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <AccountCircle /> { username }
          </Typography>
          <ButtonMantra />
        </Toolbar>
      </AppBar>
    </Box>
  );
}