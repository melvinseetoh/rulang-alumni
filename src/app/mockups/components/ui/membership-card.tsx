import * as React from "react"
import { Calendar, MapPin, GraduationCap, Building } from "lucide-react"
import { mockUser } from "../../lib/mock-data"
import { ContactQRCode } from "./contact-qr-code"

interface MembershipCardProps {
  className?: string
  size?: "small" | "large"
  user?: typeof mockUser
}

export function MembershipCard({ className, size = "large", user = mockUser }: MembershipCardProps) {
  const isSmall = size === "small"
  
  // Prepare contact info for QR code
  const contactInfo = {
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
    <div className={`bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl shadow-lg overflow-hidden ${
      isSmall ? "p-4" : "p-6"
    } ${className}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className={`font-montserrat font-semibold ${isSmall ? "text-sm" : "text-lg"}`}>
            Rulang Primary School
          </h3>
          <p className={`${isSmall ? "text-xs" : "text-sm"} opacity-90`}>
            Alumni Association
          </p>
        </div>
        <div className="text-right">
          <p className={`${isSmall ? "text-xs" : "text-sm"} opacity-90`}>Member ID</p>
          <p className={`font-mono font-bold ${isSmall ? "text-sm" : "text-base"}`}>
            RPS{user.id.slice(-6).toUpperCase()}
          </p>
        </div>
      </div>

      {/* Member Info */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="col-span-2">
          <h2 className={`font-montserrat font-bold ${isSmall ? "text-lg" : "text-2xl"} mb-2`}>
            {user.name}
          </h2>
          
          <div className="space-y-1">
            <div className="flex items-center text-sm opacity-90">
              <GraduationCap className="h-3 w-3 mr-2" />
              <span>Class of {user.graduationYear}</span>
            </div>
            
            <div className="flex items-center text-sm opacity-90">
              <Building className="h-3 w-3 mr-2" />
              <span className="truncate">{user.profession}</span>
            </div>
            
            <div className="flex items-center text-sm opacity-90">
              <MapPin className="h-3 w-3 mr-2" />
              <span>{user.location}</span>
            </div>
            
            <div className="flex items-center text-sm opacity-90">
              <Calendar className="h-3 w-3 mr-2" />
              <span>Member since {new Date(user.memberSince).getFullYear()}</span>
            </div>
          </div>
        </div>
        
        {/* QR Code */}
        <div className="flex flex-col items-center justify-center">
          <ContactQRCode 
            contact={contactInfo}
            size={isSmall ? 60 : 80}
          />
          <p className="text-xs opacity-75 mt-1 text-center">
            Scan for contact
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-primary-foreground/20">
        <div>
          <p className="text-xs opacity-75">Valid</p>
          <p className="text-sm font-medium">Active Member</p>
        </div>
        <div className="text-right">
          <p className="text-xs opacity-75">Est. 1930</p>
          <p className="text-sm font-medium">Celebrating Legacy</p>
        </div>
      </div>
    </div>
  )
}