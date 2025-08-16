"use client"

import * as React from "react"
import { AdminNav } from "../../../components/admin-nav"
import { Button } from "@/components/ui/button"
import { 
  ArrowLeft, 
  Save, 
  X, 
  Upload, 
  Plus,
  Minus,
  Eye
} from "lucide-react"
import Link from "next/link"

interface MerchandiseItem {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: 'active' | 'inactive' | 'out-of-stock'
  image: string
  description: string
  longDescription: string
  createdAt: string
  sales: number
  rating: number
  reviews: number
  tags: string[]
  sizes?: string[]
  colors?: string[]
}

// Mock data - in real app this would come from API based on ID
const mockMerchandise: Record<string, MerchandiseItem> = {
  "1": {
    id: "1",
    name: "Rulang Alumni T-Shirt",
    category: "Apparel",
    price: 25.00,
    stock: 150,
    status: "active",
    image: "/images/merchandise/rulang-tshirt.png",
    description: "Premium cotton t-shirt with alumni logo",
    longDescription: "Show your alumni pride with this premium cotton t-shirt featuring the iconic Rulang Alumni logo. Made from 100% organic cotton, this comfortable and durable shirt is perfect for casual wear, alumni events, or as a thoughtful gift for fellow graduates. The design features a classic fit with reinforced seaming for long-lasting wear.",
    createdAt: "2024-01-15",
    sales: 45,
    rating: 4.8,
    reviews: 23,
    tags: ["cotton", "alumni", "casual", "premium"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "White", "Gray"]
  }
}

