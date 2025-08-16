"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { PrivacyControls } from "../../components/ui/privacy-controls"
import { mockUser, graduationYears, professionCategories, interestTags } from "../../lib/mock-data"
import { 
  User, 
  Camera, 
  Save, 
  ArrowLeft, 
  Eye,
  MapPin,
  Building,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  Linkedin,
  Tag,
  FileText
} from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const [formData, setFormData] = React.useState({
    name: mockUser.name,
    email: mockUser.email,
    phone: mockUser.contactInfo.phone,
    linkedIn: mockUser.contactInfo.linkedIn,
    graduationYear: mockUser.graduationYear,
    classes: mockUser.classes.join(", "),
    profession: mockUser.profession,
    company: mockUser.company || "",
    location: mockUser.location,
    interests: mockUser.interests,
    expertise: mockUser.expertise,
    bio: mockUser.bio
  })

  const [privacy, setPrivacy] = React.useState(mockUser.privacy)
  const [isEditing, setIsEditing] = React.useState(true)
  const [showPreview, setShowPreview] = React.useState(false)

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handlePrivacyChange = (field: string, value: string) => {
    setPrivacy(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    alert("Profile saved! (This is a mockup)")
    setIsEditing(false)
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
                  My Profile
                </h1>
                <p className="text-sm text-gray-600">
                  Manage your personal information and privacy settings
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowPreview(!showPreview)}
              >
                <Eye className="h-4 w-4 mr-2" />
                {showPreview ? "Hide" : "Preview"}
              </Button>
              <Button onClick={handleSave} disabled={!isEditing}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {showPreview && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-blue-900 mb-2">Profile Preview</h3>
              <p className="text-sm text-blue-800">
                This is how your profile appears to other members based on your privacy settings.
              </p>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Photo & Basic Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-6">
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <img
                      src={mockUser.profilePhoto}
                      alt={formData.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-gray-100"
                    />
                    <button className="absolute bottom-2 right-2 bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:bg-primary/90">
                      <Camera className="h-4 w-4" />
                    </button>
                  </div>
                  <h2 className="text-xl font-montserrat font-semibold mt-4">
                    {formData.name}
                  </h2>
                  <p className="text-gray-600">Class of {formData.graduationYear}</p>
                </div>

                {/* Quick Stats */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center text-sm text-gray-600">
                    <Building className="h-4 w-4 mr-2" />
                    {formData.profession}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {formData.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    Member since {new Date(mockUser.memberSince).getFullYear()}
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-montserrat font-semibold mb-6">Basic Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <PrivacyControls
                        field="email"
                        value={privacy.email}
                        onChange={(value) => handlePrivacyChange("email", value)}
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <PrivacyControls
                        field="phone"
                        value={privacy.phone}
                        onChange={(value) => handlePrivacyChange("phone", value)}
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        LinkedIn Profile
                      </label>
                      <PrivacyControls
                        field="linkedIn"
                        value={privacy.linkedIn}
                        onChange={(value) => handlePrivacyChange("linkedIn", value)}
                      />
                    </div>
                    <div className="relative">
                      <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="url"
                        value={formData.linkedIn}
                        onChange={(e) => handleInputChange("linkedIn", e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="https://linkedin.com/in/yourname"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Information */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-montserrat font-semibold mb-6">Education</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Graduation Year
                    </label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <select
                        value={formData.graduationYear}
                        onChange={(e) => handleInputChange("graduationYear", parseInt(e.target.value))}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        {graduationYears.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Classes (e.g., 6A (1995), 5B (1994))
                    </label>
                    <input
                      type="text"
                      value={formData.classes}
                      onChange={(e) => handleInputChange("classes", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="6A (1995), 5B (1994)"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-montserrat font-semibold mb-6">Professional Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Profession
                      </label>
                      <PrivacyControls
                        field="profession"
                        value={privacy.profession}
                        onChange={(value) => handlePrivacyChange("profession", value)}
                      />
                    </div>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <select
                        value={formData.profession}
                        onChange={(e) => handleInputChange("profession", e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      >
                        {professionCategories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Your company or organization"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Location
                      </label>
                      <PrivacyControls
                        field="location"
                        value={privacy.location}
                        onChange={(value) => handlePrivacyChange("location", value)}
                      />
                    </div>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Interests & Expertise */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-montserrat font-semibold mb-6">Interests & Expertise</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Tag className="inline h-4 w-4 mr-1" />
                      Interests
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {interestTags.map(tag => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => {
                            const isSelected = formData.interests.includes(tag)
                            if (isSelected) {
                              handleInputChange("interests", formData.interests.filter(i => i !== tag))
                            } else {
                              handleInputChange("interests", [...formData.interests, tag])
                            }
                          }}
                          className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                            formData.interests.includes(tag)
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Areas of Expertise (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={formData.expertise.join(", ")}
                      onChange={(e) => handleInputChange("expertise", e.target.value.split(", ").filter(Boolean))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="JavaScript, React, Node.js"
                    />
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-montserrat font-semibold">About Me</h3>
                  <PrivacyControls
                    field="bio"
                    value={privacy.bio}
                    onChange={(value) => handlePrivacyChange("bio", value)}
                  />
                </div>
                
                <div className="relative">
                  <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <textarea
                    value={formData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    rows={4}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Tell other alumni about yourself, your journey, and what you're passionate about..."
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {formData.bio.length}/500 characters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}