import Link from "next/link";
function SidebarLink({ Icon, linkText }) {
  return (
    <li>
      <Link href="#">
        <a className="sidebar_link_li p_x py-1">
          <div className="flex flex-col justify-start">
            <div className="icon_style side_bar_icon hover_none">
              {/* {Icon ? <Icon /> : <NotificationsIcon />} */}
              {Icon}
            </div>
            <span className="text-[10px] small_link_text text-center">
              {linkText || "Link Text"}
            </span>
          </div>
          <span className="ml-4 text-sm big_link_text text-gray-900">
            {linkText || "Link Text"}
          </span>
        </a>
      </Link>
    </li>
  );
}

export default SidebarLink;
