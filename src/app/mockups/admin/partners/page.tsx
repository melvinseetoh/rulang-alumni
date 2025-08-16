"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AdminNav } from "../components/admin-nav"
import { mockPartners } from "../../lib/mock-data"
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Filter,
  Download,
  ExternalLink,
  Calendar,
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  X,
  Building,
  Tag,
  Globe,
  Mail,
  Phone,
  MapPin
} from "lucide-react"

export default function AdminPartnersPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all")
  const [selectedStatus, setSelectedStatus] = React.useState<string>("all")
  const [showCreateForm, setShowCreateForm] = React.useState(false)
  const [selectedPartner, setSelectedPartner] = React.useState<any>(null)
  const [showPartnerDetails, setShowPartnerDetails] = React.useState(false)

  // Enhanced partner data with admin fields
  const allPartners = React.useMemo(() => {
    return mockPartners.map((partner, index) => ({
      ...partner,
      status: ["active", "pending", "inactive"][index % 3],
      createdAt: ["2024-01-15", "2024-02-10", "2024-03-05"][index % 3],
      contactPerson: ["John Smith", "Mary Johnson", "David Lee"][index % 3],
      contactEmail: ["contact@company.com", "partnerships@company.com", "info@company.com"][index % 3],
      contactPhone: ["+65 6123 4567", "+65 6234 5678", "+65 6345 6789"][index % 3],
      memberUsage: Math.floor(Math.random() * 100) + 20,
      revenue: Math.floor(Math.random() * 5000) + 1000,
      redemptions: Math.floor(Math.random() * 50) + 10,
      contractStart: "2024-01-01",
      contractEnd: partner.validUntil,
      commissionRate: [5, 10, 15][index % 3],
      notes: "Partnership performing well with good member engagement."
    }))
  }, [])

  const filteredPartners = React.useMemo(() => {
    let filtered = allPartners

    if (searchQuery) {
      filtered = filtered.filter(partner =>
        partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        partner.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        partner.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(partner => partner.category === selectedCategory)
    }

    if (selectedStatus !== "all") {
      filtered = filtered.filter(partner => partner.status === selectedStatus)
    }

    return filtered
  }, [allPartners, searchQuery, selectedCategory, selectedStatus])

  const partnerStats = React.useMemo(() => {
    return {
      total: allPartners.length,
      active: allPartners.filter(p => p.status === "active").length,
      pending: allPartners.filter(p => p.status === "pending").length,
      totalRedemptions: allPartners.reduce((sum, p) => sum + p.redemptions, 0),
      totalRevenue: allPartners.reduce((sum, p) => sum + p.revenue, 0),
      expiringSoon: allPartners.filter(p => {
        const expiry = new Date(p.validUntil)
        const thirtyDaysFromNow = new Date()
        thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30)
        return expiry <= thirtyDaysFromNow && expiry > new Date()
      }).length
    }
  }, [allPartners])

  const categories = [
    "Food & Dining",
    "Health & Wellness", 
    "Technology",
    "Education",
    "Automotive",
    "Home & Living",
    "Travel & Education"
  ]

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { label: "Active", className: "bg-green-100 text-green-800" },
      pending: { label: "Pending", className: "bg-yellow-100 text-yellow-800" },
      inactive: { label: "Inactive", className: "bg-red-100 text-red-800" }
    }
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.active
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.className}`}>
        {config.label}
      </span>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short", 
      day: "numeric"
    })
  }

  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString()}`
  }

  const handleViewPartner = (partner: any) => {
    setSelectedPartner(partner)
    setShowPartnerDetails(true)
  }

  const handleDeletePartner = (partnerId: string) => {
    if (confirm("Are you sure you want to delete this partner?")) {
      alert(`Partner ${partnerId} deleted! (This is a mockup)`)
    }
  }

  const handleToggleStatus = (partnerId: string, currentStatus: string) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active"
    alert(`Partner ${partnerId} status changed to ${newStatus}! (This is a mockup)`)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminNav currentPage="partners" />
      
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-montserrat font-semibold text-gray-900">
                  Partner Management
                </h1>
                <p className="text-sm text-gray-600">
                  Manage business partnerships and member benefits
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
                <Button onClick={() => setShowCreateForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Partner
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-blue-600">{partnerStats.total}</div>
              <div className="text-sm text-gray-600">Total Partners</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-green-600">{partnerStats.active}</div>
              <div className="text-sm text-gray-600">Active</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-yellow-600">{partnerStats.pending}</div>
              <div className="text-sm text-gray-600">Pending</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-purple-600">{partnerStats.totalRedemptions}</div>
              <div className="text-sm text-gray-600">Total Redemptions</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-green-600">{formatCurrency(partnerStats.totalRevenue)}</div>
              <div className="text-sm text-gray-600">Revenue</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-red-600">{partnerStats.expiringSoon}</div>
              <div className="text-sm text-gray-600">Expiring Soon</div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search partners..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="inactive">Inactive</option>
              </select>

              <Button variant="outline" className="justify-center">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>

          {/* Partners Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Partner
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Expires
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Usage
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Revenue
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredPartners.map((partner) => (
                    <tr key={partner.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-10 h-10 object-contain rounded"
                          />
                          <div>
                            <div className="font-medium text-gray-900">{partner.name}</div>
                            <div className="text-sm text-gray-500">{partner.offer}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                          {partner.category}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        {getStatusBadge(partner.status)}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        {formatDate(partner.validUntil)}
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm">
                          <div className="font-medium text-gray-900">{partner.memberUsage}%</div>
                          <div className="text-gray-500">{partner.redemptions} redemptions</div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900">
                        {formatCurrency(partner.revenue)}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleViewPartner(partner)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleToggleStatus(partner.id, partner.status)}
                            className={partner.status === "active" ? "text-red-600 hover:text-red-700" : "text-green-600 hover:text-green-700"}
                          >
                            {partner.status === "active" ? <AlertCircle className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeletePartner(partner.id)}
                            className="text-red-600 hover:text-red-700"
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

      {/* Partner Details Modal */}
      {showPartnerDetails && selectedPartner && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-montserrat font-semibold">Partner Details</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPartnerDetails(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Partner Header */}
              <div className="flex items-start space-x-4">
                <img
                  src={selectedPartner.logo}
                  alt={selectedPartner.name}
                  className="w-20 h-16 object-contain rounded-lg border border-gray-200"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-montserrat font-semibold">{selectedPartner.name}</h4>
                    {getStatusBadge(selectedPartner.status)}
                  </div>
                  <p className="text-gray-600 mb-2">{selectedPartner.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      {selectedPartner.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Expires {formatDate(selectedPartner.validUntil)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Offer Details */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h5 className="font-medium text-blue-900 mb-2">Current Offer</h5>
                <p className="text-blue-800">{selectedPartner.offer}</p>
              </div>

              {/* Contact Information */}
              <div>
                <h5 className="font-medium text-gray-900 mb-3">Contact Information</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Building className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{selectedPartner.contactPerson}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{selectedPartner.contactEmail}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{selectedPartner.contactPhone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-gray-400" />
                      <a href={selectedPartner.website} className="text-sm text-primary hover:underline">
                        {selectedPartner.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div>
                <h5 className="font-medium text-gray-900 mb-3">Performance Metrics</h5>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">{selectedPartner.memberUsage}%</div>
                    <div className="text-sm text-green-800">Member Usage Rate</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">{selectedPartner.redemptions}</div>
                    <div className="text-sm text-blue-800">Total Redemptions</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600">{formatCurrency(selectedPartner.revenue)}</div>
                    <div className="text-sm text-purple-800">Revenue Generated</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-600">{selectedPartner.commissionRate}%</div>
                    <div className="text-sm text-yellow-800">Commission Rate</div>
                  </div>
                </div>
              </div>

              {/* Contract Details */}
              <div>
                <h5 className="font-medium text-gray-900 mb-3">Contract Details</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Contract Start</span>
                    <span className="font-medium">{formatDate(selectedPartner.contractStart)}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Contract End</span>
                    <span className="font-medium">{formatDate(selectedPartner.contractEnd)}</span>
                  </div>
                </div>
              </div>

              {/* Notes */}
              {selectedPartner.notes && (
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Notes</h5>
                  <p className="text-gray-600 bg-gray-50 rounded-lg p-3">{selectedPartner.notes}</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <Button>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Partner
                </Button>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Partner Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-montserrat font-semibold">Add New Partner</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCreateForm(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-6">
              <div className="text-center py-8 text-gray-500">
                <Building className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p>Partner creation form would go here</p>
                <p className="text-sm mt-2">(This is a mockup)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}