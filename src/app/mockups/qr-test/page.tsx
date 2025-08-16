import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactQRCode } from "../components/ui/contact-qr-code"
import { MembershipCard } from "../components/ui/membership-card"
import { previewVCard } from "../lib/qr-generator"
import { mockUser, mockMembers } from "../lib/mock-data"
import { ArrowLeft, Eye, QrCode, User } from "lucide-react"

export default function QRTestPage() {
  // Test with different users
  const testUsers = [mockUser, ...mockMembers.slice(0, 2).map(member => ({
    ...mockUser,
    id: `user-${member.id}`,
    name: member.name,
    graduationYear: member.graduationYear,
    profession: member.profession,
    location: member.location,
    contactInfo: {
      ...mockUser.contactInfo,
      phone: "+65 9876 5432"
    }
  }))]

  // Generate vCard preview for the first user
  const contactInfo = {
    firstName: mockUser.name.split(' ')[0],
    lastName: mockUser.name.split(' ').slice(1).join(' '),
    email: mockUser.email,
    phone: mockUser.contactInfo.phone,
    memberSince: mockUser.memberSince,
    memberId: `RPS${mockUser.id.slice(-6).toUpperCase()}`,
    organization: "Rulang Primary School Alumni Association",
    graduationYear: mockUser.graduationYear
  }

  const vCardPreview = previewVCard(contactInfo)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/mockups">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Mockups
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-montserrat font-semibold text-gray-900">
                  QR Code Contact Generator
                </h1>
                <p className="text-sm text-gray-600">
                  Test the vCard QR code generation for membership cards
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* How it Works */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-montserrat font-semibold mb-4 flex items-center">
              <QrCode className="h-5 w-5 mr-2 text-primary" />
              How QR Code Contact Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <h3 className="font-medium mb-2">Generate vCard</h3>
                <p className="text-sm text-gray-600">Creates a vCard with contact info, member details, and join date</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-semibold">2</span>
                </div>
                <h3 className="font-medium mb-2">QR Code</h3>
                <p className="text-sm text-gray-600">Encodes vCard data into a scannable QR code</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-semibold">3</span>
                </div>
                <h3 className="font-medium mb-2">Add Contact</h3>
                <p className="text-sm text-gray-600">Phone automatically creates contact with all details</p>
              </div>
            </div>
          </div>

          {/* QR Code Examples */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-montserrat font-semibold mb-6">QR Code Examples</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {testUsers.map((user, index) => {
                const contact = {
                  firstName: user.name.split(' ')[0],
                  lastName: user.name.split(' ').slice(1).join(' '),
                  email: user.email,
                  phone: user.contactInfo.phone,
                  memberSince: user.memberSince,
                  memberId: `RPS${user.id.slice(-6).toUpperCase()}`,
                  organization: "Rulang Primary School Alumni Association",
                  graduationYear: user.graduationYear
                }

                return (
                  <div key={user.id} className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-center mb-3">
                      <User className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="font-medium">{user.name}</span>
                    </div>
                    
                    <ContactQRCode
                      contact={contact}
                      size={150}
                      showActions={true}
                      className="mx-auto mb-3"
                    />
                    
                    <p className="text-sm text-gray-600">
                      Class of {user.graduationYear}<br />
                      {user.profession}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Membership Cards with QR */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-montserrat font-semibold mb-6">Membership Cards with QR Codes</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {testUsers.slice(0, 2).map((user) => (
                <div key={`card-${user.id}`}>
                  <h3 className="font-medium mb-3">{user.name}'s Card</h3>
                  <MembershipCard user={user} />
                </div>
              ))}
            </div>
          </div>

          {/* vCard Data Preview */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-montserrat font-semibold mb-4 flex items-center">
              <Eye className="h-5 w-5 mr-2 text-primary" />
              vCard Data Preview
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Generated vCard for {mockUser.name}:</h4>
              <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                {vCardPreview}
              </pre>
            </div>
            
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">What gets saved to contacts:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• <strong>Name:</strong> {contactInfo.firstName} {contactInfo.lastName}</li>
                <li>• <strong>Email:</strong> {contactInfo.email}</li>
                <li>• <strong>Phone:</strong> {contactInfo.phone}</li>
                <li>• <strong>Organization:</strong> {contactInfo.organization}</li>
                <li>• <strong>Notes:</strong> "Rulang Alumni Member since {new Date(contactInfo.memberSince).getFullYear()}, Member ID: {contactInfo.memberId}, Class of {contactInfo.graduationYear}"</li>
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-medium text-green-900 mb-3">📱 How to Test</h3>
            <ol className="text-sm text-green-800 space-y-2">
              <li>1. Open your phone's camera app</li>
              <li>2. Point it at any QR code above</li>
              <li>3. Tap the notification/banner that appears</li>
              <li>4. Your phone will automatically create a new contact with all the member's details!</li>
            </ol>
            
            <p className="text-xs text-green-700 mt-4">
              <strong>Note:</strong> The contact will include name, email, phone, organization, and notes with membership info.
              Works on iOS and Android devices with built-in camera QR code scanning.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}