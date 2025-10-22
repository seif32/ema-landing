import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";
import { animateScroll as scroll } from "react-scroll";
import NewLogo from "../../assets/shared/new_logo.svg";

function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <footer className="bg-gradient-to-br from-[#2c1914] to-[#583228] text-white">
      {/* Main Footer Content */}
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 mr-3">
                <img
                  src={NewLogo}
                  alt="Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: "#c38b7d" }}>
                eMa
              </h3>
            </div>
            <p className="mb-6 leading-relaxed text-gray-300">
              نظام بيئي رقمي يعزز الشمول المالي ونمو المشاريع الصغيرة والمتوسطة
              والشفافية والشراكات القابلة للتوسع في جميع أنحاء أفريقيا.
            </p>

            {/* Social Links - Labels in Arabic */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "فيسبوك" },
                { icon: Twitter, href: "#", label: "تويتر" },
                { icon: Linkedin, href: "#", label: "لينكد إن" },
                { icon: Instagram, href: "#", label: "إنستغرام" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-[#AF6553] rounded-full flex items-center justify-center hover:bg-[#c38b7d] transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {/* Quick Links */}
          <div>
            <h4
              className="mb-6 text-lg font-semibold"
              style={{ color: "#c38b7d" }}
            >
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {[
                { label: "المكونات", href: "#components" },
                { label: "الخدمات", href: "#services" },
                { label: "العلامة البيضاء", href: "#white-label" },
                { label: "الأسعار", href: "#pricing" },
                { label: "برنامج الشراكة", href: "#partner" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#c38b7d] transition-colors duration-200 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* Services */}
          <div>
            <h4
              className="mb-6 text-lg font-semibold"
              style={{ color: "#c38b7d" }}
            >
              خدماتنا
            </h4>
            <ul className="space-y-3">
              {[
                "eMaSERVE",
                "eMaMALL",
                "eMaPOS",
                "eMaFunding",
                "eMaSave",
                "eMaTuna",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-[#c38b7d] transition-colors duration-200 cursor-pointer block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          {/* Contact Info */}
          <div>
            <h4
              className="mb-6 text-lg font-semibold"
              style={{ color: "#c38b7d" }}
            >
              اتصل بنا
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-[#AF6553] mt-1 flex-shrink-0"
                />
                <div className="text-gray-300">
                  <p>123 منطقة الأعمال</p>
                  <p>لاغوس، نيجيريا</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#AF6553] flex-shrink-0" />
                <a
                  href="tel:+234123456789"
                  className="text-gray-300 hover:text-[#c38b7d] transition-colors duration-200"
                >
                  +234 123 456 789
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#AF6553] flex-shrink-0" />
                <a
                  href="mailto:contact@ema.com"
                  className="text-gray-300 hover:text-[#c38b7d] transition-colors duration-200"
                >
                  contact@ema.com
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5
                className="mb-3 text-sm font-medium"
                style={{ color: "#c38b7d" }}
              >
                ابق على اطلاع
              </h5>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="flex-1 px-4 py-2 bg-[#583228] border border-[#AF6553] rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#c38b7d] transition-colors duration-200"
                />
                <button className="bg-[#AF6553] hover:bg-[#c38b7d] text-white px-6 py-2 rounded-md transition-colors duration-200 font-medium">
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* Bottom Bar */}
      <div className="border-t border-[#583228]">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex flex-col items-center space-y-2 text-sm text-gray-400 sm:flex-row sm:space-y-0 sm:space-x-6">
              <p>&copy; 2025 eMa. جميع الحقوق محفوظة.</p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="hover:text-[#c38b7d] transition-colors duration-200"
                >
                  سياسة الخصوصية
                </a>
                <a
                  href="#"
                  className="hover:text-[#c38b7d] transition-colors duration-200"
                >
                  شروط الخدمة
                </a>
                <a
                  href="#"
                  className="hover:text-[#c38b7d] transition-colors duration-200"
                >
                  ملفات تعريف الارتباط
                </a>
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="bg-[#AF6553] hover:bg-[#c38b7d] text-white p-2 rounded-full transition-all duration-200 hover:scale-105"
              aria-label="العودة إلى الأعلى"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
