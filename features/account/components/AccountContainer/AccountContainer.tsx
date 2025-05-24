import React, { PropsWithChildren } from "react";

import { AccountCover, BackgroundImageCover } from "./styles";

const AccountContainer = ({ children }: PropsWithChildren) => {
  return (
    <BackgroundImageCover>
      <AccountCover />
      {children}
    </BackgroundImageCover>
  );
};

export default AccountContainer;
