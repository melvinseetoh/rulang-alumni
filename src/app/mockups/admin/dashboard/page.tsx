"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AdminNav } from "../components/admin-nav"
import { Avatar } from "../../components/ui/avatar"
import { 
  adminStats, 
  recentActivities, 
  pendingMembers, 
  membershipStats,
  eventRegistrations 
} from "../lib/admin-mock-data"
import {
  Users,
  Calendar,
  Building,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  Activity,
  Eye,
  UserCheck,
  UserPlus,
  FileText,
  BarChart3,
  PieChart,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      name: "Total Members",
      value: adminStats.totalMembers.toLocaleString(),
      change: `+${adminStats.newMembersThisMonth}`,
      changeType: "increase" as const,
      icon: Users,
      color: "blue"
    },
    {
      name: "Pending Approvals", 
      value: adminStats.pendingApprovals.toString(),
      change: "Requires attention",
      changeType: "neutral" as const,
      icon: Clock,
      color: "yellow"
    },
    {
      name: "Active Events",
      value: adminStats.upcomingEvents.toString(),
      change: `${adminStats.totalEvents} total`,
      changeType: "neutral" as const,
      icon: Calendar,
      color: "green"
    },
    {
      name: "Monthly Revenue",
      value: `$${adminStats.totalRevenue.toLocaleString()}`,
      change: `+${adminStats.monthlyGrowth}%`,
      changeType: "increase" as const,
      icon: DollarSign,
      color: "purple"
    }
  ]

  const getStatColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      yellow: "bg-yellow-100 text-yellow-600", 
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600"
    }
    return colorMap[color as keyof typeof colorMap]
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "member_approval":
        return <UserCheck className="h-4 w-4 text-green-600" />
      case "event_created":
        return <Calendar className="h-4 w-4 text-blue-600" />
      case "partner_added":
        return <Building className="h-4 w-4 text-purple-600" />
      case "member_suspended":
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return <Activity className="h-4 w-4 text-gray-600" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminNav currentPage="dashboard" />
      
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-montserrat font-semibold text-gray-900">
                  Dashboard
                </h1>
                <p className="text-sm text-gray-600">
                  Overview of your alumni community
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
                <Button>
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analytics
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.name} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{stat.name}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">
                        {stat.value}
                      </p>
                      <div className="flex items-center mt-2">
                        {stat.changeType === "increase" && (
                          <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
                        )}
                        {stat.changeType === "decrease" && (
                          <ArrowDownRight className="h-4 w-4 text-red-600 mr-1" />
                        )}
                        <span className={`text-sm ${
                          stat.changeType === "increase" ? "text-green-600" :
                          stat.changeType === "decrease" ? "text-red-600" :
                          "text-gray-500"
                        }`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-full ${getStatColorClasses(stat.color)}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-montserrat font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link href="/mockups/admin/members">
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Review Pending Members ({adminStats.pendingApprovals})
                    </Button>
                  </Link>
                  <Link href="/mockups/admin/events">
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="h-4 w-4 mr-2" />
                      Create New Event
                    </Button>
                  </Link>
                  <Link href="/mockups/admin/partners">
                    <Button variant="outline" className="w-full justify-start">
                      <Building className="h-4 w-4 mr-2" />
                      Manage Partners
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Reports
                  </Button>
                </div>
              </div>

              {/* Pending Members */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-montserrat font-semibold">Pending Approvals</h3>
                  <Link href="/mockups/admin/members">
                    <Button variant="ghost" size="sm">
                      View All
                    </Button>
                  </Link>
                </div>
                <div className="space-y-3">
                  {pendingMembers.slice(0, 3).map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Avatar name={member.name} size={32} />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{member.name}</p>
                          <p className="text-xs text-gray-500">Class of {member.graduationYear}</p>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4 text-gray-600" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-montserrat font-semibold">Recent Activity</h3>
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentActivities.slice(0, 6).map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                      <div className="flex-shrink-0 mt-1">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{activity.description}</p>
                        <div className="flex items-center mt-1 space-x-2">
                          <p className="text-xs text-gray-500">by {activity.adminName}</p>
                          <span className="text-xs text-gray-300">•</span>
                          <p className="text-xs text-gray-500">{formatDate(activity.timestamp)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Membership Growth */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-montserrat font-semibold">Membership Growth</h3>
                <Button variant="ghost" size="sm">
                  <BarChart3 className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-3">
                {membershipStats.growthTrend.slice(-4).map((month, index) => (
                  <div key={month.month} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{month.month}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${(month.members / 3000) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {month.members.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Member Distribution */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-montserrat font-semibold">Member Distribution</h3>
                <Button variant="ghost" size="sm">
                  <PieChart className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-3">
                {membershipStats.byProfession.slice(0, 5).map((profession, index) => {
                  const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-yellow-500", "bg-red-500"]
                  return (
                    <div key={profession.profession} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${colors[index]}`} />
                        <span className="text-sm text-gray-600">{profession.profession}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {profession.count.toLocaleString()}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}