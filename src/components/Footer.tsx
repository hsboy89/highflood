import { motion } from 'framer-motion';
import { FOOTER_LINKS, CONTACT_INFO, COMPANY_INFO } from '../constants';

const LOGO_URL = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/images/logo.png?v=2`;

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-deep-blue border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div className="md:col-span-2">
                        <motion.div
                            className="flex items-center space-x-2 mb-4"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src={LOGO_URL}
                                alt={`${COMPANY_INFO.name} Logo`}
                                className="h-16 w-auto object-contain"
                            />
                        </motion.div>
                        <p className="text-white/50 max-w-md leading-relaxed">
                            {COMPANY_INFO.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {FOOTER_LINKS.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-white/50 hover:text-electric-blue transition-colors text-sm"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-white/50">
                            <li>📧 {CONTACT_INFO.email}</li>
                            <li>📱 {CONTACT_INFO.phone}</li>
                            <li>📍 {CONTACT_INFO.address}</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © {currentYear} HighFlood. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
