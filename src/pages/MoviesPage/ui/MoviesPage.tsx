import { MoviesSearch } from "@/features/MoviesSearch";
import { Navbar } from "@/widgets/Navbar";

const MoviesPage = () => {
  return (
    <>
      <Navbar />
      <MoviesSearch />
    </>
  );
};

export default MoviesPage;
