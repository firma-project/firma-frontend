import React from 'react';
import styled from "styled-components";

export default function AvatarProduct({ image }) {

    return (
        <ProductAvatar>
            <img src={image} alt=''/>
        </ProductAvatar>
    )
}

const ProductAvatar = styled.div`
    img {
        max-width: 50px;
        border-radius: 20%;
        margin: 8px;
    }
`
