import React from "react";

import {
    School as SchoolIcon,
} from '@mui/icons-material';
import {List, ListItem, Typography} from "@mui/material";
import {EndTimelineItem, fetchDataAndUpdateItems, useIsBiggerThanSm, SlideTimelineContent} from "../commons/commons";
import {
    Timeline,
    TimelineConnector,
    TimelineDot,
    TimelineItem,
    timelineItemClasses,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";

const eduData = require("../content/education.yml")

export function EducationTimeline() {
    const [eduItems, setEduItems] = React.useState([])
    React.useEffect(fetchDataAndUpdateItems(eduData, setEduItems), [])

    const biggerThanSm = useIsBiggerThanSm()
    const containerRef = React.useRef(null)

    return (<Timeline
        position={biggerThanSm ? 'alternate' : 'right'}
        ref={containerRef}
        sx={{
            px:0,
            mx:0,
            [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
            }
        }}
    >

        {eduItems.map((item, i) =>
            <EducationTimelineItem
                date={item.date}
                title={item.title}
                key={i}
                containerRef={containerRef}
                slideDirection={
                    biggerThanSm ? (i%2===0 ? 'left' : 'right') : 'left'
                }>
                    <Typography variant="subtitle">{item.institute}</Typography>
                    <Typography paragraph mt={2}>{item.branch}</Typography>
                    <Typography paragraph pb={1}>Grade: {item.grade}</Typography>
                {item.additionalDataItems &&
                    item.additionalDataItems.map((addItem, i) =>
                        <>
                        <Typography key={i}><i>{addItem.heading}</i></Typography>
                        <List>
                            {addItem.data.map((dataItem, i) => <ListItem key={i}>{dataItem}</ListItem>)}
                        </List>
                        </>)
                }
            </EducationTimelineItem>
        )}
        {biggerThanSm ? <EndTimelineItem/> : null}

    </Timeline>)
}

function EducationTimelineItem({date, title, containerRef, slideDirection,
                                   ...props}) {
    const biggerThanSm = useIsBiggerThanSm()
    const [checked, setChecked] = React.useState(false)
    React.useEffect(() => {setChecked(true)}, [])

    return (<TimelineItem>
        {biggerThanSm ?
            <TimelineOppositeContent sx={{py: 2}}>
                <Typography variant="subtitle2">{date}</Typography>
            </TimelineOppositeContent>
            :
            null
        }
        <TimelineSeparator>
            <TimelineDot color='primary'>
                <SchoolIcon/>
            </TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>
        <SlideTimelineContent
            sx={{py: 2}}
            containerRef={containerRef}
            direction={slideDirection}
            checked={checked}
        >
            {/*<Paper elevation={8}>*/}
            <Typography variant="h5" component="h2">{title}</Typography>

            {biggerThanSm ? null : <Typography variant="subtitle2" py={2}>{date}</Typography>}

            {props.children}

            {/*</Paper>*/}
        </SlideTimelineContent>

    </TimelineItem>)
}
