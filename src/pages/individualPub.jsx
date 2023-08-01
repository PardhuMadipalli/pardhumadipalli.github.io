import React from "react";
import {
    List,
    ListItem,
    Typography,
    Box,
    Container,
    Link, Grid
} from "@mui/material";

const SegmentHeading = ({heading}) =>
    <Typography component="h2" variant="h5">{heading}</Typography>

function PubInitialDetails({pub}) {
    return (
        <>
            <SegmentHeading heading="Authors"/>
            <List dense>
                {pub.authors.map((auth) => <ListItem>{auth}</ListItem>)}
            </List>
        </>
    )
}

function PubFinalDetails({pub}) {
    return (
        <>
            <SegmentHeading heading="Abstract"/>
            <Box my={1}>
                {pub.abstract.map((para) => <Typography paragraph>{para}</Typography>)}
            </Box>
            <SegmentHeading heading="Citation"/>
            <Typography component="pre" variant="pre" sx={{ whiteSpace: 'pre-wrap'}}>
                {pub.citation}
            </Typography>
        </>
    )
}

function PubJournalDetails({pub}) {
    return (
        <>
            <Typography component="h2" variant="h6">{pub.publication.type}</Typography>
            <Box>
                <Typography component="span" variant="body1">{pub.publication.name}</Typography>
                <Typography variant="body2">{pub.publication.date}</Typography>
                <br></br>
            </Box>

            <Typography variant="body1" component="span">DOI: </Typography>
            <Link href={pub.publication.doi.number}>{pub.publication.doi.number}</Link>
            <br></br>
        </>
    )
}

export function Pub({pub}) {
    return (
        <>  
            <Container maxWidth='lg'>
                <Typography component="h1" variant="h2">{pub.title}</Typography>
                <Grid container sx={{ py: 4 }}>
                    <Grid item sm={4}>
                        <Box sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'light'
                                    ? theme.palette.grey[200]
                                    : theme.palette.grey[800],

                            p: 2,
                            mr: 4
                        }}>
                            <PubInitialDetails pub={pub} />
                            <PubJournalDetails pub={pub} />
                        </Box>
                    </Grid>
                    <Grid item sm={8}>
                        <PubFinalDetails pub={pub}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}