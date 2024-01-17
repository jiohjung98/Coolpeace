import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  const location = useLocation();

  return (
    <Container>
      <Sidebar />
      <Section>
        <Header />
        <OutletLayout $pathname={location.pathname}>
          <Outlet />
        </OutletLayout>
      </Section>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;

  min-width: 100vw;
  max-height: 100vh;

  display: flex;

  background-color: ${props => props.theme.colors.background};
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;

  margin-left: 100px;
  padding: 13px 22px;

  display: flex;
  flex-direction: column;
`;

//HACK: 타입 분리 예정!
const OutletLayout = styled.div<{ $pathname: string }>`
  width: 100%;
  height: 100%;

  margin-top: 16px;
  border-radius: 20px;

  background-color: ${props => {
    if (props.$pathname === '/') {
      return 'transparent';
    } else if (props.$pathname === '/coupons/report') {
      return 'transparent';
    } else {
      return props.theme.colors.white;
    }
  }};

  overflow-y: auto;
`;
