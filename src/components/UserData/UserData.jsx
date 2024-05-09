import { HeaderUserData, HeaderUserIcon, HeaderUserName } from "./UserDataStyles";

const UserData = () => {
  return (
    <HeaderUserData>
      {/* Placeholder img do podmianki */}
      <HeaderUserIcon src="https://placehold.co/32x32" alt="User icon" />
      <HeaderUserName>User name</HeaderUserName>
    </HeaderUserData>
  );
};

export default UserData;
