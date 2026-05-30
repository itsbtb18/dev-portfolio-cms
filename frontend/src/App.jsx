import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PortfolioDataProvider } from "./context/PortfolioDataContext";
import { usePortfolioDataContext } from "./context/PortfolioDataContext";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ExperienceDetailPage from "./pages/ExperienceDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import CustomCursor from "./components/CustomCursor";
import ErrorBoundary from "./components/ErrorBoundary";

const AppRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<HomePageWrapper />} />
      <Route path="/projects/:id" element={<ProjectDetailPage />} />
      <Route path="/experience/:id" element={<ExperienceDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);

const HomePageWrapper = () => {
  const data = usePortfolioDataContext();

  return <HomePage data={data} />;
};

const App = () => (
  <PortfolioDataProvider>
    <BrowserRouter>
      <ErrorBoundary fallback={null}>
        <CustomCursor />
      </ErrorBoundary>
      <AppRoutes />
    </BrowserRouter>
  </PortfolioDataProvider>
);

export default App;
