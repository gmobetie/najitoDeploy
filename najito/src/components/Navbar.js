import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WineBarIcon from '@mui/icons-material/WineBar';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Cocktails" icon={<WineBarIcon />} sx={{ color: '#8a2be2'}} />
          <BottomNavigationAction label="Ingredients" icon={<MenuIcon />} sx={{ color: '#8a2be2' }} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
