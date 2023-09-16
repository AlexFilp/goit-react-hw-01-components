import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li`
  padding: 10px;
  width: 300px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 0px 7px 3px black;
  border-radius: 10px;
`;

export const Avat = styled.img`
  width: 80px;
  height: 80px;
`;

export const Status = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

// function getStatus(props) {
//   if (props.isOnline) {
//     return 'green';
//   } else {
//     return 'red';
//   }
// }
