import PropTypes from 'prop-types'
import defImg from '../../img/default.jpg'
function FriendListItem({ avatar = defImg, name = 'unknown', isOnline = true, }) {
   return (
     <li class={item}>
       <span class={isOnline ? `${isOnline}` : `${isOfline}`}></span>
       <img class={avatar} src="" alt={name} width="48" />
       <p class={name}>{name}</p>
     </li>
   )   
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;