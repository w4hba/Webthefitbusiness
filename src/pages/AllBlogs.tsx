import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import imgImageLogo from "../assets/45a0c92c67123fe44d63c8950e682cc4a3fb46bb.png?url";

const allPosts = [
  {
    id: 1,
    title: "The High-Performer's Guide to Building Muscle While Working 60+ Hours",
    excerpt: "Discover the science-backed strategies that busy executives use to build muscle without spending hours in the gym.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    category: "Training",
    readTime: "8 min read",
    date: "Nov 15, 2025"
  },
  {
    id: 2,
    title: "5 Nutrition Hacks for Entrepreneurs on the Go",
    excerpt: "Simple strategies to optimize your nutrition when you're constantly traveling.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80",
    category: "Nutrition",
    readTime: "5 min read",
    date: "Nov 12, 2025"
  },
  {
    id: 3,
    title: "Why CEOs Are Prioritizing Sleep (And You Should Too)",
    excerpt: "The competitive advantage of proper sleep optimization.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&q=80",
    category: "Recovery",
    readTime: "6 min read",
    date: "Nov 10, 2025"
  },
  {
    id: 4,
    title: "Biohacking Your Performance: What Actually Works",
    excerpt: "Cutting through the hype to find evidence-based performance enhancers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
    category: "Biohacking",
    readTime: "10 min read",
    date: "Nov 8, 2025"
  },
  {
    id: 5,
    title: "The 20-Minute Workout for Busy Professionals",
    excerpt: "Maximum results with minimal time investment.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80",
    category: "Training",
    readTime: "4 min read",
    date: "Nov 5, 2025"
  },
  {
    id: 6,
    title: "Intermittent Fasting for High Performers",
    excerpt: "How strategic fasting can boost your mental clarity and productivity.",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&q=80",
    category: "Nutrition",
    readTime: "7 min read",
    date: "Nov 3, 2025"
  },
  {
    id: 7,
    title: "Stress Management Techniques for Executives",
    excerpt: "Science-backed methods to manage stress while maintaining peak performance.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
    category: "Mindset",
    readTime: "6 min read",
    date: "Nov 1, 2025"
  },
  {
    id: 8,
    title: "The Truth About Supplements: What You Really Need",
    excerpt: "Cut through the marketing to understand which supplements actually matter.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&q=80",
    category: "Supplements",
    readTime: "9 min read",
    date: "Oct 28, 2025"
  },
  {
    id: 9,
    title: "Building a Home Gym: Executive Edition",
    excerpt: "The essential equipment for building an elite home training space.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
    category: "Training",
    readTime: "5 min read",
    date: "Oct 25, 2025"
  },
  {
    id: 10,
    title: "Meal Prep Strategies for the Time-Starved Professional",
    excerpt: "How to prepare a week's worth of nutritious meals in under 2 hours.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    category: "Nutrition",
    readTime: "7 min read",
    date: "Oct 22, 2025"
  },
  {
    id: 11,
    title: "The Role of Mobility in Longevity",
    excerpt: "Why mobility work is the secret weapon of successful aging.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80",
    category: "Recovery",
    readTime: "6 min read",
    date: "Oct 19, 2025"
  },
  {
    id: 12,
    title: "Optimizing Your Morning Routine for Peak Performance",
    excerpt: "The morning habits of elite performers and how to implement them.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
    category: "Lifestyle",
    readTime: "8 min read",
    date: "Oct 16, 2025"
  }
];

export default function AllBlogs() {
  return (
    <div className="bg-black min-h-screen">
      {/* Navigation */}
      <nav className="bg-black border-b border-white/10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center gap-4">
            <img 
              src={imgImageLogo} 
              alt="The Fit Business Logo" 
              className="w-[50px] h-auto"
            />
            <h1 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-2xl tracking-wide">
              THE FIT BUSINESS
            </h1>
          </a>
          <a 
            href="/"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors font-['Inter:Medium',sans-serif]"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </a>
        </div>
      </nav>

      {/* Header */}
      <div className="py-16 px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-6xl mb-4 tracking-wide">
            ALL BLOG POSTS
          </h1>
          <p className="text-white/80 text-xl font-['DM_Serif_Text:Regular',sans-serif]">
            Expert insights on fitness, nutrition, and performance optimization
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors h-full flex flex-col">
                  <div className="h-[240px] overflow-hidden">
                    <ImageWithFallback 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex gap-4 mb-3">
                      <span className="text-white/60 text-xs uppercase tracking-wider">{post.category}</span>
                      <span className="text-white/40 text-xs">{post.readTime}</span>
                    </div>
                    <span className="text-white/40 text-sm mb-3">{post.date}</span>
                    <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-2xl mb-3 group-hover:text-white/80 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/70 mb-4 flex-1 font-['DM_Serif_Text:Regular',sans-serif] text-lg">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-white gap-2 font-['Inter:Medium',sans-serif]">
                      Read More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="bg-black border-t border-white/10 py-8 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 text-sm">
            © 2025 The Fit Business. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
