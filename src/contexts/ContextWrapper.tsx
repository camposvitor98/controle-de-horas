import { ReactElement } from "react";
import { ComposeContexts } from "./ComposeContexts";
import { PunchCardProvider } from "./PunchCard";

type ContextWrapperProps = {
  children: ReactElement | ReactElement[];
};

export const ContextWrapper = (props: ContextWrapperProps) => {
  const { children } = props;

  return (
    <ComposeContexts contexts={[PunchCardProvider]}>{children}</ComposeContexts>
  );
};
