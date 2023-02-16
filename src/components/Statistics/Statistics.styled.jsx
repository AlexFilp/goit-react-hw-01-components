import styled from '@emotion/styled';

export const Container = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
`;

export const Title = styled.h2`
  padding: 30px;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  border-radius: 10px;
  border-top: ${props => {
    if (props.title) {
      return '1px solid black';
    }
    return 'none';
  }};
`;

export const Item = styled.li`
  width: calc((100% - 30px) / 4);
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;

  background-color: ${getRandomHexColor};

  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
