import imgImage from "figma:asset/fc33736fbedeb947dec4669a38dbb1f43aa77ac8.png";
import imgImageLogo from "figma:asset/45a0c92c67123fe44d63c8950e682cc4a3fb46bb.png";
import imgImage1 from "figma:asset/194697a0554e25ec9c2cf91d4b8de4e9c1600416.png";
import { useState } from 'react';
import { X } from 'lucide-react';

interface HeroProps {
  onSupplementsClick: () => void;
}

export default function Hero({ onSupplementsClick }: HeroProps) {
  const [showGuidePopup, setShowGuidePopup] = useState(false);
  const [guideEmail, setGuideEmail] = useState('');
  const [guideSubmitted, setGuideSubmitted] = useState(false);

  const handleGuideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guideEmail) {
      setGuideSubmitted(true);
      setGuideEmail('');
      setTimeout(() => {
        setShowGuidePopup(false);
        setGuideSubmitted(false);
      }, 3000);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-[894px] bg-black overflow-hidden">
      {/* Navigation */}
      <div className="absolute bg-black h-[105px] left-0 top-0 w-full z-10">
        <div className="absolute h-[62px] left-[29px] top-[26px] w-[93px]">
          <img alt="The Fit Business Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageLogo} />
        </div>
        
        <div className="absolute h-[111px] left-[123px] top-[26px] w-[266px]">
          <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] leading-[32px] left-0 not-italic text-[35px] text-white top-0 tracking-[1px] w-[200px]">THE FIT BUSINESS</p>
        </div>

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

          <button onClick={onSupplementsClick} className="cursor-pointer bg-transparent border-none">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[16px] text-nowrap text-white tracking-[0.1996px] whitespace-pre hover:text-white/80 transition-colors">Supplements</p>
          </button>
        </div>

        <button onClick={() => scrollToSection('book-call')} className="absolute bg-gray-100 box-border content-stretch flex flex-col h-[37px] items-start right-[29px] pb-0 pl-[16px] pr-[15.945px] pt-[8px] rounded-[1.67772e+07px] top-[33px] w-[151.945px] cursor-pointer border-none hover:bg-white hover:scale-105 transition-all duration-300">
          <div className="h-[21px] relative shrink-0 w-full">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[50%] not-italic text-[18px] text-black text-center text-nowrap top-[0.5px] tracking-[0.1996px] translate-x-[-50%] whitespace-pre">Get Started</p>
          </div>
        </button>
      </div>

      {/* Left Image with Text Overlay */}
      <div className="absolute h-[789px] left-[0.2px] overflow-clip top-[105px] w-[590px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full transition-transform duration-700 hover:scale-105" src={imgImage} />
        <p className="absolute font-['DM_Serif_Text:Regular',sans-serif] leading-[72px] left-[27.8px] not-italic text-[70px] text-nowrap text-white top-[15px] tracking-[-1.677px] whitespace-pre">
          COME OUT WITH
          <br aria-hidden="true" />
          {`YOUR BEST `}
          <br aria-hidden="true" />
          RESULTS.
        </p>
      </div>

      {/* Right Image Container */}
      <div className="absolute box-border content-stretch flex flex-col h-[789px] items-start right-0 overflow-clip pb-0 top-[105px] w-[620px]">
        <div className="h-[937.328px] relative shrink-0 w-full">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full transition-transform duration-700 hover:scale-105" src={imgImage1} />
        </div>
      </div>

      {/* Right Text Overlay */}
      <div className="absolute font-['DM_Serif_Text:Regular',sans-serif] h-[144px] leading-[72px] right-[17px] not-italic text-[70px] text-nowrap text-right text-white top-[544px] tracking-[-1.677px] w-[575px] whitespace-pre">
        <p className="absolute right-0 top-0">BRING YOUR</p>
        <p className="absolute right-0 top-[72px]">THUNDER.</p>
      </div>

      {/* Right Bottom Text */}
      <div className="absolute h-[56px] right-[17px] top-[689px] w-[377px]">
        <p className="absolute font-['DM_Serif_Text:Regular',sans-serif] leading-[28px] right-0 not-italic text-[20px] text-[rgba(255,255,255,0.9)] text-right top-[0.5px] tracking-[-0.4492px] w-[371px]">Join the Fit Team of over 50 High Performers and get results that last for life.</p>
      </div>

      {/* Left Bottom Text */}
      <div className="absolute h-[111px] left-[29px] top-[692px] w-[548px]">
        <p className="absolute font-['DM_Serif_Text:Regular',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-[rgba(255,255,255,0.9)] top-[0.5px] tracking-[-0.4492px] w-[528px]">Experience elite fitness coaching tailored to your body, activity, training, and schedule.</p>
      </div>

      {/* CTA Button */}
      <button className="absolute bg-white box-border content-stretch flex flex-col h-[58px] items-center justify-center left-[31px] rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[753px] w-[280px] cursor-pointer border-none hover:bg-gray-100 hover:scale-105 hover:shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.15),0px_8px_10px_-6px_rgba(0,0,0,0.1)] transition-all duration-300" onClick={() => setShowGuidePopup(true)}>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[18px] text-black text-center text-nowrap whitespace-pre">Free High Performance Guide</p>
      </button>

      {/* Guide Popup */}
      {showGuidePopup && (
        <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-8 animate-in fade-in duration-300" onClick={() => setShowGuidePopup(false)}>
          <div className="bg-black border border-white/20 rounded-2xl max-w-[600px] w-full p-12 relative animate-in zoom-in-95 fade-in duration-300" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setShowGuidePopup(false)}
              className="absolute right-6 top-6 w-10 h-10 bg-white/5 hover:bg-white/10 hover:scale-110 rounded-full flex items-center justify-center text-white transition-all duration-300 border-none cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            {!guideSubmitted ? (
              <>
                <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-4xl text-white mb-4 tracking-wide">
                  Free High Performance Guide
                </h2>

                <p className="font-['DM_Serif_Text:Regular',sans-serif] leading-[28px] text-[18px] text-white/80 mb-8 tracking-[-0.4492px]">
                  Get instant access to our proven guide that has helped over 50 entrepreneurs and executives get into peak shape.
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-['Inter:Regular',sans-serif] text-white/80 text-base tracking-tight">
                      Proven strategies from training 50+ high-performers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-['Inter:Regular',sans-serif] text-white/80 text-base tracking-tight">
                      Actionable steps you can implement immediately
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-['Inter:Regular',sans-serif] text-white/80 text-base tracking-tight">
                      Tailored for busy executives and entrepreneurs
                    </span>
                  </li>
                </ul>

                {/* Email Form */}
                <form onSubmit={handleGuideSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="guide-email" className="block font-['Inter:Regular',sans-serif] text-white/80 text-sm mb-2 tracking-tight">
                      Email Address
                    </label>
                    <input
                      id="guide-email"
                      type="email"
                      value={guideEmail}
                      onChange={(e) => setGuideEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40 font-['Inter:Regular',sans-serif] text-base tracking-tight"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-['Inter:Regular',sans-serif] text-lg tracking-tight transition-colors border-none cursor-pointer"
                  >
                    Get Your Free Guide
                  </button>

                  <p className="text-white/40 text-xs text-center font-['Inter:Regular',sans-serif] tracking-tight">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-3xl text-white mb-4">
                  Check Your Email!
                </h3>

                <p className="font-['Inter:Regular',sans-serif] text-white/80 text-lg tracking-tight">
                  Your Free High Performance Guide is on its way. Check your inbox to get started on your transformation.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}