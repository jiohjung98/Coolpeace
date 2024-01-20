import styled from '@emotion/styled';

import SettlementsBefore from "./SettlementsBefore"
import SettlementsExpected from "./SettlementsExpected"
import settlementsLogo from '@assets/icons/settlements-logo.svg'; 

const SettlementsRight = () => {
  return (
    <Container>
      <InnerContainer>
        <SettlementsExpected />
        <hr />
        <StyledSettlementsBefore>
          <SettlementsBefore />
        </StyledSettlementsBefore>
      </InnerContainer>
      <Logo />
    </Container>
  )
}

export default SettlementsRight;

const Container = styled.div`
  position: relative;

  width: 20%;
  min-width: 290px;

  background-color: #1A2849;
  border-top-right-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;

  @media (max-width: 900px) {
    width: 100%;
    min-width: 0;
    border-radius: 0;
  }
`;

const InnerContainer = styled.div`
  height: 100%;

  position: relative;
  z-index: 999;

  background-color: rgba(255, 255, 255, 0.1); 
  border: 1px solid rgba(255, 255, 255, 0.1); 
  backdrop-filter: blur(20px);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);

  hr {
    margin: 30px 15px;

    border: 1px solid rgba(217, 217, 217, 0.2); 

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 900px) {
      display: none;
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const StyledSettlementsBefore = styled.div`
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    width: 50%:
  }
`;

const Logo = styled.div`
  position: absolute;

  width: 165px;
  height: 227px;

  top: 65%;
  right: 0;

  background: url(${settlementsLogo});

  @media (max-width: 900px) {
    position: static;
    width: 100%;
    max-width: 165px;
    height: auto;
    margin-top: 20px; /* Adjust the margin as needed */
  }
`;
