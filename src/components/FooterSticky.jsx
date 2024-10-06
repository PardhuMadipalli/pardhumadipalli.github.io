import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';
import FooterIcons from './FooterIcons';


function Copyright() {
  return (
        <Typography variant="body2" fontSize='0.8rem'>
            {'Copyright © '}

            <Link color="inherit" href="/" sx={{fontWeight: 'bold'}} underline="hover">
                Pardhu Madipalli
            </Link>{' '}

            {new Date().getFullYear()}
        </Typography>
  );
}

export default function FooterSticky({iconDetailsList}) {
    return (
        <Box component="footer" textAlign="center" py={1}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.footer,
        }}>
            <FooterIcons iconDetailsList={iconDetailsList} />
            <Copyright />
        </Box>
    )
}