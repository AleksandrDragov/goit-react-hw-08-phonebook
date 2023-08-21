import { HomeTitle, LoggedInTitle, HomeLink } from './Homepage.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/auth-selectors';

const Homepage = () => {
  const isloggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return !isloggedIn ? (
    <HomeTitle>
      Welcome on Phonebook homepage! <br />
      Please <HomeLink to="/register">Register</HomeLink> or{' '}
      <HomeLink to="/login">Log in</HomeLink>
    </HomeTitle>
  ) : (
    <LoggedInTitle>
      Welcome, {user.name}, you can use your{' '}
      <HomeLink to="/contacts">Phonebook</HomeLink>!
    </LoggedInTitle>
  );
};

export default Homepage;
