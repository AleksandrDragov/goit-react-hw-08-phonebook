import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomeTitle = styled.h1`
  text-align: center;
  line-height: 2.5;
  font-family: Menlo, sans-serif;
`;

export const LoggedInTitle = styled.h1`
  text-align: center;
  line-height: 2;
`;
export const HomeLink = styled(NavLink)`
  text-decoration: none;
  color: #1976d2;
`;
