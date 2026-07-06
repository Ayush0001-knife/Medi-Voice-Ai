import LandingPage from "./Interfaces/LandingPage";
import AuthPage from "./Interfaces/AuthPage";
import { Routes, Route } from "react-router-dom";
import MainDashboard from "./Interfaces/MainDashboard";
import Cursor from "./components/cursor";
import LiveConsultation from "./Interfaces/LiveConsultation";

const App = () => {
  return (
    <>
      <Cursor />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/live" element={<LiveConsultation />} />
      </Routes>
    </>
  );
};

export default App;
