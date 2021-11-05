import Avatar from "../Avatar";
import Link from "next/link";
function SidebarLink({ linkText }) {
  return (
    <li>
      <Link href="#">
        <a className="sidebar_link_li p_x py-1">
          <div className="icon_style hover_none">
            <Avatar
              className="icon_style subscription_avatar"
              src="/img/me.jpg"
            />
          </div>
          <span className="ml-4 text-sm text-gray-900">
            {linkText || "Link Text"}
          </span>
        </a>
      </Link>
    </li>
  );
}

export default SidebarLink;
