import React from 'react'
import styled from "@emotion/styled";


export default function BlogLogo() {
    const LogoAnchor = styled.a`
        font-family: 'Monoton', Monoton, serif;
        font-size: 1.5rem;
        color: text.primary;
        text-decoration: none !important;

        border: 2px groove white;
        border-radius: 0.5em;
        padding-left: 0.2em;
        padding-right: 0.2em;
        text-align: center;
    `

    return <LogoAnchor>P M</LogoAnchor>
}