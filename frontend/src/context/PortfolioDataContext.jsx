import { createContext, useContext } from "react";
import usePortfolioData from "../hooks/usePortfolioData";

const PortfolioDataContext = createContext(null);

export const PortfolioDataProvider = ({ children }) => {
  const portfolioData = usePortfolioData();

  return <PortfolioDataContext.Provider value={portfolioData}>{children}</PortfolioDataContext.Provider>;
};

export const usePortfolioDataContext = () => {
  const context = useContext(PortfolioDataContext);

  if (!context) {
    throw new Error("usePortfolioDataContext must be used within PortfolioDataProvider");
  }

  return context;
};

export default PortfolioDataContext;
