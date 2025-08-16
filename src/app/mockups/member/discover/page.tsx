"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MemberCard } from "../../components/ui/member-card"
import { mockUser, mockMembers, graduationYears, professionCategories, interestTags } from "../../lib/mock-data"
import { 
  ArrowLeft,
  Search,
  Sparkles,
  Users,
  GraduationCap,
  Building,
  Heart,
  RefreshCw,
  Filter,
  TrendingUp,
  Star,
  Info
} from "lucide-react"

export default function DiscoverMembersPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [activeTab, setActiveTab] = React.useState<"recommended" | "classmates" | "all">("recommended")
  const [filterYear, setFilterYear] = React.useState<string>("all")
  const [filterProfession, setFilterProfession] = React.useState<string>("all")
  const [selectedInterests, setSelectedInterests] = React.useState<string[]>([])
  const [showFilters, setShowFilters] = React.useState(false)

  // Enhanced discover members with recommendation reasons
  const discoverMembers = React.useMemo(() => {
    return mockMembers.map((member, index) => ({
      ...member,
      connectionStatus: "not-connected" as const,
      bio: [
        "Technology enthusiast and startup advisor. Always excited to mentor fellow alumni in the tech space.",
        "Dedicated healthcare professional with a passion for community wellness and medical innovation.",
        "Financial planning expert helping families achieve their dreams. Love connecting with fellow Rulang alumni.",
        "Creative marketing professional specializing in digital transformation and brand strategy.",
        "Education leader focused on curriculum development and student success initiatives.",
        "Environmental consultant working on sustainability projects across Southeast Asia.",
      ][index % 6],
      recommendationReason: [
        "Same graduation year and shared interest in Technology",
        "Works in similar industry and has 3 mutual connections",
        "Lives in same area and shares interest in Photography",
        "Classmate recommendation from Sarah Lim",
        "Similar career path in your field of expertise",
        "Active in alumni events you've attended",
      ][index % 6],
      recommendationScore: Math.floor(Math.random() * 30) + 70, // 70-99
    }))
  }, [])

  // Filter and search logic
  const filteredMembers = React.useMemo(() => {
    let filtered = discoverMembers

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

    // Filter by interests
    if (selectedInterests.length > 0) {
      filtered = filtered.filter(member =>
        selectedInterests.some(interest => member.commonInterests.includes(interest))
      )
    }

    // Filter by tab
    switch (activeTab) {
      case "recommended":
        // Sort by recommendation score and take top matches
        filtered = filtered
          .sort((a, b) => (b.recommendationScore || 0) - (a.recommendationScore || 0))
          .slice(0, 12)
        break
      case "classmates":
        filtered = filtered.filter(member => member.graduationYear === mockUser.graduationYear)
        break
      case "all":
      default:
        // Show all, sorted by name
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    return filtered
  }, [discoverMembers, searchQuery, filterYear, filterProfession, selectedInterests, activeTab])

  const discoveryStats = React.useMemo(() => {
    return {
      total: discoverMembers.length,
      classmates: discoverMembers.filter(m => m.graduationYear === mockUser.graduationYear).length,
      recommended: 12,
      sameField: discoverMembers.filter(m => m.profession === mockUser.profession).length,
    }
  }, [discoverMembers])

  const handleConnect = (memberId: string) => {
    alert(`Connection request sent to member ${memberId}! (This is a mockup)`)
  }

  const handleViewProfile = (memberId: string) => {
    alert(`Opening full profile for member ${memberId}! (This is a mockup)`)
  }

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  const getRecommendationIcon = (reason: string) => {
    if (reason.includes("graduation year") || reason.includes("Classmate")) return GraduationCap
    if (reason.includes("industry") || reason.includes("career")) return Building
    if (reason.includes("mutual connections")) return Users
    if (reason.includes("same area")) return Heart
    return Sparkles
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
                  Discover Members
                </h1>
                <p className="text-sm text-gray-600">
                  Find and connect with alumni who share your interests and background
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Discovery Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-full">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{discoveryStats.recommended}</div>
                  <div className="text-sm text-gray-600">Recommended</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{discoveryStats.classmates}</div>
                  <div className="text-sm text-gray-600">Classmates</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Building className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">{discoveryStats.sameField}</div>
                  <div className="text-sm text-gray-600">Same Field</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 rounded-full">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">{discoveryStats.total}</div>
                  <div className="text-sm text-gray-600">Total Alumni</div>
                </div>
              </div>
            </div>
          </div>

          {/* How Recommendations Work */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6 mb-6">
            <div className="flex items-start space-x-3">
              <Info className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-montserrat font-semibold text-purple-900 mb-2">
                  How We Find Your Best Matches
                </h3>
                <p className="text-sm text-purple-800 mb-3">
                  Our recommendation system considers multiple factors to suggest the most relevant connections:
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-xs text-purple-700">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-3 w-3" />
                    <span>Graduation year & classes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building className="h-3 w-3" />
                    <span>Industry & profession</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-3 w-3" />
                    <span>Shared interests & location</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search alumni by name, profession, or company..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="space-y-6 pt-4 border-t">
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                {/* Interest Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Common Interests
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interestTags.slice(0, 12).map(interest => (
                      <button
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                          selectedInterests.includes(interest)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setFilterYear("all")
                      setFilterProfession("all")
                      setSelectedInterests([])
                      setSearchQuery("")
                    }}
                  >
                    Clear All Filters
                  </Button>
                  <span className="text-sm text-gray-500">
                    {filteredMembers.length} alumni found
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg border border-gray-200 mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { key: "recommended", label: "Recommended", count: discoveryStats.recommended, icon: Sparkles },
                  { key: "classmates", label: "Classmates", count: discoveryStats.classmates, icon: GraduationCap },
                  { key: "all", label: "All Alumni", count: discoveryStats.total, icon: Users }
                ].map(tab => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key as any)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center space-x-2 ${
                        activeTab === tab.key
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{tab.label} ({tab.count})</span>
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* Results */}
            <div className="p-6">
              {filteredMembers.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No alumni found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or filters to find more connections.
                  </p>
                  <Button onClick={() => {
                    setSearchQuery("")
                    setFilterYear("all")
                    setFilterProfession("all")
                    setSelectedInterests([])
                  }}>
                    Clear All Filters
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {activeTab === "recommended" && (
                    <div className="mb-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <div className="flex items-center space-x-2 text-purple-800 text-sm">
                        <Star className="h-4 w-4" />
                        <span>Showing your top matches based on shared interests, background, and connections</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredMembers.map((member) => (
                      <div key={member.id} className="relative">
                        <MemberCard
                          member={member}
                          onConnect={handleConnect}
                          onViewProfile={handleViewProfile}
                          size="medium"
                        />
                        
                        {/* Recommendation Badge */}
                        {activeTab === "recommended" && member.recommendationReason && (
                          <div className="mt-2 p-2 bg-purple-50 border border-purple-200 rounded-md">
                            <div className="flex items-center space-x-2">
                              {React.createElement(getRecommendationIcon(member.recommendationReason), {
                                className: "h-3 w-3 text-purple-600 flex-shrink-0"
                              })}
                              <span className="text-xs text-purple-800">
                                {member.recommendationReason}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}