import { NavbarThemeBtn } from "@/features/NavbarThemeBtn";

const Navbar = () => {
  return (
    <nav className="px-4 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">OmdbMovies</div>

      <div className="flex space-x-4">
        <button className="bg-button text-white px-4 py-2 rounded">
          Фильмы
        </button>
        <NavbarThemeBtn />
      </div>
    </nav>
  );
};

export default Navbar;
