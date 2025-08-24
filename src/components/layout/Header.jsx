import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogo from "../shared/AnimatedLogo";
import { Button } from "../ui/button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { id: "components", label: "Components" },
    { id: "services", label: "Services" },
    { id: "white-label", label: "White Label" },
    { id: "pricing", label: "Pricing" },
    { id: "partner", label: "Partner" },
    { id: "https://emalyami.wordpress.com/", label: "Blog", type: "external" }, // 👈 Your blog URL here
  ];

  const textOptions = ["eMa", "eMalyami"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textOptions.length);
    }, 2000); // Increased to 2 seconds for better visibility

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed z-50 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 xl:left-12 xl:right-12 top-4 sm:top-6">
      <div className="border rounded-full shadow-lg backdrop-blur-sm border-gray-200/50">
        <div className="px-6  mx-auto max-w-7xl sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-16">
            {/* Logo with Animated Text */}
            <div
              className="flex items-center transition-colors duration-200 cursor-pointer"
              onClick={() => scroll.scrollToTop()}
            >
              {/* Logo Container with Proper Sizing */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
                <AnimatedLogo
                  containerClassName="block w-full h-full"
                  showSlogan={false}
                  logoSize="w-full h-full"
                  className=""
                />
              </div>

              {/* Animated Text with Fixed Container */}
              <div className="relative flex items-center ml-3">
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: "140px", // Fixed width to prevent layout shifts
                    height: "40px", // Fixed height
                    perspective: "1000px",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentText}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -20,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute left-0 text-2xl font-bold tracking-tight text-black transform -translate-y-1/2 top-1/2 lg:text-3xl whitespace-nowrap"
                    >
                      {textOptions[currentText]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="items-center hidden space-x-8 lg:flex">
              {navItems.map((item) =>
                item.type === "external" ? (
                  <a
                    key={item.id}
                    href={item.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#AF6553] font-medium transition-colors duration-200 cursor-pointer relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#AF6553] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ) : (
                  <ScrollLink
                    key={item.id}
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-700 hover:text-[#AF6553] font-medium transition-colors duration-200 cursor-pointer relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#AF6553] transition-all duration-300 group-hover:w-full"></span>
                  </ScrollLink>
                )
              )}

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

              {/* Your existing Get Started button... */}
            </nav>

            <button
              className="p-2 transition-colors duration-200 rounded-md lg:hidden"
              style={{ color: "#AF6553" }}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-96 opacity-100 " : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <nav className="py-4 space-y-2">
              {navItems.map((item) =>
                item.type === "external" ? (
                  <a
                    key={item.id}
                    href={item.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-700 hover:text-[#AF6553] hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <ScrollLink
                    key={item.id}
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="block px-4 py-3 text-gray-700 hover:text-[#AF6553] hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </ScrollLink>
                )
              )}

              <Button
                className="block mx-4 mt-4 bg-[#AF6553] text-white px-6 py-3 rounded-full hover:bg-[#844b3d] transition-colors duration-200 cursor-pointer font-medium text-center"
                onClick={() => {
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.emalyami.mobile&hl=en",
                    "_blank"
                  );
                  setIsOpen(false);
                }}
              >
                Get Started
              </Button>
              {/* Your existing mobile Get Started button... */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
