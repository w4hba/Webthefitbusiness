import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import BlogPost from './BlogPost';
import imgHero from "figma:asset/b1b32578096800c5cc20a56451880a43842ac55a.png";
import imgFeatured from "figma:asset/ec6304b625d7101dbb1b056edf21f6ce38a08ad4.png";
import imgBlog1 from "figma:asset/b92d0bf66f0e3e4e7459af122856cfdd8900b21f.png";
import imgBlog2 from "figma:asset/c120b6b6ac341b15a33219e3436d7752fc1516bf.png";
import imgBlog3 from "figma:asset/4a0b2e6f4fb3c92b5aae48b8817bf1aa360f99ce.png";
import imgBlog4 from "figma:asset/e6505544831a5bc0702b6a24e805b249f0443326.png";
import imgBlog5 from "figma:asset/42fdb61644f7d992db9151981da834f85fdf1127.png";

const categories = ['All', 'Training', 'Nutrition', 'Home Building', 'Fat Loss', 'Recovery', 'Supplements', 'Mentality'];

const featuredPost = {
  id: 1,
  title: "5 Training Mistakes Keeping You From Your Goals",
  excerpt: "Most people think more is better when it comes to training. Discover the counterintuitive truth about why less might be exactly what you need.",
  image: imgFeatured,
  category: "Training",
  readTime: "8 min read",
  date: "Dec 8, 2025"
};

const posts = [
  {
    id: 2,
    title: "The Busy Professional's Guide to Meal Prep",
    excerpt: "Master the art of efficient meal preparation with strategies designed for your hectic schedule.",
    image: imgBlog1,
    category: "Nutrition",
    readTime: "6 min read",
    date: "Dec 5, 2025"
  },
  {
    id: 3,
    title: "Building Muscle After 40: What Actually Works",
    excerpt: "Science-backed protocols for building and maintaining muscle as you age, without spending hours in the gym.",
    image: imgBlog2,
    category: "Home Building",
    readTime: "9 min read",
    date: "Dec 2, 2025"
  },
  {
    id: 4,
    title: "The Truth About Supplements: What You Actually Need",
    excerpt: "Cutting through the marketing to identify which supplements actually deliver results worth your investment.",
    image: imgBlog3,
    category: "Supplements",
    readTime: "7 min read",
    date: "Nov 29, 2025"
  },
  {
    id: 5,
    title: "Recovery Strategies for High-Performers",
    excerpt: "Optimize your recovery to train harder, think sharper, and perform better in every area of life.",
    image: imgBlog4,
    category: "Recovery",
    readTime: "5 min read",
    date: "Nov 26, 2025"
  },
  {
    id: 6,
    title: "Fat Loss Without Counting Calories",
    excerpt: "Sustainable fat loss strategies that fit seamlessly into your lifestyle without obsessive tracking.",
    image: imgBlog5,
    category: "Fat Loss",
    readTime: "6 min read",
    date: "Nov 23, 2025"
  },
  {
    id: 7,
    title: "The High-Performer's Mental Edge",
    excerpt: "Transform your mindset with proven psychological strategies used by elite athletes and executives.",
    image: "https://images.unsplash.com/photo-1758223520304-4eec29414ad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbWluZHNldCUyMG1vdGl2YXRpb258ZW58MXx8fHwxNzYzNjMxODIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Mentality",
    readTime: "7 min read",
    date: "Nov 20, 2025"
  }
];

interface BlogProps {
  onSupplementsClick: () => void;
}

export default function Blog({ onSupplementsClick }: BlogProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState<typeof featuredPost | null>(null);
  const POSTS_PER_PAGE = 6;

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  // Get current posts to display
  const getCurrentPosts = () => {
    const start = currentPage * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    return posts.slice(start, end);
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <>
      <section id="blog" className="bg-black py-24 px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Hero Section */}
          <div className="relative mb-16 rounded-lg overflow-hidden h-[400px]">
            <img 
              src={imgHero}
              alt="The Fit Blog"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            <div className="relative h-full flex flex-col justify-center px-12">
              <div className="max-w-xl">
                <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-5xl mb-4 tracking-wide">
                  The Fit Blog.
                </h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  From elite training protocols to advanced nutrition science, mentality, and everything in line. Get tried-and-true strategies directly from the experts.
                </p>
              </div>
            </div>
          </div>

          {/* Knowledge Base Badge and Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-gray-100 rounded-full px-6 py-2 mb-6">
              <span className="font-['Inter:Regular',sans-serif] text-sm tracking-wider text-neutral-950">
                KNOWLEDGE BASE
              </span>
            </div>
            <h3 className="font-['Inter:Regular',sans-serif] text-white text-5xl mb-6 tracking-tight">
              Training, Nutrition &
              <br />
              Performance Insights
            </h3>
            <p className="text-white/90 text-xl max-w-3xl mx-auto tracking-tight">
              Some of the latest evidence-based articles, guides, and resources to help you train smarter and achieve your goals faster.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 border border-white/10 text-sm tracking-tight transition-all duration-300 hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-transparent text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* Featured Large Card */}
            <div onClick={() => setSelectedPost(featuredPost)} className="lg:row-span-2 group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="h-[340px] overflow-hidden">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 px-4 py-1 rounded-full text-xs tracking-wider text-neutral-950">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h4 className="font-['Inter:Regular',sans-serif] text-neutral-950 text-2xl mb-4 leading-tight">
                    {featuredPost.title}
                  </h4>
                  <p className="text-[#364153] mb-6 flex-1 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-neutral-950 font-['Inter:Regular',sans-serif] group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-4 text-sm text-[#4a5565]">
                      <span>{featuredPost.date}</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller Cards */}
            {getCurrentPosts().map((post) => (
              <div key={post.id} onClick={() => setSelectedPost(post)} className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="h-[200px] overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3">
                      <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs tracking-wider text-neutral-950">
                        {post.category}
                      </span>
                    </div>
                    <h4 className="font-['Inter:Regular',sans-serif] text-neutral-950 text-lg mb-3 leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-[#364153] text-sm mb-4 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 text-neutral-950 text-sm font-['Inter:Regular',sans-serif] group-hover:gap-3 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                      <div className="flex items-center gap-3 text-xs text-[#4a5565]">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === index ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Page ${index + 1}`}
                onClick={() => goToPage(index)}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button 
              onClick={goToPrevious}
              className="bg-white/10 hover:bg-white/20 hover:scale-110 text-white p-3 rounded-full transition-all duration-300"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={goToNext}
              className="bg-white/10 hover:bg-white/20 hover:scale-110 text-white p-3 rounded-full transition-all duration-300"
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Render BlogPost overlay when a post is selected */}
      {selectedPost && (
        <BlogPost 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
          onSupplementsClick={onSupplementsClick}
        />
      )}
    </>
  );
}