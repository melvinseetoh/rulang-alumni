"use client"

import * as React from "react"
import Link from "next/link"
import { AdminNav } from "../components/admin-nav"
import { Button } from "@/components/ui/button"
import { 
  Search, 
  Plus, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Eye,
  Package,
  DollarSign,
  TrendingUp,
  ShoppingCart
} from "lucide-react"

interface MerchandiseItem {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: 'active' | 'inactive' | 'out-of-stock'
  image: string
  description: string
  createdAt: string
  sales: number
}

const mockMerchandise: MerchandiseItem[] = [
  {
    id: "1",
    name: "Rulang Alumni T-Shirt",
    category: "Apparel",
    price: 25.00,
    stock: 150,
    status: "active",
    image: "/images/merchandise/rulang-tshirt.png",
    description: "Premium cotton t-shirt with alumni logo",
    createdAt: "2024-01-15",
    sales: 45
  },
  {
    id: "2",
    name: "Alumni Coffee Mug",
    category: "Accessories",
    price: 15.00,
    stock: 0,
    status: "out-of-stock",
    image: "https://via.placeholder.com/100x100/e5e7eb/6b7280?text=Product",
    description: "Ceramic mug with school emblem",
    createdAt: "2024-02-01",
    sales: 32
  },
  {
    id: "3",
    name: "School Cap",
    category: "Apparel",
    price: 20.00,
    stock: 75,
    status: "active",
    image: "https://via.placeholder.com/100x100/e5e7eb/6b7280?text=Product",
    description: "Adjustable cap with embroidered logo",
    createdAt: "2024-02-15",
    sales: 28
  },
  {
    id: "4",
    name: "Alumni Notebook",
    category: "Stationery",
    price: 12.00,
    stock: 200,
    status: "active",
    image: "https://via.placeholder.com/100x100/e5e7eb/6b7280?text=Product",
    description: "Premium quality notebook with school branding",
    createdAt: "2024-03-01",
    sales: 67
  },
  {
    id: "5",
    name: "Vintage Hoodie",
    category: "Apparel",
    price: 45.00,
    stock: 25,
    status: "inactive",
    image: "https://via.placeholder.com/100x100/e5e7eb/6b7280?text=Product",
    description: "Limited edition vintage design hoodie",
    createdAt: "2024-01-20",
    sales: 15
  }
]

export default function MerchandisePage() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState("all")

  const filteredMerchandise = mockMerchandise.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || item.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalItems = mockMerchandise.length
  const totalStock = mockMerchandise.reduce((sum, item) => sum + item.stock, 0)
  const totalSales = mockMerchandise.reduce((sum, item) => sum + item.sales, 0)
  const totalRevenue = mockMerchandise.reduce((sum, item) => sum + (item.price * item.sales), 0)

  const getStatusBadge = (status: string) => {
    const styles = {
      active: "bg-green-100 text-green-800",
      inactive: "bg-gray-100 text-gray-800", 
      "out-of-stock": "bg-red-100 text-red-800"
    }
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[status as keyof typeof styles]}`}>
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
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Merchandise Management</h1>
                <p className="text-gray-600 mt-1">Manage your alumni merchandise listings</p>
              </div>
              <Link href="/mockups/admin/merchandise/new">
                <Button className="bg-primary hover:bg-primary/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Button>
              </Link>
            </div>
          </header>

          {/* Stats Cards */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Products</p>
                  <p className="text-2xl font-bold text-gray-900">{totalItems}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ShoppingCart className="h-8 w-8 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Stock</p>
                  <p className="text-2xl font-bold text-gray-900">{totalStock}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Sales</p>
                  <p className="text-2xl font-bold text-gray-900">{totalSales}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">${totalRevenue.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="px-6 pb-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search merchandise..."
                      className="pl-10 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <select
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="out-of-stock">Out of Stock</option>
                  </select>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Merchandise Table */}
          <div className="flex-1 px-6 pb-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Stock
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sales
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredMerchandise.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12">
                              <img
                                className="h-12 w-12 rounded-lg object-cover object-center"
                                src={item.image}
                                alt={item.name}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {item.name}
                              </div>
                              <div className="text-sm text-gray-500 truncate max-w-48">
                                {item.description}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <span className={`${item.stock < 25 ? 'text-red-600 font-medium' : ''}`}>
                            {item.stock}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.sales}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getStatusBadge(item.status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center space-x-2">
                            <Link href={`/mockups/admin/merchandise/${item.id}`}>
                              <Button variant="ghost" size="sm" title="View Product">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </Link>
                            <Link href={`/mockups/admin/merchandise/${item.id}/edit`}>
                              <Button variant="ghost" size="sm" title="Edit Product">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </Link>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-900" title="Delete Product">
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
      </div>
    </div>
  )
}