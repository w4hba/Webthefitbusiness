import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { IMAGES } from '../constants/images';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

type Step = 'goals' | 'calendly' | 'success';

interface FormData {
  primaryGoal: string;
  experienceLevel: string;
  name: string;
  email: string;
}

export default function BookCall() {
  const [step, setStep] = useState<Step>('goals');
  const [formData, setFormData] = useState<FormData>({
    primaryGoal: '',
    experienceLevel: '',
    name: '',
    email: '',
  });

  // Listen for Calendly events
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      console.log('Event scheduled:', e);
      setStep('success');
    },
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceedFromGoals = formData.primaryGoal && formData.experienceLevel && formData.name && formData.email;

  const goalOptions = [
    { value: 'weight-loss', label: 'Weight Loss', icon: '🎯' },
    { value: 'muscle-gain', label: 'Build Muscle', icon: '💪' },
    { value: 'endurance', label: 'Improve Endurance', icon: '🏃' },
    { value: 'general-fitness', label: 'General Fitness', icon: '⚡' },
  ];

  const experienceLevels = [
    { value: 'beginner', label: 'Beginner', description: 'New to fitness' },
    { value: 'intermediate', label: 'Intermediate', description: '1-3 years experience' },
    { value: 'advanced', label: 'Advanced', description: '3+ years experience' },
  ];

  return (
    <section id="book-call" className="bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Image */}
          <div className="relative overflow-hidden rounded-lg h-[600px]">
            <ImageWithFallback 
              src={IMAGES.hero.bookCall}
              alt="Fitness coaching consultation"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Form Steps */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm flex flex-col">
            {/* Step 1: Goals & Info */}
            {step === 'goals' && (
              <div className="flex-1 flex flex-col">
                <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-4xl mb-8">
                  Tell Us About Your Goals
                </h3>
                
                <div className="space-y-6 flex-1">
                  {/* Primary Goal */}
                  <div>
                    <label className="block text-white/80 mb-3 font-['Inter:Medium',sans-serif]">
                      What's your primary goal?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {goalOptions.map((goal) => (
                        <button
                          key={goal.value}
                          onClick={() => updateFormData('primaryGoal', goal.value)}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            formData.primaryGoal === goal.value
                              ? 'border-white bg-white/10'
                              : 'border-white/20 hover:border-white/40'
                          }`}
                        >
                          <div className="text-2xl mb-2">{goal.icon}</div>
                          <div className="text-white font-['Inter:Medium',sans-serif] text-sm">
                            {goal.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="block text-white/80 mb-3 font-['Inter:Medium',sans-serif]">
                      Experience level?
                    </label>
                    <div className="space-y-2">
                      {experienceLevels.map((level) => (
                        <button
                          key={level.value}
                          onClick={() => updateFormData('experienceLevel', level.value)}
                          className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                            formData.experienceLevel === level.value
                              ? 'border-white bg-white/10'
                              : 'border-white/20 hover:border-white/40'
                          }`}
                        >
                          <div className="text-white font-['Inter:Medium',sans-serif]">
                            {level.label}
                          </div>
                          <div className="text-white/60 text-sm">{level.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setStep('calendly')}
                  disabled={!canProceedFromGoals}
                  className="w-full bg-white hover:bg-gray-100 disabled:bg-white/20 disabled:cursor-not-allowed text-black disabled:text-white/40 px-8 py-4 rounded-lg text-lg font-['Inter:Medium',sans-serif] transition-colors mt-6 flex items-center justify-center gap-2"
                >
                  Continue to Schedule <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Step 2: Calendly Scheduling */}
            {step === 'calendly' && (
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-3xl">
                    Pick Your Time
                  </h3>
                  <button
                    onClick={() => setStep('goals')}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="flex-1 min-h-[550px] rounded-lg overflow-hidden bg-white">
                  <InlineWidget
                    url="https://calendly.com/modula811/30min"
                    styles={{
                      height: '100%',
                      minHeight: '550px',
                    }}
                    pageSettings={{
                      backgroundColor: 'ffffff',
                      hideEventTypeDetails: false,
                      hideLandingPageDetails: false,
                      primaryColor: '000000',
                      textColor: '000000',
                    }}
                    prefill={{
                      name: formData.name,
                      email: formData.email,
                      customAnswers: {
                        a1: `Goal: ${formData.primaryGoal}`,
                        a2: `Experience: ${formData.experienceLevel}`,
                      },
                    }}
                    utm={{
                      utmCampaign: 'Fitness_Consultation',
                      utmSource: 'Website',
                      utmMedium: 'BookCall_Section',
                    }}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Success */}
            {step === 'success' && (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-4xl mb-4">
                  You're All Set!
                </h3>
                <p className="text-white/80 text-lg mb-8 max-w-md">
                  Check your email for the confirmation and calendar invite. 
                  We're excited to help you achieve your goals!
                </p>
                <button
                  onClick={() => {
                    setStep('goals');
                    setFormData({ primaryGoal: '', experienceLevel: '', name: '', email: '' });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg text-lg font-['Inter:Medium',sans-serif] transition-colors"
                >
                  Book Another Call
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
