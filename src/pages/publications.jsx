import React from "react"
import {
    Card,
    CardActions,
    CardContent,
    Typography,
    CardMedia,
    Box,
    Stack,
    Button,
    CardActionArea
} from "@mui/material"
import ieeeImage from "../static/images/ieee.webp"
import elsevierImage from "../static/images/elsevier.webp"

const PubCard = ({pub}) => 
    <Card sx={{ display: 'flex', maxWidth: '800px'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardActionArea href={'/publications/' + pub.stub}>
                <CardMedia
                    component="img"
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        width: '100%', paddingX: '0px'
                }}
                    image={pub.publisher.image}
                    alt="Live from space album cover"
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {pub.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {pub.publisher.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions spacing="100px">
                {/*<Button href={'/publications/' + pub.stub}>Learn More</Button>*/}
                {/*<Link href={'/publications/' + pub.stub}        size="small">Learn More</Link>*/}
                <Button
                    href={pub.paperUrl}
                    size="small">Paper</Button>
            </CardActions>

        </Box>
        <CardMedia
            component="img"
            sx={{
                display: {xs: 'none', sm: 'block'},
                width: 200
        }}
            image={pub.publisher.image}
            alt="Live from space album cover"
        />
    </Card> 


export default function PublicationsPage() {
    const publications = [
        {
            title: 'Segmentation of intima media complex from carotid ultrasound images using wind driven optimization technique',
            publisher: {
                name: 'Biomedical Signal Processing and Control',
                image: elsevierImage
            },
            stub: 'segmentation-intima-media-complex-wdo',
            paperUrl: 'https://www.sciencedirect.com/science/article/abs/pii/S174680941730174X?via%3Dihub',
        },
        {
            title: 'Segmentation of intima media complex from carotid ultrasound images using wind driven optimization technique',
            publisher: {
                name: 'Biomedical Signal Processing and Control',
                image: ieeeImage
            },
            stub: 'segmentation-intima-media-complex-awdo',
            paperUrl: 'https://www.sciencedirect.com/science/article/pii/S174680941730174X',
        },
    ]
    return (
        <Stack direction="column"
               justifyContent="center"
               alignItems="center"
               spacing={5}
               sx = {{ py: 3 }}
        >
            {publications.map((pub, i) => <PubCard pub={pub} key={i}/>)}
        </Stack>
    )
}