import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
    <div className={css.item}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
    </div>
);

export default FriendListItem;