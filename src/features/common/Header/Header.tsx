import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CustomFlowbiteTheme, Flowbite, Navbar } from "flowbite-react";

// import HeaderInfoBlock from "../HeaderInfoBlock/HeaderInfoBlock";
// import Button from "../Button/Button";
import Searchbar from "../Searchbar/Searchbar";
import NavLinks from "../NavLinks/NavLinks";

import {
  closeNavBar,
  openAndCloseNavBar,
} from "../../../redux/reducers/toggleSlice";

import logo from "../../../assets/images/logowhite.png";
import Avatar from "../../../assets/icons/avatar.svg";
import BEConnectWallet from "../BEConnectWallet/BEConnectWallet";

interface HeaderProps { }

const HeaderThem: CustomFlowbiteTheme = {
  navbar: {
    root: {
      base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between ",
        fluid: {
          on: "",
          off: "container",
        },
      },
    },
    brand: {
      base: "flex items-center",
    },
    collapse: {
      base: "w-full md:block md:w-auto",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "block py-2 pr-4 pl-3 md:p-0",
      active: {
        on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
        off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      icon: "h-6 w-6 shrink-0",
    },
  },
};

const Header: FC<HeaderProps> = () => {
  // @ts-ignore
  const isNavBarOpen = useSelector((state) => state.toggle.isNavBarOpen);
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleNavBar = () => {
    dispatch(openAndCloseNavBar());
  };

  useEffect(() => {
    const handleScroll = () => {
      dispatch(closeNavBar());
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);
  return (
    <Flowbite theme={{ theme: HeaderThem }}>
      <header>
        <Navbar fluid rounded>
          <Navbar.Brand href="/">
            <img
              alt="joseon explorer logo"
              className="mr-3 h-7 sm:h-9"
              src={logo}
            />
          </Navbar.Brand>
          <div className="flex gap-1 md:hidden items-center">
            <div className="flex items-center ">
              <BEConnectWallet />
              <hr className="lg:block border border-be-navy-blue-100 h-8 mx-2 md:mx-6"></hr>
              <div className="lg:block  border border-be-navy-blue-100 rounded-lg p-2 hover:bg-red-100">
                <img className="w-4 h-4" src={Avatar} alt="avatar icon" />
              </div>
            </div>
            <Navbar.Toggle onClick={handleNavBar} />
          </div>

          <hr className="lg:block hidden border border-be-navy-blue-100 h-10 mx-3"></hr>

          <Navbar.Collapse
            className={`${isNavBarOpen ? "block" : "hidden md:block"
              } md:flex-1 w-full`}
          >
            <div className="flex justify-between items-center w-full">
              <div className="text-xs hidden lg:flex lg:flex-row md:flex-col flex-row gap-10">
                <div
                  className={`text-xs flex whitespace-nowrap ${currentPath === "/" ? "gap-10" : "flex-col "
                    }`}
                >
                  {/* <HeaderInfoBlock
                    path={currentPath}
                    label="Price"
                    value={
                      <>
                        <span className="text-blue-500 font-medium">
                          $438.34
                        </span>
                        <span className="text-green-500">(+ 2.34%)</span>
                      </>
                    }
                  />

                  <HeaderInfoBlock
                    path={currentPath}
                    label="Gas"
                    value={
                      <span className="text-blue-500 font-medium ">
                        26 Gwei
                      </span>
                    }
                  /> */}
                </div>
              </div>
              <div className="hidden lg:block">
                {currentPath !== "/" && (
                  <Searchbar
                    placeholder="Hash, Address, Tx, Block N°..."
                    sizes="small"
                    filter={false}
                  />
                )}
              </div>

              <nav className="flex md:gap-4 justify-start  md:justify-end lg:w-fit w-full ">
                <NavLinks />
                <div className="md:flex items-center hidden ">
                  <BEConnectWallet />
                  <hr className="lg:block hidden border border-be-navy-blue-100 h-8 mx-4"></hr>
                  <div className="lg:block hidden border border-be-navy-blue-100 rounded-lg p-2 hover:bg-red-100">
                    <img className="w-4 h-4" src={Avatar} alt="avatar icon" />
                  </div>
                </div>
              </nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
        <div className="lg:hidden  px-4 md:flex justify-center items-center md:justify-between w-full mt-1 mb-2 ">
          {currentPath !== "/" && (
            <Searchbar
              placeholder="Hash, Address, Tx, Block N°..."
              sizes="small"
              filter={false}
            />
          )}
          <div
            className={`text-xs md:flex whitespace-nowrap lg:hidden hidden  ${currentPath === "/" ? "gap-10 md:hidden" : "flex-col"
              }`}
          >
            {/* <HeaderInfoBlock
              path={currentPath}
              label="Price"
              value={
                <>
                  <span className="text-blue-500 font-medium">$438.34</span>
                  <span className="text-green-500">(+ 2.34%)</span>
                </>
              }
            />

            <HeaderInfoBlock
              path={currentPath}
              label="Gas"
              value={
                <span className="text-blue-500 font-medium ">26 Gwei</span>
              }
            /> */}
          </div>
        </div>
      </header>
    </Flowbite>
  );
};

export default Header;
