"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar } from "../../components/ui/avatar"
import { mockBlogPosts, blogCategories } from "../../lib/mock-data"
import {
  Search,
  Filter,
  Calendar,
  Eye,
  Heart,
  MessageCircle,
  Clock,
  Tag,
  User,
  ArrowRight,
  TrendingUp,
  Star,
  BookOpen,
  Edit3,
  Lock,
  Globe,
  Users
} from "lucide-react"

export default function BlogListPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [selectedVisibility, setSelectedVisibility] = React.useState("all")
  const [sortBy, setSortBy] = React.useState<"latest" | "popular" | "trending">("latest")

  const filteredPosts = React.useMemo(() => {
    let filtered = [...mockBlogPosts]

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Filter by visibility
    if (selectedVisibility !== "all") {
      filtered = filtered.filter(post => post.visibility === selectedVisibility)
    }

    // Sort posts
    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => b.views - a.views)
        break
      case "trending":
        filtered.sort((a, b) => b.likes - a.likes)
        break
      case "latest":
      default:
        filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        break
    }

    return filtered
  }, [mockBlogPosts, searchQuery, selectedCategory, selectedVisibility, sortBy])

  const featuredPost = mockBlogPosts.find(post => post.id === "blog-001")
  const trendingPosts = mockBlogPosts
    .filter(post => post.id !== featuredPost?.id)
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  }

  const getVisibilityIcon = (visibility: string) => {
    switch (visibility) {
      case "public":
        return <Globe className="h-3 w-3 text-green-600" />
      case "members-only":
        return <Users className="h-3 w-3 text-blue-600" />
      case "preview":
        return <Star className="h-3 w-3 text-yellow-600" />
      default:
        return <Lock className="h-3 w-3 text-gray-600" />
    }
  }

  const getVisibilityLabel = (visibility: string) => {
    switch (visibility) {
      case "public":
        return "Public"
      case "members-only":
        return "Members Only"
      case "preview":
        return "Preview"
      default:
        return "Private"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-montserrat font-bold text-gray-900">
                Alumni Stories
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Sharing experiences, insights, and memories from our community
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/mockups/member/dashboard">
                <Button variant="outline">
                  Back to Dashboard
                </Button>
              </Link>
              <Link href="/mockups/blog/editor">
                <Button>
                  <Edit3 className="h-4 w-4 mr-2" />
                  Write Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    {getVisibilityIcon(featuredPost.visibility)}
                    <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                      {getVisibilityLabel(featuredPost.visibility)}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime} min read
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-600 text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar
                        src={featuredPost.authorPhoto}
                        name={featuredPost.author}
                        size={48}
                      />
                      <div>
                        <p className="font-medium text-gray-900">{featuredPost.author}</p>
                        <p className="text-sm text-gray-500">{formatDate(featuredPost.publishedAt)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-gray-500">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        <span className="text-sm">{featuredPost.views}</span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        <span className="text-sm">{featuredPost.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span className="text-sm">{featuredPost.comments}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link href={`/mockups/blog/post/${featuredPost.id}`}>
                      <Button>
                        Read Full Story
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <h3 className="font-montserrat font-semibold mb-4">Search Stories</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by title, author, or tags..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <h3 className="font-montserrat font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {blogCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                        selectedCategory === category.name
                          ? "bg-primary text-primary-foreground"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className={`text-xs ${
                        selectedCategory === category.name ? "text-primary-foreground" : "text-gray-500"
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Filters */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <h3 className="font-montserrat font-semibold mb-4">Filters</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sort By
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="latest">Latest</option>
                      <option value="popular">Most Popular</option>
                      <option value="trending">Trending</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Visibility
                    </label>
                    <select
                      value={selectedVisibility}
                      onChange={(e) => setSelectedVisibility(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="all">All Stories</option>
                      <option value="public">Public</option>
                      <option value="members-only">Members Only</option>
                      <option value="preview">Preview</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Trending Posts */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-montserrat font-semibold mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Trending Stories
                </h3>
                <div className="space-y-4">
                  {trendingPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/mockups/blog/post/${post.id}`}
                      className="block group"
                    >
                      <div className="flex space-x-3">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 group-hover:text-primary text-sm line-clamp-2 mb-1">
                            {post.title}
                          </h4>
                          <div className="flex items-center text-xs text-gray-500">
                            <Heart className="h-3 w-3 mr-1" />
                            {post.likes} likes
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-montserrat font-semibold">
                  {selectedCategory === "All" ? "All Stories" : selectedCategory}
                  <span className="text-gray-500 font-normal ml-2">
                    ({filteredPosts.length} {filteredPosts.length === 1 ? "story" : "stories"})
                  </span>
                </h2>
              </div>

              {filteredPosts.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm border">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No stories found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search or filter criteria.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("All")
                      setSelectedVisibility("all")
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                              {post.category}
                            </span>
                            <div className="flex items-center space-x-1">
                              {getVisibilityIcon(post.visibility)}
                              <span className="text-xs text-gray-500">
                                {getVisibilityLabel(post.visibility)}
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 text-sm">
                              <Clock className="h-3 w-3 mr-1" />
                              {post.readTime} min
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3 hover:text-primary">
                            <Link href={`/mockups/blog/post/${post.id}`}>
                              {post.title}
                            </Link>
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded"
                              >
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="text-xs text-gray-500">
                                +{post.tags.length - 3} more
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Avatar
                                src={post.authorPhoto}
                                name={post.author}
                                size={32}
                              />
                              <div>
                                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                                <p className="text-xs text-gray-500">{formatDate(post.publishedAt)}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 text-gray-500 text-sm">
                              <div className="flex items-center">
                                <Eye className="h-4 w-4 mr-1" />
                                {post.views}
                              </div>
                              <div className="flex items-center">
                                <Heart className="h-4 w-4 mr-1" />
                                {post.likes}
                              </div>
                              <div className="flex items-center">
                                <MessageCircle className="h-4 w-4 mr-1" />
                                {post.comments}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}