import Header from "./../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import MainScreen from "../Screen/MainScreen";
function Layout({ children, withTopCategory, withSideBarCollapse }) {
  const [sideBarCollapse, setSideBarCollapse] = useState(
    withSideBarCollapse || false
  );
  return (
    <>
      <div className="flex flex-col h-full">
        <Header toggleSidebar={setSideBarCollapse} />
        <section className="flex overflow-hidden h-full">
          <Sidebar sideBarCollapse={sideBarCollapse} />
          <MainScreen withTopCategory={withTopCategory}>{children}</MainScreen>
        </section>
      </div>
    </>
  );
}

export default Layout;
