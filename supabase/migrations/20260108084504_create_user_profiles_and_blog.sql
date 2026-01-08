/*
  # User Profiles and Blog System

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `email` (text)
      - `full_name` (text)
      - `gender` (text) - 'male', 'female', 'non-binary', 'prefer-not-to-say'
      - `date_of_birth` (date)
      - `height` (integer) - in centimeters
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `excerpt` (text)
      - `content` (text)
      - `image_url` (text)
      - `target_gender` (text) - 'all', 'male', 'female', 'non-binary'
      - `category` (text)
      - `author` (text)
      - `published_at` (timestamptz)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Users can read and update their own profile
    - Blog posts are publicly readable
*/

-- Profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  full_name text,
  gender text CHECK (gender IN ('male', 'female', 'non-binary', 'prefer-not-to-say')),
  date_of_birth date,
  height integer,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  image_url text,
  target_gender text DEFAULT 'all' CHECK (target_gender IN ('all', 'male', 'female', 'non-binary')),
  category text NOT NULL,
  author text NOT NULL,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blog posts are publicly readable"
  ON blog_posts FOR SELECT
  TO authenticated
  USING (true);

-- Create index for faster slug lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_target_gender ON blog_posts(target_gender);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, category, author, target_gender, image_url)
VALUES 
  (
    'Understanding Blood Pressure: A Complete Guide',
    'understanding-blood-pressure',
    'Learn what your blood pressure numbers mean and how to maintain healthy levels through lifestyle changes.',
    'Blood pressure is one of the most important vital signs to monitor regularly. Understanding what your numbers mean can help you take control of your cardiovascular health...',
    'Heart Health',
    'Dr. Sarah Chen',
    'all',
    'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg'
  ),
  (
    'Women''s Heart Health: What You Need to Know',
    'womens-heart-health',
    'Heart disease presents differently in women. Learn the unique signs and prevention strategies every woman should know.',
    'Heart disease remains the leading cause of death among women, yet many women are unaware of their unique risk factors. Women often experience different symptoms than men...',
    'Heart Health',
    'Dr. Maria Rodriguez',
    'female',
    'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg'
  ),
  (
    'Men''s Health After 40: Essential Screenings',
    'mens-health-after-40',
    'Preventive care becomes crucial after 40. Discover which health screenings men should prioritize.',
    'As men age, certain health risks increase. Regular screenings can catch potential issues early when they are most treatable. After 40, men should focus on...',
    'Preventive Care',
    'Dr. James Thompson',
    'male',
    'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg'
  ),
  (
    'The Sleep-Health Connection You Can''t Ignore',
    'sleep-health-connection',
    'Quality sleep affects everything from blood sugar to blood pressure. Learn how to optimize your sleep for better health outcomes.',
    'Sleep is not a luxury—it''s a biological necessity. Poor sleep has been linked to increased risk of diabetes, hypertension, obesity, and heart disease...',
    'Wellness',
    'Dr. Emily Watson',
    'all',
    'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg'
  ),
  (
    'Managing Diabetes: Beyond Blood Sugar',
    'managing-diabetes-beyond-blood-sugar',
    'Diabetes management involves more than glucose monitoring. Discover holistic approaches to living well with diabetes.',
    'While blood sugar control is central to diabetes management, a comprehensive approach includes stress management, sleep quality, regular physical activity...',
    'Chronic Conditions',
    'Dr. Robert Kim',
    'all',
    'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg'
  ),
  (
    'Hormone Health for Women: A Practical Guide',
    'hormone-health-women',
    'Hormones affect mood, weight, energy, and more. Learn how to support hormonal balance naturally.',
    'Hormonal fluctuations throughout a woman''s life—from menstrual cycles to pregnancy to menopause—can significantly impact overall health and wellbeing...',
    'Women''s Health',
    'Dr. Lisa Anderson',
    'female',
    'https://images.pexels.com/photos/3736879/pexels-photo-3736879.jpeg'
  ),
  (
    'Medication Adherence: Why It Matters',
    'medication-adherence-matters',
    'Missing doses affects more than just the medication. Learn strategies for staying consistent with your treatment plan.',
    'Studies show that nearly 50% of patients don''t take medications as prescribed. This non-adherence leads to worsening conditions, hospitalizations...',
    'Medication Management',
    'Dr. Patricia Lee',
    'all',
    'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg'
  ),
  (
    'Testosterone and Men''s Health: Myths vs Facts',
    'testosterone-mens-health',
    'Separate fact from fiction about testosterone, aging, and men''s vitality.',
    'Testosterone levels naturally decline with age, but this doesn''t mean every man needs treatment. Understanding normal changes versus true deficiency...',
    'Men''s Health',
    'Dr. Michael Brooks',
    'male',
    'https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg'
  );
