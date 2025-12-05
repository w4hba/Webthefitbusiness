import { useState } from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import svgPaths from "../imports/svg-vxc58rs2yv";
import { IMAGES } from '../constants/images';
import { SimpleImage } from './OptimizedImage';

// X (Twitter) Icon component
const TwitterIcon = () => (
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

interface SupplementsPageProps {
  onClose: () => void;
}

export default function SupplementsPage({ onClose }: SupplementsPageProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleLogoClick = () => {
    onClose();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const scrollToSection = (sectionId: string) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <div className="bg-black h-[105px] w-full border-b border-white/10">
          <div className="max-w-[1200px] mx-auto px-8 relative h-full">
            <button onClick={handleLogoClick} className="absolute h-[62px] left-8 top-[26px] w-[93px] cursor-pointer bg-transparent border-none p-0">
              <img alt="The Fit Business Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={IMAGES.logos.main} />
            </button>
            
            <button onClick={handleLogoClick} className="absolute h-[111px] left-[123px] top-[26px] w-[266px] cursor-pointer bg-transparent border-none p-0 text-left">
              <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] leading-[32px] left-0 not-italic text-[35px] text-white top-0 tracking-[1px] w-[200px]">THE FIT BUSINESS</p>
            </button>

            <div className="absolute flex items-center gap-8 left-1/2 top-[44px] -translate-x-1/2">
              <button onClick={() => scrollToSection('about')} className="cursor-pointer bg-transparent border-none">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[16px] text-nowrap text-white tracking-[0.1996px] whitespace-pre hover:text-white/80 transition-colors">About</p>
              </button>

              <button onClick={() => scrollToSection('spotlight')} className="cursor-pointer bg-transparent border-none">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[16px] text-nowrap text-white tracking-[0.1996px] whitespace-pre hover:text-white/80 transition-colors">Testimonials</p>
              </button>

              <button onClick={() => scrollToSection('services')} className="cursor-pointer bg-transparent border-none">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[16px] text-nowrap text-white tracking-[0.1996px] whitespace-pre hover:text-white/80 transition-colors">Services</p>
              </button>

              <button onClick={() => scrollToSection('book-call')} className="cursor-pointer bg-transparent border-none">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[16px] text-nowrap text-white tracking-[0.1996px] whitespace-pre hover:text-white/80 transition-colors">Booking</p>
              </button>

              <button onClick={() => scrollToSection('blog')} className="cursor-pointer bg-transparent border-none">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[16px] text-nowrap text-white tracking-[0.1996px] whitespace-pre hover:text-white/80 transition-colors">Blog</p>
              </button>

              <button onClick={onClose} className="cursor-pointer bg-transparent border-none">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[16px] text-nowrap text-white tracking-[0.1996px] whitespace-pre hover:text-white/80 transition-colors">Supplements</p>
              </button>
            </div>

            <button onClick={onClose} className="absolute bg-gray-100 box-border content-stretch flex flex-col h-[37px] items-start right-8 pb-0 pl-[16px] pr-[15.945px] pt-[8px] rounded-[1.67772e+07px] top-[33px] w-[151.945px] cursor-pointer border-none hover:bg-white transition-colors">
              <div className="h-[21px] relative shrink-0 w-full">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[50%] not-italic text-[18px] text-black text-center text-nowrap top-[0.5px] tracking-[0.1996px] translate-x-[-50%] whitespace-pre">Close</p>
              </div>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-black flex items-center justify-center px-8 py-16">
          <div className="max-w-[1200px] w-full">
            {/* Large Logo */}
            <div className="flex justify-center mb-12">
              <img 
                src={IMAGES.supplements.logo}
                alt="The Fit Business Logo"
                className="w-[460px] h-[460px] object-contain"
              />
            </div>

            {/* Quality Text */}
            <p className="font-['DM_Serif_Text:Regular',sans-serif] leading-[28px] text-[20px] text-[rgba(255,255,255,0.6)] text-center mb-16 tracking-[0.1px] max-w-[594px] mx-auto">
              Quality and Performance.
              <br />
              Our exclusive collection is dropping soon.
            </p>

            {/* Email Signup Card */}
            <div className="bg-[rgba(255,255,255,0.05)] rounded-[16px] max-w-[896px] mx-auto p-12 border border-[rgba(255,255,255,0.1)]">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full px-6 py-2 flex items-center gap-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p1e6eff00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p5baad20} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                  <span className="font-['DM_Serif_Text:Regular',sans-serif] leading-[24px] text-[16px] text-[rgba(255,255,255,0.8)] tracking-[1px]">
                    BE THE FIRST TO KNOW
                  </span>
                </div>
              </div>

              {/* Heading */}
              <h2 className="font-['DM_Serif_Display:Regular',sans-serif] leading-[24px] text-[16px] text-white text-center mb-4 tracking-[0.5px]">
                Get Early Access
              </h2>

              {/* Description */}
              <p className="font-['DM_Serif_Text:Regular',sans-serif] leading-[24px] text-[16px] text-[rgba(255,255,255,0.6)] text-center mb-8 tracking-[0.5px]">
                Join our exclusive list and be the first to shop when we launch. Plus, get 15% off your first order.
              </p>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="max-w-[448px] mx-auto">
                <div className="flex gap-3 mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-[10px] px-4 py-3 text-white placeholder-[rgba(255,255,255,0.4)] focus:outline-none focus:border-[rgba(255,255,255,0.4)] font-['Inter:Regular',sans-serif] text-[16px] tracking-[-0.3125px] h-[50px]"
                  />
                  <button
                    type="submit"
                    className="bg-white hover:bg-gray-100 text-black px-8 rounded-[10px] font-['Inter:Regular',sans-serif] text-[16px] tracking-[-0.3125px] transition-colors h-[50px] whitespace-nowrap"
                  >
                    Notify Me
                  </button>
                </div>
                <p className="text-[rgba(255,255,255,0.4)] text-[14px] text-center tracking-[-0.1504px] font-['Inter:Regular',sans-serif] leading-[20px]">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>

              {/* Success Message */}
              {submitted && (
                <div className="mt-4 bg-white/10 border border-white/20 rounded-lg p-4 text-center max-w-[448px] mx-auto">
                  <p className="text-white font-['Inter:Regular',sans-serif]">Thanks! We'll notify you when we launch.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
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
                    href="#" 
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <TwitterIcon />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
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
                    <a href="#" className="text-white/60 hover:text-white transition-colors">
                      All Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/60 hover:text-white transition-colors">
                      Best Sellers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/60 hover:text-white transition-colors">
                      New Arrivals
                    </a>
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
                © 2025 The Fit Business. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}