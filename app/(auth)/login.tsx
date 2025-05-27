import React, { useEffect } from "react";

import AuthLayout from "@/features/account/components/AuthLayout";
import LoginForm from "@/features/account/components/LoginForm";
import { login } from "@/services/auth/auth.service";

const Login = () => {
  // useEffect(() => {
  //   login("test@test.com", "password123!")
  //     .then((user) => {
  //       console.log(user);
  //     })
  //     .catch((err) => {
  //       console.log(err.toString());
  //     });
  // }, []);
  return (
    <AuthLayout title="Login">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
