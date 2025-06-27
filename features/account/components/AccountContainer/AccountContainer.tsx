import React, { PropsWithChildren } from "react";

import {
  AccountCover,
  BackgroundImageCover,
  AccountCenteredContainer,
} from "./styles";

const AccountContainer = ({ children }: PropsWithChildren) => {
  return (
    <BackgroundImageCover>
      <AccountCover />
      <AccountCenteredContainer>{children}</AccountCenteredContainer>
    </BackgroundImageCover>
  );
};

export default AccountContainer;
