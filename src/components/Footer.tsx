import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            <span className="text-orange-500">Omkar</span> Tours & Travels
                        </h3>
                        <p className="text-sm leading-relaxed mb-4">
                            Your trusted partner for safe and comfortable journeys across India.
                            We prioritize your comfort and safety above all else.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-orange-500" />
                                <a href="tel:9867211016" className="hover:text-white transition-colors">9867211016</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-orange-500" />
                                <a href="mailto:omkartourstravels06@gmail.com" className="hover:text-white transition-colors">omkartourstravels06@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={18} className="text-orange-500" />
                                <span>Mumbai, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social / Legal */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                    <p>&copy; 2026 Omkar Tours & Travels. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
