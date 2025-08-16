"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AdminNav } from "../components/admin-nav"
import { Avatar } from "../../components/ui/avatar"
import { mockBlogPosts, blogCategories } from "../../lib/mock-data"
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Filter,
  Download,
  Calendar,
  Clock,
  TrendingUp,
  MessageCircle,
  Heart,
  X,
  Globe,
  Users,
  Star,
  Lock,
  AlertCircle,
  CheckCircle,
  XCircle,
  BarChart3,
  FileText,
  Tag,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

export default function AdminBlogPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All")
  const [selectedStatus, setSelectedStatus] = React.useState<string>("all")
  const [selectedVisibility, setSelectedVisibility] = React.useState<string>("all")
  const [showCreateForm, setShowCreateForm] = React.useState(false)
  const [selectedPost, setSelectedPost] = React.useState<any>(null)
  const [showPostDetails, setShowPostDetails] = React.useState(false)

  // Enhanced blog posts with admin-specific data
  const allPosts = React.useMemo(() => {
    return mockBlogPosts.map((post, index) => ({
      ...post,
      moderationStatus: ["approved", "pending", "flagged"][index % 3],
      lastModified: [
        "2025-01-10T15:30:00Z",
        "2025-01-09T11:20:00Z", 
        "2025-01-08T09:45:00Z"
      ][index % 3],
      featured: index === 0,
      analytics: {
        views: post.views,
        likes: post.likes,
        comments: post.comments,
        shares: Math.floor(post.views * 0.05),
        engagementRate: Math.floor((post.likes + post.comments) / post.views * 100)
      }
    }))
  }, [])

  const filteredPosts = React.useMemo(() => {
    let filtered = allPosts

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    if (selectedStatus !== "all") {
      filtered = filtered.filter(post => post.status === selectedStatus)
    }

    if (selectedVisibility !== "all") {
      filtered = filtered.filter(post => post.visibility === selectedVisibility)
    }

    return filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  }, [allPosts, searchQuery, selectedCategory, selectedStatus, selectedVisibility])

  const blogStats = React.useMemo(() => {
    return {
      totalPosts: allPosts.length,
      published: allPosts.filter(p => p.status === "published").length,
      drafts: allPosts.filter(p => p.status === "draft").length,
      pending: allPosts.filter(p => p.moderationStatus === "pending").length,
      totalViews: allPosts.reduce((sum, p) => sum + p.views, 0),
      totalLikes: allPosts.reduce((sum, p) => sum + p.likes, 0),
      totalComments: allPosts.reduce((sum, p) => sum + p.comments, 0),
      avgEngagement: Math.floor(allPosts.reduce((sum, p) => sum + p.analytics.engagementRate, 0) / allPosts.length)
    }
  }, [allPosts])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    })
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      published: { label: "Published", className: "bg-green-100 text-green-800", icon: CheckCircle },
      draft: { label: "Draft", className: "bg-gray-100 text-gray-800", icon: Clock }
    }
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.draft
    const Icon = config.icon
    
    return (
      <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${config.className}`}>
        <Icon className="h-3 w-3 mr-1" />
        {config.label}
      </span>
    )
  }

  const getModerationBadge = (status: string) => {
    const statusConfig = {
      approved: { label: "Approved", className: "bg-green-100 text-green-800", icon: CheckCircle },
      pending: { label: "Pending", className: "bg-yellow-100 text-yellow-800", icon: Clock },
      flagged: { label: "Flagged", className: "bg-red-100 text-red-800", icon: AlertCircle }
    }
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending
    const Icon = config.icon
    
    return (
      <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${config.className}`}>
        <Icon className="h-3 w-3 mr-1" />
        {config.label}
      </span>
    )
  }

  const getVisibilityIcon = (visibility: string) => {
    switch (visibility) {
      case "public":
        return <Globe className="h-4 w-4 text-green-600" />
      case "members-only":
        return <Users className="h-4 w-4 text-blue-600" />
      case "preview":
        return <Star className="h-4 w-4 text-yellow-600" />
      default:
        return <Lock className="h-4 w-4 text-gray-600" />
    }
  }

  const handleViewPost = (post: any) => {
    setSelectedPost(post)
    setShowPostDetails(true)
  }

  const handleDeletePost = (postId: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      alert(`Blog post ${postId} deleted! (This is a mockup)`)
    }
  }

  const handleToggleFeature = (postId: string) => {
    alert(`Post ${postId} featured status toggled! (This is a mockup)`)
  }

  const handleModerationAction = (postId: string, action: string) => {
    alert(`Post ${postId} ${action}! (This is a mockup)`)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminNav currentPage="blog" />
      
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-montserrat font-semibold text-gray-900">
                  Blog Management
                </h1>
                <p className="text-sm text-gray-600">
                  Manage community stories and blog content
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analytics
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Link href="/mockups/blog/editor">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Post
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-blue-600">{blogStats.totalPosts}</div>
              <div className="text-sm text-gray-600">Total Posts</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-green-600">{blogStats.published}</div>
              <div className="text-sm text-gray-600">Published</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-gray-600">{blogStats.drafts}</div>
              <div className="text-sm text-gray-600">Drafts</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-yellow-600">{blogStats.pending}</div>
              <div className="text-sm text-gray-600">Pending Review</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-purple-600">{blogStats.totalViews.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Views</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-red-600">{blogStats.totalLikes}</div>
              <div className="text-sm text-gray-600">Total Likes</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-blue-600">{blogStats.totalComments}</div>
              <div className="text-sm text-gray-600">Total Comments</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-green-600">{blogStats.avgEngagement}%</div>
              <div className="text-sm text-gray-600">Avg Engagement</div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="grid md:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search posts..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                {blogCategories.map(category => (
                  <option key={category.name} value={category.name}>{category.name}</option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>

              <select
                value={selectedVisibility}
                onChange={(e) => setSelectedVisibility(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">All Visibility</option>
                <option value="public">Public</option>
                <option value="members-only">Members Only</option>
                <option value="preview">Preview</option>
                <option value="private">Private</option>
              </select>

              <Button variant="outline" className="justify-center">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>

          {/* Posts Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Post
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Author
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Moderation
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Performance
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className="flex items-start space-x-3">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-16 h-12 object-cover rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-medium text-gray-900 truncate">
                                {post.title}
                              </h3>
                              {post.featured && (
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              )}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                {getVisibilityIcon(post.visibility)}
                                <span className="ml-1">{post.visibility}</span>
                              </span>
                              <span className="flex items-center">
                                <Tag className="h-3 w-3 mr-1" />
                                {post.category}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {post.readTime} min
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <Avatar
                            src={post.authorPhoto}
                            name={post.author}
                            size={32}
                          />
                          <span className="text-sm font-medium text-gray-900">
                            {post.author}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        {getStatusBadge(post.status)}
                      </td>
                      <td className="py-4 px-6">
                        {getModerationBadge(post.moderationStatus)}
                      </td>
                      <td className="py-4 px-6">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-3 text-sm">
                            <span className="flex items-center text-gray-600">
                              <Eye className="h-3 w-3 mr-1" />
                              {post.views}
                            </span>
                            <span className="flex items-center text-gray-600">
                              <Heart className="h-3 w-3 mr-1" />
                              {post.likes}
                            </span>
                            <span className="flex items-center text-gray-600">
                              <MessageCircle className="h-3 w-3 mr-1" />
                              {post.comments}
                            </span>
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            {post.analytics.engagementRate}% engagement
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        <div>
                          <div>{formatDate(post.publishedAt)}</div>
                          <div className="text-xs text-gray-500">
                            Modified {formatDate(post.lastModified)}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleViewPost(post)}
                            title="View Details"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Link href={`/mockups/blog/post/${post.id}`}>
                            <Button variant="ghost" size="sm" title="View Post">
                              <FileText className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button variant="ghost" size="sm" title="Edit Post">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleToggleFeature(post.id)}
                            className={post.featured ? "text-yellow-600" : "text-gray-400"}
                            title="Toggle Featured"
                          >
                            <Star className={`h-4 w-4 ${post.featured ? "fill-current" : ""}`} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeletePost(post.id)}
                            className="text-red-600 hover:text-red-700"
                            title="Delete Post"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Post Details Modal */}
      {showPostDetails && selectedPost && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-montserrat font-semibold">Post Details</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPostDetails(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Post Header */}
              <div className="flex items-start space-x-4">
                <img
                  src={selectedPost.featuredImage}
                  alt={selectedPost.title}
                  className="w-24 h-18 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="text-xl font-montserrat font-semibold">{selectedPost.title}</h4>
                    {selectedPost.featured && (
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    )}
                  </div>
                  <p className="text-gray-600 mb-3">{selectedPost.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Avatar
                        src={selectedPost.authorPhoto}
                        name={selectedPost.author}
                        size={20}
                      />
                      <span>{selectedPost.author}</span>
                    </div>
                    <span>•</span>
                    <span>{formatDate(selectedPost.publishedAt)}</span>
                    <span>•</span>
                    <span>{selectedPost.readTime} min read</span>
                  </div>
                </div>
              </div>

              {/* Status & Moderation */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Status</span>
                    {getStatusBadge(selectedPost.status)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Moderation</span>
                    {getModerationBadge(selectedPost.moderationStatus)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Visibility</span>
                    <span className="flex items-center text-sm">
                      {getVisibilityIcon(selectedPost.visibility)}
                      <span className="ml-1 capitalize">{selectedPost.visibility.replace("-", " ")}</span>
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Category</span>
                    <span className="text-sm">{selectedPost.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Featured</span>
                    <span className="text-sm">{selectedPost.featured ? "Yes" : "No"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Last Modified</span>
                    <span className="text-sm">{formatDate(selectedPost.lastModified)}</span>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div>
                <h5 className="font-medium text-gray-900 mb-3">Performance Metrics</h5>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">{selectedPost.views}</div>
                    <div className="text-sm text-blue-800">Views</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-600">{selectedPost.likes}</div>
                    <div className="text-sm text-red-800">Likes</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">{selectedPost.comments}</div>
                    <div className="text-sm text-green-800">Comments</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600">{selectedPost.analytics.engagementRate}%</div>
                    <div className="text-sm text-purple-800">Engagement Rate</div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div>
                <h5 className="font-medium text-gray-900 mb-3">Tags</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Moderation Actions */}
              {selectedPost.moderationStatus === "pending" && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h5 className="font-medium text-yellow-900 mb-3">Moderation Actions</h5>
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      onClick={() => handleModerationAction(selectedPost.id, "approved")}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleModerationAction(selectedPost.id, "flagged")}
                      className="border-red-300 text-red-700 hover:bg-red-50"
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Flag for Review
                    </Button>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <Link href={`/mockups/blog/post/${selectedPost.id}`}>
                  <Button>
                    <Eye className="h-4 w-4 mr-2" />
                    View Post
                  </Button>
                </Link>
                <Button variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Post
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleToggleFeature(selectedPost.id)}
                >
                  <Star className="h-4 w-4 mr-2" />
                  {selectedPost.featured ? "Unfeature" : "Feature"}
                </Button>
                <Button variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analytics
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}