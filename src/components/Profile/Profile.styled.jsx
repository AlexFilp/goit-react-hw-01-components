import styled from '@emotion/styled';

export const Container = styled.div`
  width: 600px;
  height: 100%;
  padding-top: 15px;
  background-color: white;
  border-radius: 10px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
`;

export const Name = styled.p`
  color: gray;

  &:not(:last-child) {
    color: black;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  color: gray;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-top: 1px solid gray;
  background-color: antiquewhite;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const StatsItem = styled.li`
  width: calc((100% - 15px) / 3);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    border-right: 1px solid gray;
  }
`;

export const Label = styled.span`
  color: gray;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
