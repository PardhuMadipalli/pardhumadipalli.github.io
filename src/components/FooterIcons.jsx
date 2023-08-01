import React from 'react'
import { Stack } from "@mui/material"


function FooterSocialIcon({imgSrc, linkUrl, label}) {
    return (
        <a href={linkUrl} title={label}>
            <img src={imgSrc} alt="" width="35px" />
        </a>
    )
}


export default function FooterIcons({iconDetailsList}) {
    return (
        <>
        <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 4 }} 
            py={1}
            alignItems="center" 
            justifyContent="center">
            {iconDetailsList.map((socialIcon, i) => 
                <FooterSocialIcon imgSrc={socialIcon.imgSrc} linkUrl={socialIcon.linkUrl} label={socialIcon.label} key={i}/>)}
        </Stack>
        </>
    )
}