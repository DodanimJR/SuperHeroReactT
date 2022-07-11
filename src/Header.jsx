import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ApiIcon from '@mui/icons-material/Api';
import Avatar from '@mui/material/Avatar';
import { purple} from '@mui/material/colors';


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#111',
      darker: '#111',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
  fontFamily: [
    'Edu',
    'SA',
    'cursive',
  ].join(','),
});

const Header = () => {
  return(
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static" color='primary'>
          <Toolbar>
            <Avatar sx={{ bgcolor: purple[600] }} variant="square" src="">
              <ApiIcon />
            </Avatar>
            <h1 style={{marginLeft:10}}>SUPER HEROES</h1>  
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
export default Header;