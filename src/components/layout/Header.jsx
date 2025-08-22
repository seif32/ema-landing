import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NewLogo from "../../assets/shared/new_logo.svg";

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
  ];

  const textOptions = ["eMa", "eMalyami"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textOptions.length);
    }, 1500); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed left-0 right-0 z-50 border-b shadow-sm lg:rounded-full top-2 backdrop-blur-sm border-gray-200/50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-14">
          {/* Logo with Animated Text */}
          <div
            className="flex items-center transition-colors duration-200 cursor-pointer"
            onClick={() => scroll.scrollToTop()}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
              <img
                src={NewLogo}
                alt="Logo"
                className="object-contain w-full h-full"
              />
            </div>

            {/* Animated Text with Flip Effect */}
            <div className="ml-2 text-2xl font-bold tracking-tight text-black lg:text-3xl relative h-8 flex items-center min-w-[120px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentText}
                  initial={{
                    rotateX: 90,
                    opacity: 0,
                  }}
                  animate={{
                    rotateX: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotateX: -90,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 left-0"
                  style={{
                    transformOrigin: "center center",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {textOptions[currentText]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 lg:flex">
            {navItems.map((item) => (
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
            ))}

            {/* CTA Button */}
            <ScrollLink
              to="partner"
              smooth={true}
              duration={500}
              offset={-80}
              className="bg-[#AF6553] text-white px-6 py-2 rounded-full hover:bg-[#844b3d] transition-colors duration-200 cursor-pointer font-medium"
            >
              Get Started
            </ScrollLink>
          </nav>

          {/* Mobile Menu Button */}
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
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="py-4 space-y-2">
            {navItems.map((item) => (
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
            ))}
            <ScrollLink
              to="partner"
              smooth={true}
              duration={500}
              offset={-80}
              className="block mx-4 mt-4 bg-[#AF6553] text-white px-6 py-3 rounded-full hover:bg-[#844b3d] transition-colors duration-200 cursor-pointer font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </ScrollLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
