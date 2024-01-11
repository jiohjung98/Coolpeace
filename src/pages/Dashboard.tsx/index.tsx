import styled from '@emotion/styled';

import {
  GraphSection,
  CouponStatusSection,
  CouponRecommendSection,
  DailyReportSection
} from '@components/Dashboard';

const Dashboard = () => {
  return (
    <Container>
      <SectionLeft>
        <GraphSection />
        <CouponRecommendSection />
      </SectionLeft>
      <SectionRight>
        <CouponStatusSection />
        <DailyReportSection />
      </SectionRight>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;

  width: 100%;
  height: 100%;
`;

const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;

  flex: 8;
  height: 100%;
`;

const SectionRight = styled.div`
  display: flex;
  flex-direction: column;

  flex: 2;
  height: 100%;
`;
