import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

const Footer = () => {
    return (
        <AppBar position="static" color="inherit" >
            <Typography data-testid="Footer">
                Data provided by Marvel. © 2014 Marvel
            </Typography>
        </AppBar>
    );
}

export default Footer;