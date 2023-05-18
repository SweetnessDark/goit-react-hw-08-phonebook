import { useSelector } from 'react-redux';
import {
  selectorIsLoggedIn,
  selectorIsUpdating,
  selectorUser,
} from './../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const isUpdating = useSelector(selectorIsUpdating);
  const user = useSelector(selectorUser);

  return {
    isLoggedIn,
    isUpdating,
    user,
  };
};
