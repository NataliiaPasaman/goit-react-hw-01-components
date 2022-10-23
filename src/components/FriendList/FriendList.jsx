import css from 'components/FriendList/FriendList.module.css';
import PropsTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

// ОПИС PROPTYPES!!!!!!!!!
FriendList.propsTypes = {
  friends: PropsTypes.arrayOf(
    PropsTypes.exact({
      avatar: PropsTypes.string.isRequired,
      name: PropsTypes.number.isRequired,
      isOnline: PropsTypes.bool.isRequired,
    })
  ),
};
