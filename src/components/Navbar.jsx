import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav>
      <div className="mx-auto  max-w-8xl  px-2 md:px-4 ">
        <div className="flex items-center justify-between  gap-2 py-8 md:py-12">
          <div>
            <a href="#">
              <img
                src="/pinch-of-yum-logo.png"
                alt="Pinch of yum logo"
                className="w-40 max-w-60 lg:max-w-52"
              />
            </a>
          </div>
          <ul className="hidden items-center justify-center gap-8 text-slate-500 duration-100 hover:text-sky-900 lg:flex lg:gap-6">
            <a href="#">Home</a>
            <a href="#">Recipe</a>
            <a href="#">About</a>
            <a href="#">Search</a>
          </ul>
          <div className="flex items-center justify-center gap-4">
            <div className=" text-md hidden items-center justify-center gap-1 rounded-full bg-slate-200 px-4  py-1 text-slate-500 lg:flex lg:px-3">
              <IoMdSearch className="text-xl duration-100 hover:text-sky-900" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent p-2 text-slate-500 outline-none"
              />
            </div>
            <div className="bg rounded-full bg-sky-800 p-2 text-3xl text-white duration-200 hover:bg-sky-900">
              <button className="flex items-center justify-center">
                <CgProfile />
              </button>
            </div>
            <div className="drawer lg:drawer-open lg:hidden">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />

              <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="p-1 text-4xl lg:hidden">
                  <IoMdMenu />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-2"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
                  {/* Sidebar content here */}
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Recipe</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Search</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
