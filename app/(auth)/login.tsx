import React, { useEffect } from "react";

import AuthLayout from "@/features/account/components/AuthLayout";
import LoginForm from "@/features/account/components/LoginForm";

const Login = () => {
  return (
    <AuthLayout title="Login">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
