import React, { useEffect, useRef, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { FaPlus, FaBars } from "react-icons/fa";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import SearchBar from "../Search/SearchBar";
import FavoriteMenu from "../Favorite/FavoriteMenu";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavData, sendFavData } from "../../store/favorite-actions";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const navRef = useRef();
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite);

  useEffect(() => {
    dispatch(fetchFavData());
  }, [dispatch]);

  useEffect(() => {
    if (favorite.changed) {
      dispatch(sendFavData(favorite));
    }
  }, [favorite, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      setIsToggle(false);
    };

    window.addEventListener("scroll", handleScroll);
  }, [isToggle]);

  return (
    <nav className="flex items-center justify-between text-white font-bold shadow-xl bg-[#f56040] w-full px-4 h-16 z-10 lg:px-16">
      <div className="flex items-center gap-2">
        <div className="lg:hidden" onClick={() => setIsToggle((prev) => !prev)}>
          <FaBars className="w-7 h-7" />
        </div>
        <Link to="/">
          <img src={Logo} alt="logo" className="w-48 h-[51px]" />
        </Link>
        <ul
          ref={navRef}
          className={`flex flex-col lg:flex-row absolute lg:static lg:text-white py-4 px-4 drop-shadow-xl text-[#f56040] w-full -z-10 lg:z-0 lg:w-auto ${
            isToggle ? "top-[64px]" : "-top-96"
          } left-0 duration-300 gap-y-6 bg-white lg:bg-transparent lg:gap-10`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2" : "undefined"
              }
              to="/foods"
            >
              Foods
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2" : undefined
              }
              to="/drinks"
            >
              Drink
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2" : undefined
              }
              to="/desserts"
            >
              Desserts
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2" : undefined
              }
              to="/random-recipe"
            >
              Random
            </NavLink>
          </li>
          <Link
            to={"/new-recipe"}
            className="flex lg:hidden gap-1 justify-center items-center w-full rounded-lg mx-auto text-white px-2 py-2 bg-[#f56040] hover:bg-[#f56040]/95"
          >
            <FaPlus /> Create Recipe
          </Link>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <SearchBar />
        {/* <button className="bg-white text-[#f56040] px-5 py-[8px] rounded-2xl">
          Add To Pantry
        </button> */}
        <Link
          to={"/new-recipe"}
          className="hidden lg:flex whitespace-nowrap items-center gap-1 mr-2 bg-white text-[#f56040] px-5 py-[8px] rounded-2xl"
        >
          <FaPlus /> Create Recipe
        </Link>
        <FavoriteMenu />
        <div className="flex items-center gap-2">
          <BiUserCircle className="w-10 h-10" />
          <span className="hidden lg:flex items-center">
            My Kitchen <BsFillCaretDownFill />
          </span>
        </div>
      </div>
      {isToggle && (
        <div
          onClick={() => setIsToggle(false)}
          className="bg-black/30 fixed -z-20 top-0 left-0 w-screen h-screen lg:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
