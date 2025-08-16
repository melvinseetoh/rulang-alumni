"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AdminNav } from "../components/admin-nav"
import { Avatar } from "../../components/ui/avatar"
import { mockMembers } from "../../lib/mock-data"
import { pendingMembers, adminStats } from "../lib/admin-mock-data"
import {
  Search,
  Filter,
  Download,
  UserPlus,
  Eye,
  Edit,
  Ban,
  CheckCircle,
  X,
  Clock,
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  Building,
  GraduationCap,
  AlertTriangle,
  FileText,
  Calendar
} from "lucide-react"

export default function AdminMembersPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedStatus, setSelectedStatus] = React.useState<string>("all")
  const [selectedYear, setSelectedYear] = React.useState<string>("all")
  const [selectedMember, setSelectedMember] = React.useState<any>(null)
  const [showMemberDetails, setShowMemberDetails] = React.useState(false)

  // Enhanced member data with admin-relevant fields
  const allMembers = React.useMemo(() => {
    return [
      ...pendingMembers.map(member => ({
        ...member,
        status: member.status as "pending_review" | "pending_verification",
        memberSince: null,
        lastLogin: null,
        profilePhoto: "",
        company: "Unknown",
        location: "Unknown"
      })),
      ...mockMembers.map(member => ({
        ...member,
        status: "active" as const,
        memberSince: "2020-03-15",
        lastLogin: "2025-01-10T15:30:00Z",
        submittedAt: "2020-03-15T10:00:00Z",
        verificationDocuments: ["diploma.pdf"],
        referredBy: null,
        email: `${member.name.toLowerCase().replace(/\s+/g, '.')}@email.com`
      }))
    ]
  }, [])

  const filteredMembers = React.useMemo(() => {
    let filtered = allMembers

    if (searchQuery) {
      filtered = filtered.filter(member =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.profession.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (selectedStatus !== "all") {
      filtered = filtered.filter(member => member.status === selectedStatus)
    }

    if (selectedYear !== "all") {
      filtered = filtered.filter(member => member.graduationYear.toString() === selectedYear)
    }

    return filtered
  }, [allMembers, searchQuery, selectedStatus, selectedYear])

  const statusCounts = React.useMemo(() => {
    return {
      all: allMembers.length,
      active: allMembers.filter(m => m.status === "active").length,
      pending_review: allMembers.filter(m => m.status === "pending_review").length,
      pending_verification: allMembers.filter(m => m.status === "pending_verification").length,
      suspended: 0
    }
  }, [allMembers])

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { label: "Active", className: "bg-green-100 text-green-800" },
      pending_review: { label: "Pending Review", className: "bg-yellow-100 text-yellow-800" },
      pending_verification: { label: "Pending Verification", className: "bg-blue-100 text-blue-800" },
      suspended: { label: "Suspended", className: "bg-red-100 text-red-800" }
    }
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.active
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.className}`}>
        {config.label}
      </span>
    )
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A"
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    })
  }

  const handleViewMember = (member: any) => {
    setSelectedMember(member)
    setShowMemberDetails(true)
  }

  const handleApproveMember = (memberId: string) => {
    alert(`Member ${memberId} approved! (This is a mockup)`)
  }

  const handleRejectMember = (memberId: string) => {
    alert(`Member ${memberId} rejected! (This is a mockup)`)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminNav currentPage="members" />
      
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-montserrat font-semibold text-gray-900">
                  Member Management
                </h1>
                <p className="text-sm text-gray-600">
                  Manage member registrations, approvals, and profiles
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Member
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-blue-600">{statusCounts.all}</div>
              <div className="text-sm text-gray-600">Total Members</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-green-600">{statusCounts.active}</div>
              <div className="text-sm text-gray-600">Active</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-yellow-600">{statusCounts.pending_review}</div>
              <div className="text-sm text-gray-600">Pending Review</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-blue-600">{statusCounts.pending_verification}</div>
              <div className="text-sm text-gray-600">Pending Verification</div>
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
                  placeholder="Search members..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending_review">Pending Review</option>
                <option value="pending_verification">Pending Verification</option>
                <option value="suspended">Suspended</option>
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">All Years</option>
                {Array.from({ length: 30 }, (_, i) => 2024 - i).map(year => (
                  <option key={year} value={year.toString()}>{year}</option>
                ))}
              </select>

              <Button variant="outline" className="justify-center">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>

          {/* Members Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Member
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Graduation Year
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Join Date
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Login
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <Avatar
                            src={member.profilePhoto}
                            name={member.name}
                            size={40}
                          />
                          <div>
                            <div className="font-medium text-gray-900">{member.name}</div>
                            <div className="text-sm text-gray-500">{member.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        {getStatusBadge(member.status)}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        {member.graduationYear}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {formatDate(member.memberSince)}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {formatDate(member.lastLogin)}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleViewMember(member)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          
                          {member.status.startsWith("pending") && (
                            <>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleApproveMember(member.id)}
                                className="text-green-600 hover:text-green-700"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRejectMember(member.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                          
                          {member.status === "active" && (
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          )}
                          
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
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

      {/* Member Details Modal */}
      {showMemberDetails && selectedMember && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-montserrat font-semibold">Member Details</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMemberDetails(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Profile Header */}
              <div className="flex items-center space-x-4">
                <Avatar
                  src={selectedMember.profilePhoto}
                  name={selectedMember.name}
                  size={80}
                />
                <div>
                  <h4 className="text-xl font-montserrat font-semibold">{selectedMember.name}</h4>
                  <p className="text-gray-600">{selectedMember.profession}</p>
                  {getStatusBadge(selectedMember.status)}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h5 className="font-medium text-gray-900 mb-3">Contact Information</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{selectedMember.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Class of {selectedMember.graduationYear}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{selectedMember.company}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">{selectedMember.location}</span>
                  </div>
                </div>
              </div>

              {/* Application Details */}
              {selectedMember.status.startsWith("pending") && (
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Application Details</h5>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Submitted</span>
                      <span className="text-sm">{formatDate(selectedMember.submittedAt)}</span>
                    </div>
                    {selectedMember.referredBy && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Referred by</span>
                        <span className="text-sm">{selectedMember.referredBy}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Documents</span>
                      <div className="flex space-x-2">
                        {selectedMember.verificationDocuments?.map((doc: string, index: number) => (
                          <Button key={index} variant="outline" size="sm">
                            <FileText className="h-3 w-3 mr-1" />
                            {doc}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                {selectedMember.status.startsWith("pending") ? (
                  <>
                    <Button onClick={() => handleApproveMember(selectedMember.id)}>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Approve Member
                    </Button>
                    <Button variant="outline" onClick={() => handleRejectMember(selectedMember.id)}>
                      <X className="h-4 w-4 mr-2" />
                      Reject Application
                    </Button>
                  </>
                ) : (
                  <>
                    <Button>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                    <Button variant="outline">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                    <Button variant="outline" className="text-red-600 hover:text-red-700">
                      <Ban className="h-4 w-4 mr-2" />
                      Suspend
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}