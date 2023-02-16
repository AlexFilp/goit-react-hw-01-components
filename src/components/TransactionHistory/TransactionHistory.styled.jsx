import styled from '@emotion/styled';

export const Table = styled.table`
  margin-top: 50px;
  table-layout: fixed;
  width: 1000px;
  border-collapse: collapse;
  text-align: center;
  border: 1px solid lightgray;
`;

export const Thead = styled.thead`
  color: white;
  background-color: aqua;
  height: 80px;
`;

export const Th = styled.th`
  &:not(:last-child) {
    border-right: 1px solid lightgray;
  }
`;

export const TbodyTr = styled.tr`
  height: 80px;

  &:nth-child(odd) {
    background-color: white;
  }

  &:nth-child(even) {
    background-color: lightcyan;
  }
`;

export const Td = styled.td`
  text-transform: capitalize;
  color: #010101;

  &:not(:last-child) {
    border-right: 1px solid lightgray;
  }
`;
