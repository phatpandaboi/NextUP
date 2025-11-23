import { Routes, Route } from "react-router-dom";

import SplashPage from "../pages/SplashPage";
import HomePage from "../pages/HomePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/splash" element={<SplashPage />} />
    </Routes>
  );
}

export default AppRoutes;