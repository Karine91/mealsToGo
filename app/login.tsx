import React from "react";

import { SafeAreaContainerView } from "@/components/SafeAreaContainer";
import AccountImageBg from "@/features/account/components/AccountImageBg/AccountImageBg";
import BackBtn from "@/features/account/components/BackBtn";
import LoginForm from "@/features/account/components/LoginForm/LoginForm";

const Login = () => {
  return (
    <AccountImageBg>
      <SafeAreaContainerView>
        <BackBtn />
        <LoginForm />
      </SafeAreaContainerView>
    </AccountImageBg>
  );
};

export default Login;
