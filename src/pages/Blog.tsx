import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Filter, ArrowRight } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { SectionIntro } from "@/components/ui/section-intro";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  target_gender: string;
  category: string;
  author: string;
  published_at: string;
}

const Blog = () => {
  const { profile } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetchPosts();
  }, [profile]);

  async function fetchPosts() {
    try {
      let query = supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

      const { data, error } = await query;

      if (error) throw error;

      const filteredPosts = data?.filter((post) => {
        if (post.target_gender === 'all') return true;
        if (profile?.gender && post.target_gender === profile.gender) return true;
        return false;
      }) || [];

      setPosts(filteredPosts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  }

  const categories = ['all', 'Heart Health', 'Wellness', 'Preventive Care', 'Chronic Conditions', 'Women\'s Health', 'Men\'s Health', 'Medication Management'];

  const filteredPosts = filter === 'all'
    ? posts
    : posts.filter(post => post.category === filter);

  return (
    <AppLayout>
      <SectionIntro
        title="Health & Wellness Blog"
        description={
          profile?.gender && profile.gender !== 'prefer-not-to-say'
            ? "Articles curated based on your profile and health interests."
            : "Explore evidence-based health articles to support your wellness journey."
        }
        icon={<BookOpen className="h-6 w-6 text-primary" />}
        affirmation="Knowledge is power when it comes to your health."
      />

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Filter by category</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
          <p className="text-muted-foreground">Loading articles...</p>
        </div>
      )}

      {/* Blog Posts Grid */}
      {!loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer"
            >
              {post.image_url && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  {post.target_gender !== 'all' && (
                    <span className="text-xs text-muted-foreground capitalize">
                      {post.target_gender}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.author}</span>
                  <Button variant="ghost" size="sm" className="gap-2 group-hover:gap-3 transition-all">
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No articles found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters to see more content.
          </p>
        </div>
      )}

      {/* Info Box */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 rounded-xl bg-primary/5 border border-primary/20 p-6"
      >
        <h3 className="font-semibold text-foreground mb-2">
          Content Personalization
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {profile?.gender && profile.gender !== 'prefer-not-to-say'
            ? `Articles are filtered based on your profile (${profile.gender}). You'll see general health content plus articles specifically relevant to you. You can adjust your profile settings anytime.`
            : "Some articles are tailored to specific health needs. Update your profile to see more personalized content recommendations."}
        </p>
      </motion.div>
    </AppLayout>
  );
};

export default Blog;
