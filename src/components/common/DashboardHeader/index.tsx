import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';

const DashboardHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      <MenuContainer>
        <DashboardNav
          $pathname={location.pathname}
          onClick={() => {
            navigate('/');
          }}
        >
          대시보드
        </DashboardNav>
        <ReportNav
          $pathname={location.pathname}
          onClick={() => {
            navigate('/coupons/report');
          }}
        >
          누적 리포트
        </ReportNav>
      </MenuContainer>
      <Button>쿠폰 등록하기</Button>
    </Container>
  );
};

export default DashboardHeader;

const Container = styled.div`
  position: relative;

  width: 100%;

  border-bottom: 2px solid #c5c5c57f;

  display: flex;
  justify-content: space-between;
`;

const MenuContainer = styled.div`
  display: flex;
`;

const DashboardNav = styled.div<{ $pathname: string }>`
  margin-right: 45px;
  padding: 16px 0;
  border-bottom: ${props =>
    props.$pathname === '/' ? '3px solid #001d6c' : 'none'};

  font-size: 17px;
  font-weight: 700;
  color: ${props => (props.$pathname === '/' ? '#001d6c' : '#757676')};

  cursor: pointer;
`;

const ReportNav = styled(DashboardNav)`
  border-bottom: ${props =>
    props.$pathname === '/coupons/report' ? '3px solid #001d6c' : 'none'};

  color: ${props =>
    props.$pathname === '/coupons/report' ? '#001d6c' : '#757676'};
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 175px;
  height: 44px;

  margin-bottom: 10px;
  padding: 14px 20px;
  border: none;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(273deg, #ff0a5c 43.78%, #ff4281 99.72%);
  color: white;
  font-size: 17px;

  cursor: pointer;
`;
