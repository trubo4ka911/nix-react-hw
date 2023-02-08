import PropTypes from "prop-types";
import UserItem from "./UserItem";
import { FriendsList } from "./UserList.styled";

const Profile = ({ filteredUsers }) => {
    return (
     <FriendsList>
        {filteredUsers.map((user) => {
          return (
        <UserItem
          // key={_id}
          user={user}
        />
      )})}
    </FriendsList>
  );
};
Profile.propTypes = {
  filteredUsers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
  age: PropTypes.number,
  gender: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  })
)
}
export default Profile;