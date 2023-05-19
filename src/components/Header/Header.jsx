import { Header, ContainerBar } from './Header.styled';
import { useAuth } from './../../hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthLink } from 'components/AuthLink/AuthLink';
import { UserMenu } from 'components/UserMenu/UserMenu';

const HeaderBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <ContainerBar>
      <Header>
        {!isLoggedIn && <Navigation />}
        {isLoggedIn && <Navigation />}
        {isLoggedIn ? <UserMenu /> : <AuthLink />}
      </Header>
    </ContainerBar>
  );
};

export default HeaderBar;
