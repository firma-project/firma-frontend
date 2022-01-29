import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../../components/shared/Card';
import { Ranking } from '../../components/ranking/Ranking';
import { getUsers } from '../../services/firme.service';

export function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(res => setUsers(res.data));
  }, [])

  return (
    <Page>
      <Container>
        <CenterContainer>
          {users.map((user) => (
            <Card key={user._id} id={user._id} name={user.name} profile={user.profile} ups={user.ups} />
          ))}
        </CenterContainer>
      </Container>
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

