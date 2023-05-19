import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isUpdating } = useAuth();
  const shouldRedirect = !isLoggedIn && !isUpdating;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
