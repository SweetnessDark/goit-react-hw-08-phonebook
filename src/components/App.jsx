import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Contacts } from './pages/Contacts';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateUsers } from 'redux/auth/auth';
import { useAuth } from './../hooks/useAuth';

export const App = () => {
  const dispatch = useDispatch();
  const { isUpdating } = useAuth();

  useEffect(() => {
    dispatch(updateUsers());
  }, [dispatch]);

  return (
    <div className="container">
      {isUpdating ? (
        <h2>Loading...</h2>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={RegistrationPage}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
          </Route>
        </Routes>
      )}
    </div>
  );
};
