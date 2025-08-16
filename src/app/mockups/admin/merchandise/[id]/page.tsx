"use client"

import * as React from "react"
import { AdminNav } from "../../components/admin-nav"
import { Button } from "@/components/ui/button"
import { 
  ArrowLeft, 
  Edit, 
  Trash2, 
  Package, 
  DollarSign, 
  TrendingUp,
  Calendar,
  Tag,
  Star,
  ShoppingCart
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

export default function MerchandiseViewPage({ params }: { params: { id: string } }) {
  const item = mockMerchandise[params.id]

  if (!item) {
    return (
      <div className="flex h-screen bg-gray-50">
        <AdminNav currentPage="merchandise" />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Product Not Found</h1>
            <p className="text-gray-600 mt-2">The requested merchandise item could not be found.</p>
            <Link href="/mockups/admin/merchandise">
              <Button className="mt-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Merchandise
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      active: "bg-green-100 text-green-800",
      inactive: "bg-gray-100 text-gray-800", 
      "out-of-stock": "bg-red-100 text-red-800"
    }
    return (
      <span className={`px-3 py-1 text-sm font-medium rounded-full ${styles[status as keyof typeof styles]}`}>
        {status.replace('-', ' ')}
      </span>
    )
  }

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
                  <h1 className="text-2xl font-bold text-gray-900">{item.name}</h1>
                  <p className="text-gray-600 mt-1">Product Details & Management</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Link href={`/mockups/admin/merchandise/${item.id}/edit`}>
                  <Button>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Product
                  </Button>
                </Link>
                <Button variant="destructive">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="flex-1 overflow-auto p-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Product Image and Basic Info */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="aspect-square bg-gray-100 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
                        {getStatusBadge(item.status)}
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          {item.rating} ({item.reviews} reviews)
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Created {new Date(item.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="lg:col-span-2 space-y-6">
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                      <div className="flex items-center">
                        <DollarSign className="h-8 w-8 text-green-600" />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-600">Price</p>
                          <p className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                      <div className="flex items-center">
                        <Package className="h-8 w-8 text-blue-600" />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-600">Stock</p>
                          <p className={`text-lg font-bold ${item.stock < 25 ? 'text-red-600' : 'text-gray-900'}`}>
                            {item.stock}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                      <div className="flex items-center">
                        <TrendingUp className="h-8 w-8 text-purple-600" />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-600">Sales</p>
                          <p className="text-lg font-bold text-gray-900">{item.sales}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                      <div className="flex items-center">
                        <ShoppingCart className="h-8 w-8 text-green-600" />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-600">Revenue</p>
                          <p className="text-lg font-bold text-gray-900">${(item.price * item.sales).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Information */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Category</h4>
                        <p className="text-sm text-gray-600">{item.category}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.tags?.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {item.sizes && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Available Sizes</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.sizes.map((size, index) => (
                              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-md font-medium">
                                {size}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {item.colors && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Available Colors</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.colors.map((color, index) => (
                              <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-md font-medium">
                                {color}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{item.longDescription}</p>
                  </div>

                  {/* Sales Analytics */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Performance</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Sales Progress</span>
                          <span className="text-sm text-gray-600">{item.sales} sold</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${Math.min((item.sales / 100) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Stock Level</span>
                          <span className={`text-sm ${item.stock < 25 ? 'text-red-600' : 'text-gray-600'}`}>
                            {item.stock} remaining
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${item.stock < 25 ? 'bg-red-500' : 'bg-green-500'}`}
                            style={{ width: `${Math.min((item.stock / 200) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}