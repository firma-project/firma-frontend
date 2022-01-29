import React from 'react';
import styled from "styled-components";

export default function Avatar({ image, radius, maxWidth, border = false }) {

    return (
        <ProfileAvatar radius={radius} maxWidth={maxWidth} border={border} >
            <img src={image} />
        </ProfileAvatar>
    )
}

const ProfileAvatar = styled.div`
    img {
        max-width: ${props => props.maxWidth || '80px' };
        border-radius: ${props => props.radius || '20%' };
        margin: 8px;
        border-color: ${props => props.border ? props.theme.red4 : '0' };
        border-width: ${props => props.border ? '3px' : '0' };
        border-style: solid;
    }
`
