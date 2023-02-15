import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ id, isOnline, avatar, name }) => {
        const classNames = [css.status];
        if (isOnline) classNames.push(css.isOnline);
        return (
          <li className={css.item} key={id}>
            <span className={classNames.join(' ')}></span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
