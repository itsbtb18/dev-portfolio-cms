import { Link } from "react-router-dom";
import PortfolioLayout from "../components/PortfolioLayout";
import { usePortfolioDataContext } from "../context/PortfolioDataContext";

const NotFoundPage = () => {
  const data = usePortfolioDataContext();

  return (
    <PortfolioLayout profile={data.profile}>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl">
          <h1 className="text-3xl font-semibold text-white">Page not found</h1>
          <p className="mt-3 text-sm text-white/65">The page you requested is not available in this portfolio.</p>
          <Link to="/" className="mt-6 inline-flex rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950">
            Return Home
          </Link>
        </div>
      </section>
    </PortfolioLayout>
  );
};

export default NotFoundPage;
