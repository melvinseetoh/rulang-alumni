"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar } from "../../components/ui/avatar"
import { mockUser, blogCategories } from "../../lib/mock-data"
import {
  ArrowLeft,
  Save,
  Eye,
  Upload,
  Image as ImageIcon,
  Bold,
  Italic,
  Underline,
  Link as LinkIcon,
  List,
  ListOrdered,
  Quote,
  Code,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo,
  X,
  Plus,
  Globe,
  Users,
  Star,
  Lock,
  Calendar,
  Clock,
  Tag,
  Settings,
  AlertCircle
} from "lucide-react"

export default function BlogEditorPage() {
  const [title, setTitle] = React.useState("")
  const [excerpt, setExcerpt] = React.useState("")
  const [content, setContent] = React.useState("")
  const [category, setCategory] = React.useState("Memories")
  const [tags, setTags] = React.useState<string[]>([])
  const [newTag, setNewTag] = React.useState("")
  const [visibility, setVisibility] = React.useState("public")
  const [featuredImage, setFeaturedImage] = React.useState("")
  const [status, setStatus] = React.useState("draft")
  const [publishDate, setPublishDate] = React.useState("")
  const [readTime, setReadTime] = React.useState(1)
  const [showPreview, setShowPreview] = React.useState(false)
  const [showSettings, setShowSettings] = React.useState(false)

  // Calculate estimated read time based on content
  React.useEffect(() => {
    const wordCount = content.split(/\s+/).filter(word => word.length > 0).length
    const estimatedTime = Math.max(1, Math.ceil(wordCount / 200)) // 200 words per minute
    setReadTime(estimatedTime)
  }, [content])

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddTag()
    }
  }

  const handleSave = (saveStatus: string) => {
    const post = {
      title,
      excerpt,
      content,
      category,
      tags,
      visibility,
      featuredImage,
      status: saveStatus,
      publishDate: saveStatus === "published" ? new Date().toISOString() : publishDate,
      readTime
    }
    
    if (saveStatus === "published" && (!title.trim() || !content.trim())) {
      alert("Please fill in the title and content before publishing.")
      return
    }
    
    alert(`Post ${saveStatus}! (This is a mockup)\n\nData: ${JSON.stringify(post, null, 2)}`)
  }

  const getVisibilityIcon = (vis: string) => {
    switch (vis) {
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

  const toolbarButtons = [
    { icon: Bold, action: "bold", title: "Bold" },
    { icon: Italic, action: "italic", title: "Italic" },
    { icon: Underline, action: "underline", title: "Underline" },
    { icon: Heading1, action: "h1", title: "Heading 1" },
    { icon: Heading2, action: "h2", title: "Heading 2" },
    { icon: Heading3, action: "h3", title: "Heading 3" },
    { icon: List, action: "ul", title: "Bullet List" },
    { icon: ListOrdered, action: "ol", title: "Numbered List" },
    { icon: Quote, action: "quote", title: "Quote" },
    { icon: LinkIcon, action: "link", title: "Link" },
    { icon: Code, action: "code", title: "Code" },
    { icon: ImageIcon, action: "image", title: "Image" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/mockups/blog/list">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-montserrat font-semibold text-gray-900">
                  {title || "New Story"}
                </h1>
                <p className="text-sm text-gray-500">
                  {status === "draft" ? "Draft" : "Published"} • {readTime} min read
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowSettings(!showSettings)}
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowPreview(!showPreview)}
              >
                <Eye className="h-4 w-4 mr-2" />
                {showPreview ? "Edit" : "Preview"}
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSave("draft")}
              >
                <Save className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button onClick={() => handleSave("published")}>
                Publish
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {showPreview ? (
            /* Preview Mode */
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              {/* Featured Image Preview */}
              {featuredImage && (
                <div className="relative">
                  <img
                    src={featuredImage}
                    alt="Featured"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    {getVisibilityIcon(visibility)}
                    <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                      {visibility.charAt(0).toUpperCase() + visibility.slice(1).replace("-", " ")}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {readTime} min read
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date().toLocaleDateString()}
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
                  {title || "Your Story Title"}
                </h1>

                {/* Excerpt */}
                {excerpt && (
                  <p className="text-lg text-gray-600 mb-6 italic">
                    {excerpt}
                  </p>
                )}

                {/* Author */}
                <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-200">
                  <Avatar
                    src={mockUser.profilePhoto}
                    name={mockUser.name}
                    size={56}
                  />
                  <div>
                    <p className="font-medium text-gray-900 text-lg">{mockUser.name}</p>
                    <p className="text-gray-600">Class of {mockUser.graduationYear}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none mb-8">
                  {content ? (
                    content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-500 italic">Start writing your story...</p>
                  )}
                </div>

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Edit Mode */
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Main Editor */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-lg shadow-sm border">
                  {/* Featured Image Upload */}
                  <div className="p-6 border-b border-gray-200">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Featured Image
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                      {featuredImage ? (
                        <div className="relative">
                          <img
                            src={featuredImage}
                            alt="Featured"
                            className="w-full h-40 object-cover rounded-lg mb-2"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setFeaturedImage("")}
                          >
                            Change Image
                          </Button>
                        </div>
                      ) : (
                        <div>
                          <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-600 mb-2">Upload a featured image</p>
                          <Button
                            variant="outline"
                            onClick={() => setFeaturedImage("/api/placeholder/600/300")}
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            Choose File
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="p-6 border-b border-gray-200">
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter your story title..."
                      className="w-full text-3xl font-montserrat font-bold text-gray-900 placeholder-gray-400 border-none outline-none resize-none"
                    />
                  </div>

                  {/* Excerpt */}
                  <div className="p-6 border-b border-gray-200">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Excerpt (Optional)
                    </label>
                    <textarea
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      placeholder="Write a brief excerpt that will appear in listings..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                      rows={3}
                    />
                  </div>

                  {/* Toolbar */}
                  <div className="p-4 border-b border-gray-200 bg-gray-50">
                    <div className="flex flex-wrap gap-1">
                      {toolbarButtons.map((button) => {
                        const Icon = button.icon
                        return (
                          <Button
                            key={button.action}
                            variant="ghost"
                            size="sm"
                            title={button.title}
                            onClick={() => alert(`${button.title} clicked (mockup)`)}
                          >
                            <Icon className="h-4 w-4" />
                          </Button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Content Editor */}
                  <div className="p-6">
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Start writing your story..."
                      className="w-full min-h-96 text-gray-700 placeholder-gray-400 border-none outline-none resize-none text-lg leading-relaxed"
                    />
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6 min-w-0">
                {/* Publish Settings */}
                <div className="bg-white rounded-lg shadow-sm border p-6 min-w-0">
                  <h3 className="font-montserrat font-semibold text-gray-900 mb-4">
                    Publish Settings
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        {blogCategories.filter(cat => cat.name !== "All").map((cat) => (
                          <option key={cat.name} value={cat.name}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Visibility
                      </label>
                      <select
                        value={visibility}
                        onChange={(e) => setVisibility(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="public">Public</option>
                        <option value="members-only">Members Only</option>
                        <option value="preview">Preview</option>
                        <option value="private">Private</option>
                      </select>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        {getVisibilityIcon(visibility)}
                        <span className="ml-1">
                          {visibility === "public" && "Visible to everyone"}
                          {visibility === "members-only" && "Only alumni can view"}
                          {visibility === "preview" && "Show excerpt only"}
                          {visibility === "private" && "Only you can view"}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status
                      </label>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="bg-white rounded-lg shadow-sm border p-6 min-w-0">
                  <h3 className="font-montserrat font-semibold text-gray-900 mb-4">
                    Tags
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Add a tag"
                        className="flex-1 min-w-0 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                      />
                      <Button size="sm" onClick={handleAddTag} disabled={!newTag.trim()} className="shrink-0">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded"
                          >
                            {tag}
                            <button
                              onClick={() => handleRemoveTag(tag)}
                              className="ml-1 text-blue-500 hover:text-blue-700"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-white rounded-lg shadow-sm border p-6 min-w-0">
                  <h3 className="font-montserrat font-semibold text-gray-900 mb-4">
                    Story Stats
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Word Count:</span>
                      <span className="font-medium">
                        {content.split(/\s+/).filter(word => word.length > 0).length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Read Time:</span>
                      <span className="font-medium">{readTime} min</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Characters:</span>
                      <span className="font-medium">{content.length}</span>
                    </div>
                  </div>
                </div>

                {/* Help */}
                <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                  <div className="flex">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-900">
                        Writing Tips
                      </h3>
                      <div className="mt-2 text-sm text-blue-700">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Use a compelling title</li>
                          <li>Start with a strong opening</li>
                          <li>Include personal experiences</li>
                          <li>Add relevant tags</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-montserrat font-semibold">Story Settings</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Publish Date (Optional)
                </label>
                <input
                  type="datetime-local"
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Leave empty to publish immediately
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SEO Title (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Custom title for search engines"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description (Optional)
                </label>
                <textarea
                  placeholder="Description for search engines and social media"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  rows={3}
                />
              </div>

              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={() => setShowSettings(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setShowSettings(false)}>
                  Save Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}