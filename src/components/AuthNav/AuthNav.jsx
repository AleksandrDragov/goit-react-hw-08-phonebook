import { LinkContainer, LinkStyle } from './AuthNav.styled';
import { useLocation } from 'react-router-dom';

export const AuthNav = () => {
  const location = useLocation();
  return (
    <LinkContainer>
      <LinkStyle to="/register" isActive={location.pathname === '/register'}>
        Register
      </LinkStyle>
      <LinkStyle to="/login" isActive={location.pathname === '/login'}>
        Log In
      </LinkStyle>
    </LinkContainer>
  );
};
