import React from "react";

import { SafeAreaContainerView } from "@/components/SafeAreaContainer";
import AccountImageBg from "@/features/account/components/AccountImageBg/AccountImageBg";
import LoginForm from "@/features/account/components/LoginForm/LoginForm";

const Login = () => {
  return (
    <AccountImageBg>
      <SafeAreaContainerView>
        <LoginForm />
      </SafeAreaContainerView>
    </AccountImageBg>
  );
};

export default Login;
