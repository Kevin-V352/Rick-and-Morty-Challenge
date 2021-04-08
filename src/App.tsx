import React, { FC } from "react";
import NavBar from "./components/nav-bar/nav-bar";
import Results from "./components/results/results";
import GlobalStyles from "./shared/styles";
import { Route } from "react-router-dom";
import IndividualCharacter from "./components/individual-character/individual-character";
import PageSelector from "./components/page-selector/page-selector";

const App: FC = (): JSX.Element => {
  return (
    <>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Results} />
      <Route
        exact
        path="/character/:characterId"
        component={IndividualCharacter}
      />
      <Route exact path="/" component={PageSelector} />
      <GlobalStyles />
    </>
  );
};

export default App;
