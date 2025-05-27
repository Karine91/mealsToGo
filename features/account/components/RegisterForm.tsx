import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextInput } from "react-native-paper";

import { AuthContext } from "@/services/auth/auth.context";

import { InputsWrapper, FormButton, HelperTextStyled } from "./form.styles";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const { onSignUp, isLoading, error } = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    onSignUp(data.email.trim(), data.password.trim());
  };

  return (
    <>
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

        <Controller
          control={control}
          rules={{
            required: "Password is required!",
            validate: {
              matchPassword: (v) => {
                const values = getValues();
                return v === values.password;
              },
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Confirm password"
              textContentType="password"
              autoCapitalize="none"
              secureTextEntry
              autoCorrect={false}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              error={!!errors.confirmPassword}
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword &&
          errors.confirmPassword.type === "required" && (
            <HelperTextStyled type="error">
              {errors.confirmPassword.message}
            </HelperTextStyled>
          )}
        {errors.confirmPassword &&
          errors.confirmPassword.type === "matchPassword" && (
            <HelperTextStyled type="error">
              Passwords do not match.
            </HelperTextStyled>
          )}
      </InputsWrapper>
      <FormButton
        onPress={handleSubmit(onSubmit)}
        loading={isLoading}
        mode="contained"
        icon="email-outline"
      >
        sign up
      </FormButton>
    </>
  );
};

export default RegisterForm;
