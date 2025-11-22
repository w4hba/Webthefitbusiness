import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgBookCall from "figma:asset/12e9837ef91bedefbd1237af4841e0f4e0950f2e.png";

type Step = 'goals' | 'info' | 'calendar' | 'confirm' | 'success';

interface FormData {
  primaryGoal: string;
  experienceLevel: string;
  name: string;
  phone: string;
  email: string;
  age: string;
  occupation: string;
  tellUsMore: string;
  selectedDate: string;
  selectedTime: string;
  agreedToInvest: boolean;
}

export default function BookCall() {
  const [step, setStep] = useState<Step>('goals');
  const [formData, setFormData] = useState<FormData>({
    primaryGoal: '',
    experienceLevel: '',
    name: '',
    phone: '',
    email: '',
    age: '',
    occupation: '',
    tellUsMore: '',
    selectedDate: '',
    selectedTime: '',
    agreedToInvest: false
  });

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceedFromGoals = formData.primaryGoal && formData.experienceLevel;
  const canProceedFromInfo = formData.name && formData.phone && formData.email && formData.age && formData.occupation && parseInt(formData.age) >= 18;
  const canProceedFromCalendar = formData.selectedDate && formData.selectedTime;
  const canConfirmBooking = formData.agreedToInvest;

  const handleConfirmBooking = () => {
    setStep('success');
  };

  const handleCloseSuccess = () => {
    // Reset form and scroll to top
    setFormData({
      primaryGoal: '',
      experienceLevel: '',
      name: '',
      phone: '',
      email: '',
      age: '',
      occupation: '',
      tellUsMore: '',
      selectedDate: '',
      selectedTime: '',
      agreedToInvest: false
    });
    setStep('goals');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate available times
  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  // Simple calendar generator (current month)
  const generateCalendarDays = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    
    const days = [];
    // Add empty cells for days before the first day
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      // Only add future dates
      if (date >= today) {
        days.push(date);
      } else {
        days.push(null);
      }
    }
    return days;
  };

  const calendarDays = generateCalendarDays();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentMonth = monthNames[new Date().getMonth()];
  const currentYear = new Date().getFullYear();

  return (
    <section id="book-call" className="bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Image */}
          <div className="relative overflow-hidden rounded-lg h-[600px]">
            <ImageWithFallback 
              src={imgBookCall}
              alt="Fitness coaching consultation"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Form Steps */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm flex flex-col">
            {/* Step 1: Goals */}
            {step === 'goals' && (
              <div className="flex-1 flex flex-col">
                <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-4xl mb-8">
                  Tell Us About Your Goals
                </h3>
                
                <div className="space-y-6 flex-1">
                  <div>
                    <label className="text-white text-lg mb-3 block font-['Inter:Medium',sans-serif]">
                      What is your primary fitness goal?
                    </label>
                    <select
                      value={formData.primaryGoal}
                      onChange={(e) => updateFormData('primaryGoal', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40"
                    >
                      <option value="" className="bg-black">Select a goal</option>
                      <option value="weight-loss" className="bg-black">Weight Loss</option>
                      <option value="muscle-gain" className="bg-black">Muscle Gain</option>
                      <option value="athletic-performance" className="bg-black">Athletic Performance</option>
                      <option value="general-fitness" className="bg-black">General Fitness</option>
                      <option value="body-recomposition" className="bg-black">Body Recomposition</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-white text-lg mb-3 block font-['Inter:Medium',sans-serif]">
                      What is your experience level?
                    </label>
                    <select
                      value={formData.experienceLevel}
                      onChange={(e) => updateFormData('experienceLevel', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40"
                    >
                      <option value="" className="bg-black">Select experience level</option>
                      <option value="beginner" className="bg-black">Beginner (0-1 years)</option>
                      <option value="intermediate" className="bg-black">Intermediate (1-3 years)</option>
                      <option value="advanced" className="bg-black">Advanced (3+ years)</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={() => setStep('info')}
                  disabled={!canProceedFromGoals}
                  className="w-full bg-white hover:bg-gray-100 disabled:bg-white/20 disabled:cursor-not-allowed text-black disabled:text-white/40 px-8 py-4 rounded-lg text-lg font-['Inter:Medium',sans-serif] transition-colors mt-8 flex items-center justify-center gap-2"
                >
                  Continue <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Step 2: Personal Info */}
            {step === 'info' && (
              <div className="flex-1 flex flex-col">
                <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-4xl mb-8">
                  Tell Us About Your Goals
                </h3>
                
                <div className="space-y-4 flex-1">
                  <div>
                    <label className="text-white text-sm mb-2 block font-['Inter:Medium',sans-serif]">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="text-white text-sm mb-2 block font-['Inter:Medium',sans-serif]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="text-white text-sm mb-2 block font-['Inter:Medium',sans-serif]">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-white text-sm mb-2 block font-['Inter:Medium',sans-serif]">
                      Age * (Must be 18+)
                    </label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => updateFormData('age', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40"
                      placeholder="25"
                      min="18"
                    />
                  </div>

                  <div>
                    <label className="text-white text-sm mb-2 block font-['Inter:Medium',sans-serif]">
                      Current Occupation *
                    </label>
                    <input
                      type="text"
                      value={formData.occupation}
                      onChange={(e) => updateFormData('occupation', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40"
                      placeholder="CEO, Entrepreneur, etc."
                    />
                  </div>

                  <div>
                    <label className="text-white text-sm mb-2 block font-['Inter:Medium',sans-serif]">
                      Tell us more (Optional)
                    </label>
                    <textarea
                      value={formData.tellUsMore}
                      onChange={(e) => updateFormData('tellUsMore', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 resize-none"
                      placeholder="Any additional information..."
                      rows={3}
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setStep('goals')}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-['Inter:Medium',sans-serif] transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" /> Back
                  </button>
                  <button
                    onClick={() => setStep('calendar')}
                    disabled={!canProceedFromInfo}
                    className="flex-1 bg-white hover:bg-gray-100 disabled:bg-white/20 disabled:cursor-not-allowed text-black disabled:text-white/40 px-8 py-4 rounded-lg text-lg font-['Inter:Medium',sans-serif] transition-colors flex items-center justify-center gap-2"
                  >
                    Continue <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Calendar */}
            {step === 'calendar' && (
              <div className="flex-1 flex flex-col">
                <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-4xl mb-8">
                  Select Your Date & Time
                </h3>
                
                <div className="space-y-6 flex-1 overflow-y-auto">
                  {/* Calendar */}
                  <div>
                    <h4 className="text-white text-xl mb-4 font-['Inter:Medium',sans-serif]">
                      {currentMonth} {currentYear}
                    </h4>
                    <div className="grid grid-cols-7 gap-2">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                        <div key={idx} className="text-white/60 text-center text-sm py-2">
                          {day}
                        </div>
                      ))}
                      {calendarDays.map((date, idx) => (
                        <button
                          key={idx}
                          disabled={!date}
                          onClick={() => date && updateFormData('selectedDate', date.toISOString().split('T')[0])}
                          className={`p-2 text-sm rounded-lg transition-colors ${
                            !date 
                              ? 'invisible' 
                              : formData.selectedDate === date.toISOString().split('T')[0]
                              ? 'bg-white text-black'
                              : 'bg-white/10 text-white hover:bg-white/20'
                          }`}
                        >
                          {date ? date.getDate() : ''}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  {formData.selectedDate && (
                    <div>
                      <h4 className="text-white text-xl mb-4 font-['Inter:Medium',sans-serif]">
                        Select Time
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            onClick={() => updateFormData('selectedTime', time)}
                            className={`p-3 text-sm rounded-lg transition-colors ${
                              formData.selectedTime === time
                                ? 'bg-white text-black'
                                : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setStep('info')}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-['Inter:Medium',sans-serif] transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" /> Back
                  </button>
                  <button
                    onClick={() => setStep('confirm')}
                    disabled={!canProceedFromCalendar}
                    className="flex-1 bg-white hover:bg-gray-100 disabled:bg-white/20 disabled:cursor-not-allowed text-black disabled:text-white/40 px-8 py-4 rounded-lg text-lg font-['Inter:Medium',sans-serif] transition-colors flex items-center justify-center gap-2"
                  >
                    Continue <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 'confirm' && (
              <div className="flex-1 flex flex-col">
                <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-4xl mb-8">
                  Confirm Your Booking
                </h3>
                
                <div className="space-y-6 flex-1">
                  {/* Booking Summary */}
                  <div className="bg-white/10 rounded-lg p-6 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white/60">Name:</span>
                      <span className="text-white font-['Inter:Medium',sans-serif]">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Email:</span>
                      <span className="text-white font-['Inter:Medium',sans-serif]">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Date:</span>
                      <span className="text-white font-['Inter:Medium',sans-serif]">
                        {new Date(formData.selectedDate).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Time:</span>
                      <span className="text-white font-['Inter:Medium',sans-serif]">{formData.selectedTime}</span>
                    </div>
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="invest-agreement"
                      checked={formData.agreedToInvest}
                      onChange={(e) => updateFormData('agreedToInvest', e.target.checked)}
                      className="mt-1 w-5 h-5 rounded border-white/20 bg-white/10 text-white focus:ring-white/40"
                    />
                    <label htmlFor="invest-agreement" className="text-white text-lg cursor-pointer">
                      I am ready to invest in myself if the program is a good fit
                    </label>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep('calendar')}
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-['Inter:Medium',sans-serif] transition-colors flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="w-5 h-5" /> Back
                    </button>
                    <button
                      onClick={handleConfirmBooking}
                      disabled={!canConfirmBooking}
                      className="flex-1 bg-white hover:bg-gray-100 disabled:bg-white/20 disabled:cursor-not-allowed text-black disabled:text-white/40 px-8 py-4 rounded-lg text-lg font-['Inter:Medium',sans-serif] transition-colors flex items-center justify-center gap-2"
                    >
                      Confirm Booking <Check className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-white/40 text-sm text-center">
                    Please accept agreements to continue
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {step === 'success' && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/10 border border-white/20 rounded-lg p-8 max-w-md w-full backdrop-blur-md">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                <Check className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-3xl mb-4">
                Booking Confirmed!
              </h3>
              <div className="space-y-3 mb-8 text-white/90">
                <p>Your consultation has been scheduled for:</p>
                <p className="font-['Inter:Medium',sans-serif] text-xl">
                  {new Date(formData.selectedDate).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="font-['Inter:Medium',sans-serif] text-xl">{formData.selectedTime}</p>
                <p className="text-sm text-white/60 mt-4">
                  A confirmation email has been sent to {formData.email}
                </p>
              </div>
              <button
                onClick={handleCloseSuccess}
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