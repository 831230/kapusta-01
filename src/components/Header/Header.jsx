import UserData from "../UserData/UserData.jsx";
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderLogoLink,
  HeaderUserContainer,
  HeaderUserData,
  HeaderUserIcon,
  HeaderUserName,
  HeaderExitButton,
} from "./HeaderStyles.js";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        {/* Placeholder svg do podmianki */}
        <HeaderLogoLink href="">
          <svg width="90" height="31">
            <rect width="90" height="31" stroke="orange" fill="orange" />
          </svg>
        </HeaderLogoLink>
        <HeaderUserContainer>
          <UserData></UserData>
          <HeaderExitButton>Exit</HeaderExitButton>
        </HeaderUserContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
