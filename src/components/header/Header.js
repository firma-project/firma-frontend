import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={logo} />
      <Menu>
        <a href='/'><h2 >Home</h2></a>
        <h2>Votes</h2>
        <a href='/store'><h2 >Store</h2></a>
      </Menu>
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
