import { useState } from 'react';
import { Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowSuccess(true);
      setEmail('');
    }
  };

  const closeSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <section className="bg-black py-24 px-8 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-5xl mb-4 tracking-wide">
          Get Weekly Training and Nutrition Insights
        </h2>
        <p className="text-white/80 text-xl mb-8 font-['DM_Serif_Text:Regular',sans-serif]">
          Join 10,000+ others getting actionable fitness and nutrition advice delivered everyday.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/40 text-lg"
          />
          <button
            type="submit"
            className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg text-lg font-['Inter:Medium',sans-serif] transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/10 border border-white/20 rounded-lg p-8 max-w-md w-full backdrop-blur-md">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                <Check className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-3xl mb-4">
                Thank You!
              </h3>
              <p className="text-white/90 mb-8 text-lg">
                You've successfully subscribed to our newsletter. Check your inbox for a confirmation email.
              </p>
              <button
                onClick={closeSuccess}
                className="w-full bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg text-lg font-['Inter:Medium',sans-serif] transition-colors"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
