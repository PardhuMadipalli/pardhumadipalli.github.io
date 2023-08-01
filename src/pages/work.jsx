import React from 'react';
import {Box, Grid, Link, List, ListItem} from "@mui/material"
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    timelineItemClasses,
    TimelineOppositeContent,
    timelineOppositeContentClasses,
    TimelineSeparator
} from "@mui/lab";
// import {styled} from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {EndTimelineItem, fetchDataAndUpdateItems, useIsBiggerThanSm, LeftSlideTimelineContent} from "../commons/commons";
import {Business, Star as StarIcon, Work} from "@mui/icons-material";
// import AmazonIcon from "../static/images/icons/amazon-icon.svg"

const ExpData = require('../content/experience.yml')
const SkillData = require('../content/skills.yml')

export default function WorkPage() {
    return (
        <Grid container columnSpacing={4}>
            <Grid item xs={12} md={8}>
                <WorkMainItem heading="Experience">
                    <ExperienceContent />
                </WorkMainItem>
            </Grid>
            <Grid item xs={12} md={4}>
                <WorkMainItem heading="Certifications">
                    <List sx = {{
                        listStyleType: 'disc',
                        pl: 4
                    }}>
                        <ListItem sx={{ display: 'list-item'}}>
                            <Link underline="hover"
                                  href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=BB2511098A263166905F29349B11A7262A905A746BDD412E50C4121DB4FC3146">
                                Oracle Cloud Infrastructure 2021 Architect Associate
                            </Link>
                        </ListItem>
                    </List>

                </WorkMainItem>
                <WorkMainItem heading="Skills">
                    <SkillsContent/>
                </WorkMainItem>
            </Grid>
        </Grid>
    )
}

function SkillsContent() {
    const [skills, setSkills] = React.useState([])
    React.useEffect(fetchDataAndUpdateItems(SkillData, setSkills), [])

    return(
        <>
        {skills.map((skill, i) =>
                <Box key={i}>
                    <SkillCategoryHeading category={skill.category} />
                    <List sx = {{
                        listStyleType: 'disc',
                        pl: 4
                    }}>
                        {skill.skills.map((skillName, i) =>
                            <ListItem sx={{ display: 'list-item'}} key={i}>
                                {skillName}
                            </ListItem>)}
                    </List>
                </Box>
            )}
        </>
    )
}

function ExperienceContent() {
    const [expItems, setExpItems] = React.useState([])
    React.useEffect(fetchDataAndUpdateItems(ExpData, setExpItems), [])
    const containerRef = React.useRef(null);
    const biggerThanSm = useIsBiggerThanSm()
    return (
        <Timeline position='right'
                  ref={containerRef}
                  sx={biggerThanSm
                      ? { [`& .${timelineOppositeContentClasses.root}`]: {
                              flex: 0.5,
                          } }
                      : { [`& .${timelineItemClasses.root}:before`]: {
                              flex: 0,
                              padding: 0,
                          }, px:0
                  }}
        >
            {expItems.map((item, i) =>
                <ExperienceItem
                    item={item}
                    containerRef={containerRef}
                    key={i}
                /> )}
            {biggerThanSm ? <EndTimelineItem/> : null}
        </Timeline>)
}

function ExperienceItem({item, containerRef}) {
    const biggerThanSm = useIsBiggerThanSm()
    const [checked, setChecked] = React.useState(false)
    React.useEffect(() => {setChecked(true)}, [])
    return (
        <>
            <TimelineItem>
                { biggerThanSm ?
                    <TimelineOppositeContent color='text.secondary'>
                        {item.location}
                    </TimelineOppositeContent>
                    : null
                }
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <Business />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h3" component="h2">{item.company}</Typography>
                    {biggerThanSm ? null :
                        <Typography variant='subtitle1'> {item.location}</Typography>
                    }
                </TimelineContent>
            </TimelineItem>
            {item.roles.map((role, i) =>
                <TimelineItem key={i}>
                    { biggerThanSm ?
                    <TimelineOppositeContent color="text.primary">
                        {role.duration}
                    </TimelineOppositeContent> : null}
                    <TimelineSeparator>
                        <TimelineDot sx={{
                            backgroundColor: 'white',
                            // boxShadow: 'none'
                        }}>
                            <StarIcon
                                sx={{color: '#bdbdbd'}}
                            />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <LeftSlideTimelineContent
                        checked={checked}
                        containerRef={containerRef}
                    >
                        <Typography variant="h5" component="h3">{role.title}</Typography>
                        { biggerThanSm ? null :
                            <Typography variant='subtitle1'>{role.duration}</Typography>
                        }
                    </LeftSlideTimelineContent>
                </TimelineItem>
            )}

            {item.projects.map((proj, i) =>
                <TimelineItem key={i}>
                    { biggerThanSm ?
                    <TimelineOppositeContent color="text.secondary">
                        {proj.duration}
                    </TimelineOppositeContent> : null}
                    <TimelineSeparator>
                        <TimelineDot color='secondary'>
                            {/*<SvgIcon component={AmazonIcon} inheritViewBox/>*/}
                            <Work/>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <LeftSlideTimelineContent
                        checked={checked}
                        containerRef={containerRef}
                    >
                        <Typography component='h3' variant='h6'>{proj.title}</Typography>
                        {biggerThanSm ? null :
                            <Typography variant='subtitle1'>{proj.duration}</Typography>}
                        <List>
                            {proj.tasks.map((task, i) =>
                                <ListItem key={i}>
                                    <Typography>{task.desc}</Typography>
                                </ListItem>
                            )}
                        </List>
                    </LeftSlideTimelineContent>
                </TimelineItem>
            )}
        </>
    )
}

function SkillCategoryHeading({category, ...props}) {
    return (
            <Typography component="h3" variant="h6">{category}</Typography>
    )
}

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// }) (({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

function WorkMainItem({heading, ...props}) {
    // const [expanded, setExpanded] = React.useState(false);
  
    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };

    return (
        <Grid item py={3}>
            <Typography component="h2" variant='h3'>{heading}</Typography>
            {props.children}
        </Grid>
)}
