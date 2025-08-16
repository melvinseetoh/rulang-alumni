import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MembershipCard } from "../../components/ui/membership-card"
import { mockUser, mockPartners } from "../../lib/mock-data"
import { 
  ArrowLeft,
  Search,
  ExternalLink,
  MapPin,
  Calendar,
  Tag,
  Gift,
  Store,
  Utensils,
  Heart,
  Briefcase,
  Smartphone,
  Car,
  Home,
  GraduationCap,
  Ticket,
  Filter
} from "lucide-react"

export default function MemberBenefitsPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all")
  const [showExpired, setShowExpired] = React.useState(false)

  // Enhanced benefits with more categories
  const allBenefits = React.useMemo(() => [
    ...mockPartners,
    {
      id: "partner-004",
      name: "FitLife Gym & Wellness",
      category: "Health & Wellness",
      offer: "25% discount on membership + free personal training session",
      description: "Modern fitness center with state-of-the-art equipment, group classes, and wellness programs.",
      website: "https://fitlifegym.sg",
      logo: "/api/placeholder/120/80",
      validUntil: "2025-12-31",
      memberExclusive: true,
      discount: 25,
      location: "Multiple locations in Singapore"
    },
    {
      id: "partner-005",
      name: "BookSmart Learning Center",
      category: "Education",
      offer: "15% discount on tuition programs for children",
      description: "Premier enrichment center specializing in mathematics, science, and English programs.",
      website: "https://booksmart.sg",
      logo: "/api/placeholder/120/80",
      validUntil: "2025-08-31",
      memberExclusive: true,
      discount: 15,
      location: "Tampines, Jurong, Bishan"
    },
    {
      id: "partner-006",
      name: "AutoCare Service Center",
      category: "Automotive",
      offer: "20% discount on car servicing and repairs",
      description: "Trusted automotive service center with certified technicians and quality parts.",
      website: "https://autocare.sg",
      logo: "/api/placeholder/120/80",
      validUntil: "2025-11-30",
      memberExclusive: false,
      discount: 20,
      location: "Woodlands, Clementi"
    },
    {
      id: "partner-007",
      name: "HomePro Renovation",
      category: "Home & Living",
      offer: "10% discount on renovation projects above $10,000",
      description: "Full-service interior design and renovation company with 10+ years experience.",
      website: "https://homepro.sg",
      logo: "/api/placeholder/120/80",
      validUntil: "2025-09-30",
      memberExclusive: true,
      discount: 10,
      location: "Islandwide service"
    },
    {
      id: "partner-008",
      name: "TechHub Gadgets",
      category: "Technology",
      offer: "5% cashback on electronics and accessories",
      description: "Latest gadgets, smartphones, and tech accessories at competitive prices.",
      website: "https://techhub.sg",
      logo: "/api/placeholder/120/80",
      validUntil: "2025-07-31",
      memberExclusive: false,
      discount: 5,
      location: "Online + Sim Lim Square"
    },
    {
      id: "partner-009",
      name: "EduTravel Study Tours",
      category: "Travel & Education",
      offer: "$200 discount on educational tours for families",
      description: "Educational travel experiences combining learning with adventure for all ages.",
      website: "https://edutravel.sg",
      logo: "/api/placeholder/120/80",
      validUntil: "2025-06-30",
      memberExclusive: true,
      discount: 200,
      location: "Virtual consultations available"
    }
  ], [])

  const categories = [
    { key: "all", label: "All Categories", icon: Store },
    { key: "Food & Dining", label: "Food & Dining", icon: Utensils },
    { key: "Health & Wellness", label: "Health & Wellness", icon: Heart },
    { key: "Technology", label: "Technology", icon: Smartphone },
    { key: "Education", label: "Education", icon: GraduationCap },
    { key: "Automotive", label: "Automotive", icon: Car },
    { key: "Home & Living", label: "Home & Living", icon: Home },
    { key: "Travel & Education", label: "Travel & Education", icon: Ticket }
  ]

  const filteredBenefits = React.useMemo(() => {
    let filtered = allBenefits

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(benefit =>
        benefit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        benefit.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        benefit.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(benefit => benefit.category === selectedCategory)
    }

    // Filter expired offers
    if (!showExpired) {
      const now = new Date()
      filtered = filtered.filter(benefit => new Date(benefit.validUntil) > now)
    }

    return filtered.sort((a, b) => a.name.localeCompare(b.name))
  }, [allBenefits, searchQuery, selectedCategory, showExpired])

  const stats = React.useMemo(() => {
    const now = new Date()
    return {
      total: allBenefits.length,
      active: allBenefits.filter(b => new Date(b.validUntil) > now).length,
      exclusive: allBenefits.filter(b => b.memberExclusive).length,
      categories: new Set(allBenefits.map(b => b.category)).size
    }
  }, [allBenefits])

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.key === category)
    return categoryData ? categoryData.icon : Store
  }

  const handleClaimOffer = (partnerId: string) => {
    alert(`Claiming offer for partner ${partnerId}! In a real app, this would show redemption details. (This is a mockup)`)
  }

  const isOfferExpired = (validUntil: string) => {
    return new Date(validUntil) <= new Date()
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
                  Member Benefits
                </h1>
                <p className="text-sm text-gray-600">
                  Exclusive discounts and offers for Rulang alumni
                </p>
              </div>
            </div>
            <Link href="/mockups/member/membership">
              <Button variant="outline">
                <Gift className="h-4 w-4 mr-2" />
                View Membership Card
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <Gift className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{stats.active}</div>
                  <div className="text-sm text-gray-600">Active Offers</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-full">
                  <Tag className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{stats.exclusive}</div>
                  <div className="text-sm text-gray-600">Member Only</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Store className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">{stats.categories}</div>
                  <div className="text-sm text-gray-600">Categories</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 rounded-full">
                  <Briefcase className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">{stats.total}</div>
                  <div className="text-sm text-gray-600">Total Partners</div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Use Benefits */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="font-montserrat font-semibold text-green-900 mb-3">
              💡 How to Redeem Your Benefits
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-green-800">
              <div className="flex items-start space-x-2">
                <span className="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">1</span>
                <div>
                  <div className="font-medium">Show Your Card</div>
                  <div>Present your digital membership card or mention you're a Rulang alumnus</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">2</span>
                <div>
                  <div className="font-medium">Verify Membership</div>
                  <div>Partner may ask for your membership card or contact details for verification</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="bg-green-200 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">3</span>
                <div>
                  <div className="font-medium">Enjoy Discount</div>
                  <div>Your discount or special offer will be applied to your purchase</div>
                </div>
              </div>
            </div>
          </div>

          {/* Your Membership Card Preview */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h3 className="font-montserrat font-semibold mb-4">Your Membership Card</h3>
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <MembershipCard size="small" />
              </div>
              <div className="space-y-3">
                <h4 className="font-medium">Present this card to redeem benefits</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Show the QR code for quick scanning</li>
                  <li>• Partners can verify your membership status</li>
                  <li>• Works both digitally and when printed</li>
                  <li>• Always carry it for instant access to discounts</li>
                </ul>
                <Link href="/mockups/member/membership">
                  <Button variant="outline" size="sm">
                    View Full Card →
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search benefits by business name or category..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              {/* Show Expired Toggle */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="show-expired"
                  checked={showExpired}
                  onChange={(e) => setShowExpired(e.target.checked)}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="show-expired" className="text-sm text-gray-700">
                  Show expired offers
                </label>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => {
                const Icon = category.icon
                return (
                  <button
                    key={category.key}
                    onClick={() => setSelectedCategory(category.key)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md border transition-colors ${
                      selectedCategory === category.key
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm">{category.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="space-y-6">
            {filteredBenefits.length === 0 ? (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <Gift className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No benefits found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or category filter to find more offers.
                </p>
                <Button onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBenefits.map((benefit) => {
                  const Icon = getCategoryIcon(benefit.category)
                  const expired = isOfferExpired(benefit.validUntil)
                  
                  return (
                    <div key={benefit.id} className={`bg-white rounded-lg border-2 transition-all hover:shadow-md ${
                      expired ? "border-gray-200 opacity-75" : "border-gray-200 hover:border-primary/30"
                    }`}>
                      {/* Header */}
                      <div className="p-4 border-b border-gray-100">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <img
                              src={benefit.logo}
                              alt={benefit.name}
                              className="w-12 h-12 object-contain rounded"
                            />
                            <div>
                              <h3 className="font-montserrat font-semibold text-gray-900">{benefit.name}</h3>
                              <div className="flex items-center space-x-2 mt-1">
                                <Icon className="h-3 w-3 text-gray-500" />
                                <span className="text-xs text-gray-500">{benefit.category}</span>
                              </div>
                            </div>
                          </div>
                          {benefit.memberExclusive && (
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                              Member Only
                            </span>
                          )}
                        </div>

                        {/* Offer */}
                        <div className={`p-3 rounded-md mb-3 ${
                          expired ? "bg-gray-100" : "bg-green-50"
                        }`}>
                          <div className="flex items-center space-x-2">
                            <Tag className={`h-4 w-4 ${expired ? "text-gray-500" : "text-green-600"}`} />
                            <span className={`font-semibold ${
                              expired ? "text-gray-600" : "text-green-800"
                            }`}>
                              {benefit.offer}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 mb-3">{benefit.description}</p>

                        {/* Location & Validity */}
                        <div className="space-y-2 text-xs text-gray-500">
                          {benefit.location && (
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{benefit.location}</span>
                            </div>
                          )}
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>
                              Valid until {new Date(benefit.validUntil).toLocaleDateString()}
                              {expired && " (Expired)"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="p-4">
                        <div className="flex items-center space-x-2">
                          <Button
                            className="flex-1"
                            disabled={expired}
                            onClick={() => handleClaimOffer(benefit.id)}
                          >
                            {expired ? "Offer Expired" : "Claim Offer"}
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href={benefit.website} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}