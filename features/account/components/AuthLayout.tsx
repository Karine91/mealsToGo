import { PropsWithChildren } from "react";

import { SafeAreaContainerView } from "@/components/SafeAreaContainer";
import AccountContainer from "@/features/account/components/AccountContainer/AccountContainer";
import BackBtn from "@/features/account/components/BackBtn";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <AccountContainer>
      <SafeAreaContainerView>
        <BackBtn />
        {children}
      </SafeAreaContainerView>
    </AccountContainer>
  );
};

export default AuthLayout;
