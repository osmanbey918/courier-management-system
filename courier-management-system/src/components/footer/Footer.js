
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">CourierX</h2>
          <p className="text-gray-400">
            Your trusted parcel delivery partner. Fast, secure & reliable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/track" className="hover:text-white transition">Track Parcel</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="text-gray-400 space-y-3">
            <p className="flex items-center gap-2"><MapPin size={18} /> 123 Delivery Lane, City</p>
            <p className="flex items-center gap-2"><Phone size={18} /> +92 123 456789</p>
            <p className="flex items-center gap-2"><Mail size={18} /> support@courierx.com</p>
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-center py-4 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} CourierX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
