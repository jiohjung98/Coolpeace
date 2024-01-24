import styled from '@emotion/styled';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { useSetRecoilState } from 'recoil';
import { createGlobalStyle } from 'styled-components';

import CalendarIcon from '@assets/icons/calendar-number-outline.svg';
import Settlemented from './Settlemented';
import SettlementsHeader from './SettlementsHeader';
import { settlementsDateState } from '@recoil/atoms/settlemented';
import theme from '@styles/theme';

const SettlementsSetting = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const setSettlementsDate = useSetRecoilState(settlementsDateState);

  const handleStartDateChange = (date: Date | null) => {
    if (date) {
      date.setDate(1);
      date.setHours(0, 0, 0, 0); 
    }
    setStartDate(date);
  };
  
  const handleEndDateChange = (date: Date | null) => {
    if (date) {
      date.setMonth(date.getMonth() + 1);
      date.setDate(0); 
      date.setHours(23, 59, 59, 999);
    }
    setEndDate(date);
  };

  const handleButtonClick = () => {
    if (startDate && endDate) {
        setSettlementsDate({ startDate, endDate });
    }
  };

  const DatePickerCustom = createGlobalStyle`
  .custom-header {
    .react-datepicker__current-month,
    .react-datepicker-time__header,
    .react-datepicker-year-header {
      color: white;
    }
    .react-datepicker__header {
      background-color: #1A2849;
    }
  }
`;

  return (
    <Container>
      <SettlementsHeader/>
        <CalendarContainer>
          <CalendarInnerContainer>
            <Calendar
                src={CalendarIcon}
                alt="캘린더" />
            <CalendarText>기간 설정</CalendarText>
            </CalendarInnerContainer>
            <StyledDatePickerContainer>
            <DatePickerCustom />
            <StyledDatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                dateFormat="yyyy/MM"
                showMonthYearPicker
                placeholderText=""
                locale={ko}
                calendarClassName="custom-header"  
            />
            <StyledDatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                dateFormat="yyyy/MM"
                showMonthYearPicker
                placeholderText=""
                locale={ko}
                calendarClassName="custom-header"  
            />
            <StyledButton onClick={handleButtonClick}>조회하기</StyledButton>
            </StyledDatePickerContainer>
        </CalendarContainer>
    <BreakLine>
            <hr />
    </BreakLine>
    <Settlemented />
    </Container>
  )
}

export default SettlementsSetting;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const BreakLine = styled.div`
  margin: 0 40px;

  hr {
    ${theme.response.tablet} {
      display: none;
    }
  }
`;

const CalendarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${theme.response.tablet} {
    margin: 10px 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const CalendarInnerContainer = styled.div`
  margin-top: 10px;

  display: flex;

  ${theme.response.tablet} {
    width: 100%;
  }
`;

const Calendar = styled.img`
  width: 24px;
  height: 24px;

  margin-right: 10px;
`;

const StyledDatePicker = styled(DatePicker)`
  margin-right: 10px;
  padding: 5px;

  width: 100px;

  border: none;
  border-radius: 8px; 

  font-size: 14px;

  .react-datepicker__header {
    background-color: red;
  }
`;

const CalendarText = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: white;

  margin-right: 10px;
  margin-top: auto;
  margin-bottom: auto;
`;

const StyledButton = styled.button`
  padding: 7px 14px;

  background-color: #3182F6;
  color: white;

  font-weight: 600;
  font-size: 12px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }

  ${theme.response.tablet} {
    margin-left: auto;
  }
`;

const StyledDatePickerContainer = styled.div`
  margin-top: 15px;
  margin-right: 43px;

  display: flex;
  align-items: center;

  ${theme.response.tablet} {
    margin-left: auto;
    margin-right: 0px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;