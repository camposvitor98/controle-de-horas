import { Router } from "router";
import { GlobalWrapper } from "./GlobalWrapper";

export const App = () => {
  return (
    <GlobalWrapper>
      <Router />
    </GlobalWrapper>
  );
};
