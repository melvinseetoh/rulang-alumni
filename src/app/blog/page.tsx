"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  BookOpen,
  Star,
  ArrowLeft
} from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  authorRole: string
  publishDate: string
  readTime: string
  category: string
  featured: boolean
  image: string
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: "from-classroom-to-boardroom",
    title: "From Classroom to Boardroom: My Journey After Rulang",
    excerpt: "How my time at Rulang Primary shaped my leadership philosophy and helped me navigate the corporate world. A reflection on the values that still guide me today.",
    author: "Sarah Lim",
    authorRole: "Class of 1995, CEO of TechStart Singapore",
    publishDate: "2024-12-15",
    readTime: "8 min read",
    category: "Career Stories",
    featured: true,
    image: "/images/blog/christina-wocintechchat-com-ftCWdZOFZqo-unsplash.jpg",
    tags: ["Leadership", "Career", "Technology"]
  },
  {
    id: "teachers-who-changed-my-life",
    title: "The Teachers Who Changed My Life",
    excerpt: "A heartfelt tribute to the educators who went beyond textbooks to teach life lessons that lasted a lifetime. Their impact continues to inspire me decades later.",
    author: "Michael Chen",
    authorRole: "Class of 1988, Medical Doctor",
    publishDate: "2024-12-10",
    readTime: "6 min read",
    category: "Gratitude",
    featured: false,
    image: "/images/blog/teacher-classroom-national-cancer-institute-unsplash.jpg",
    tags: ["Education", "Inspiration", "Gratitude"]
  },
  {
    id: "building-bridges-across-generations",
    title: "Building Bridges Across Generations",
    excerpt: "How the Rulang Alumni Association is creating meaningful connections between alumni from different decades, fostering mentorship and collaboration.",
    author: "Jennifer Wong",
    authorRole: "Class of 2001, Alumni Committee Member",
    publishDate: "2024-12-08",
    readTime: "5 min read",
    category: "Community",
    featured: false,
    image: "/images/blog/community-group-ben-duchac-unsplash.jpg",
    tags: ["Community", "Mentorship", "Networking"]
  },
  {
    id: "memories-of-school-carnival-1985",
    title: "Memories of School Carnival 1985",
    excerpt: "A nostalgic journey back to one of the most memorable school carnivals in Rulang's history. Cotton candy, game stalls, and friendships that lasted forever.",
    author: "David Tan",
    authorRole: "Class of 1987, Photographer",
    publishDate: "2024-12-05",
    readTime: "7 min read",
    category: "Nostalgia",
    featured: true,
    image: "/images/blog/vintage-classroom-nationaal-archief-unsplash.jpg",
    tags: ["Memories", "School Events", "Nostalgia"]
  },
  {
    id: "giving-back-scholarship-program",
    title: "Giving Back: Our Scholarship Program Success",
    excerpt: "Learn about the impact of our alumni scholarship program and how it's helping current students achieve their dreams. Real stories of transformation and hope.",
    author: "Linda Ng",
    authorRole: "Class of 1992, Scholarship Committee Chair",
    publishDate: "2024-12-01",
    readTime: "9 min read",
    category: "Giving Back",
    featured: false,
    image: "/images/blog/giving-back-hands-heart-tim-marshall-unsplash.jpg",
    tags: ["Education", "Charity", "Future Generation"]
  },
  {
    id: "sports-day-champions-then-and-now",
    title: "Sports Day Champions: Then and Now",
    excerpt: "Catching up with former sports day champions and discovering how the competitive spirit and teamwork learned at Rulang translated to success in their careers.",
    author: "Alex Kumar",
    authorRole: "Class of 1993, Sports Journalist",
    publishDate: "2024-11-28",
    readTime: "6 min read",
    category: "Sports",
    featured: false,
    image: "/images/blog/sports-soccer-adria-crehuet-cano-unsplash.jpg",
    tags: ["Sports", "Achievement", "Life Lessons"]
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  
  const categories = ["All", "Career Stories", "Gratitude", "Community", "Nostalgia", "Giving Back", "Sports"]
  const featuredPosts = blogPosts.filter(post => post.featured)
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-4xl font-montserrat font-bold text-gray-900">Alumni Stories</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover inspiring stories, memories, and insights from our alumni community. 
            Each story is a testament to the lasting impact of our Rulang family.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-montserrat font-semibold text-gray-900 mb-8 flex items-center">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              Featured Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="aspect-video bg-gray-200 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                          {post.category}
                        </span>
                        <span className="mx-3">•</span>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                            <User className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{post.author}</p>
                            <p className="text-xs text-gray-600">{post.authorRole}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(post.publishDate)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-600 mb-3">
                    <span className="bg-gray-100 px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-montserrat font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                        <User className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{post.author}</p>
                        <p className="text-gray-600 truncate max-w-32">{post.authorRole}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(post.publishDate)}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-primary text-sm font-medium group-hover:text-primary-dark">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No stories found</h3>
            <p className="text-gray-600">Try selecting a different category or check back later for new content.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-montserrat font-semibold mb-4">Share Your Story</h2>
          <p className="text-lg mb-6 opacity-90">
            Have a story to share with our alumni community? We'd love to feature your experience and insights.
          </p>
          <Button variant="secondary" size="lg" className="text-primary">
            Submit Your Story
          </Button>
        </div>
      </div>
    </div>
  )
}