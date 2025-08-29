import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router"; // 👈 Add useNavigate
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogo from "../shared/AnimatedLogo";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

function Header() {
  const [currentText, setCurrentText] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // 👈 Add navigate hook

  const navItems = [
    { id: "components", label: "Components", type: "scroll" },
    { id: "services", label: "Services", type: "scroll" },
    { id: "white-label", label: "White Label", type: "scroll" },
    { id: "pricing", label: "Pricing", type: "scroll" },
    { id: "partner", label: "Partner", type: "scroll" },
    { id: "/news", label: "News", type: "route" },
    { id: "https://emalyami.wordpress.com/", label: "Blog", type: "external" },
  ];

  const textOptions = ["eMa", "eMalyami"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textOptions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // 👈 Smart navigation handler
  const handleScrollNavigation = (sectionId, isMobile = false) => {
    if (isMobile) setIsDrawerOpen(false);

    // If we're already on home page, just scroll
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // If we're on a different page, navigate home first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Small delay to ensure navigation completes
    }
  };

  // 👈 Enhanced nav item renderer
  const renderNavItem = (item, isMobile = false) => {
    const baseClasses = isMobile
      ? "flex items-center justify-center px-4 py-3 text-gray-700 hover:text-[#AF6553] hover:bg-gray-50 rounded-lg transition-all duration-200 cursor-pointer font-medium border border-gray-100"
      : "text-gray-700 hover:text-[#AF6553] font-medium transition-colors duration-200 cursor-pointer relative group";

    const underlineClasses = !isMobile
      ? "absolute bottom-0 left-0 w-0 h-0.5 bg-[#AF6553] transition-all duration-300 group-hover:w-full"
      : "";

    // 🌐 External links
    if (item.type === "external") {
      return (
        <a
          key={item.id}
          href={item.id}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          onClick={() => isMobile && setIsDrawerOpen(false)}
        >
          {item.label}
          {!isMobile && <span className={underlineClasses}></span>}
        </a>
      );
    }

    // 🔗 Route navigation (React Router)
    if (item.type === "route") {
      return (
        <Link
          key={item.id}
          to={item.id}
          className={`${baseClasses} ${
            location.pathname === item.id ? "text-[#AF6553]" : ""
          }`}
          onClick={() => isMobile && setIsDrawerOpen(false)}
        >
          {item.label}
          {!isMobile && <span className={underlineClasses}></span>}
        </Link>
      );
    }

    // 📜 Smart scroll navigation
    if (item.type === "scroll") {
      // If we're on home page, use ScrollLink for smooth behavior
      if (location.pathname === "/") {
        return (
          <ScrollLink
            key={item.id}
            to={item.id}
            smooth={true}
            duration={500}
            offset={-80}
            className={baseClasses}
            onClick={() => isMobile && setIsDrawerOpen(false)}
          >
            {item.label}
            {!isMobile && <span className={underlineClasses}></span>}
          </ScrollLink>
        );
      } else {
        // If we're on a different page, use button with smart navigation
        return (
          <button
            key={item.id}
            className={baseClasses}
            onClick={() => handleScrollNavigation(item.id, isMobile)}
          >
            {item.label}
            {!isMobile && <span className={underlineClasses}></span>}
          </button>
        );
      }
    }

    return null;
  };

  return (
    <header className="fixed z-50 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 xl:left-12 xl:right-12 top-4 sm:top-6">
      <div className="border rounded-full shadow-lg backdrop-blur-sm border-gray-200/50">
        <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-16">
            {/* Logo with Animated Text */}
            <Link
              to="/"
              className="flex items-center transition-colors duration-200 cursor-pointer"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
                <AnimatedLogo
                  containerClassName="block w-full h-full"
                  showSlogan={false}
                  logoSize="w-full h-full"
                  className=""
                />
              </div>

              <div className="relative flex items-center ml-3">
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: "140px",
                    height: "40px",
                    perspective: "1000px",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentText}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute left-0 text-2xl font-bold tracking-tight text-black transform -translate-y-1/2 top-1/2 lg:text-3xl whitespace-nowrap"
                    >
                      {textOptions[currentText]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="items-center hidden space-x-8 lg:flex">
              {navItems.map((item) => renderNavItem(item, false))}

              <Button
                className="bg-[#AF6553] text-white px-6 py-2 rounded-full hover:bg-[#844b3d] transition-colors duration-200 cursor-pointer font-medium"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.emalyami.mobile&hl=en",
                    "_blank"
                  )
                }
              >
                Get Started
              </Button>
            </nav>

            {/* Mobile Drawer */}
            <Drawer
              open={isDrawerOpen}
              onOpenChange={setIsDrawerOpen}
              direction="right"
            >
              <DrawerTrigger asChild>
                <button
                  className="p-2 transition-colors duration-200 rounded-md lg:hidden"
                  style={{ color: "#AF6553" }}
                  aria-label="Toggle menu"
                >
                  <Menu size={24} />
                </button>
              </DrawerTrigger>

              <DrawerContent className="h-[100vh] w-[320px] right-0 left-auto">
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle className="text-center text-[#AF6553]">
                      Navigation Menu
                    </DrawerTitle>
                  </DrawerHeader>

                  <div className="p-4 pb-0">
                    <div className="space-y-3">
                      {navItems.map((item) => renderNavItem(item, true))}
                    </div>

                    {/* Get Started Button */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <Button
                        className="w-full bg-[#AF6553] text-white px-6 py-3 rounded-full hover:bg-[#844b3d] transition-colors duration-200 cursor-pointer font-medium"
                        onClick={() => {
                          window.open(
                            "https://play.google.com/store/apps/details?id=com.emalyami.mobile&hl=en",
                            "_blank"
                          );
                          setIsDrawerOpen(false);
                        }}
                      >
                        Get Started 🚀
                      </Button>
                    </div>

                    {/* Close Button */}
                    <div className="mt-4">
                      <DrawerClose asChild>
                        <Button variant="outline" className="w-full">
                          Close Menu
                        </Button>
                      </DrawerClose>
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
