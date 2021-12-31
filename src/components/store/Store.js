import React from 'react';
import styled from 'styled-components';
import { CardStore } from '../shared/CardStore';
import { Ranking } from '../ranking/Ranking';
import { Header } from '../header/Header';

export function Store() {


const mockyData = [
    {
        productName:"90s Music Compilation",
        image:"http://assets.stickpng.com/images/58639d767d90850fc3ce2928.png",
        price:10,
        available:3,
        id:0
    },
    {
        productName:"Vintage Calculator",
        image:"https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf92.png",
        price:5,
        available:1,
        id:1
    },
    {
        productName:"NES Classic Edition",
        image:"http://assets.stickpng.com/thumbs/585ea25bcb11b227491c3507.png",
        price:25,
        available:0,
        id:2
    }

]

  

  return (
    <Page>
      <Container>
        <Header></Header>
        <CenterContainer>
          {mockyData.map((product) => (
            <CardStore key={product.id} id={product._id} name={product.productName} image={product.image} price={product.price} available={product.available}/>
          ))}
        </CenterContainer>
      </Container>
      <SideContainer>
        <Ranking></Ranking>
      </SideContainer>
    </Page>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Page = styled.div`
  display: flex;
  flex-direction: row;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80vw;
  flex-wrap: wrap;
  margin: 20px;
  div {
    flex-basis: 30%;
  }

  @media screen and (max-width: 1140px) {
        width: 90%;
        justify-content: flex-start;
    }

  @media screen and (max-width: 720px) {
        width: 90%;
        justify-content: center;
    }
`;

const SideContainer = styled.div`
  width: 20vw;
  display: flex;
  @media (max-width: 1000px) {
    display: none;
  }
`;
