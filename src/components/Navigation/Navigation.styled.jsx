import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

const navLink = NavLink;
export const LinkStyle = styled(navLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: black;
  color: ${props => (props.isActive ? '#1976d2' : '#000')};
  &:not(:last-child) {
    padding-right: 20px;
  }

  &:hover,
  :focus {
    color: #1976d2;
  }
`;
