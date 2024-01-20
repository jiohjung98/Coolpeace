import styled from '@emotion/styled';

import theme from '@styles/theme';
import centerIcon from '@assets/icons/ic-couponlist-center.svg';
import rightIcon from '@assets/icons/ic-couponlist-right.svg';
import deleteIcon from '@assets/icons/ic-couponlist-delete.svg';
import { CouponListProps } from '../CouponExpose';
import { useRef, useState } from 'react';
import { useOutsideClick } from '@hooks/index';

const CouponWait = ({ couponInfo }: CouponListProps) => {
  const [isShowRoomList, setIsShowRoomList] = useState(false);
  const roomListRef = useRef<HTMLDivElement>(null);

  const handleRoomList = () => {
    setIsShowRoomList(!isShowRoomList);
  };

  useOutsideClick(roomListRef, () => setIsShowRoomList(false));

  return (
    <CouponContainer>
      <CouponHeaderContainer>
        <CouponHeader>
          <CouponTitle>{couponInfo.title}</CouponTitle>
          <CouponStatus>노출대기</CouponStatus>
        </CouponHeader>
        <CouponCustomer>{couponInfo.coupon_concat_title}</CouponCustomer>
      </CouponHeaderContainer>
      <CouponMain>
        <CountWrap>
          <CountText>다운로드</CountText>
          <CountNumber>{couponInfo.download_count}</CountNumber>
        </CountWrap>
        <CountWrap>
          <CountText>사용완료</CountText>
          <CountNumber>{couponInfo.use_count}</CountNumber>
        </CountWrap>
        <div>
          <ContentWrap>
            <ContentTitle>가격</ContentTitle>
            <ContentValue>
              {couponInfo.minimum_reservation_price}원 이상
            </ContentValue>
          </ContentWrap>
          <ContentWrap>
            <ContentTitle>일정</ContentTitle>
            <ContentValue>{couponInfo.coupon_room_type}</ContentValue>
          </ContentWrap>
          <ContentWrap>
            <ContentTitle>객실</ContentTitle>
            {couponInfo.register_room_numbers.length === 0 ? (
              <ContentValue>전체</ContentValue>
            ) : (
              <>
                <ContentRoom onClick={handleRoomList}>
                  <div>일부 객실</div>
                  <img
                    src={rightIcon}
                    alt="오른쪽 화살표"
                  />
                </ContentRoom>
                {isShowRoomList && (
                  <RoomList ref={roomListRef}>
                    <RoomListTitleWrap>
                      <RoomListTitle>쿠폰 적용 객실</RoomListTitle>
                      <img
                        onClick={handleRoomList}
                        src={deleteIcon}
                        alt="리스트 닫기 아이콘"
                      />
                    </RoomListTitleWrap>
                    <RoomListItem>
                      <ul>
                        {couponInfo.register_room_numbers.map((room, index) => (
                          <li key={index}>{room}</li>
                        ))}
                      </ul>
                    </RoomListItem>
                  </RoomList>
                )}
              </>
            )}
          </ContentWrap>
        </div>
      </CouponMain>
      <DateContainer>
        <ExposeDateWrap>
          <ExposeDateTitle>노출기간</ExposeDateTitle>
          <ExposeValue>
            {couponInfo.exposure_start_date} ~ {couponInfo.exposure_end_date}
          </ExposeValue>
        </ExposeDateWrap>
        <ExposeDateWrap>
          <RegisterDateTitle>등록일</RegisterDateTitle>
          <RegisterDateValue>{couponInfo.created_date}</RegisterDateValue>
        </ExposeDateWrap>
      </DateContainer>
      <CouponModifiedWrap>
        <div>수정</div>
        <img
          src={centerIcon}
          alt="분리 선 이미지"
        />
        <div>삭제</div>
      </CouponModifiedWrap>
    </CouponContainer>
  );
};

export default CouponWait;

const CouponContainer = styled.div`
  position: relative;

  width: 290px;
  height: 203px;

  border-radius: 8px;

  background: #ecf0fa;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.25);
`;

const CouponHeaderContainer = styled.div`
  height: 64px;

  padding: 14px 10px 0 12px;
  border-bottom: 1px dashed #8f8f8f;

  display: flex;
  flex-direction: column;
`;

const CouponHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CouponTitle = styled.div`
  color: #8f8f8f;
  font-size: 11px;
  font-weight: 600;
`;

const CouponStatus = styled.div`
  width: 50px;
  height: 22.927px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  border-radius: 22.927px;
  color: ${theme.colors.white};
  background: #404446;
`;

const CouponCustomer = styled.div`
  color: #404040;
  font-size: 18px;
  font-weight: 700;
`;

const CouponMain = styled.div`
  padding: 12px 10px 0 12px;

  display: flex;
  align-items: center;
`;

const CountWrap = styled.div`
  width: 58px;
  height: 62px;

  margin-right: 7.5px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${theme.colors.white};
`;

const CountText = styled.div`
  color: #8f8f8f;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
`;

const CountNumber = styled.div`
  margin-top: 5px;

  color: #505050;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

const ContentWrap = styled.div`
  margin: 8px;

  display: flex;
  align-items: center;
`;

const ContentTitle = styled.div`
  margin-right: 5px;

  color: #505050;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
`;

const ContentValue = styled.div`
  color: #8f8f8f;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
`;

const DateContainer = styled.div`
  padding: 9px 0 0 12px;
`;

const ExposeDateWrap = styled.div`
  margin-bottom: 4px;

  display: flex;
  align-items: center;
`;

const ExposeDateTitle = styled.div`
  margin-right: 5px;

  color: #757676;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
`;

const ExposeValue = styled.div`
  color: #757676;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
`;

const RegisterDateTitle = styled.div`
  margin-right: 5px;

  color: #757676;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
`;

const RegisterDateValue = styled.div`
  color: #757676;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
`;

const CouponModifiedWrap = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 56px;

  margin-right: 14px;
  margin-bottom: 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #757676;
  font-size: 11px;

  div {
    cursor: pointer;
  }
`;

const ContentRoom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  div {
    margin-right: 3px;
    padding: 2px 0px;
    border-bottom: 1px solid #757676;

    color: #757676;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }s
`;

const RoomList = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  width: 188px;
  height: 204px;

  margin-top: 150px;
  border-radius: 18px;
  text-align: center;

  background: #415574;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);

    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #415574;
  }
`;

const RoomListTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 10px;
  padding: 8px;
  border-bottom: 1px solid #cdcfd0;

  img {
    cursor: pointer;
  }
`;

const RoomListTitle = styled.div`
  margin-left: 35px;

  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  color: ${theme.colors.white};
`;

const RoomListItem = styled.div`
  max-height: 125px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto; // 세로 스크롤만 허용

  color: ${theme.colors.white};
  font-size: 14px;
  font-weight: 400;
  line-height: 36px;

  li {
    max-width: 130px;

    overflow: hidden;
    overflow-y: scroll;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
