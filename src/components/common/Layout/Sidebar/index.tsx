import { useState } from 'react';
import styled from '@emotion/styled';

import Header from './Header';
import Navigation from './Navigation';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Container $isSidebarOpen={isSidebarOpen}>
        <Menu>
          <Header
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Navigation isSidebarOpen={isSidebarOpen} />
        </Menu>
      </Container>
      {isSidebarOpen && (
        <LeftoverScreen onClick={() => setIsSidebarOpen(false)} />
      )}
    </>
  );
};
export default Sidebar;

const Container = styled.div<{ $isSidebarOpen?: boolean }>`
  position: fixed;

  width: ${props => (props.$isSidebarOpen ? '15.625rem' : '6.25rem')};
  min-height: 100vh;

  padding: 1.25rem 0.625rem;

  background-color: ${props => props.theme.colors.white};

  box-sizing: border-box;
  overflow: hidden;
  // HACK: z-index 상수화 (const enum, as const 학습 후 적용)
  z-index: 100;

  transition: all 0.3s;
`;

const Menu = styled.div`
  width: 14.375rem;
  height: 100%;

  display: flex;
  flex-direction: column;

  transition: all 0.3s;
`;

const LeftoverScreen = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;

  background-color: #4242427c;

  z-index: 90;
`;
