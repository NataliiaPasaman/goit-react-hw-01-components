import css from 'components/FriendListItem/FriendListItem.module.css';
import PropsTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.isOnline : css.status}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

// ОПИС PROPTYPES!!!!!!!!!
FriendListItem.propTypes = {
  avatar: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  isOnline: PropsTypes.bool.isRequired,
};
