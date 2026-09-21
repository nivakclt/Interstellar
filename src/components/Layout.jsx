import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import SpaceBackground from "./SpaceBackground";

function Layout() {
  return (
    <div className="site-shell">

      <SpaceBackground />

      <Header />

      <main className="page-content">

        <PageTransition>
          <Outlet />
        </PageTransition>

      </main>

      <Footer />

    </div>
  );
}


export default Layout;