import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/header/Header';

import styled from 'styled-components';

export function MainLayout({ children }) {
  return (
    <React.Fragment>
      <Container>
        <SidebarContainer>
          <Sidebar />
          <VerticalLine />
        </SidebarContainer>
        <ContentContainer>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
          <Outlet />
        </ContentContainer>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: flex;
  width: auto;
`;

const VerticalLine = styled.div`
  border-left: 1px solid #dfdfdf;
  height: 100vh;
  position: absolute;
  left: 100%;
  margin-left: -1px;
  top: 0;
`
const SidebarContainer = styled.div`
  position: fixed;
  z-index: 1;
  overflow: hidden;
  width: 14vw;
  height: 100%;
`;

const ContentContainer = styled.div`
    margin-left: 14vw;
    margin-top: 10vh;
    
`
const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 10vh;
  
`