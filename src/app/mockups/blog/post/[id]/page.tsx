"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar } from "../../../components/ui/avatar"
import { mockBlogPosts, blogComments, mockMembers } from "../../../lib/mock-data"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Tag,
  User,
  Globe,
  Users,
  Star,
  Lock,
  Edit3,
  ThumbsUp,
  Reply,
  Send,
  BookOpen,
  ExternalLink,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Copy
} from "lucide-react"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [liked, setLiked] = React.useState(false)
  const [likeCount, setLikeCount] = React.useState(0)
  const [newComment, setNewComment] = React.useState("")
  const [replyingTo, setReplyingTo] = React.useState<string | null>(null)
  const [replyText, setReplyText] = React.useState("")
  const [showShareMenu, setShowShareMenu] = React.useState(false)

  const post = mockBlogPosts.find(p => p.id === params.id)
  const postComments = blogComments.filter(c => c.postId === params.id)
  const relatedPosts = mockBlogPosts
    .filter(p => p.id !== params.id && p.category === post?.category)
    .slice(0, 3)

  React.useEffect(() => {
    if (post) {
      setLikeCount(post.likes)
    }
  }, [post])

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-montserrat font-bold text-gray-900 mb-2">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            The blog post you're looking for doesn't exist.
          </p>
          <Link href="/mockups/blog/list">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Stories
            </Button>
          </Link>
        </div>
      </div>
    )
  }

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
        return <Globe className="h-4 w-4 text-green-600" />
      case "members-only":
        return <Users className="h-4 w-4 text-blue-600" />
      case "preview":
        return <Star className="h-4 w-4 text-yellow-600" />
      default:
        return <Lock className="h-4 w-4 text-gray-600" />
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

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(prev => liked ? prev - 1 : prev + 1)
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = post.title
    
    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)
        break
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`)
        break
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)
        break
      case "copy":
        navigator.clipboard.writeText(url)
        alert("Link copied to clipboard!")
        break
    }
    setShowShareMenu(false)
  }

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      alert(`Comment submitted: "${newComment}" (This is a mockup)`)
      setNewComment("")
    }
  }

  const handleSubmitReply = (commentId: string) => {
    if (replyText.trim()) {
      alert(`Reply submitted to comment ${commentId}: "${replyText}" (This is a mockup)`)
      setReplyText("")
      setReplyingTo(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/mockups/blog/list">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Stories
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <Link href="/mockups/member/dashboard">
                <Button variant="outline">Dashboard</Button>
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
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link href="/mockups/blog/list" className="hover:text-primary">
              Alumni Stories
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{post.category}</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 truncate">{post.title}</span>
          </nav>

          {/* Article */}
          <article className="bg-white rounded-lg shadow-sm border overflow-hidden mb-8">
            {/* Featured Image */}
            <div className="relative">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                {getVisibilityIcon(post.visibility)}
                <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                  {getVisibilityLabel(post.visibility)}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6 md:p-8">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime} min read
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(post.publishedAt)}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">
                {post.title}
              </h1>

              {/* Author */}
              <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-200">
                <Avatar
                  src={post.authorPhoto}
                  name={post.author}
                  size={56}
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-lg">{post.author}</p>
                  <p className="text-gray-600">{post.authorBio}</p>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none mb-8">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-gray-200">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Engagement Bar */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={handleLike}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      liked 
                        ? "bg-red-50 text-red-600" 
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
                    <span className="font-medium">{likeCount}</span>
                  </button>
                  
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Eye className="h-5 w-5" />
                    <span className="font-medium">{post.views}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-500">
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-medium">{postComments.length}</span>
                  </div>
                </div>

                <div className="relative">
                  <Button
                    variant="outline"
                    onClick={() => setShowShareMenu(!showShareMenu)}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  
                  {showShareMenu && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                      <div className="p-2">
                        <button
                          onClick={() => handleShare("facebook")}
                          className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                        >
                          <Facebook className="h-4 w-4 mr-2 text-blue-600" />
                          Share on Facebook
                        </button>
                        <button
                          onClick={() => handleShare("twitter")}
                          className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                        >
                          <Twitter className="h-4 w-4 mr-2 text-blue-400" />
                          Share on Twitter
                        </button>
                        <button
                          onClick={() => handleShare("linkedin")}
                          className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                        >
                          <Linkedin className="h-4 w-4 mr-2 text-blue-700" />
                          Share on LinkedIn
                        </button>
                        <button
                          onClick={() => handleShare("copy")}
                          className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                        >
                          <Copy className="h-4 w-4 mr-2 text-gray-500" />
                          Copy Link
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>

          {/* Comments Section */}
          <div className="bg-white rounded-lg shadow-sm border p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
              Comments ({postComments.length})
            </h2>

            {/* Add Comment */}
            <div className="mb-8 pb-6 border-b border-gray-200">
              <div className="flex space-x-3">
                <Avatar name="Current User" size={40} />
                <div className="flex-1">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts on this story..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                    rows={3}
                  />
                  <div className="flex justify-end mt-2">
                    <Button onClick={handleSubmitComment} disabled={!newComment.trim()}>
                      <Send className="h-4 w-4 mr-2" />
                      Post Comment
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {postComments.map((comment) => (
                <div key={comment.id} className="space-y-4">
                  {/* Main Comment */}
                  <div className="flex space-x-3">
                    <Avatar
                      src={comment.authorPhoto}
                      name={comment.author}
                      size={40}
                    />
                    <div className="flex-1">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{comment.author}</h4>
                          <span className="text-sm text-gray-500">
                            {new Date(comment.publishedAt).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-gray-700">{comment.content}</p>
                      </div>
                      
                      <div className="flex items-center space-x-4 mt-2">
                        <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{comment.likes}</span>
                        </button>
                        <button 
                          onClick={() => setReplyingTo(comment.id)}
                          className="text-sm text-gray-500 hover:text-gray-700"
                        >
                          <Reply className="h-4 w-4 inline mr-1" />
                          Reply
                        </button>
                      </div>

                      {/* Reply Form */}
                      {replyingTo === comment.id && (
                        <div className="mt-4 ml-4">
                          <div className="flex space-x-3">
                            <Avatar name="Current User" size={32} />
                            <div className="flex-1">
                              <textarea
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                placeholder={`Reply to ${comment.author}...`}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                                rows={2}
                              />
                              <div className="flex justify-end space-x-2 mt-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setReplyingTo(null)}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  size="sm"
                                  onClick={() => handleSubmitReply(comment.id)}
                                  disabled={!replyText.trim()}
                                >
                                  Reply
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Replies */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="ml-12 space-y-4">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex space-x-3">
                          <Avatar
                            src={reply.authorPhoto}
                            name={reply.author}
                            size={32}
                          />
                          <div className="flex-1">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center justify-between mb-1">
                                <h5 className="font-medium text-gray-900 text-sm">{reply.author}</h5>
                                <span className="text-xs text-gray-500">
                                  {new Date(reply.publishedAt).toLocaleDateString()}
                                </span>
                              </div>
                              <p className="text-gray-700 text-sm">{reply.content}</p>
                            </div>
                            <div className="flex items-center space-x-4 mt-1">
                              <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-gray-700">
                                <ThumbsUp className="h-3 w-3" />
                                <span>{reply.likes}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm border p-6 md:p-8">
              <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
                Related Stories
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/mockups/blog/post/${relatedPost.id}`}
                    className="group"
                  >
                    <article className="space-y-3">
                      <img
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <div className="space-y-2">
                        <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                          {relatedPost.category}
                        </span>
                        <h3 className="font-montserrat font-semibold text-gray-900 group-hover:text-primary line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <span>{relatedPost.author}</span>
                          <span>•</span>
                          <span>{relatedPost.readTime} min read</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}