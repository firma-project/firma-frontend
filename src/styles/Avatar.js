import React from 'react';
import styled from "styled-components";

export default function Avatar({ image }) {

    return (
        <ProfileAvatar>
            <img src={image} />
        </ProfileAvatar>
    )
}

const ProfileAvatar = styled.div`
    img {
        max-width: 80px;
        border-radius: 20%;
        margin: 8px;
    }
`
