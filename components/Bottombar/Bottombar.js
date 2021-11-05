import BottombarLink from "./BottombarLink";

import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md'


function Bottombar() {
  return (
    <>
      {/* Bottom Bar For Mobile Start  */}
      <div className="bg-white border-t border-gray-200 fixed bottom-0 left-0 w-full z-50 flex items-center justify-between sm:hidden">
        <BottombarLink IconDefault={<AiOutlineHome />} linkText="Home" />
        <BottombarLink IconDefault={<MdOutlineExplore />} linkText="Explore" />
        {/* <BottombarLink IconDefault={AddCircleOutlineIcon} /> */}
        <BottombarLink
          IconDefault={<MdOutlineSubscriptions />}
          linkText="Subscriptions"
        />
        <BottombarLink IconDefault={<MdOutlineVideoLibrary />} linkText="Library" />
      </div>
      {/* Bottom Bar For Mobile End */}
    </>
  );
}

export default Bottombar;
