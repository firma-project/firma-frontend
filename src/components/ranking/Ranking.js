import React from 'react';
import styled from 'styled-components';

export function Ranking () {

    return(
        <Title className='font-bits'>
            Ranking
        </Title>
    )
}


const Title = styled.h2`
    color: #FFD445;
    margin: 12px;
    font-size: 1.50rem;

    @media (max-width: 1200px) {
        font-size: 1.2rem;
    }
`

