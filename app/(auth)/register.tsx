import React from "react";

import AuthLayout from "@/features/account/components/AuthLayout";
import RegisterForm from "@/features/account/components/RegisterForm";

const Register = () => {
  return (
    <AuthLayout title="Sign up">
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
