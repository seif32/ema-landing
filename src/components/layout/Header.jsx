import Icon from "../../assets/who-are-we/logo.svg";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="absolute flex items-center justify-center p-8">
      <div style={{ perspective: "1000px" }}>
        <motion.div
          className="relative w-32 h-32"
          animate={{ rotateY: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front side - Logo 1 */}
          <div
            className="absolute w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img src={Icon} alt="Logo 1" className="w-20 h-20 object-contain" />
          </div>

          {/* Back side - Logo 2 */}
          <div
            className="absolute w-full h-full rounded-full  flex items-center justify-center shadow-lg"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <img src={Icon} alt="Logo 2" className="w-20 h-20 object-contain" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
