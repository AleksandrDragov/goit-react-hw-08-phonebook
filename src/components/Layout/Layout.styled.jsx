import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderList = styled.ul`
  display: flex;
  padding-bottom: 10px;
  padding-left: 0;
  list-style: none;
  border-bottom: 2px solid black;
`;

const navLink = NavLink;
export const LinkStyle = styled(navLink)`
  text-decoration: none;
  font-size: 30px;
  font-weight: 700;
  color: #1976d2;

  &:hover,
  :focus {
    color: #1976d2;
  }
`;

export const RegContainer = styled.div`
  margin-left: auto;

  &:not(:last-child) {
    padding-right: 20px;
  }
`;
