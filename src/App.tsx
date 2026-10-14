import { Routes, Route } from "react-router-dom";
import { ApplicationsPage } from "./pages/ApplicationsPage.tsx";
import ApplicationPage from "./pages/ApplicationPage.tsx";
import { NewApplicationPage } from "./pages/NewApplicationPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ApplicationsPage />} />
      <Route path="/applications/:id" element={<ApplicationPage />} />
      <Route path="/new" element={<NewApplicationPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
