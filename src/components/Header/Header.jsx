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
          <HeaderUserData>
            {/* Placeholder img do podmianki */}
            <HeaderUserIcon src="https://placehold.co/32x32" alt="User icon" />
            <HeaderUserName>User name</HeaderUserName>
          </HeaderUserData>
          <HeaderExitButton>Exit</HeaderExitButton>
        </HeaderUserContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
