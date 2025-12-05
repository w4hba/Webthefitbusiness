/**
 * Centralized image path constants
 * All images are served from /public/images directory
 * Paths are relative to the public folder (Vite automatically resolves these)
 */

export const IMAGES = {
  // Hero section
  hero: {
    left: '/images/hero/hero-left.jpg',
    right: '/images/hero/hero-right.png',
    bookCall: '/images/hero/book-call.png',
  },

  // Logos
  logos: {
    main: '/images/logos/logo-main.png',
    testimonial: '/images/logos/logo-testimonial.png',
  },

  // Testimonials/Spotlight
  testimonials: {
    client1: '/images/testimonials/client-1.png',
    client2: '/images/testimonials/client-2.png',
    client3: '/images/testimonials/client-3.png',
    client4: '/images/testimonials/client-4.png',
    client5: '/images/testimonials/client-5.png',
    client6: '/images/testimonials/client-6.png',
  },

  // Blog section
  blog: {
    hero: '/images/blog/hero.png',
    featured: '/images/blog/featured.png',
    post1: '/images/blog/post-1.png',
    post2: '/images/blog/post-2.png',
    post3: '/images/blog/post-3.png',
    post4: '/images/blog/post-4.png',
    post5: '/images/blog/post-5.png',
  },

  // Services/About section
  services: {
    strengthTraining: '/images/services/strength-training.png',
    nutrition: '/images/services/nutrition.png',
    mobility: '/images/services/mobility.png',
    recovery: '/images/services/recovery.png',
  },

  // Supplements page
  supplements: {
    logo: '/images/supplements/logo.png',
    navLogo: '/images/supplements/nav-logo.png',
  },
} as const;

// Type for autocomplete support
export type ImagePath = typeof IMAGES;
