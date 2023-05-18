import { useDispatch } from 'react-redux';
import { useAuth } from './../../hooks/useAuth';
import { logOut } from './../../redux/auth/auth';
import { UserWrapper, Paragraph, UserName, BtnLogOut } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserWrapper>
      <Paragraph>
        Welcome, <UserName>{user.name}</UserName>
      </Paragraph>
      <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
        Sign Out
      </BtnLogOut>
    </UserWrapper>
  );
};
