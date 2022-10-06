import { ContextWrapper } from "contexts/ContextWrapper";
import { ReactElement } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ThemeProvider theme={defaultTheme}>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ContextWrapper>
  );
};
