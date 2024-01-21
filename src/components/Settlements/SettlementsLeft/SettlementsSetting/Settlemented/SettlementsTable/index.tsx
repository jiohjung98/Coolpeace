import styled from '@emotion/styled';

import { SettlementItem, SettlementsTableProps } from '@/types/settlements';
import settlementsFrame from '@assets/icons/settlements-data-frame.svg'; 

const SettlementsTable = ({ data, pageStartNumber }: SettlementsTableProps) => {
  
  const keys: (keyof SettlementItem)[] = [
    'NO',
    '쿠폰번호',
    '관리 쿠폰명',
    '사용 건수',
    '쿠폰 할인 금액',
    '쿠폰 취소 금액',
    '정산 금액',
    '쿠폰 적용일',
    '정산 완료일'
  ];

  if (!data || data.length === 0) {
    return (
      <Container>
        <Header>
          {keys.map((key, index) => (
            <KeyElement key={index}>{key}</KeyElement>
          ))}
        </Header>
        <FrameContainer>
          <Frame>
            <NoDataText>데이터가 없습니다.</NoDataText>
          </Frame>
        </FrameContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        {keys.map((key, index) => (
          <KeyElement key={index}>{key}</KeyElement>
        ))}
      </Header>
      <FrameContainer>
        <Frame>
          {data.map((row, index) => (
            <Row key={index} isLast={false}>
              {keys.map((key) => (
                 <DataElement key={key}>
                  <MobileDataElement>{key}</MobileDataElement>
                  <MobileData>{key === 'NO' ? pageStartNumber - index : row[key]}</MobileData>
                  <WebData>{key === 'NO' ? pageStartNumber - index : row[key]}</WebData>
               </DataElement>
              ))}
            </Row>
          ))}
        </Frame>
      </FrameContainer>
    </Container>
  );
};

export default SettlementsTable;

const Container = styled.div`
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  

  @media (max-width: 900px) {
    overflow-x: hidden;
  }
`;

const Header = styled.div`
  padding: 20px 0;

  display: flex;
  justify-content: space-between;

  border: 1px solid #000;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.05);

  @media (max-width: 900px) {
    display: none;
  }
  
`;

const KeyElement = styled.div`
  width: 10%;
  text-align: center;

  font-size: 14px;
  font-weight: bold;
  color: white;
`;


const FrameContainer = styled.div`
  width: 100%;

  box-sizing: border-box;

  text-align: center;
`;

const Frame = styled.div<{ hasData?: boolean }>`
  width: 99%;
  height: 500px;

  margin-left: auto;
  margin-right: auto;

  position: relative; 

  background: url(${settlementsFrame});

  @media (max-width: 900px) {
    background: none;
    background-color: white;
    height: 100%;
  }
`;

const NoDataText = styled.div`
  font-size: 15px;
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 900px) {
    margin: 10px 0px;

    position: static; 
    transform: none; 
    
    background-color: #1A2849;
    color: white;
  }
`;

const DataElement = styled.div`
  width: 10%;
  height: 48px;

  padding-top: 18px;

  justify-content: center;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 900px) {
    padding: 5px 0px;

    width: 100%;
    height: 100%;

    display: flex;

    white-space: none;
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const MobileDataElement = styled.span` 
  margin-left: auto;

  display: flex;

  font-weight: 700;

  @media (min-width: 900px) {
    display: none;
  }
`;

const MobileData = styled.span`
  padding-left: 10%;

  width: 55%;

  display: flex;

  @media (min-width: 900px) {
    display: none;
  }
`;

const WebData = styled.span`
@media (max-width: 900px) {
  display: none;
}
`;

const Row = styled.div<{ isLast: boolean }>`
  display: flex;
  justify-content: space-between;

  border-bottom: ${(props) => (props.isLast ? 'none' : '1px solid #ccc')}; 

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 900px) {
    padding: 20px 0px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-overflow: ellipsis;
  }
`;

