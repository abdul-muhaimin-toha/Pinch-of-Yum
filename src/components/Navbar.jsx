import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-8xl  mx-auto  px-4 py-12">
        <div className="flex items-center justify-between">
          <div>
            <a
              href="#"
              className="text-3xl font-bold text-sky-800 duration-100 hover:text-sky-900"
            >
              Pinch of Yum
            </a>
          </div>
          <ul className="flex items-center justify-center gap-12 text-slate-500 duration-100 hover:text-sky-900 ">
            <a href="#">Home</a>
            <a href="#">Recipe</a>
            <a href="#">About</a>
            <a href="#">Search</a>
          </ul>
          <div className="flex items-center justify-center gap-4">
            <div className="bg- text-md flex items-center justify-center gap-1 rounded-full bg-slate-200 px-4 py-1 text-slate-500">
              <IoMdSearch className="text-xl duration-100 hover:text-sky-900" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent p-2 text-slate-500 outline-none"
              />
            </div>
            <div className="bg rounded-full bg-sky-800 p-2 text-3xl text-white duration-100 hover:bg-sky-900">
              <button className="flex items-center justify-center">
                <CgProfile />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
