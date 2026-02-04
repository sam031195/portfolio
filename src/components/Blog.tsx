import { useState } from 'react';
import { blogPosts, blogCategories, blogContent } from '../data';
import { SectionHeader } from './ui';
import { trackEvent } from '../utils';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = regularPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesCategory;
  });

  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        <SectionHeader
          title={blogContent.title}
          subtitle={blogContent.subtitle}
        />

        {/* Featured Article */}
        {featuredPost && (
          <article className="featured-article">
            <div className="featured-image">
              {featuredPost.imageUrl ? (
                <img 
                  src={featuredPost.imageUrl} 
                  alt={featuredPost.title}
                  className="featured-image-img"
                />
              ) : (
                <div className="featured-image-placeholder"></div>
              )}
            </div>
            <div className="featured-content">
              <h2 className="featured-title">{featuredPost.title}</h2>
              <div className="featured-meta">
                <span className="featured-date">{featuredPost.date}</span>
                <span className="featured-author">{blogContent.byText} {featuredPost.author}</span>
              </div>
              <p className="featured-description">{featuredPost.description}</p>
            </div>
          </article>
        )}

        {/* Filter Bar */}
        <div className="blog-filters">
          <div className="filter-tags">
            {blogCategories.map((category) => (
              <button
                key={category}
                className={`filter-tag ${activeCategory === category ? 'active' : ''}`}
                onClick={() => {
                  trackEvent('blog_filter_click', { category });
                  setActiveCategory(category);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-image">
                {post.imageUrl ? (
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="blog-card-image-img"
                  />
                ) : (
                  <div className="blog-card-image-placeholder"></div>
                )}
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">{post.title}</h3>
                <div className="blog-card-meta">
                  <span className="blog-card-date">{post.date}</span>
                  <span className="blog-card-author">{blogContent.byText} {post.author}</span>
                </div>
                <p className="blog-card-description">{post.description}</p>
                {post.url && (
                  <a 
                    href={post.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-card-link"
                    onClick={() =>
                      trackEvent('blog_post_click', {
                        title: post.title,
                        category: post.category,
                        url: post.url,
                      })
                    }
                  >
                    {blogContent.readArticle} <span className="arrow">→</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

