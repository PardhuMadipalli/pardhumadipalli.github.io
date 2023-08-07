import React from 'react'
import {Container} from '@mui/material'
import FooterSticky from "./FooterSticky"
import BlogHeader from "./header"
import { Outlet } from 'react-router-dom'
import {fetchDataAndUpdateItems} from "../commons/commons";

const footerIconsData = require("../content/miscellaneous/footerIcons.yml")
export default function SkeletonPage(props) {

    const [footerIcons, setFooterIcons] = React.useState([])
    React.useEffect(fetchDataAndUpdateItems(footerIconsData, setFooterIcons), [])

    return (
        <>
            <BlogHeader pageTitle="Pardhu Madipalli"/>
            <Container maxWidth="xl" sx={{ py : 3 }}>
                    {/* {props.children} */}
                    <Outlet/>
            </Container>
            <FooterSticky iconDetailsList={footerIcons}/>
        </>
    )
}