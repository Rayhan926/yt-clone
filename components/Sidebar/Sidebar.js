import SidebarLink from "./SidebarLink";
import SidebarSubscription from "./SidebarSubscription";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SportsCricketIcon from "@material-ui/icons/SportsCricket";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";
import Bottombar from "./../Bottombar/Bottombar";
function Sidebar({ sideBarCollapse, children }) {
  return (
    <>
      <Bottombar />
      <div
        className={`hidden sm:block h-full overflow-hidden hover:overflow-auto thin_scrollbar ${
          sideBarCollapse
            ? "sideBarSmall min-w-[72px]"
            : "sideBarBig min-w-[240px]"
        }`}
      >
        <div>
          <ul className="py-2">
            <SidebarLink Icon={HomeIcon} linkText="Home" />
            <SidebarLink Icon={ExploreIcon} linkText="Explore" />
            <SidebarLink Icon={SubscriptionsIcon} linkText="Subscriptions" />
            {!sideBarCollapse && <li className="devider"></li>}
            <SidebarLink Icon={VideoLibraryIcon} linkText="Library" />

            {!sideBarCollapse && (
              <>
                <SidebarLink Icon={HistoryIcon} linkText="History" />
                <SidebarLink Icon={OndemandVideoIcon} linkText="Videos" />
                <SidebarLink Icon={WatchLaterIcon} linkText="Watch later" />
                <SidebarLink Icon={ThumbUpAltIcon} linkText="Liked videos" />
                <li className="devider"></li>
                <li className="sidebar_group_title p_x">Subscriptions</li>
                {[1, 2, 3, 4, 5].map((e) => (
                  <SidebarSubscription linkText="Thapa" key={e} />
                ))}
                <li className="devider"></li>
                <li className="sidebar_group_title p_x">More From Youtube</li>
                <SidebarLink Icon={SportsEsportsIcon} linkText="Gaming" />
                <SidebarLink Icon={LiveTvIcon} linkText="Live" />
                <SidebarLink Icon={SportsCricketIcon} linkText="Sport" />
                <li className="devider"></li>
                <SidebarLink Icon={SettingsIcon} linkText="Settings" />
                <SidebarLink Icon={FlagIcon} linkText="Report history" />
                <SidebarLink Icon={HelpIcon} linkText="Help" />
                <SidebarLink Icon={FeedbackIcon} linkText="Send feedback" />
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
