# Calendly Integration Setup

## ✅ What's Been Implemented

The `BookCall.tsx` component has been successfully refactored to integrate Calendly scheduling. Here's what changed:

### Before (Old Implementation)
- 5-step booking flow: goals → info → calendar → confirm → success
- 11 form fields including phone, age, occupation, date/time selection
- Custom calendar built with complex date/time logic
- ~400 lines of code

### After (New Implementation)
- **3-step booking flow: goals → calendly → success**
- **4 form fields: primaryGoal, experienceLevel, name, email**
- **Calendly InlineWidget** handles all scheduling
- **~230 lines of clean, maintainable code**

---

## 📋 Features

### Step 1: Goals & Information
- **Visual goal selection** with icon buttons:
  - 🎯 Weight Loss
  - 💪 Build Muscle
  - 🏃 Improve Endurance
  - ⚡ General Fitness

- **Experience level selection**:
  - Beginner (New to fitness)
  - Intermediate (1-3 years experience)
  - Advanced (3+ years experience)

- **Contact information**:
  - Name input field
  - Email input field

### Step 2: Calendly Widget
- Embedded Calendly scheduling interface
- **Automatic prefill** with name and email from Step 1
- **Custom answers** sent to Calendly:
  - `a1`: Selected fitness goal
  - `a2`: Experience level
- **UTM tracking**:
  - Campaign: Fitness_Consultation
  - Source: Website
  - Medium: BookCall_Section

### Step 3: Success
- Confirmation message
- Auto-triggered when Calendly booking completes
- Option to book another call (resets form)

---

## 🚀 Next Steps (Required)

### 1. Update Calendly URL
Replace the placeholder URL in `BookCall.tsx` line 177:

```tsx
// Current (line 177):
url="https://calendly.com/YOUR_USERNAME/consultation"

// Replace with your actual Calendly event link:
url="https://calendly.com/your-actual-username/consultation-call"
```

**How to get your Calendly URL:**
1. Log into https://calendly.com
2. Go to your event type (e.g., "Consultation")
3. Click "Share" → Copy the scheduling link
4. Paste it into the code

### 2. Configure Custom Questions in Calendly (Optional but Recommended)

To receive the fitness goals and experience level in your Calendly notifications:

1. Go to Calendly Dashboard → Your Event Type
2. Click "Edit" → "Invitee Questions"
3. Add custom questions:
   - **Question 1**: "What is your primary fitness goal?"
   - **Question 2**: "What is your experience level?"
4. Set these to **Text** type (they'll be auto-filled from the website)

### 3. Test the Integration

```bash
# Start the development server
npm run dev
```

Then:
1. Navigate to the "Book a Call" section
2. Fill out the goals form
3. Click "Continue to Schedule"
4. Verify Calendly widget loads correctly
5. Book a test appointment
6. Confirm success screen appears automatically

---

## 🔧 Technical Details

### Dependencies Installed
- `react-calendly@4.x` - Official Calendly React library

### TypeScript Declarations
Added to `src/vite-env.d.ts`:
```typescript
declare module 'react-calendly' {
  export interface InlineWidgetProps {
    url: string;
    prefill?: { name?: string; email?: string; /* ... */ };
    pageSettings?: { /* ... */ };
    styles?: React.CSSProperties;
    utm?: { /* ... */ };
  }
  export const InlineWidget: React.FC<InlineWidgetProps>;
  export function useCalendlyEventListener(options: { onEventScheduled?: (e: any) => void }): void;
}
```

### State Management
```typescript
type Step = 'goals' | 'calendly' | 'success';

interface FormData {
  primaryGoal: string;
  experienceLevel: string;
  name: string;
  email: string;
}
```

### Event Handling
The `useCalendlyEventListener` hook automatically detects when a user completes booking:
```typescript
useCalendlyEventListener({
  onEventScheduled: (e) => {
    console.log('Event scheduled:', e);
    setStep('success'); // Auto-advance to success screen
  },
});
```

---

## 📚 Documentation Reference

- **Calendly React Docs**: https://github.com/tcampb/react-calendly
- **Calendly Embed Options**: https://developer.calendly.com/embed-options
- **Prefill Parameters**: https://help.calendly.com/hc/en-us/articles/360020052833

---

## 🎨 Styling Notes

- Widget has **white background** with **550px minimum height**
- Primary color set to **black (#000000)** to match your branding
- Fully responsive design with flex layout
- Back button allows users to edit their information

---

## ⚠️ Important Notes

1. **Calendly URL is required** - The current placeholder will not work in production
2. **Custom questions** in Calendly should match the field names (`a1`, `a2`) for prefill to work
3. **Event listener** requires the user to be on the page when booking completes
4. **UTM parameters** help track conversions from your website in Calendly analytics

---

## ✨ Benefits of This Implementation

✅ **50% less code** - Easier to maintain
✅ **Professional scheduling** - Calendly handles availability, timezones, reminders
✅ **Better UX** - Fewer steps, cleaner interface
✅ **Auto-sync** - Bookings go straight to your calendar
✅ **No backend needed** - Calendly manages everything
✅ **Analytics** - Track booking sources with UTM parameters

---

**Ready to go live? Just update the Calendly URL and test!** 🚀
