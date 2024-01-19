import styled from '@emotion/styled';

import { StatusItemProps, StatusItemStyleProps } from '@/types/dashboard';

const StatusItem = ({ title, result, index }: StatusItemProps) => {
  return (
    <Container>
      <Header>{title}</Header>
      <ResultContainer $index={index}>{result}</ResultContainer>
    </Container>
  );
};

export default StatusItem;

const Container = styled.div`
  width: 100%;
  height: 112px;

  padding: 10px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #fafafb;
`;

const Header = styled.div`
  padding-bottom: 10px;

  color: #484e59;
  font-size: 13px;
  font-weight: 700;
`;

const ResultContainer = styled.div<StatusItemStyleProps>`
  width: 100%;

  padding: 15px;
  border-radius: 16px;

  background-color: #fff;

  color: ${props => (props.$index ? '#FF3478' : '#022C79')};
  font-size: 22px;
  font-weight: 700;
  text-align: center;

  box-shadow:
    0px 17.525px 21.907px 0px rgba(0, 0, 0, 0.05),
    -0.73px 0.73px 0.73px -1.46px rgba(255, 255, 255, 0.35) inset;
`;
