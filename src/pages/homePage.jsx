import React from 'react'
import {
    Grid,
    // Link,
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    CardActions
} from "@mui/material"
import {
    // alpha,
    styled
} from "@mui/material/styles";
import {WorkOutline as WorkIcon, VolunteerActivismOutlined as VolunteerIcon} from "@mui/icons-material";
import {fetchDataAndUpdateItems} from "../commons/commons";
// import { green, purple, grey } from '@mui/material/colors';

const StyledBox = styled(Grid)(({ theme }) => ({
        '&:hover, &.Mui-focusVisible': {
            // boxShadow: `5px 5px 5px 0px ${theme.palette.primary.main}`,
            // boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
            // animation: 'gradient 3s ease infinite'
        }
}))

const IntroductionComp = ({title, subtitle, linkName, linkUrl, text, icon}) => {
    return (
        <StyledBox className="Box-project" item sm={6} lg={5}>
            <Card sx={{
            display: 'flex',
            boxShadow: 'none',
            // boxShadow: `5px 5px 5px 0px #639`,
        }}
                    style={{
                        // '&:hover, &.Mui-focusVisible' : {
                        // background: 'linear-gradient(to right, #efefbb, #d4d3dd)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                        // background: 'linear-gradient(to right, #a73737, #7a2828)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                        // background: 'linear-gradient(to right, #dae2f8, #d6a4a4)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                        // background: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
                        // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        //     background: 'linear-gradient(45deg, #ebbba7 20%, #cfc7f8 100%)'
                        // }
                        // backgroundImage: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 90%)'
                        // backgroundImage: 'linear-gradient(to right, #ffecd2 0%, #ffefd7 100%)'
                        // background: 'linear-gradient(to right, #4b134f, #c94b4b)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    }}
        >
            <CardContent>
                <Box sx={{
                    // width: 500,
                    // height: 260
                }}>
                    <Box
                        sx={{ display: 'flex'}}
                    >
                        <CardMedia sx={{ display: 'flex', mr:2}}>
                            {icon}
                        </CardMedia>
                        <Box>
                            <Typography variant="h5" component="h3">{title}</Typography>
                            <Typography variant='subtitle2' color='primary'>{subtitle}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ p:1 }}>
                        {text.map((para, i) => <Typography paragraph key={i} variant="body1">{para}</Typography>)}
                    </Box>
                </Box>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button href={linkUrl} variant="outlined" sx={{ fontWeight: '700' }}>{linkName}</Button>
                </CardActions>
            </CardContent>
        </Card>
        </StyledBox>
    )
}

// const MoreIntroduction = ({linkLabel, linkUrl, ...restProps}) => {
//     return (
//         <>
//         <Grid item xs={10} sm={8} sx={{ border:1, borderColor: 'red', backgroundColor:'yellow', padding:"15px"}}>
//             {restProps.children}
//             <Box textAlign="center">
//                 <Link href={linkUrl} variant="button" underline="none">{linkLabel}</Link>
//             </Box>
//         </Grid>
//         </>
//     )
// }

const homePageFile = require("../content/homepage.yml")
const itemIconMap = {
    software: <WorkIcon sx={{ fontSize: 60 }} color='primary' />,
    volunteering: <VolunteerIcon sx={{ fontSize: 60 }} color='primary'/>
}

const HomePage = () => {
    const [data, setData] = React.useState()
    React.useEffect(fetchDataAndUpdateItems(homePageFile, setData), [])
    return (
        <>
            <Grid container justifyContent="space-evenly">
                {   data &&
                    data.mainItems &&
                    data.mainItems.map((item, i) =>
                    <IntroductionComp key={i}
                                      title={item.title}
                                      subtitle={item.subtitle}
                                      linkName={item.linkTitle}
                                      linkUrl={item.link}
                                      text={item.text}
                                      icon={itemIconMap[item.key]} />
                    )
                }
            </Grid>
            <Box sx={{ textAlign: 'center', width: '90%', margin: 'auto'}} paddingY={5}>
                <Typography variant='h3' component='h2' color='primary' paddingBottom={2} >My Hobbies</Typography>
                <Typography variant='h5' lineHeight={2} paddingBottom={2}>
                    There is more to me other than software engineering.
                    I read books, write articles on my blog and I have a YouTube channel too.
                    Check more about my hobbies here.
                </Typography>
                <Box sx={{ width: 'auto'}}>
                    <Button href='/personal' variant='contained' sx={{
                        // fontWeight: 'bolder'
                    }}>Personal</Button>
                </Box>
            </Box>
            {/*<div className='Box-project'>*/}
            {/*    <p>My name is Pardhu.</p>*/}
            {/*    <p>My name is Pardhu.</p>*/}
            {/*    <p>My name is Pardhu.</p>*/}
            {/*    <p>My name is Pardhu.</p>*/}
            {/*    <p>My name is Pardhu.</p>*/}
            {/*</div>*/}
            {/*<MoreIntroduction linkLabel="Click to know more" linkUrl="/volunteering">*/}
            {/*    <p>This is more about me.</p>*/}
            {/*    <p>Some more news about me</p>*/}
            {/*</MoreIntroduction>*/}
        </>
    )
}

export default HomePage