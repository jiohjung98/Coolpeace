import styled from '@emotion/styled';

import SettlementsTable from './SettlementsTable';
import SettlementsPagination from './SettlementsPagination';
import { SetStateAction, useState } from 'react';

const Settlemented = () => {

  const fakeData = [
    { '쿠폰 적용일': "2023.11.21", '쿠폰번호': 30, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '100회', '쿠폰 할인 금액': '10원', '쿠폰 취소 금액':'0원', '정산 금액': '1000원', '정산 완료일': '2023.11.10'},
    { '쿠폰 적용일': "2023.11.20", '쿠폰번호': 29, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '99회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '999원', '정산 완료일': '2023.11.10'},
    { '쿠폰 적용일': "2023.11.19", '쿠폰번호': 28, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '98회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '998', '정산 완료일': '2023.11.10'},
    { '쿠폰 적용일': "2023.11.18", '쿠폰번호': 27, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '102회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '10000원', '정산 완료일': '2023.11.10'},
    { '쿠폰 적용일': "2023.11.17", '쿠폰번호': 26, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '103회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '13000원', '정산 완료일': '2023.11.10'},
    { '쿠폰 적용일': "2023.11.16", '쿠폰번호': 25, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '104회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '14000원', '정산 완료일': '2023.11.10'},
    { '쿠폰 적용일': "2023.11.15", '쿠폰번호': 24, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '105회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '16000원', '정산 완료일': '2023.11.10'},
    { '쿠폰 적용일': "2023.11.22", '쿠폰번호': 23, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '106회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '176000원', '정산 완료일': '2023.11.10'},
    { '쿠폰 적용일': "2023.11.23", '쿠폰번호': 23, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '107회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '12700원', '정산 완료일': '2023.11.10'},
    { '쿠폰 적용일': "2023.11.24", '쿠폰번호': 22, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '1회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '9934원', '정산 완료일': '2023.11.10'},
    { '쿠폰 적용일': "2023.11.25", '쿠폰번호': 22, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '9회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '9993원', '정산 완료일': '2023.11.10'},
    { '쿠폰 적용일': "2023.11.26", '쿠폰번호': 21, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '2회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '9959원', '정산 완료일': '2023.11.10'},
    { '쿠폰 적용일': "2023.11.20", '쿠폰번호': 22, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '3회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '912원', '정산 완료일': '2023.11.10'},
    { '쿠폰 적용일': "2023.11.27", '쿠폰번호': 20, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '4회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '999123원', '정산 완료일': '2023.11.10'},
    { '쿠폰 적용일': "2023.11.28", '쿠폰번호': 19, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '5회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '999312원', '정산 완료일': '2023.11.10'},
    { '쿠폰 적용일': "2023.11.29", '쿠폰번호': 18, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '45회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '100원', '정산 완료일': '2023.12.10'},
    { '쿠폰 적용일': "2023.12.01", '쿠폰번호': 17, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '44회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '200원', '정산 완료일': '2023.12.10'},
    { '쿠폰 적용일': "2023.12.02", '쿠폰번호': 16, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '43회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '300원', '정산 완료일': '2023.12.10'},
    { '쿠폰 적용일': "2023.10.04", '쿠폰번호': 15, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '47회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '500원', '정산 완료일': '2023.11.02'},
    { '쿠폰 적용일': "2023.10.05", '쿠폰번호': 14, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '66회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '504원', '정산 완료일': '2023.11.02'},
    { '쿠폰 적용일': "2023.10.10", '쿠폰번호': 13, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '55회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '600원', '정산 완료일': '2023.11.02'},
    { '쿠폰 적용일': "2023.10.30", '쿠폰번호': 12, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '54회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '700원', '정산 완료일': '2023.11.02'},
    { '쿠폰 적용일': "2023.10.29", '쿠폰번호': 11, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '66회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '800원', '정산 완료일': '2023.11.02'},
    { '쿠폰 적용일': "2023.10.28", '쿠폰번호': 10, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '97회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '900원', '정산 완료일': '2023.11.02'},
    { '쿠폰 적용일': "2023.10.27", '쿠폰번호': 1, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '98회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '2200원', '정산 완료일': '2023.11.02'},
    { '쿠폰 적용일': "2023.10.26", '쿠폰번호': 2, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '65회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '3000원', '정산 완료일': '2023.11.02'},
    { '쿠폰 적용일': "2023.10.25", '쿠폰번호': 3, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '78회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '4000원', '정산 완료일': '2023.11.02'},
    { '쿠폰 적용일': "2023.10.24", '쿠폰번호': 4, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '88회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '5000원', '정산 완료일': '2023.11.02'},
    { '쿠폰 적용일': "2023.10.23", '쿠폰번호': 5, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '65회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '6000원', '정산 완료일': '2023.11.02'},
    { '쿠폰 적용일': "2023.10.22", '쿠폰번호': 6, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '26회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '6500원', '정산 완료일': '2023.11.02'},
    { '쿠폰 적용일': "2023.10.21", '쿠폰번호': 7, '관리 쿠폰명': "가을 선착순 쿠폰", '사용 건수': '46회', '쿠폰 할인 금액': '50원', '쿠폰 취소 금액':'0원', '정산 금액': '7000원', '정산 완료일': '2023.11.02'},
  ];

   const sortedData = [...fakeData].sort((a, b) => new Date(a['쿠폰 적용일']).getTime() - new Date(b['쿠폰 적용일']).getTime());

   const dataWithNumber = sortedData.map((data, index) => ({ ...data, NO: index + 1 }));

   const reversedData = [...dataWithNumber].reverse();

   const itemsPerPage = 10; 
  const totalItems = reversedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = reversedData.slice(startIndex, endIndex);


  return (
    <Container>
      <SettlementedHeader>
        <TotalData>
          전체 내역 {sortedData.length}개
        </TotalData>
        <OptionContainer>
          <SortOption>
            토글버튼
          </SortOption>
          <ExcelDownload>
            <button>엑셀 다운로드</button>
          </ExcelDownload>
        </OptionContainer>
      </SettlementedHeader>
      <DataLow>
        <SettlementsTable data={currentData} />
        <SettlementsPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            />
      </DataLow>
      <Data>
      </Data>
    </Container>
  );
}

export default Settlemented;

const Container = styled.nav`
  margin-right: 43px;
  margin-left: 43px;
`;

const SettlementedHeader = styled.div`
  width: 100%;

  margin-top: 20px;

  display: flex;
  justify-content: space-between;
`;

const TotalData = styled.div`
  font-size: 14px;
  font-weight: bold;

  color: white;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SortOption = styled.div`
  margin-right: 20px;

  font-size: 14px;
  font-weight: bold;

  color: white;

  white-space: nowrap;
`;

const ExcelDownload = styled.div`
  width: 100%;

  white-space: nowrap;

  button {
    font-size: 14px;
    font-weight: bold;
    color: white;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    background: none; 
  }
`;

const DataLow = styled.div`
  width: 100%;
`;
const Data = styled.div`
  width: 100%;
`;
