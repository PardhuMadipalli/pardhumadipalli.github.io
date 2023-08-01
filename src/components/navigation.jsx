import React from "react";
import { 
    Tabs, 
    Tab } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom"
import styled from "@emotion/styled";


const CapTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
    textTransform: 'none',
    fontSize: 16,
    minWidth: 0
  }));


export function TabsNav({tabsList, ...props}) {
    const [currTab, setCurrTab] = React.useState(useLocation().pathname)
    const handleTabSwitch = (event, newTabValue) => {
        setCurrTab(newTabValue)
    }
    return(
        <Tabs value={currTab}
              onChange={handleTabSwitch}
              variant="scrollable"
              scrollButtons="auto"
        >
            { tabsList.map((tab, i) =>
                <CapTab
                    label={tab.label}
                    to={tab.url}
                    component={RouterLink}
                    key={i}
                    value={tab.url}/>
            )}
            {/* <CapTab label="Home" to="/" component={RouterLink}/>
            <CapTab label="Work" to="/work" component={RouterLink} /> */}
        </Tabs>
    )
}
