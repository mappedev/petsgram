import React from "react";

import { Logo } from "./components/Logo";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";

import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </React.Fragment>
  );
};
