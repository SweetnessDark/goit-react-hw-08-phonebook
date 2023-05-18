import { useAuth } from './../../hooks/useAuth';
import { NavItemLink, NavList } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavList>
        <NavItemLink to={'/'}>Home</NavItemLink>
        {isLoggedIn && <NavItemLink to={'/contacts'}>Contacts</NavItemLink>}
      </NavList>
    </nav>
  );
};
