import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" component="p">
        © {new Date().getFullYear()} My App. All rights reserved.
      </Typography>
    </footer>
  );
}

export default Footer;
