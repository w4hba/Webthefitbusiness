import { X, Share2, Clock } from 'lucide-react';
import Hero from './Hero';
import Footer from './Footer';
import { useState } from 'react';
import imgImageLogo from "../assets/45a0c92c67123fe44d63c8950e682cc4a3fb46bb.png?url";
import imgImage from "../assets/fc33736fbedeb947dec4669a38dbb1f43aa77ac8.png?url";
import imgImage1 from "../assets/194697a0554e25ec9c2cf91d4b8de4e9c1600416.png?url";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    readTime: string;
    date: string;
  };
  onClose: () => void;
  onSupplementsClick: () => void;
}

// X (Twitter) Icon component
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Facebook Icon component
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// LinkedIn Icon component
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function BlogPost({ post, onClose, onSupplementsClick }: BlogPostProps) {
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

  const scrollToSection = (sectionId: string) => {
    onClose();
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
      {/* Navigation Bar - Exact same as Hero */}
      <div className="sticky top-0 bg-black h-[105px] w-full z-50 border-b border-white/10">
        <div className="absolute h-[62px] left-[29px] top-[26px] w-[93px]">
          <button onClick={onClose} className="w-full h-full bg-transparent border-none cursor-pointer">
            <img 
              alt="The Fit Business Logo" 
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
              src={imgImageLogo} 
            />
          </button>
        </div>
        
        <div className="absolute h-[111px] left-[123px] top-[26px] w-[266px]">
          <button onClick={onClose} className="bg-transparent border-none cursor-pointer">
            <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] leading-[32px] left-0 not-italic text-[35px] text-white top-0 tracking-[1px] w-[200px]">
              THE FIT BUSINESS
            </p>
          </button>
        </div>

        <div className="absolute flex items-center gap-8 left-1/2 top-[44px] -translate-x-1/2">
          <button onClick={() => scrollToSection('about')} className="cursor-pointer bg-transparent border-none">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[16px] text-nowrap text-white tracking-[0.1996px] whitespace-pre hover:text-white/80 transition-colors">
              About
            </p>
          </button>

          <button onClick={() => scrollToSection('spotlight')} className="cursor-pointer bg-transparent border-none">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[16px] text-nowrap text-white tracking-[0.1996px] whitespace-pre hover:text-white/80 transition-colors">
              Testimonials
            </p>
          </button>

          <button onClick={() => scrollToSection('services')} className="cursor-pointer bg-transparent border-none">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[16px] text-nowrap text-white tracking-[0.1996px] whitespace-pre hover:text-white/80 transition-colors">
              Services
            </p>
          </button>

          <button onClick={() => scrollToSection('book-call')} className="cursor-pointer bg-transparent border-none">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[16px] text-nowrap text-white tracking-[0.1996px] whitespace-pre hover:text-white/80 transition-colors">
              Booking
            </p>
          </button>

          <button onClick={() => scrollToSection('blog')} className="cursor-pointer bg-transparent border-none">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[16px] text-nowrap text-white tracking-[0.1996px] whitespace-pre hover:text-white/80 transition-colors">
              Blog
            </p>
          </button>

          <button onClick={onSupplementsClick} className="cursor-pointer bg-transparent border-none">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[16px] text-nowrap text-white tracking-[0.1996px] whitespace-pre hover:text-white/80 transition-colors">
              Supplements
            </p>
          </button>
        </div>

        <button 
          onClick={onClose}
          className="absolute bg-gray-100 box-border content-stretch flex flex-col h-[37px] items-start right-[29px] pb-0 pl-[16px] pr-[15.945px] pt-[8px] rounded-[1.67772e+07px] top-[33px] w-[151.945px] cursor-pointer border-none hover:bg-white transition-colors"
        >
          <div className="h-[21px] relative shrink-0 w-full">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[50%] not-italic text-[18px] text-black text-center text-nowrap top-[0.5px] tracking-[0.1996px] translate-x-[-50%] whitespace-pre">
              Close
            </p>
          </div>
        </button>
      </div>

      {/* Hero Section - From Figma Import */}
      <div className="relative w-full h-[789px] bg-black overflow-hidden">
        {/* Left Image */}
        <div className="absolute h-[789px] left-0 top-0 w-[590px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
        </div>

        {/* Left Text Overlay */}
        <p className="absolute font-['DM_Serif_Text:Regular',sans-serif] leading-[72px] left-[36px] not-italic text-[70px] text-nowrap text-white top-[15px] tracking-[-1.677px] whitespace-pre">
          COME OUT WITH
          <br aria-hidden="true" />
          {`YOUR BEST `}
          <br aria-hidden="true" />
          RESULTS.
        </p>

        {/* Right Image Container */}
        <div className="absolute box-border content-stretch flex flex-col h-[789px] items-start left-[590px] overflow-clip pb-0 top-0 w-[620px]">
          <div className="h-[937.328px] relative shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
        </div>

        {/* Right Text Overlay */}
        <div className="absolute font-['DM_Serif_Text:Regular',sans-serif] h-[144px] leading-[72px] left-[618px] not-italic text-[70px] text-nowrap text-right text-white top-[439px] tracking-[-1.677px] w-[575px] whitespace-pre">
          <p className="absolute left-[575.9px] top-0 translate-x-[-100%]">BRING YOUR</p>
          <p className="absolute left-[575.2px] top-[72px] translate-x-[-100%]">THUNDER.</p>
        </div>

        {/* Right Bottom Text */}
        <div className="absolute h-[56px] left-[816px] top-[584px] w-[377px]">
          <p className="absolute font-['DM_Serif_Text:Regular',sans-serif] leading-[28px] left-[377.66px] not-italic text-[20px] text-[rgba(255,255,255,0.9)] text-right top-[0.5px] tracking-[-0.4492px] translate-x-[-100%] w-[371px]">
            Join the Fit Team of over 50 High Performers and get results that last for life.
          </p>
        </div>

        {/* Left Bottom Text */}
        <div className="absolute h-[111px] left-[37px] top-[587px] w-[548px]">
          <p className="absolute font-['DM_Serif_Text:Regular',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-[rgba(255,255,255,0.9)] top-[0.5px] tracking-[-0.4492px] w-[528px]">
            Experience elite fitness coaching tailored to your body, activity, training, and schedule.
          </p>
        </div>

        {/* CTA Button */}
        <button onClick={() => setShowGuidePopup(true)} className="absolute bg-white box-border content-stretch flex flex-col h-[58px] items-start left-[39px] pb-0 pl-[13.766px] pr-[14.766px] pt-[17px] rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[648px] w-[280px] cursor-pointer border-none hover:bg-gray-100 transition-colors">
          <div className="h-[24px] relative shrink-0 w-full">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[126px] not-italic text-[18px] text-black text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">
              Free High Performance Guide
            </p>
          </div>
        </button>
      </div>

      {/* Main Content */}
      <div className="pt-16 pb-16 px-8 min-h-screen">
        <div className="max-w-[900px] mx-auto">
          {/* Article Header */}
          <div className="mb-12">
            {/* Category, Read Time, Date */}
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-white/10 rounded-full px-4 py-1">
                <p className="font-['Inter:Regular',sans-serif] text-sm text-white/60 tracking-tight">
                  {post.category}
                </p>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Clock className="w-4 h-4" />
                <p className="font-['Inter:Regular',sans-serif] text-sm tracking-tight">
                  {post.readTime}
                </p>
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-sm text-white/60 tracking-tight">
                {post.date}
              </p>
            </div>

            {/* Title */}
            <h1 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-6xl leading-tight mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="font-['Inter:Regular',sans-serif] text-xl text-white/70 leading-relaxed tracking-tight mb-8">
              {post.excerpt}
            </p>

            {/* Author and Share */}
            <div className="flex items-center justify-between py-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <p className="font-['Inter:Regular',sans-serif] text-white text-lg">P</p>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-white tracking-tight">
                  Coach Paul
                </p>
              </div>

              <button className="flex items-center gap-2 bg-white/5 border border-white/20 px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="font-['Inter:Regular',sans-serif] tracking-tight">Share</span>
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="space-y-8 text-white/80">
            <p className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
              Progressive overload is the cornerstone principle that separates those who make continuous gains from those who plateau. Understanding and implementing this concept correctly can transform your training results.
            </p>

            <div>
              <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-3xl text-white mb-4">
                What Is Progressive Overload?
              </h2>
              <p className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                Progressive overload refers to the gradual increase in stress placed upon the body during training. This principle forces your muscles to adapt and grow stronger over time. Without it, your body has no reason to change.
              </p>
            </div>

            <div>
              <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-3xl text-white mb-4">
                Methods of Progressive Overload
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-['Inter:Regular',sans-serif] text-2xl text-white mb-3 tracking-tight">
                    1. Increase Weight
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                    The most straightforward approach is adding weight to the bar. Even small increments of 2.5-5 pounds can drive adaptation when applied consistently over time.
                  </p>
                </div>

                <div>
                  <h3 className="font-['Inter:Regular',sans-serif] text-2xl text-white mb-3 tracking-tight">
                    2. Increase Volume
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                    Adding more sets or reps is another effective strategy. If you're performing 3 sets of 8 reps, progressing to 3 sets of 10 reps represents meaningful overload.
                  </p>
                </div>

                <div>
                  <h3 className="font-['Inter:Regular',sans-serif] text-2xl text-white mb-3 tracking-tight">
                    3. Increase Frequency
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                    Training a muscle group more frequently can provide additional stimulus. Moving from twice-weekly to three times weekly training can accelerate progress.
                  </p>
                </div>

                <div>
                  <h3 className="font-['Inter:Regular',sans-serif] text-2xl text-white mb-3 tracking-tight">
                    4. Improve Technique
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                    Better form allows for greater muscle fiber recruitment and increased mechanical tension. Perfect your technique before adding weight.
                  </p>
                </div>

                <div>
                  <h3 className="font-['Inter:Regular',sans-serif] text-2xl text-white mb-3 tracking-tight">
                    5. Increase Time Under Tension
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                    Slowing down the eccentric (lowering) phase or adding pauses can increase the time your muscles spend under load.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-3xl text-white mb-4">
                Implementation Strategy
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-['Inter:Regular',sans-serif] text-2xl text-white mb-3 tracking-tight">
                    Week 1-3: Volume Phase
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                    Focus on adding reps within your target range. If your goal is 3x8-12, work up to 3x12 before adding weight.
                  </p>
                </div>

                <div>
                  <h3 className="font-['Inter:Regular',sans-serif] text-2xl text-white mb-3 tracking-tight">
                    Week 4-6: Intensity Phase
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                    Once you hit the top of your rep range, add 5-10% weight and drop back to the lower end of your rep range.
                  </p>
                </div>

                <div>
                  <h3 className="font-['Inter:Regular',sans-serif] text-2xl text-white mb-3 tracking-tight">
                    Week 7: Deload
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                    Reduce volume and intensity by 40-50% to allow for recovery and supercompensation.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-3xl text-white mb-4">
                Common Mistakes
              </h2>
              <div className="space-y-4">
                <p className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                  <strong className="text-white">Progressing Too Fast:</strong> Adding weight every workout is unsustainable. Aim for progression every 2-4 weeks instead.
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                  <strong className="text-white">Ignoring Recovery:</strong> You don't grow in the gym; you grow during recovery. Ensure adequate sleep and nutrition.
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                  <strong className="text-white">Poor Form Compensation:</strong> Don't sacrifice technique for heavier weights. This leads to injury and reduces the effectiveness of the exercise.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-3xl text-white mb-4">
                Tracking Progress
              </h2>
              <p className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight mb-4">
                Keep a detailed training log. Record:
              </p>
              <ul className="space-y-2 ml-6 list-none">
                <li className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                  • Exercise performed
                </li>
                <li className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                  • Weight used
                </li>
                <li className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                  • Sets and reps completed
                </li>
                <li className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                  • RPE (Rate of Perceived Exertion)
                </li>
                <li className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                  • Notes on form and performance
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-3xl text-white mb-4">
                Advanced Techniques
              </h2>
              <p className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight mb-4">
                Once you've mastered basic progression, consider:
              </p>
              <ul className="space-y-2 ml-6 list-none">
                <li className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                  • Wave loading
                </li>
                <li className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                  • Daily undulating periodization
                </li>
                <li className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                  • Block periodization
                </li>
                <li className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                  • Autoregulation based on readiness
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-3xl text-white mb-4">
                Conclusion
              </h2>
              <p className="font-['Inter:Regular',sans-serif] text-base leading-relaxed tracking-tight">
                Progressive overload isn't just about adding weight—it's about intelligently manipulating training variables to create sustainable, long-term progress. Stay patient, be consistent, and trust the process.
              </p>
            </div>
          </div>

          {/* Share and Newsletter Section */}
          <div className="border-t border-white/10 pt-8 mt-12">
            <div className="flex items-center justify-between">
              {/* Share Buttons */}
              <div className="flex flex-col gap-2">
                <p className="font-['Inter:Regular',sans-serif] text-white/60 tracking-tight">
                  Share this article
                </p>
                <div className="flex gap-3">
                  <button className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <FacebookIcon />
                  </button>
                  <button className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <XIcon />
                  </button>
                  <button className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <LinkedInIcon />
                  </button>
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="flex flex-col gap-2 text-right">
                <p className="font-['Inter:Regular',sans-serif] text-white/60 tracking-tight">
                  Enjoyed this article?
                </p>
                <button 
                  onClick={() => scrollToSection('newsletter')}
                  className="bg-white text-black px-6 py-3 rounded-lg hover:bg-white/90 transition-colors font-['Inter:Regular',sans-serif] tracking-tight"
                >
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer onSupplementsClick={onSupplementsClick} />

      {/* Free Guide Popup */}
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