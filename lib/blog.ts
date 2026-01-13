// lib/blog.ts
// Utility functions for fetching blog content from GitHub

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  categories: string[];
  slug: string;
  markdownUrl: string;
  author?: string;
  featured?: boolean;
}

export interface BlogManifest {
  posts: BlogPost[];
  version?: string;
  lastUpdated?: string;
}

const GITHUB_REPO = 'kccoers/www-blog';
const MANIFEST_URL = `https://raw.githubusercontent.com/${GITHUB_REPO}/main/manifest.json`;

/**
 * Fetch the blog manifest from GitHub
 */
export async function fetchBlogManifest(): Promise<BlogManifest> {
  try {
    const response = await fetch(MANIFEST_URL, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch manifest: ${response.status}`);
    }

    const manifest: BlogManifest = await response.json();
    return manifest;
  } catch (error) {
    console.error('Error fetching blog manifest:', error);
    // Return empty manifest on error
    return { posts: [] };
  }
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const manifest = await fetchBlogManifest();
  const post = manifest.posts.find(p => p.slug === slug);
  return post || null;
}

/**
 * Fetch markdown content for a blog post
 */
export async function fetchMarkdownContent(markdownUrl: string): Promise<string> {
  try {
    const response = await fetch(markdownUrl, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch markdown: ${response.status}`);
    }

    const markdown = await response.text();
    return markdown;
  } catch (error) {
    console.error('Error fetching markdown:', error);
    return 'Error loading post content. Please try again later.';
  }
}

/**
 * Get all blog posts, optionally filtered by category
 */
export async function getBlogPosts(category?: string): Promise<BlogPost[]> {
  const manifest = await fetchBlogManifest();
  
  if (!category || category === 'all') {
    return manifest.posts;
  }
  
  return manifest.posts.filter(post => 
    post.categories.includes(category)
  );
}

/**
 * Get featured blog posts
 */
export async function getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
  const manifest = await fetchBlogManifest();
  const featured = manifest.posts.filter(post => post.featured);
  return featured.slice(0, limit);
}