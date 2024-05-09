import UserData from "../UserData/UserData.jsx";
import { HeaderContainer, HeaderWrapper, HeaderLogoLink, HeaderUserContainer, HeaderExitButton, HeaderExitIcon } from "./HeaderStyles.js";

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
          <HeaderExitIcon>
            {/* Placeholder svg do podmianki */}
            <svg width="16" height="16">
              <rect width="16" height="16" stroke="gray" fill="gray" />
            </svg>
          </HeaderExitIcon>
        </HeaderUserContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
