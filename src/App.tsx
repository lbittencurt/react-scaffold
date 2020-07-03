import React from "react";

import "./App.less";
import { MainLayout } from "./core/react/components/main-layout";
import { HomePage } from "./modules/home/pages/home-page";

const App: React.FC = () => (
  <MainLayout>
    <HomePage />
  </MainLayout>
);

export default App;
