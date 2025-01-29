// Routes.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Authenticator from "./pages/Authenticator"; // Authenticator page
import NotFoundPage from "./pages/NotFoundPage";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        {/* Login is displayed only at the root path */}
        <Route index element={<LoginPage />} />

        {/* Authenticator page */}
        <Route path="verify" element={<Authenticator />} />

        {/* For 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
