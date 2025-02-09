import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebook, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaLinkedin, href: "#" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Events", href: "/events" },
    { name: "Career", href: "/career" },
    { name: "Blog", href: "/blog" },
  ];

  const supportLinks = [
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-white backdrop-blur-lg dark:bg-neutral-800/30 rounded-t-4xl border-t border-gray-900/10 text-neutral-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8">
    <div className="lg:px-10 px-4 container mx-auto ">
      <div className="grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">

          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                 src="https://www.infinitytechltd.com/storage/setting/websitesetting/infinity%20logo.jpeg"
                alt="Infinity Technology International Ltd"
                className="w-12 h-12 rounded"
              />
              <h2 className="text-2xl font-bold">Infinity Tech Ltd.</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Innovating technology solutions for a better future.</p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="bg-neutral-900 dark:bg-white text-neutral-100 dark:text-neutral-900 p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">Social Media</span>
                </a>
              ))}
            </div>
          </div>
          <div></div>
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <a href={href} className="text-gray-600 dark:text-gray-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map(({ name, href }) => (
                <li key={name}>
                  <a href={href} className="text-gray-600 dark:text-gray-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">+880 1911-381019</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <a href="mailto:info@infinitytechltd.com" className="text-gray-600 dark:text-gray-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  info@infinitytechltd.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-7 w-7 lg:h-12 lg:w-12 mt-1 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  7th Floor, Shamsuddin Mansion, 41 Gulshan North, Road no. 53, Gulshan-2, Dhaka-1212
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-300 dark:border-gray-800 pt-8" />
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Infinity Tech Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
