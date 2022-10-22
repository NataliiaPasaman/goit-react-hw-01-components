import css from "components/FriendList/FriendList.module.css";
import PropsTypes from "prop-types";
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import friends from "data/friends.json"
/**Необхідно створити компонент <FriendList>, за допомогою якого ми могли б 
 * відображати інформацію про друзів користувача 
 * Опис компонента <FriendList>
Компонент повинен приймати один проп friends – масив об'єктів друзів.


Опис компонента <FriendListItem>
Компонент повинен приймати кілька пропів:

avatar - посилання на аватар
name - ім'я друга
isOnline - буль, що сигналізує про стан друга: в мережі або ні.
Залежно від пропа isOnline, повинен змінюватися колір фону span.status. 
Це можна зробити за допомогою різних CSS-класів або Styled Components.

Компонент повинен створювати DOM наступної структури.
<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>
Приклад використання
import friends from "path/to/friends.json";

<FriendList friends={friends} />;
*/
export const FriendList = (friends) => {
    <ul className={css.friend-list}>
        <FriendList friends={friends} />
</ul>
}