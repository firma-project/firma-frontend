import React from 'react';
import styled from "styled-components";
import Avatar from '../../styles/Avatar';
import heart from '../../assets/heart.png'

export function Card ({ profile, name, ups }) {
    
    return (
        <CardContainer>
            <Avatar image={profile} />
            <h3>{ name }</h3>
            <StarIcon>
                <h3>{ ups }</h3>
                <img src={heart} />
            </StarIcon>
        </CardContainer>
    )
}


const CardContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background: #f0efeb;
    margin: 2px;
    min-width: 20%;

    cursor: pointer;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

const StarIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 32px;
    }
    
`
