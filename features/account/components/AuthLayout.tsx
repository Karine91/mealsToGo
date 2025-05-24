import { PropsWithChildren } from "react";

import { SafeAreaContainerView } from "@/components/SafeAreaContainer";
import { Text } from "@/components/Typography";
import AccountContainer from "@/features/account/components/AccountContainer/AccountContainer";
import BackBtn from "@/features/account/components/BackBtn";

import { PageContainer, LoginFormContainer } from "./form.styles";

const AuthLayout = ({
  children,
  title,
}: PropsWithChildren & { title: string }) => {
  return (
    <AccountContainer>
      <SafeAreaContainerView>
        <BackBtn />
        <PageContainer>
          <LoginFormContainer>
            <Text variant="heading" headingSize="h4">
              {title}
            </Text>
            {children}
          </LoginFormContainer>
        </PageContainer>
      </SafeAreaContainerView>
    </AccountContainer>
  );
};

export default AuthLayout;
