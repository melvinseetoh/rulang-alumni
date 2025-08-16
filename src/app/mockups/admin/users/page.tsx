"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AdminNav } from "../components/admin-nav"
import { Avatar } from "../../components/ui/avatar"
import { adminUsers, adminRoles } from "../lib/admin-mock-data"
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Shield,
  UserPlus,
  Settings,
  Key,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  X,
  Calendar,
  Activity,
  Lock
} from "lucide-react"

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedRole, setSelectedRole] = React.useState<string>("all")
  const [selectedStatus, setSelectedStatus] = React.useState<string>("all")
  const [showCreateForm, setShowCreateForm] = React.useState(false)
  const [selectedUser, setSelectedUser] = React.useState<any>(null)
  const [showUserDetails, setShowUserDetails] = React.useState(false)
  const [showRoleDetails, setShowRoleDetails] = React.useState(false)

  const filteredUsers = React.useMemo(() => {
    let filtered = adminUsers

    if (searchQuery) {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.role.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (selectedRole !== "all") {
      filtered = filtered.filter(user => user.role === selectedRole)
    }

    if (selectedStatus !== "all") {
      filtered = filtered.filter(user => user.status === selectedStatus)
    }

    return filtered
  }, [searchQuery, selectedRole, selectedStatus])

  const userStats = React.useMemo(() => {
    return {
      total: adminUsers.length,
      active: adminUsers.filter(u => u.status === "active").length,
      inactive: adminUsers.filter(u => u.status === "inactive").length,
      lastWeek: adminUsers.filter(u => {
        const lastLogin = new Date(u.lastLogin)
        const weekAgo = new Date()
        weekAgo.setDate(weekAgo.getDate() - 7)
        return lastLogin >= weekAgo
      }).length
    }
  }, [])

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { label: "Active", className: "bg-green-100 text-green-800", icon: CheckCircle },
      inactive: { label: "Inactive", className: "bg-red-100 text-red-800", icon: AlertCircle }
    }
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.active
    const Icon = config.icon
    
    return (
      <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${config.className}`}>
        <Icon className="h-3 w-3 mr-1" />
        {config.label}
      </span>
    )
  }

  const getRoleBadge = (role: string) => {
    const roleColors = {
      "Super Admin": "bg-purple-100 text-purple-800",
      "Event Manager": "bg-blue-100 text-blue-800",
      "Member Manager": "bg-green-100 text-green-800",
      "Content Manager": "bg-yellow-100 text-yellow-800"
    }
    
    const colorClass = roleColors[role as keyof typeof roleColors] || "bg-gray-100 text-gray-800"
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorClass}`}>
        {role}
      </span>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours}h ago`
    
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) return `${diffInDays}d ago`
    
    const diffInWeeks = Math.floor(diffInDays / 7)
    return `${diffInWeeks}w ago`
  }

  const handleViewUser = (user: any) => {
    setSelectedUser(user)
    setShowUserDetails(true)
  }

  const handleDeleteUser = (userId: string) => {
    if (confirm("Are you sure you want to delete this admin user?")) {
      alert(`Admin user ${userId} deleted! (This is a mockup)`)
    }
  }

  const handleToggleStatus = (userId: string, currentStatus: string) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active"
    alert(`Admin user ${userId} status changed to ${newStatus}! (This is a mockup)`)
  }

  const handleResetPassword = (userId: string) => {
    alert(`Password reset link sent for user ${userId}! (This is a mockup)`)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminNav currentPage="users" />
      
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-montserrat font-semibold text-gray-900">
                  Admin User Management
                </h1>
                <p className="text-sm text-gray-600">
                  Manage admin accounts, roles, and permissions
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button 
                  variant="outline"
                  onClick={() => setShowRoleDetails(true)}
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Manage Roles
                </Button>
                <Button onClick={() => setShowCreateForm(true)}>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Admin
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-blue-600">{userStats.total}</div>
              <div className="text-sm text-gray-600">Total Admins</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-green-600">{userStats.active}</div>
              <div className="text-sm text-gray-600">Active</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-red-600">{userStats.inactive}</div>
              <div className="text-sm text-gray-600">Inactive</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-2xl font-bold text-purple-600">{userStats.lastWeek}</div>
              <div className="text-sm text-gray-600">Active This Week</div>
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
                  placeholder="Search admin users..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">All Roles</option>
                {adminRoles.map(role => (
                  <option key={role.name} value={role.name}>{role.name}</option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>

              <Button variant="outline" className="justify-center">
                <Settings className="h-4 w-4 mr-2" />
                Audit Log
              </Button>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Login
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Permissions
                    </th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <Avatar
                            src={user.profilePhoto}
                            name={user.name}
                            size={40}
                          />
                          <div>
                            <div className="font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        {getRoleBadge(user.role)}
                      </td>
                      <td className="py-4 px-6">
                        {getStatusBadge(user.status)}
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm">
                          <div className="text-gray-900">{getTimeAgo(user.lastLogin)}</div>
                          <div className="text-gray-500">{formatDate(user.lastLogin)}</div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm text-gray-600">
                          {user.permissions.length} permission{user.permissions.length !== 1 ? 's' : ''}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleViewUser(user)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleResetPassword(user.id)}
                          >
                            <Key className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleToggleStatus(user.id, user.status)}
                            className={user.status === "active" ? "text-red-600 hover:text-red-700" : "text-green-600 hover:text-green-700"}
                          >
                            <Lock className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteUser(user.id)}
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

      {/* User Details Modal */}
      {showUserDetails && selectedUser && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-montserrat font-semibold">Admin User Details</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowUserDetails(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* User Header */}
              <div className="flex items-center space-x-4">
                <Avatar
                  src={selectedUser.profilePhoto}
                  name={selectedUser.name}
                  size={80}
                />
                <div>
                  <h4 className="text-xl font-montserrat font-semibold">{selectedUser.name}</h4>
                  <p className="text-gray-600">{selectedUser.email}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    {getRoleBadge(selectedUser.role)}
                    {getStatusBadge(selectedUser.status)}
                  </div>
                </div>
              </div>

              {/* Account Information */}
              <div>
                <h5 className="font-medium text-gray-900 mb-3">Account Information</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Last Login</span>
                    <span className="font-medium">{formatDate(selectedUser.lastLogin)}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Account Status</span>
                    <span className="font-medium">{selectedUser.status}</span>
                  </div>
                </div>
              </div>

              {/* Permissions */}
              <div>
                <h5 className="font-medium text-gray-900 mb-3">Permissions</h5>
                <div className="grid md:grid-cols-2 gap-2">
                  {selectedUser.permissions.map((permission: string) => (
                    <div key={permission} className="flex items-center p-2 bg-blue-50 rounded">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm text-blue-800">
                        {permission.replace(/_/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Role Description */}
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Role Description</h5>
                <div className="bg-gray-50 rounded-lg p-3">
                  {adminRoles.find(role => role.name === selectedUser.role)?.description || "No description available."}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <Button>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit User
                </Button>
                <Button variant="outline" onClick={() => handleResetPassword(selectedUser.id)}>
                  <Key className="h-4 w-4 mr-2" />
                  Reset Password
                </Button>
                <Button variant="outline">
                  <Activity className="h-4 w-4 mr-2" />
                  Activity Log
                </Button>
                {selectedUser.status === "active" ? (
                  <Button
                    variant="outline"
                    onClick={() => handleToggleStatus(selectedUser.id, selectedUser.status)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Deactivate
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    onClick={() => handleToggleStatus(selectedUser.id, selectedUser.status)}
                    className="text-green-600 hover:text-green-700"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Activate
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Role Management Modal */}
      {showRoleDetails && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-montserrat font-semibold">Role Management</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowRoleDetails(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {adminRoles.map((role) => (
                  <div key={role.name} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {getRoleBadge(role.name)}
                        <span className="text-sm text-gray-500">
                          {adminUsers.filter(u => u.role === role.name).length} user{adminUsers.filter(u => u.role === role.name).length !== 1 ? 's' : ''}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3 mr-2" />
                        Edit
                      </Button>
                    </div>
                    <p className="text-gray-600 mb-3">{role.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {role.permissions.map((permission) => (
                        <span
                          key={permission}
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                        >
                          {permission.replace(/_/g, ' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create User Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-montserrat font-semibold">Add New Admin User</h3>
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
                <UserPlus className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p>Admin user creation form would go here</p>
                <p className="text-sm mt-2">(This is a mockup)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}