import React from 'react';
import styled from 'styled-components';
import { FiBell } from 'react-icons/fi';
import Avatar from '../../styles/Avatar';
import avatar from '../../assets/Irmao-do-jorel.png';

export function Header() {
  return (
    <Container>
      <InputContainer />
      <ActionContainer>
        <FiBell />
        <section>
          <h4>Irmão do Jorel</h4>
          <h6>Admin</h6>
        </section>
        <Avatar image={avatar} radius={'50%'} maxWidth={'36px'} border={true} />
      </ActionContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const InputContainer = styled.input`
  height: 20px;
  flex-grow: 3;
  border: solid 1px ${props => props.theme.gray3};
  border-radius: 2px;
  margin: 0 2% 0 2%;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;

  color: ${(props) => props.theme.gray1};
  
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin: 0 8px 0 14px;
  }

  h4 {
    color: ${(props) => props.theme.gray1};
    margin: 0;
    margin-top: 8%;
  }
  h6 {
    margin: 0;
  }
`;