export default function EditMerchandisePage({ params }: { params: { id: string } }) {
  const isEditing = params.id !== 'new'
  const existingItem = isEditing ? mockMerchandise[params.id] : null
  
  const [formData, setFormData] = React.useState<Partial<MerchandiseItem>>({
    name: existingItem?.name || '',
    category: existingItem?.category || '',
    price: existingItem?.price || 0,
    stock: existingItem?.stock || 0,
    status: existingItem?.status || 'active',
    image: existingItem?.image || '',
    description: existingItem?.description || '',
    longDescription: existingItem?.longDescription || '',
    tags: existingItem?.tags || [],
    sizes: existingItem?.sizes || [],
    colors: existingItem?.colors || []
  })

  const [newTag, setNewTag] = React.useState('')
  const [newSize, setNewSize] = React.useState('')
  const [newColor, setNewColor] = React.useState('')

  const handleInputChange = (field: keyof MerchandiseItem, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags?.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...(prev.tags || []), newTag.trim()]
      }))
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
    }))
  }

  const addSize = () => {
    if (newSize.trim() && !formData.sizes?.includes(newSize.trim())) {
      setFormData(prev => ({
        ...prev,
        sizes: [...(prev.sizes || []), newSize.trim()]
      }))
      setNewSize('')
    }
  }

  const removeSize = (sizeToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      sizes: prev.sizes?.filter(size => size !== sizeToRemove) || []
    }))
  }

  const addColor = () => {
    if (newColor.trim() && !formData.colors?.includes(newColor.trim())) {
      setFormData(prev => ({
        ...prev,
        colors: [...(prev.colors || []), newColor.trim()]
      }))
      setNewColor('')
    }
  }

  const removeColor = (colorToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      colors: prev.colors?.filter(color => color !== colorToRemove) || []
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would make an API call
    console.log('Saving merchandise:', formData)
    alert(`${isEditing ? 'Updated' : 'Created'} merchandise successfully!`)
  }

  const inputClassName = "flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  const textareaClassName = "flex min-h-[60px] w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminNav currentPage="merchandise" />
      
      <div className="flex-1 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/mockups/admin/merchandise">
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                </Link>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {isEditing ? 'Edit Product' : 'Add New Product'}
                  </h1>
                  <p className="text-gray-600 mt-1">
                    {isEditing ? 'Update product information' : 'Create a new merchandise listing'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {isEditing && (
                  <Link href={`/mockups/admin/merchandise/${params.id}`}>
                    <Button variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      View Product
                    </Button>
                  </Link>
                )}
                <Button form="merchandise-form" type="submit">
                  <Save className="h-4 w-4 mr-2" />
                  {isEditing ? 'Update' : 'Create'} Product
                </Button>
              </div>
            </div>
          </header>

          {/* Form Content */}
          <div className="flex-1 overflow-auto p-6">
            <div className="max-w-4xl mx-auto">
              <form id="merchandise-form" onSubmit={handleSubmit} className="space-y-8">
                
                {/* Basic Information */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">Basic Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Name *
                      </label>
                      <input
                        type="text"
                        className={inputClassName}
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter product name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <select
                        className={inputClassName}
                        value={formData.category}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        required
                      >
                        <option value="">Select category</option>
                        <option value="Apparel">Apparel</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Stationery">Stationery</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Home & Living">Home & Living</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price ($) *
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        className={inputClassName}
                        value={formData.price}
                        onChange={(e) => handleInputChange('price', parseFloat(e.target.value) || 0)}
                        placeholder="0.00"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Stock Quantity *
                      </label>
                      <input
                        type="number"
                        min="0"
                        className={inputClassName}
                        value={formData.stock}
                        onChange={(e) => handleInputChange('stock', parseInt(e.target.value) || 0)}
                        placeholder="0"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status *
                      </label>
                      <select
                        className={inputClassName}
                        value={formData.status}
                        onChange={(e) => handleInputChange('status', e.target.value)}
                        required
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="out-of-stock">Out of Stock</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Short Description *
                    </label>
                    <input
                      type="text"
                      className={inputClassName}
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Brief product description"
                      required
                    />
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Detailed Description
                    </label>
                    <textarea
                      rows={4}
                      className={textareaClassName}
                      value={formData.longDescription}
                      onChange={(e) => handleInputChange('longDescription', e.target.value)}
                      placeholder="Detailed product description..."
                    />
                  </div>
                </div>

                {/* Product Image */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">Product Image</h2>
                  
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                        {formData.image ? (
                          <img
                            src={formData.image}
                            alt="Product preview"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="text-center">
                            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-500">No image</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image URL
                      </label>
                      <input
                        type="url"
                        className={inputClassName}
                        value={formData.image}
                        onChange={(e) => handleInputChange('image', e.target.value)}
                        placeholder="https://example.com/image.jpg or /images/product.jpg"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        Enter the URL or path to the product image. For local images, use /images/merchandise/filename.jpg
                      </p>
                      <Button type="button" variant="outline" size="sm" className="mt-3">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload New Image
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Product Variants */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">Product Variants</h2>
                  
                  {/* Sizes */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Available Sizes
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {formData.sizes?.map((size, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md font-medium flex items-center"
                        >
                          {size}
                          <button
                            type="button"
                            onClick={() => removeSize(size)}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        className={`${inputClassName} flex-1`}
                        value={newSize}
                        onChange={(e) => setNewSize(e.target.value)}
                        placeholder="Enter size (e.g., S, M, L)"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSize())}
                      />
                      <Button type="button" onClick={addSize} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Colors */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Available Colors
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {formData.colors?.map((color, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-md font-medium flex items-center"
                        >
                          {color}
                          <button
                            type="button"
                            onClick={() => removeColor(color)}
                            className="ml-2 text-purple-600 hover:text-purple-800"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        className={`${inputClassName} flex-1`}
                        value={newColor}
                        onChange={(e) => setNewColor(e.target.value)}
                        placeholder="Enter color (e.g., Red, Blue, Navy)"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addColor())}
                      />
                      <Button type="button" onClick={addColor} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Tags
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {formData.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md flex items-center"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="ml-2 text-gray-600 hover:text-gray-800"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        className={`${inputClassName} flex-1`}
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Enter tag (e.g., cotton, premium, casual)"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                      />
                      <Button type="button" onClick={addTag} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                  <Link href="/mockups/admin/merchandise">
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </Link>
                  <Button type="submit">
                    <Save className="h-4 w-4 mr-2" />
                    {isEditing ? 'Update' : 'Create'} Product
                  </Button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}