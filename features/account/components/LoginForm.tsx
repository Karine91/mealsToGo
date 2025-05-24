import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextInput } from "react-native-paper";

import { Text } from "@/components/Typography";
import { AuthContext } from "@/services/auth/auth.context";

import {
  PageContainer,
  LoginFormContainer,
  InputsWrapper,
  FormButton,
  HelperTextStyled,
} from "./form.styles";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { onLogin, isLoading, error } = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    onLogin(data.email.trim(), data.password.trim());
  };

  return (
    <PageContainer>
      <LoginFormContainer>
        <Text variant="heading" headingSize="h4">
          Login
        </Text>
        <InputsWrapper>
          {error && <HelperTextStyled type="error">{error}</HelperTextStyled>}
          <Controller
            control={control}
            rules={{
              required: "Email address is required.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email address is invalid.",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Email"
                textContentType="emailAddress"
                inputMode="email"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                error={!!errors.email}
              />
            )}
            name="email"
          />

          {errors.email && (
            <HelperTextStyled type="error">
              {errors.email.message}
            </HelperTextStyled>
          )}

          <Controller
            control={control}
            rules={{
              required: "Password is required!",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Password"
                textContentType="password"
                autoCapitalize="none"
                secureTextEntry
                autoCorrect={false}
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                error={!!errors.password}
              />
            )}
            name="password"
          />
          {errors.password && (
            <HelperTextStyled type="error">
              {errors.password.message}
            </HelperTextStyled>
          )}
        </InputsWrapper>
        <FormButton
          onPress={handleSubmit(onSubmit)}
          loading={isLoading}
          mode="contained"
          icon="lock-open-outline"
        >
          Login
        </FormButton>
      </LoginFormContainer>
    </PageContainer>
  );
};

export default LoginForm;
