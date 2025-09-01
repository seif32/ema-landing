import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import AnimatedLogo from "../shared/AnimatedLogo";
import Chatbot from "../sections/chatbot/Chatbot";

export default function Layout() {
  return (
    <div
      //       className="relative flex flex-col min-h-screen bg-gradient-to-br to-[#FFFFFF] from-[#DFC4BE]
      //       scroll-smooth
      // "
      className="relative flex flex-col min-h-screen bg-stone-50
      scroll-smooth
"
    >
      <Chatbot />
      <AnimatedLogo />
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
