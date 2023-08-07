import React from 'react'
import { Card, 
    CardContent, 
    Typography, 
    Stack, 
    CardMedia, 
    Box, 
    Link, 
    useTheme,
    useMediaQuery } from "@mui/material"

import {fetchDataAndUpdateItems} from "../commons/commons";


const volunteeringData = require("../content/volunteering.yml")

function VoppContent({vopp, isBiggerThanSm}) {
    return (
    <>
        <Typography variant="h5" component="h2">
            {vopp.position}
        </Typography>
        <Typography sx={{ mt: 0.5}}>
            <Link variant="subtitle1"
                  href={vopp.org.url}
                  underline="hover">
                {vopp.org.name}
            </Link>
            {isBiggerThanSm ?  <span>&nbsp;&nbsp;</span> : <br/>}
            <Typography variant='subtitle2' component="span">
                {vopp.duration}
            </Typography>
        </Typography>
        <Box sx={{ mt: 1.5}}>
            {vopp.desc.map((para, i) => 
                <Typography variant="body1" paragraph sx={{ mt: 1.5}} key={i}>{para}</Typography>)
            }
        </Box>
    </>)
}

function VolunteerItem({vOpp}) {
    const isBiggerThanSm = useMediaQuery(useTheme().breakpoints.up('sm'))
    return(
        <Box className="Box-project" sx={{
            width: {xs: '100%', sm: '75%', lg: '70%'},
        }}>
        <Card sx={{
            // width: {xs: '100%', sm: '75%', lg: '70%'},
            height: {xs: 'auto', sm: 400},
            display: 'flex',
            // borderImage: 'linear-gradient(92.05deg, #B392F0 10.42%, #EC6CB9 47.91%, #F97583 100%)',
            // borderWidth:'10px',
            // borderStyle: 'solid'
        }}>
            { isBiggerThanSm ?
                // greater than sm
                <>
                    <CardContent sx={{
                        // backgroundColor: 'rgba(0,0,0, 0.6)',
                        // backdropFilter: 'blur(3px)'
                        width: 0.65
                    }}>
                            <VoppContent vopp={vOpp} isBiggerThanSm={isBiggerThanSm}/>
                        {/*</Box>*/}
                    </CardContent>

                    <CardMedia image={vOpp.imageUrl} sx={{ width: 0.35, height: 1}} />
                </>

            :
                // less than sm
                <Box>
                    <CardMedia image={vOpp.imageUrl} sx={{ width: '100%', height: '200px'}} />
                    <CardContent>
                        {/* <Box sx={{ backgroundColor: (theme) => theme.palette.background.paper }} p={3} m={3}> */}
                            <VoppContent vopp={vOpp}/>
                        {/* </Box> */}
                    </CardContent>
                </Box>

            }
        </Card>
        </Box>

    )
}

export default function VolunteeringPage() {
    const [vOpps, setVopps] = React.useState([])
    React.useEffect(fetchDataAndUpdateItems(volunteeringData, setVopps), [])

    return(
        <Stack justifyContent="center" alignItems="center" spacing={12}>
            {
                vOpps
                && vOpps.length>0
                && vOpps.map((vopp, i) => <VolunteerItem vOpp={vopp} key={i} />)
            }
        </Stack>
    )
}