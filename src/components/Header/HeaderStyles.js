import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;

  padding: 12px;
`;

export const HeaderLogoLink = styled.a``;

export const HeaderUserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const HeaderUserData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
export const HeaderUserIcon = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const HeaderUserName = styled.p`
  margin: 0;
  font-size: 12px;
  letter-spacing: 0.48px;
`;

export const HeaderExitButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font-size: 12px;

  color: #52555f;
  cursor: pointer;
  border-bottom: 1px solid #52555f;
`;
