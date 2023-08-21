import { useAuth } from 'hooks/useAuth';
import { LinkStyle, NavContainer } from './Navigation.styled';
import { useLocation } from 'react-router-dom';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return (
    <NavContainer>
      <LinkStyle to="/" isActive={location.pathname === '/'}>
        <LinkStyle isActive={location.pathname === '/home'} /> Home
      </LinkStyle>
      {isLoggedIn && (
        <LinkStyle to="/contacts" isActive={location.pathname === '/contacts'}>
          Contacts
        </LinkStyle>
      )}
    </NavContainer>
  );
};
