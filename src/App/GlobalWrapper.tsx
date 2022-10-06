import { ContextWrapper } from "contexts/ContextWrapper";
import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global";
import defaultTheme from "styles/themes/default";

type GlobalWrapperProps = {
  children: ReactElement | ReactElement[];
};

export const GlobalWrapper = (props: GlobalWrapperProps) => {
  const { children } = props;

  return (
    <ContextWrapper>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </ContextWrapper>
  );
};
