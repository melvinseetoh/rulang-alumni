import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MembershipCard } from "../../components/ui/membership-card"
import { mockUser } from "../../lib/mock-data"
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  QrCode,
  Calendar,
  Award,
  Users,
  Clock,
  CheckCircle,
  Smartphone,
  Printer
} from "lucide-react"

export default function MembershipPage() {
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
                  Digital Membership Card
                </h1>
                <p className="text-sm text-gray-600">
                  Your official Rulang Primary School Alumni membership card
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Membership Card */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-montserrat font-semibold mb-4">Your Membership Card</h2>
                <MembershipCard size="large" />
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Add to Wallet
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Printer className="h-4 w-4 mr-2" />
                    Print Card
                  </Button>
                </div>
              </div>

              {/* QR Code Details */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <QrCode className="h-5 w-5 text-primary" />
                  <h3 className="font-montserrat font-semibold">QR Code Features</h3>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium">Quick Profile Access</div>
                      <div className="text-gray-600">Others can scan to view your public profile</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium">Event Check-in</div>
                      <div className="text-gray-600">Use at alumni events for easy registration</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium">Partner Benefits</div>
                      <div className="text-gray-600">Show to partners for exclusive discounts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Membership Information */}
            <div className="space-y-6">
              {/* Membership Status */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-montserrat font-semibold mb-4">Membership Status</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Status</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Active Member
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Member Since</span>
                    <span className="font-medium">
                      {new Date(mockUser.memberSince).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Membership Type</span>
                    <span className="font-medium">Lifetime Alumni</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Next Renewal</span>
                    <span className="font-medium text-gray-500">Never (Lifetime)</span>
                  </div>
                </div>
              </div>

              {/* Membership Benefits */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-montserrat font-semibold mb-4">Your Benefits</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">Alumni Network Access</div>
                      <div className="text-sm text-gray-600">Connect with verified Rulang alumni</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Calendar className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium">Exclusive Events</div>
                      <div className="text-sm text-gray-600">Priority booking for alumni events</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <Award className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium">Partner Discounts</div>
                      <div className="text-sm text-gray-600">Special offers from our partners</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <Clock className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-medium">Lifetime Access</div>
                      <div className="text-sm text-gray-600">No renewal required - lifetime membership</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-montserrat font-semibold mb-4">Quick Actions</h3>
                
                <div className="space-y-3">
                  <Link href="/mockups/member/benefits" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <Award className="h-4 w-4 mr-2" />
                      View Partner Benefits
                    </Button>
                  </Link>
                  
                  <Link href="/events" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="h-4 w-4 mr-2" />
                      Browse Events
                    </Button>
                  </Link>
                  
                  <Link href="/mockups/member/network" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Explore Network
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Help & Support */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Need Help?</h4>
                <p className="text-sm text-blue-800 mb-3">
                  Having trouble with your membership card or need assistance?
                </p>
                <Link href="/contact">
                  <Button variant="outline" size="sm" className="text-blue-800 border-blue-300">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}