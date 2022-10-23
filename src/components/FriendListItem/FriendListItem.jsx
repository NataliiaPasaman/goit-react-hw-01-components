import css from 'components/FriendListItem/FriendListItem.module.css';
import PropsTypes from 'prop-types';
/**
 * Опис компонента <FriendListItem>
Компонент повинен приймати кілька пропів:
avatar - посилання на аватар
name - ім'я друга
isOnline - буль, що сигналізує про стан друга: в мережі або ні.
Залежно від пропа isOnline, повинен змінюватися колір фону span.status. 
Це можна зробити за допомогою різних CSS-класів або Styled Components.
 */

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={css.status}>{isOnline}</span>
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
