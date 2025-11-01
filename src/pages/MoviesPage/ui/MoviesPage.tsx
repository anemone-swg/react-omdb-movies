import { Navbar } from "@/widgets/Navbar";
import { Outlet } from "react-router-dom";

const MoviesPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-8">
        <Outlet />
      </main>
    </>
  );
};

export default MoviesPage;
