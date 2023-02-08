import PropTypes from "prop-types";
import { ProfileUser, Avatar} from "./UserList.styled";

const UserItem = ({ user }) => {
  const { name, age, gender, balance}=user
    return (
    <ProfileUser>
      <div>
        <Avatar src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png" alt="photo"/>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Balance: {balance}</p>
      </div>
    </ProfileUser>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired
  // name: PropTypes.string.isRequired,
  // age: PropTypes.number,
  // gender: PropTypes.string.isRequired,
  // balance: PropTypes.string.isRequired,
}
export default UserItem;