import css from "components/FriendList/FriendList.module.css";
import PropsTypes from "prop-types";
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import friends from "data/friends.json"

/**Необхідно створити компонент <FriendList>, за допомогою якого ми могли б 
 * відображати інформацію про друзів користувача 
 * Опис компонента <FriendList>
Компонент повинен приймати один проп friends – масив об'єктів друзів.
*/
export const FriendList = ({ friends }) => {
  <ul className={css.friend_list}>
    {friends.map(friend => {
      return (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      );
    })}
  </ul>;
};

FriendList.propsTypes = {
    friends: PropsTypes.array,
}

/**     <FriendListItem 
    avatar={friends.avatar}
    name={friends.name}
    isOnline={friends.isOnline} />*/