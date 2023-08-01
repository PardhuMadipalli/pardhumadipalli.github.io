import React from 'react'
import { Grid, Typography, useMediaQuery, useTheme, Stack } from "@mui/material";
import BlogLogo from "./blogLogo";
import { TabsNav } from './navigation';
import SwipeableMenu from './menuDrawer';
import {fetchDataAndUpdateItems} from "../commons/commons";

const MenuTabsData = require('../content/miscellaneous/menuElements.yml')

const MobileHeader = ({tabs}) =>
    <Stack direction='row' component='header' justifyContent='space-between'
        sx={{ 
            position: 'sticky', 
            top: '0', 
            mx: 2,
            py: 1
        }}>
         <BlogLogo />
         <SwipeableMenu tabs={tabs}/>
    </Stack>

const DesktopHeader = ({pageTitle, tabs}) =>
    <Grid container px="40px" py="25px" component="header"
          sx={{
              backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                      ? theme.palette.grey[200]
                      : theme.palette.grey[800],
          }}
    >
        <Grid container item spacing={7} alignItems="center" xs={7}>
            <Grid item>
                <BlogLogo />
            </Grid>
            <Grid item>
                <Typography component="h1" variant="h3">
                    {pageTitle}
                </Typography>
            </Grid> 
        </Grid>
        <Grid container justifyContent="flex-end" alignItems="center" direction="row"
              item xs={5}
              spacing={3}
        >
            <TabsNav tabsList={tabs}/>  
        </Grid>
    </Grid>


export default function BlogHeader({pageTitle}) {

    const isBiggerThanSm = useMediaQuery(useTheme().breakpoints.up('md'))
    const [tabs, setTabs] = React.useState([])
    React.useEffect(fetchDataAndUpdateItems(MenuTabsData, setTabs), [])
    return (
        <>
            {
                isBiggerThanSm ? <DesktopHeader pageTitle={pageTitle} tabs={tabs}/> : <MobileHeader tabs={tabs}/>
            }
        </>
    )
}