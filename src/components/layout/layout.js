import { Box, CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";
import UpperNavbar from "./Uppernavbar";
import Navbar from "./Leftnavbar";
import React from "react";

export const Layout = ({children}) =>{

  const defaultTheme = createTheme();
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <UpperNavbar open={open} toggleDrawer={toggleDrawer}/>
        <Navbar open={open} toggleDrawer={toggleDrawer}/>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
