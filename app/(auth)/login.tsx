import React from "react";

import AuthLayout from "@/features/account/components/AuthLayout";

import LoginForm from "@/features/account/components/LoginForm";

const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
