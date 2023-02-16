import PropTypes from 'prop-types';
import { Container, Title, StatList, Item } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatList title={title}>
        {stats.map(item => {
          return (
            <Item key={item.id}>
              <span>{item.label}</span>
              <span>{item.percentage}%</span>
            </Item>
          );
        })}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
