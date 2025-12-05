/// <reference types="vite/client" />

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module 'react-calendly' {
    import * as React from 'react';

    export interface InlineWidgetProps {
        url: string;
        styles?: React.CSSProperties;
        pageSettings?: {
            backgroundColor?: string;
            hideEventTypeDetails?: boolean;
            hideLandingPageDetails?: boolean;
            primaryColor?: string;
            textColor?: string;
        };
        prefill?: {
            email?: string;
            firstName?: string;
            lastName?: string;
            name?: string;
            customAnswers?: Record<string, string>;
        };
        utm?: {
            utmCampaign?: string;
            utmSource?: string;
            utmMedium?: string;
            utmContent?: string;
            utmTerm?: string;
        };
    }

 export const InlineWidget: React.FC<InlineWidgetProps>;
  export const PopupWidget: React.FC<any>;
  export const useCalendlyEventListener: (options: {
    onProfilePageViewed?: () => void;
    onDateAndTimeSelected?: () => void;
    onEventTypeViewed?: () => void;
    onEventScheduled?: (e: any) => void;
  }) => void;
}