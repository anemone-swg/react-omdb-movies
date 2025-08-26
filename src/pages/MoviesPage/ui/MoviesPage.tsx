import { Navbar } from "@/widgets/Navbar";
import { Outlet } from "react-router-dom";

const MoviesPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen px-4 py-8">
        <Outlet />
      </div>
    </>
  );
};

export default MoviesPage;
