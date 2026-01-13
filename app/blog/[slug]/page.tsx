// app/blog/[slug]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getBlogPost, fetchMarkdownContent } from '@/lib/blog';
import type { BlogPost } from '@/lib/blog';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [markdown, setMarkdown] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const categories = {
    cloud: { label: 'Cloud', color: 'bg-cyan-500 text-white' },
    networking: { label: 'Networking', color: 'bg-purple-500 text-white' },
    iac: { label: 'IaC', color: 'bg-orange-500 text-white' },
    leadership: { label: 'Leadership', color: 'bg-green-500 text-white' },
    astrophotography: { label: 'Astrophotography', color: 'bg-blue-500 text-white' }
  };

  useEffect(() => {
    async function loadPost() {
      setLoading(true);
      
      // Fetch post metadata
      const postData = await getBlogPost(slug);
      setPost(postData);
      
      // Fetch markdown content
      if (postData) {
        const content = await fetchMarkdownContent(postData.markdownUrl);
        setMarkdown(content);
      }
      
      setLoading(false);
    }
    
    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-400 mt-4">Loading post...</p>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-100 mb-4">Post Not Found</h1>
          <p className="text-slate-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            href="/blog"
            className="text-cyan-400 font-semibold hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900">
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link 
          href="/blog"
          className="inline-flex items-center text-cyan-400 font-semibold hover:underline mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category, index) => {
              const categoryData = categories[category as keyof typeof categories];
              return (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    categoryData?.color || 'bg-slate-500 text-white'
                  }`}
                >
                  {categoryData?.label || category}
                </span>
              );
            })}
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold text-slate-100 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-slate-400">
            {post.author && <span>{post.author}</span>}
            {post.author && <span>•</span>}
            <time>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Markdown Content */}
        <div className="prose prose-invert prose-slate max-w-none">
          <ReactMarkdown
            components={{
              // Style heading elements
              h1: ({node, ...props}) => <h1 className="text-4xl font-bold text-slate-100 mt-8 mb-4" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-3xl font-bold text-slate-100 mt-8 mb-4" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-2xl font-bold text-slate-100 mt-6 mb-3" {...props} />,
              h4: ({node, ...props}) => <h4 className="text-xl font-bold text-slate-100 mt-6 mb-3" {...props} />,
              
              // Style paragraphs
              p: ({node, ...props}) => <p className="text-slate-300 text-lg leading-relaxed mb-6" {...props} />,
              
              // Style lists
              ul: ({node, ...props}) => <ul className="list-disc list-inside text-slate-300 text-lg mb-6 space-y-2" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal list-inside text-slate-300 text-lg mb-6 space-y-2" {...props} />,
              li: ({node, ...props}) => <li className="ml-4" {...props} />,
              
              // Style links
              a: ({node, ...props}) => <a className="text-cyan-400 hover:underline font-semibold" {...props} />,
              
              // Style code blocks
              code: ({node, className, children, ...props}) => {
                const isInline = !className;
                return isInline ? (
                  <code className="bg-slate-800 text-cyan-400 px-2 py-1 rounded text-sm font-mono" {...props}>
                    {children}
                  </code>
                ) : (
                  <code className="block bg-slate-800 text-slate-300 p-4 rounded-lg overflow-x-auto text-sm font-mono mb-6" {...props}>
                    {children}
                  </code>
                );
              },
              
              // Style blockquotes
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-slate-400 my-6" {...props} />
              ),
              
              // Style horizontal rules
              hr: ({node, ...props}) => <hr className="border-slate-700 my-8" {...props} />,
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-slate-700">
          <Link 
            href="/blog"
            className="text-cyan-400 font-semibold hover:underline"
          >
            ← Back to all posts
          </Link>
        </footer>
      </article>
    </main>
  );
}