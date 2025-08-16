"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MemberCard } from "../../components/ui/member-card"
import { mockUser, mockMembers, graduationYears, professionCategories } from "../../lib/mock-data"
import { 
  ArrowLeft,
  Search,
  Filter,
  Users,
  UserPlus,
  MessageCircle,
  Clock,
  TrendingUp,
  Grid,
  List,
  SlidersHorizontal
} from "lucide-react"

export default function MyNetworkPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [activeTab, setActiveTab] = React.useState<"all" | "pending" | "requests">("all")
  const [filterYear, setFilterYear] = React.useState<string>("all")
  const [filterProfession, setFilterProfession] = React.useState<string>("all")
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = React.useState(false)

  // Enhanced mock data with more variety
  const allNetworkMembers = React.useMemo(() => {
    return mockMembers.map((member, index) => ({
      ...member,
      bio: [
        "Passionate about education and technology. Love connecting with fellow Rulang alumni.",
        "Healthcare professional dedicated to community service and wellness initiatives.",
        "Financial advisor helping families secure their future. Always happy to chat about investment strategies.",
        "Marketing creative with 10+ years experience. Enjoys photography and travel in spare time."
      ][index % 4],
      memberSince: ["2018-03-15", "2019-07-22", "2020-11-08", "2021-02-14"][index % 4]
    }))
  }, [])

  // Filter and search logic
  const filteredMembers = React.useMemo(() => {
    let filtered = allNetworkMembers

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(member =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.company?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by graduation year
    if (filterYear !== "all") {
      filtered = filtered.filter(member => member.graduationYear.toString() === filterYear)
    }

    // Filter by profession
    if (filterProfession !== "all") {
      filtered = filtered.filter(member => member.profession === filterProfession)
    }

    // Filter by tab
    switch (activeTab) {
      case "pending":
        filtered = filtered.filter(member => member.connectionStatus === "pending")
        break
      case "requests":
        filtered = filtered.filter(member => member.connectionStatus === "request-received")
        break
      case "all":
      default:
        // Show all connections (connected, pending, and received requests)
        filtered = filtered.filter(member => 
          member.connectionStatus === "connected" || 
          member.connectionStatus === "pending" || 
          member.connectionStatus === "request-received"
        )
        break
    }

    return filtered
  }, [allNetworkMembers, searchQuery, filterYear, filterProfession, activeTab])

  const connectionStats = React.useMemo(() => {
    return {
      total: allNetworkMembers.filter(m => m.connectionStatus === "connected").length,
      pending: allNetworkMembers.filter(m => m.connectionStatus === "pending").length,
      requests: allNetworkMembers.filter(m => m.connectionStatus === "request-received").length,
      classmates: allNetworkMembers.filter(m => 
        m.connectionStatus === "connected" && m.graduationYear === mockUser.graduationYear
      ).length
    }
  }, [allNetworkMembers])

  const handleConnect = (memberId: string) => {
    alert(`Connection request sent to member ${memberId}! (This is a mockup)`)
  }

  const handleMessage = (memberId: string) => {
    alert(`Opening message thread with member ${memberId}! (This is a mockup)`)
  }

  const handleViewProfile = (memberId: string) => {
    alert(`Opening full profile for member ${memberId}! (This is a mockup)`)
  }

  const handleApprove = (memberId: string) => {
    alert(`Connection request approved for member ${memberId}! (This is a mockup)`)
  }

  const handleDecline = (memberId: string) => {
    alert(`Connection request declined for member ${memberId}! (This is a mockup)`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/mockups/member/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-montserrat font-semibold text-gray-900">
                  My Network
                </h1>
                <p className="text-sm text-gray-600">
                  Connect and stay in touch with fellow Rulang alumni
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Link href="/mockups/member/discover">
                <Button>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Discover More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">{connectionStats.total}</div>
                  <div className="text-sm text-gray-600">Connections</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{connectionStats.classmates}</div>
                  <div className="text-sm text-gray-600">Classmates</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-100 rounded-full">
                  <Clock className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">{connectionStats.pending}</div>
                  <div className="text-sm text-gray-600">Pending</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-full">
                  <MessageCircle className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{connectionStats.requests}</div>
                  <div className="text-sm text-gray-600">Requests</div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search connections by name, profession, or company..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center space-x-2 bg-gray-100 rounded-md p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="grid md:grid-cols-3 gap-4 mt-4 pt-4 border-t">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Graduation Year
                  </label>
                  <select
                    value={filterYear}
                    onChange={(e) => setFilterYear(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="all">All Years</option>
                    {graduationYears.slice(0, 20).map(year => (
                      <option key={year} value={year.toString()}>{year}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profession
                  </label>
                  <select
                    value={filterProfession}
                    onChange={(e) => setFilterProfession(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="all">All Professions</option>
                    {professionCategories.map(profession => (
                      <option key={profession} value={profession}>{profession}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setFilterYear("all")
                      setFilterProfession("all")
                      setSearchQuery("")
                    }}
                    className="w-full"
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg border border-gray-200 mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { key: "all", label: "All Connections", count: connectionStats.total + connectionStats.pending + connectionStats.requests },
                  { key: "pending", label: "Pending Requests", count: connectionStats.pending },
                  { key: "requests", label: "Received Requests", count: connectionStats.requests }
                ].map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.key
                        ? "border-primary text-primary"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </nav>
            </div>

            {/* Results */}
            <div className="p-6">
              {filteredMembers.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No connections found</h3>
                  <p className="text-gray-600 mb-4">
                    {searchQuery || filterYear !== "all" || filterProfession !== "all"
                      ? "Try adjusting your search or filter criteria."
                      : "Start building your network by discovering new alumni."
                    }
                  </p>
                  <Link href="/mockups/member/discover">
                    <Button>
                      <UserPlus className="h-4 w-4 mr-2" />
                      Discover Alumni
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className={`grid gap-4 ${
                  viewMode === "grid" 
                    ? "md:grid-cols-2 lg:grid-cols-3" 
                    : "grid-cols-1"
                }`}>
                  {filteredMembers.map((member) => (
                    <MemberCard
                      key={member.id}
                      member={member}
                      onConnect={handleConnect}
                      onMessage={handleMessage}
                      onViewProfile={handleViewProfile}
                      onApprove={handleApprove}
                      onDecline={handleDecline}
                      size={viewMode === "list" ? "large" : "medium"}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}