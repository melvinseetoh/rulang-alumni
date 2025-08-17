import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MembershipCard } from "../../components/ui/membership-card"
import { mockUser, mockNotifications, mockMembers } from "../../lib/mock-data"
import { 
  User, 
  Users, 
  Calendar, 
  Gift, 
  Bell, 
  Settings,
  CreditCard,
  Search,
  MessageCircle,
  TrendingUp,
  Award,
  ChevronRight,
  ExternalLink
} from "lucide-react"

export default function MemberDashboard() {
  const recentConnections = mockMembers.filter(m => m.connectionStatus === "connected").slice(0, 3)
  const unreadNotifications = mockNotifications.filter(n => !n.read).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-montserrat font-semibold text-gray-900">
                Welcome back, {mockUser.name}!
              </h1>
              <p className="text-sm text-gray-600">
                Class of {mockUser.graduationYear} • Member since {new Date(mockUser.memberSince).getFullYear()}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {unreadNotifications > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {unreadNotifications}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-montserrat font-semibold mb-4">Quick Actions</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link
                  href="/mockups/member/profile"
                  className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <User className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm font-medium text-center">Edit Profile</span>
                </Link>
                
                <Link
                  href="/mockups/member/network"
                  className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm font-medium text-center">My Network</span>
                </Link>
                
                <Link
                  href="/events"
                  className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <Calendar className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm font-medium text-center">Upcoming Events</span>
                </Link>
                
                <Link
                  href="/mockups/member/benefits"
                  className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <Gift className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm font-medium text-center">Member Benefits</span>
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-montserrat font-semibold">Recent Activity</h2>
                <Button variant="ghost" size="sm">
                  View All
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {mockNotifications.slice(0, 4).map((notification) => (
                  <div key={notification.id} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <div className={`p-2 rounded-full ${notification.read ? 'bg-gray-100' : 'bg-primary/10'}`}>
                      {notification.type === 'connection_request' && <Users className="h-4 w-4 text-primary" />}
                      {notification.type === 'event_reminder' && <Calendar className="h-4 w-4 text-primary" />}
                      {notification.type === 'blog_mention' && <MessageCircle className="h-4 w-4 text-primary" />}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-sm font-medium ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                        {notification.title}
                      </h4>
                      <p className={`text-sm ${notification.read ? 'text-gray-500' : 'text-gray-600'}`}>
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(notification.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Network Overview */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-montserrat font-semibold">Your Network</h2>
                <Link href="/mockups/member/discover">
                  <Button variant="outline" size="sm">
                    <Search className="h-4 w-4 mr-2" />
                    Discover More
                  </Button>
                </Link>
              </div>
              
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {mockMembers.filter(m => m.connectionStatus === "connected").length}
                  </div>
                  <div className="text-sm text-blue-800">Connections</div>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {mockMembers.filter(m => m.graduationYear === mockUser.graduationYear).length}
                  </div>
                  <div className="text-sm text-green-800">Same Year</div>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {mockMembers.filter(m => m.connectionStatus === "pending").length}
                  </div>
                  <div className="text-sm text-purple-800">Pending</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Recent Connections</h4>
                {recentConnections.map((member) => (
                  <div key={member.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <img
                      src={member.profilePhoto}
                      alt={member.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-900">{member.name}</h5>
                      <p className="text-sm text-gray-600">
                        {member.profession} • Class of {member.graduationYear}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Membership Card */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-montserrat font-semibold">Your Membership</h3>
                <Link href="/mockups/member/membership">
                  <Button variant="ghost" size="sm">
                    <CreditCard className="h-4 w-4 mr-2" />
                    View Card
                  </Button>
                </Link>
              </div>
              <MembershipCard size="small" />
            </div>

            {/* Profile Completion */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="font-montserrat font-semibold mb-4">Profile Completion</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Overall Progress</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Add bio</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Upload photo</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Add expertise</span>
                    <span className="text-orange-600">○</span>
                  </div>
                </div>
                
                <Button size="sm" className="w-full mt-4">
                  Complete Profile
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="font-montserrat font-semibold mb-4">Your Impact</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">Profile Views</div>
                    <div className="text-sm text-gray-600">23 this month</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Award className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">Events Attended</div>
                    <div className="text-sm text-gray-600">5 this year</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Users className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium">Connections Made</div>
                    <div className="text-sm text-gray-600">12 new this year</div>
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