import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Crown, Github, Mail } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="w-6 h-6 text-indigo-600" />
              <span className="font-bold text-lg">ChessKramnik</span>
            </div>
            <p className="text-gray-500 text-sm">
              Advanced chess analysis and anti-cheating detection platform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-500 hover:text-indigo-600 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-500 hover:text-indigo-600 text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-500 hover:text-indigo-600 text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-indigo-600 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-500 hover:text-indigo-600 text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-500 hover:text-indigo-600 text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:support@chesskramnik.com"
                className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>support@chesskramnik.com</span>
              </a>
              <a
                href="https://github.com/chesskramnik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 text-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} ChessKramnik. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-500 hover:text-indigo-600 text-sm">
                Terms
              </Link>
              <Link to="/privacy" className="text-gray-500 hover:text-indigo-600 text-sm">
                Privacy
              </Link>
              <Link to="/cookies" className="text-gray-500 hover:text-indigo-600 text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};