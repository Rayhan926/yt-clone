import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import BottombarLink from "./BottombarLink";
function Bottombar() {
  return (
    <>
      {/* Bottom Bar For Mobile Start  */}
      <div className="bg-white border-t border-gray-200 fixed bottom-0 left-0 w-full z-50 flex items-center justify-between sm:hidden">
        <BottombarLink IconDefault={HomeIcon} linkText="Home" />
        <BottombarLink IconDefault={ExploreIcon} linkText="Explore" />
        <BottombarLink IconDefault={AddCircleOutlineIcon} />
        <BottombarLink
          IconDefault={SubscriptionsIcon}
          linkText="Subscriptions"
        />
        <BottombarLink IconDefault={VideoLibraryIcon} linkText="Library" />
      </div>
      {/* Bottom Bar For Mobile End */}
    </>
  );
}

export default Bottombar;
