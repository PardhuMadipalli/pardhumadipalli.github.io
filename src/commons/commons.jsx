import React from "react";
import {load} from "js-yaml";
import {Slide, useMediaQuery, useTheme} from "@mui/material";
import {TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator} from "@mui/lab";
import {Star as StarIcon} from "@mui/icons-material";
// import '../components/css/theme.css'

export function fetchDataAndUpdateItems(requireFileModule, updateFunc) {
    return () => {
        fetch(requireFileModule,
            {
                headers : {
                    'Content-Type': 'application/yaml',
                    'Accept': 'application/yaml'
                }
            })
            .then((response) => response.text())
            .then((yamlText) => updateFunc(load(yamlText).data))
    }
}

export function useIsBiggerThanSm() {
    return useMediaQuery(useTheme().breakpoints.up('sm'))
}

export function SlideTimelineContent({containerRef, checked, direction, ...props}) {
    return (
        <Slide in={checked}
               timeout={700}
               direction={direction}
               container={containerRef.current}
               mountOnEnter
               unmountOnExit>
            <TimelineContent className='primary-container'>
                {props.children}
            </TimelineContent>
        </Slide>
    )
}

export function LeftSlideTimelineContent({containerRef, checked, ...props}) {
    return (
        <SlideTimelineContent containerRef={containerRef} checked={checked} direction='left' {...props}/>
    )
}

export const EndTimelineItem = () =>
    <TimelineItem>
        <TimelineOppositeContent/>
        <TimelineSeparator>
            <TimelineDot color='grey'>
                <StarIcon/>
            </TimelineDot>
        </TimelineSeparator>
        <TimelineContent/>
    </TimelineItem>