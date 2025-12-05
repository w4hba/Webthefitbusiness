import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { IMAGES } from '../constants/images';
import { SimpleImage } from './OptimizedImage';

// X (Twitter) Icon component since it's not in lucide-react
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// TikTok Icon component
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

interface FooterProps {
  onSupplementsClick?: () => void;
}

export default function Footer({ onSupplementsClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={IMAGES.logos.main} 
                alt="The Fit Business Logo" 
                className="w-[60px] h-auto"
              />
              <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-2xl tracking-wide">
                THE FIT BUSINESS
              </h3>
            </div>
            <p className="text-white/60 mb-6 max-w-md font-['DM_Serif_Text:Regular',sans-serif]">
              Elite fitness coaching for high-performers, entrepreneurs, and executives who demand excellence.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/fit_bznz/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/thefitbznz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/thefitbrand/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61577855432287"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@thefitbrand"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-white font-['Inter:Medium',sans-serif] text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={onSupplementsClick}
                  className="text-white/60 hover:text-white transition-colors text-left"
                >
                  All Products
                </button>
              </li>
              <li>
                <button 
                  onClick={onSupplementsClick}
                  className="text-white/60 hover:text-white transition-colors text-left"
                >
                  Best Sellers
                </button>
              </li>
              <li>
                <button 
                  onClick={onSupplementsClick}
                  className="text-white/60 hover:text-white transition-colors text-left"
                >
                  New Arrivals
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-['Inter:Medium',sans-serif] text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/40 text-center text-sm">
            © {currentYear} The Fit Business. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}