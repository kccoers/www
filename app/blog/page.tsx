'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchBlogManifest } from '@/lib/blog';
import type { BlogPost } from '@/lib/blog';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Blog post categories with colors (matching your skills section style)
  const categories = {
    all: { label: 'All Posts', color: 'slate' },
    cloud: { label: 'Cloud', color: 'cyan' },
    networking: { label: 'Networking', color: 'purple' },
    iac: { label: 'IaC', color: 'orange' },
    leadership: { label: 'Leadership', color: 'green' },
    astrophotography: { label: 'Astrophotography', color: 'blue' }
  };

  const colorClasses = {
    slate: 'bg-slate-500 text-white hover:bg-slate-600',
    cyan: 'bg-cyan-500 text-white hover:bg-cyan-600',
    purple: 'bg-purple-500 text-white hover:bg-purple-600',
    orange: 'bg-orange-500 text-white hover:bg-orange-600',
    green: 'bg-green-500 text-white hover:bg-green-600',
    blue: 'bg-blue-500 text-white hover:bg-blue-600'
  };

  // Fetch blog posts on mount
  useEffect(() => {
    async function loadPosts() {
      setLoading(true);
      const manifest = await fetchBlogManifest();
      setPosts(manifest.posts);
      setLoading(false);
    }
    loadPosts();
  }, []);

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.categories.includes(selectedCategory));

  // Get category color for pills
  const getCategoryColor = (category: string) => {
    return categories[category as keyof typeof categories]?.color || 'slate';
  };

  return (
    <main className="min-h-screen bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-slate-100 mb-4">Blog</h1>
          <p className="text-xl text-slate-400">
            Thoughts on infrastructure, cloud architecture, networking, and astrophotography
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3">
            {Object.entries(categories).map(([key, { label, color }]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === key
                    ? `${colorClasses[color as keyof typeof colorClasses]} scale-105 shadow-lg`
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-400 mt-4">Loading posts...</p>
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && (
          <section>
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-400 text-lg">
                  {posts.length === 0 
                    ? 'No blog posts yet. Check back soon!' 
                    : 'No posts found in this category.'}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                  >
                    <article className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all group cursor-pointer">
                      {/* Post Meta */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                        <time>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</time>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      {/* Post Title */}
                      <h2 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h2>

                      {/* Post Excerpt */}
                      <p className="text-slate-300 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Category Pills */}
                      <div className="flex flex-wrap gap-2">
                        {post.categories.map((category, index) => {
                          const color = getCategoryColor(category);
                          return (
                            <span
                              key={index}
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                colorClasses[color as keyof typeof colorClasses]
                              }`}
                            >
                              {categories[category as keyof typeof categories]?.label || category}
                            </span>
                          );
                        })}
                      </div>

                      {/* Read More Link */}
                      <div className="mt-4">
                        <span className="text-cyan-400 font-semibold group-hover:underline">
                          Read more →
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Coming Soon Notice (shows when no posts) */}
        {!loading && posts.length === 0 && (
          <section className="mt-12 bg-slate-800 rounded-xl p-8 border border-slate-700 text-center">
            <h3 className="text-xl font-bold text-slate-100 mb-3">More Posts Coming Soon</h3>
            <p className="text-slate-400">
              I'm working on detailed technical write-ups covering infrastructure architecture, 
              networking solutions, and astrophotography techniques. Check back soon!
            </p>
          </section>
        )}
      </div>
    </main>
  );
}