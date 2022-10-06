import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "pages/home";

import { path } from "./Paths";

type RouterProps = {};

export function Router(props: RouterProps) {
  const {} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={path.HOME} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
