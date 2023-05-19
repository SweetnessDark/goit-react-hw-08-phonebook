import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { loginSchema } from './../../schemas/loginSchema';
import { logIn } from 'redux/auth/auth';
import {
  InputWrapper,
  Label,
  FormContainer,
  ErrorMsg,
  PassWrapper,
  Input,
  ShowPassBtn,
  IconShown,
  IconHidden,
  Btn,
} from './Login.styled';

const initialValues = {
  email: 'test-user@gmail.com',
  password: 'Testuser_123',
};

const Login = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );

    resetForm();
  };

  const togglePassword = () => setPassword(!password);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      {({ errors, touched }) => (
        <FormContainer>
          <InputWrapper>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder={' '}
              data-error={errors.email && touched.email ? true : false}
            />
            <ErrorMsg name="email" component="span" />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="password">Password:</Label>
            <PassWrapper>
              <Input
                type={password ? 'text' : 'password'}
                name="password"
                id="password"
                autoComplete="off"
                placeholder={' '}
                data-error={errors.password && touched.password ? true : false}
              />

              <ShowPassBtn
                type="button"
                onClick={togglePassword}
                data-shown={password}
              >
                {password ? <IconShown /> : <IconHidden />}
              </ShowPassBtn>
            </PassWrapper>
            <ErrorMsg name="password" component="span" />
          </InputWrapper>
          <Btn type="submit">Sign in</Btn>
        </FormContainer>
      )}
    </Formik>
  );
};

export default Login;
