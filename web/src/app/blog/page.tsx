import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blog';

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-soft-wheat">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-dark-roast via-brutal-brown to-dark-roast relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-golden-pour rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-burnt-copper rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-golden-pour mb-6 tracking-brutal-wider">
                BLOG & NEWS
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-soft-wheat font-medium leading-relaxed mb-8">
                Stories, insights, and updates from the world of craft beer at TJ's Brew Works.
              </p>
              <div className="w-32 h-2 bg-brutal-gradient"></div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div className="brutal-card overflow-hidden hover:scale-105 transition-all duration-300 group h-full flex flex-col">
                    {/* Featured Image */}
                    <div className="h-64 bg-gradient-to-br from-brutal-brown to-golden-pour flex items-center justify-center relative overflow-hidden">
                      <span className="text-8xl opacity-20">📰</span>
                      <div className="absolute top-4 left-4 px-3 py-1 bg-golden-pour brutal-border text-xs font-bold">
                        {post.category.toUpperCase()}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="text-2xl font-extrabold text-dark-roast mb-3 group-hover:text-burnt-copper transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-base text-brutal-brown mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="mt-auto space-y-2 pt-4 border-t-2 border-dark-roast/10">
                        <div className="flex items-center gap-2 text-sm text-brutal-brown">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-brutal-brown">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Tag className="w-4 h-4 text-brutal-brown" />
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-soft-wheat brutal-border text-xs font-bold">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 text-sm font-bold text-golden-pour group-hover:translate-x-2 transition-transform">
                        READ MORE →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
