import PropTypes from 'prop-types';
import { Item, Avat, Status } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline} />
      <Avat src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
