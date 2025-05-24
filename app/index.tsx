import React from "react";

import { Text } from "@/components/Typography";
import Account from "@/features/account/components/Account/Account";
import AccountContainer from "@/features/account/components/AccountContainer/AccountContainer";

const AccountPage = () => {
  return (
    <AccountContainer>
      <Text variant="heading">Meals To Go</Text>
      <Account />
    </AccountContainer>
  );
};

export default AccountPage;
