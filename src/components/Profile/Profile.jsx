// import user from "data/user";
import css from "components/Profile/Profile.module.css";
import PropTypes from "prop-types";

export const UserProfile = ({ username, 
    tag, 
    location, 
    avatar, 
    stats: { followers, views, likes } }) => {

    <div className={css.profile}>
        <div className={css.description}>
            <img className={css.avatar} src={avatar} alt="{username} avatar" />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
        <ul className={css.stats}>
            <li>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{followers}</span>
            </li>
            <li>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{views}</span>
            </li>
            <li>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{likes}</span>
            </li>
        </ul>
    </div>
}


// ОПИС PROPTYPES!!!!!!!!!
UserProfile.PropTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}

