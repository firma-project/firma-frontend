import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import UserContext from '../../contexts/UserContext';


export function Header() {


  const { user } = useContext(UserContext);

  return (
    <Container>
      <img src={logo} />
      <Menu>
        <h2>Home</h2>
        <h2>Votes</h2>
        <h2>Store</h2>
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  img {
    width: 12%;
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

`;
