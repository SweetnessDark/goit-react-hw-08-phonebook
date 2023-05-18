import { LinkList } from './AuthLink.styled';
import { NavItemLink } from 'components/Navigation/Navigation.styled';
export const AuthLink = () => {
  return (
    <LinkList>
      <li>
        <NavItemLink to={'/register'}>SingUp</NavItemLink>
      </li>
      <li>
        <NavItemLink to={'/login'}>SingIn</NavItemLink>
      </li>
    </LinkList>
  );
};
