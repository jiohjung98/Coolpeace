import styled from '@emotion/styled';

import { DashboardHeader } from '@components/common';

const ReportGraphSection = () => {
  return (
    <Container>
      <DashboardHeader />
      <InnerContainer></InnerContainer>
    </Container>
  );
};

export default ReportGraphSection;

const Container = styled.div`
  width: 100%;
  height: 533px;

  padding: 37px 18px 35px 37px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 50vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`;
