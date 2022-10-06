import { ReactElement } from "react";

type ContextWrapperProps = {
  children: ReactElement | ReactElement[];
};

export const ContextWrapper = (props: ContextWrapperProps) => {
  const { children } = props;

  return <>{children}</>;
};
