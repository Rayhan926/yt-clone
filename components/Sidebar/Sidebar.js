import SidebarLink from "./SidebarLink";
import SidebarSubscription from "./SidebarSubscription";
import Bottombar from "./../Bottombar/Bottombar";

import { AiOutlineHome } from 'react-icons/ai'
import { MdHistory, MdOutlineExplore, MdOutlineFeedback, MdOutlineLiveTv, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater } from 'react-icons/md'
import { RiVideoLine } from 'react-icons/ri';
import { FiThumbsUp } from 'react-icons/fi';
import { IoGameControllerOutline, IoHelpCircleOutline, IoSettingsOutline } from 'react-icons/io5';
import { BsBroadcast, BsFlag, BsTrophy } from 'react-icons/bs';
function Sidebar({ sideBarCollapse, children }) {
  return (
    <>
      <Bottombar />
      <div
        className={`hidden sm:block h-full overflow-hidden hover:overflow-auto thin_scrollbar ${sideBarCollapse
          ? "sideBarSmall min-w-[72px]"
          : "sideBarBig min-w-[240px]"
          }`}
      >
        <div>
          <ul className="py-2">
            <SidebarLink Icon={<AiOutlineHome />} linkText="Home" />
            <SidebarLink Icon={<MdOutlineExplore />} linkText="Explore" />
            <SidebarLink Icon={<MdOutlineSubscriptions />} linkText="Subscriptions" />
            {!sideBarCollapse && <li className="devider"></li>}
            <SidebarLink Icon={<MdOutlineVideoLibrary />} linkText="Library" />

            {!sideBarCollapse && (
              <>
                <SidebarLink Icon={<MdHistory />} linkText="History" />
                <SidebarLink Icon={<RiVideoLine />} linkText="Videos" />
                <SidebarLink Icon={<MdOutlineWatchLater />} linkText="Watch later" />
                <SidebarLink Icon={<FiThumbsUp />} linkText="Liked videos" />
                <li className="devider"></li>
                <li className="sidebar_group_title p_x">Subscriptions</li>
                {[1, 2, 3, 4, 5].map((e) => (
                  <SidebarSubscription linkText="Thapa" key={e} />
                ))}
                <li className="devider"></li>
                <li className="sidebar_group_title p_x">More From Youtube</li>
                <SidebarLink Icon={<IoGameControllerOutline />} linkText="Gaming" />
                <SidebarLink Icon={<BsBroadcast />} linkText="Live" />
                <SidebarLink Icon={<BsTrophy />} linkText="Sport" />
                <li className="devider"></li>
                <SidebarLink Icon={<IoSettingsOutline />} linkText="Settings" />
                <SidebarLink Icon={<BsFlag />} linkText="Report history" />
                <SidebarLink Icon={<IoHelpCircleOutline />} linkText="Help" />
                <SidebarLink Icon={<MdOutlineFeedback />} linkText="Send feedback" />
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
