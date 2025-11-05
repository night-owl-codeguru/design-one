import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';

type BlogPostPageProps = {
  params?: Promise<{ slug?: string | string[] }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Next.js 15 passes route params as a Promise; await to normalise before use.
  const resolvedParams = params ? await params : {};
  const slugParam = resolvedParams.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  if (!slug) {
    notFound();
  }

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-soft-wheat">
        <section className="pt-32 pb-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 brutal-card hover:shadow-brutal-lg transition-all group mb-8"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              <span className="font-bold tracking-wide">Back to Blog</span>
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="px-4 py-2 bg-golden-pour brutal-border font-bold text-sm tracking-wider">
                {post.category.toUpperCase()}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-roast mb-6 tracking-brutal-wide">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 mb-8 text-brutal-brown">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="font-bold">{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-bold">{post.author}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="brutal-card mb-12 h-96 bg-gradient-to-br from-brutal-brown to-golden-pour flex items-center justify-center overflow-hidden">
              <span className="text-9xl opacity-20">📰</span>
            </div>

            {/* Content */}
            <div className="brutal-card p-8 md:p-12 prose prose-lg max-w-none">
              <p className="text-xl text-brutal-brown leading-relaxed mb-6 font-bold">
                {post.excerpt}
              </p>
              <div className="h-px bg-dark-roast/20 my-8"></div>
              <div className="text-lg text-brutal-brown leading-relaxed space-y-6">
                <p>{post.content}</p>
                <p>
                  This is a demo blog post. In a real implementation, this would contain the full article content with proper formatting, images, and embedded media.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-soft-wheat brutal-border font-bold text-sm text-dark-roast"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Related Posts */}
            <div className="mt-20">
              <h2 className="text-4xl font-extrabold text-dark-roast mb-8 tracking-brutal-wide">
                MORE ARTICLES
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <div className="brutal-card overflow-hidden hover:scale-105 transition-all">
                      <div className="h-48 bg-gradient-to-br from-brutal-brown to-golden-pour"></div>
                      <div className="p-6">
                        <h3 className="text-xl font-extrabold text-dark-roast mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-brutal-brown line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
