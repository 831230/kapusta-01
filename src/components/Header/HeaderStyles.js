import styled from "styled-components";
import { Link } from "react-router-dom";

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

  @media screen and (max-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (max-width: 320px) {
    width: 320px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const HeaderLogoLink = styled(Link)``;

export const HeaderUserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 768px) {
    gap: 16px;
  }
`;

export const HeaderExitButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font-size: 12px;
  letter-spacing: 0.48px;

  color: #52555f;
  cursor: pointer;
  border-bottom: 1px solid #52555f;
`;
