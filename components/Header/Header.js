import { useRouter } from "next/dist/client/router";
import Avatar from '../Avatar';
import Logo from "./../Logo";
import MobileHeaderIcon from "./MobileHeaderIcon";
import HeaderTags from "./HeaderTags";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import { getSession } from "./../../utils/localStorage";
import { IoMenuSharp, IoNotificationsOutline } from "react-icons/io5";
import { MdCast, MdOutlineVideoCall } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { IoIosNotificationsOutline, IoMdApps, IoMdMic } from 'react-icons/io';
function Header({ toggleSidebar }) {
  const auth = getSession("ytc-user");
  const dispatch = useDispatch();
  const [openDropDown, setOpenDropDown] = useState(false);
  const router = useRouter();
  const handleSideBar = () => {
    toggleSidebar((current) => {
      current ? toggleSidebar(false) : toggleSidebar(true);
    });
  };
  const handleDropDown = () => {
    openDropDown ? setOpenDropDown(false) : setOpenDropDown(true);
  };
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.id !== "headerAvatarClick") setOpenDropDown(false);
    });
  });

  return (
    <>
      <header className="hidden sm:flex">
        <div className="min-w-[240px] p_x flex_center justify-start py-3">
          <div className="icon_style" onClick={handleSideBar}>
            <IoMenuSharp />
          </div>
          <div
            className="w-24 ml-4 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Logo />
          </div>
        </div>
        <div className="w-full p_x pl-0">
          <div className="flex items-center py-3">
            {/* Search Form  */}
            <div className="flex-grow flex items-center h-8 px-20">
              <div className="flex-grow">
                <form className="w-full flex">
                  <input
                    className="flex-grow outline-none border border-gray-300 focus:border-gray-400 py-[3px] px-3 rounded-sm"
                    type="text"
                    placeholder="Search"
                  />
                  <button className="border border-l-0 text-gray-500 py-[3px] px-5 cursor-pointer bg-white border-gray-300">
                    <GoSearch />
                  </button>
                </form>
              </div>
              <div className="icon_style ml-2">
                <IoMdMic />
              </div>
            </div>

            {/* Header Right  Icons  */}
            <div className="flex space-x-4 items-center">
              <div className="icon_style">
                <MdOutlineVideoCall />
              </div>
              <div className="icon_style">
                <IoMdApps />
              </div>
              <div className="icon_style">
                <IoIosNotificationsOutline />
              </div>
              <div className="relative">
                {auth && (
                  <img
                    onClick={handleDropDown}
                    className="user_avatar rounded-full overflow-hidden cursor-pointer"
                    src={auth?.photoURL}
                    id="headerAvatarClick"
                  />
                )}
                {openDropDown && (
                  <ul className="absolute right-[120%] w-40 border border-gray-200 shadow-md top-0 bg-white z-20">
                    <li
                      onClick={() => {
                        dispatch(log_out());
                      }}
                      className="py-2 px-3 flex items-center cursor-pointer duration-150 hover:bg-gray-200 text-gray-600 hover:text-gray-900 group"
                    >
                      <FiLogOut
                        className="text-gray-600 group-hover:text-gray-800"
                        style={{ transition: "150ms" }}
                      />
                      <span className="ml-2">Sign Out</span>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header --Start-- */}
      <header className="sm:hidden fixed top-0 left-0 w-full bg-white z-50">
        <div className="flex justify-between items-center px-4 py-1.5 border-b border-gray-200">
          <div className="w-24 cursor-pointer" onClick={() => router.push("/")}>
            <Logo />
          </div>
          <div className="flex_center space-x-4">
            <MobileHeaderIcon IconCompo={MdCast} />
            <MobileHeaderIcon IconCompo={IoNotificationsOutline} />
            <MobileHeaderIcon IconCompo={GoSearch} />
            <Avatar className="icon_style user_avatar" src="/img/me.jpg" />
          </div>
        </div>
        <div className="px-4 border-b border-gray-200">
          <HeaderTags className="px-0 border-b-0 py-2" />
        </div>
      </header>
      {/* Mobile Header --End-- */}
    </>
  );
}

export default Header;
