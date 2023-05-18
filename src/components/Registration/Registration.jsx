// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { register } from './../../redux/auth/auth';
// import { Formik } from 'formik';
// import { registerSchema } from './../../schemas/registerSchema';
// import {
//   InputWrapper,
//   Label,
//   FormContainer,
//   ErrorMsg,
//   PassWrapper,
//   Input,
//   ShowPassBtn,
//   IconShown,
//   IconHidden,
//   Btn,
// } from './Registration.styled';

// const initialValues = {
//   username: '',
//   email: '',
//   password: '',
// };

// const Registration = () => {
//   const dispatch = useDispatch();
//   const [password, setPassword] = useState(false);

//   const handleSubmit = (values, { resetForm }) => {
//     dispatch(
//       register({
//         name: values.username,
//         email: values.email,
//         password: values.password,
//       })
//     );

//     resetForm();
//   };

//   const togglePassword = () => setPassword(!password);

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={registerSchema}
//     >
//       {({ errors, touch }) => (
//         <FormContainer>
//           <InputWrapper>
//             <Label htmlFor="username">Username:</Label>
//             <Input
//               type="text"
//               name="username"
//               id="username"
//               autoComplete="off"
//               placeholder={' '}
//               data-error={errors.username && touch.username ? true : false}
//             />
//             <ErrorMsg name="username" component="span" />
//           </InputWrapper>

//           <InputWrapper>
//             <Label htmlFor="email">Email:</Label>
//             <Input
//               type="email"
//               name="email"
//               id="email"
//               autoComplete="off"
//               placeholder={' '}
//               data-error={errors.email && touch.email ? true : false}
//             />
//             <ErrorMsg name="email" component="span" />
//           </InputWrapper>

//           <InputWrapper>
//             <Label htmlFor="password">Password:</Label>
//             <PassWrapper>
//               <Input
//                 type={password ? 'text' : 'password'}
//                 name="password"
//                 id="password"
//                 autoComplete="off"
//                 placeholder={' '}
//                 data-error={errors.password && touch.password ? true : false}
//               />

//               <ShowPassBtn
//                 type="button"
//                 onClick={togglePassword}
//                 data-shown={password}
//               >
//                 {password ? <IconShown /> : <IconHidden />}
//               </ShowPassBtn>
//             </PassWrapper>
//             <ErrorMsg name="password" component="span" />
//           </InputWrapper>
//           <Btn type="submit">Sign up</Btn>
//         </FormContainer>
//       )}
//     </Formik>
//   );
// };

// export default Registration;

import { register } from 'redux/auth/auth';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Formik } from 'formik';
import { registerSchema } from 'schemas/registerSchema';
import {
  FormContainer,
  InputWrapper,
  Label,
  Input,
  Btn,
  ErrorMsg,
  IconHidden,
  IconShown,
  PassWrapper,
  ShowPassBtn,
} from './Registration.styled';

const initialValues = {
  username: '',
  email: '',
  password: '',
};

const Registration = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.username,
        email: values.email,
        password: values.password,
      })
    );

    resetForm();
  };

  const togglePassword = () => setPasswordShown(!passwordShown);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
    >
      {({ errors, touched }) => (
        <FormContainer>
          <InputWrapper>
            <Label htmlFor="username">Username:</Label>
            <Input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              placeholder={' '}
              data-error={errors.username && touched.username ? true : false}
            />
            <ErrorMsg name="username" component="span" />
          </InputWrapper>

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
                type={passwordShown ? 'text' : 'password'}
                name="password"
                id="password"
                autoComplete="off"
                placeholder={' '}
                data-error={errors.password && touched.password ? true : false}
              />

              <ShowPassBtn
                type="button"
                onClick={togglePassword}
                data-shown={passwordShown}
              >
                {passwordShown ? <IconShown /> : <IconHidden />}
              </ShowPassBtn>
            </PassWrapper>
            <ErrorMsg name="password" component="span" />
          </InputWrapper>
          <Btn type="submit">Sign up</Btn>
        </FormContainer>
      )}
    </Formik>
  );
};

export default Registration;