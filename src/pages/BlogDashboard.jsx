import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import StickyNav from '@/components/webik/StickyNav';
import Footer from '@/components/webik/Footer';
import { Plus, Pencil, Trash2, ExternalLink, ArrowLeft } from 'lucide-react';

export default function BlogDashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await base44.entities.BlogPost.list('-datePublished', 100);
      setPosts(res);
    } catch (err) {
      console.error('Failed to load posts', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleDelete = async (post) => {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    setDeleting(post.id);
    try {
      await base44.entities.BlogPost.delete(post.id);
      setPosts(prev => prev.filter(p => p.id !== post.id));
    } catch (err) {
      alert('Failed to delete post: ' + (err.response?.data?.error || err.message));
    } finally {
      setDeleting(null);
    }
  };

  const inputClass = "w-full rounded-lg border px-4 py-2.5 font-inter text-sm focus:outline-none focus:ring-2";
  const inputStyle = { borderColor: 'var(--webik-cream-2)', background: 'white' };

  return (
    <div className="min-h-screen" style={{ background: 'var(--webik-cream)' }}>
      <StickyNav />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <Link to="/analytics" className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] mb-3 transition-colors" style={{ color: 'var(--webik-muted)' }}>
              <ArrowLeft size={13} /> Dashboard
            </Link>
            <h1 className="font-grotesk text-4xl lg:text-5xl font-light" style={{ color: 'var(--webik-dark)' }}>
              Blog Manager
            </h1>
            <p className="font-inter text-sm mt-2" style={{ color: 'var(--webik-muted)' }}>
              Create, edit, and publish blog posts.
            </p>
          </div>
          <Link
            to="/blog-editor"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-inter font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'var(--webik-dark)', color: 'var(--webik-cream)' }}
          >
            <Plus size={18} /> New Blog Post
          </Link>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-32">
            <div className="w-8 h-8 border-4 rounded-full animate-spin" style={{ borderColor: 'var(--webik-cream-2)', borderTopColor: 'var(--webik-dark)' }}></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed p-16 text-center" style={{ borderColor: 'var(--webik-cream-2)' }}>
            <p className="font-inter text-sm mb-4" style={{ color: 'var(--webik-muted)' }}>No blog posts yet.</p>
            <Link to="/blog-editor" className="inline-flex items-center gap-2 font-inter text-sm font-medium" style={{ color: 'var(--webik-dark)' }}>
              <Plus size={16} /> Create your first post
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map(post => (
              <div key={post.id} className="rounded-2xl border p-5 flex items-center gap-4" style={{ background: 'white', borderColor: 'var(--webik-cream-2)' }}>
                {post.coverImage ? (
                  <img src={post.coverImage} alt={post.title} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                ) : (
                  <div className="w-16 h-16 rounded-lg flex-shrink-0" style={{ background: 'var(--webik-cream-2)' }} />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full" style={{ background: 'rgba(200,240,72,0.15)', color: 'var(--webik-dark)' }}>
                      {post.category}
                    </span>
                    <span className="font-mono text-[10px]" style={{ color: 'var(--webik-muted)' }}>
                      {post.datePublished ? new Date(post.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'No date'}
                    </span>
                  </div>
                  <h3 className="font-grotesk font-medium text-base truncate" style={{ color: 'var(--webik-dark)' }}>{post.title}</h3>
                  <p className="font-mono text-[11px] truncate" style={{ color: 'var(--webik-muted)' }}>/blog/{post.slug}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a href={`/#/blog/${post.slug}`} target="_blank" rel="noopener" className="p-2 rounded-lg hover:bg-[var(--webik-cream)] transition-colors" style={{ color: 'var(--webik-muted)' }} title="View live">
                    <ExternalLink size={16} />
                  </a>
                  <Link to={`/blog-editor?id=${post.id}`} className="p-2 rounded-lg hover:bg-[var(--webik-cream)] transition-colors" style={{ color: 'var(--webik-dark)' }} title="Edit">
                    <Pencil size={16} />
                  </Link>
                  <button
                    onClick={() => handleDelete(post)}
                    disabled={deleting === post.id}
                    className="p-2 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50"
                    style={{ color: '#dc2626' }}
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}