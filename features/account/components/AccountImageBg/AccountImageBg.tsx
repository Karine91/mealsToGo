import React, { PropsWithChildren } from "react";

import { AccountCover, BackgroundImageCover } from "./styles";

const AccountImageBg = ({ children }: PropsWithChildren) => {
  return (
    <BackgroundImageCover>
      <AccountCover />
      {children}
    </BackgroundImageCover>
  );
};

export default AccountImageBg;
