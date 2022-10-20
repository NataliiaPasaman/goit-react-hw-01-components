import user from "./data/user.json";

export const UserProfile = ({ username, 
    tag, 
    location, 
    avatar, 
    stats: { followers, views, likes } }) => {

    <div>
        <div>
            <img src={avatar} alt="{username} avatar" />
            <p>{username}</p>
            <p>{tag}</p>
            <p>{location}</p>
        </div>
        <ul>
            <li>
                <span>Followers</span>
                <span>{followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span>{views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{likes}</span>
            </li>
        </ul>
    </div>
}

/** Опис компонента <Profile>
Компонент повинен приймати кілька пропсів з інформацією про користувача:
username — ім'я користувача
tag — тег в соціальній мережі без @
location — місто і країна
avatar — посилання на зображення
stats — об'єкт з інформацією про активності

ОПИСАТИ PROPTYPES!!!!!!!!!!!!!!!!!!!!!!!

*/