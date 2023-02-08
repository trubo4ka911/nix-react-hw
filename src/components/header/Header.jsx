import PropTypes from "prop-types";
import { HeaderStyle } from "./Header.styled";

const Header = ({ children }) => (
    <HeaderStyle>{children}</HeaderStyle>
)
Header.propTypes = {
    children:PropTypes.array.isRequired
}
export default Header