import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { GiTrophyCup } from "react-icons/gi";



export function Sidebar() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <MenuItems>
        <a href="/"><div><FiHeart /> <h3>Votos</h3></div></a>
        <a href="/store"><div><FiShoppingCart /> <h3>Lojinha</h3></div>  </a>
        <a href="/"><div><GiTrophyCup /> <h3>Rankig</h3></div>  </a>
      </MenuItems>
    </Container>
  );
}

const Container = styled.div`
  img {
    max-width: 100%;
  }
`;

const MenuItems = styled.div`
    display: flex;
    flex-direction: column;

    div {
        cursor: pointer;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 10%;
        color: black;
        border-radius: 3px;
        margin: 4px;
        height: 48px;

        h3 {
            padding-left: 8%;
        }
    }

    div:hover {
        background-color: ${props => props.theme.blue1};

        a, h3 {
        color: white;
        } 

        color: white;
    }

    div:active {
        background-color: ${props => props.theme.blue3};
    }



`;
