import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md';
import BottombarLink from "./BottombarLink";



function Bottombar() {
  return (
    <>
      {/* Bottom Bar For Mobile Start  */}
      <div className="bg-white border-t border-gray-200 fixed bottom-0 left-0 w-full z-50 flex items-center justify-between sm:hidden">
        <BottombarLink IconDefault={<AiOutlineHome size={22} />} linkText="Home" />
        <BottombarLink IconDefault={<MdOutlineExplore size={22} />} linkText="Explore" />
        {/* <BottombarLink IconDefault={AddCircleOutlineIcon size={22}} /> */}
        <BottombarLink
          IconDefault={<MdOutlineSubscriptions size={22} />}
          linkText="Subscriptions"
        />
        <BottombarLink IconDefault={<MdOutlineVideoLibrary size={22} />} linkText="Library" />
      </div>
      {/* Bottom Bar For Mobile End */}
    </>
  );
}

export default Bottombar;
