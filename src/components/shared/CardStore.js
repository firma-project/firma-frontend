import React from 'react';
import styled from "styled-components";
import heart from '../../assets/heart.png'
import AvatarProduct from '../../styles/AvatarProduct';

export function CardStore ({ image, name, price, available }) {
    
    return (
    
        
            <CardContainer>
                <CardColumnContainer>
                    <AvatarProduct image={image} />
                    <TextStyled>{ name }</TextStyled>
                </CardColumnContainer>
                <CardColumnContainer>
                    <TextStyled>Hearts Price:</TextStyled>
                    <LoveIcon>
                        <TextStyled>{ price }</TextStyled>
                        <img src={heart} alt='hearts'/>
                    </LoveIcon>
                </CardColumnContainer>
                <CardColumnContainer>
                    <TextStyled>In Stock:</TextStyled>
                    <TextStyled>{ available }</TextStyled>
                </CardColumnContainer>
                <ButtonContainer>
                    <Button>Buy it!</Button>
                </ButtonContainer>
            </CardContainer>
            
       
    )
}
const ButtonContainer = styled.div`
    position:absolute;
    bottom:0;
    right:0
`

const Button = styled.button`
   
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  margin:7px;
cursor:pointer;

`

const TextStyled = styled.h4`
    margin:0;
    color: rgba(50,50,50,1);
    padding-bottom:10px
`

const CardContainer = styled.div`
    position:relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background: #f0efeb;
    margin: 8px 10px;
    min-width: 300px;

    cursor: pointer;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

const CardColumnContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
   
`

const LoveIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 40px;
    }
    
`
