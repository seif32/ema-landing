import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div
      className="flex flex-col min-h-screen bg-gradient-to-br to-[#FFFFFF] from-[#DFC4BE]
      scroll-smooth
"
    >
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
