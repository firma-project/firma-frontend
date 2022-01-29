import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

export function Header() {

  return (
    <Container>
      dsdsd
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;

  img {
    width: 120px;
  }

  @media screen and (max-width: 720px) {
        img {
          display: none;
        }
    }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 60%;
  margin-left: 40px;

  h2 {
    font-family: 'Press Start 2P', cursive;
    cursor: pointer;
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    justify-content: space-around;
    h2 {
      margin-right: 12px;
    }
      
  }
`;
