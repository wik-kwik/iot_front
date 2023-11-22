// src/components/LoginForm.js
import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import {
  LoginFormContainer,
  InputContainer,
  LoginInput,
  PasswordInput,
  LoginButton,
  RegisterButton,
  ButtonContainer,
  LogoContainer,
  LogoImage,
  FormContent,
  FormLabel,
  FormWrapper,
  FormInput,
  Form,
  CreateAccountText,
  RememberMeCheckbox,
  RememberMeContainer,
  RememberMeLabel,
  ForgotPasswordLink,
  RememberOrForgotPasswordContainer,
  EyeIconContainer,
  EyeIcon,
  PasswordContainer
} from './LoginFormElements';
import logoBig from '../../images/logo_big.png';

export const LoginForm = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  // const [type, setType] = useState('password');
  // const [icon, setIcon] = useState(eyeOff);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [showPassword, setShowPassword] = useState(false); // Define showPassword state

  const handleToggle = () => {
    setType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    setShowPassword((prevShowPassword) => !prevShowPassword);
    setIcon((prevIcon) => (prevIcon === eyeOff ? eye : eyeOff));
  };

  const handleLogin = () => {
    // Handle login logic here
    //alert('Login clicked');
    alert(`Login clicked with username: ${username}, password: ${password}, Remember me: ${rememberMe}`);
  };

  return (
    <LoginFormContainer>
      {/* <LoginTitle>Login</LoginTitle> */}
      <LogoContainer>
        <LogoImage src={logoBig} alt="Restock" />
      </LogoContainer>
      <InputContainer>
        <FormWrapper>
          <FormContent>
            <Form>
              <FormLabel>Login</FormLabel>
              <LoginInput htmlFor='login' id="login" type="text" value={username} onChange={(e => setUsername(e.target.value))} />
              <FormLabel>Password</FormLabel>
              <PasswordContainer>
                <PasswordInput
                  htmlFor='password'
                  type={type}
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  showPassword={showPassword} // Check if this prop is used in the PasswordInput component
                />
                <EyeIconContainer onClick={handleToggle}>
                  <EyeIcon icon={icon} size={20} />
                </EyeIconContainer>
              </PasswordContainer>
              <RememberMeContainer>
              <RememberOrForgotPasswordContainer>
                <RememberMeCheckbox
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                {/* <FormLabel htmlFor="rememberMe">Remember me</FormLabel> */}
                <RememberMeLabel htmlFor="rememberMe">Remember me</RememberMeLabel>
                </RememberOrForgotPasswordContainer>
               <ForgotPasswordLink>Forgot password?</ForgotPasswordLink>
              </RememberMeContainer>
              <ButtonContainer>
                <LoginButton onClick={handleLogin}>Login</LoginButton>
                {/* <RegisterButton>Register</RegisterButton> */}
                <CreateAccountText>Create an account</CreateAccountText>
              </ButtonContainer>
            </Form>
          </FormContent>
        </FormWrapper>
      </InputContainer>

    </LoginFormContainer>
  );
};

export default LoginForm;
