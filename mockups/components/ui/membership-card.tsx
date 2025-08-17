import * as React from "react"
import { Calendar, MapPin, GraduationCap, Building } from "lucide-react"
import { mockUser } from "../../lib/mock-data"

interface MembershipCardProps {
  className?: string
  size?: "small" | "large"
}

// Simple QR code placeholder since we don't have the actual library
const QRCodePlaceholder = ({ value, size }: { value: string; size: number }) => (
  <div 
    className="bg-gray-900 flex items-center justify-center text-white text-xs font-mono"
    style={{ width: size, height: size }}
  >
    QR
  </div>
)

export function MembershipCard({ className, size = "large" }: MembershipCardProps) {
  const isSmall = size === "small"
  
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
            RPS{mockUser.id.slice(-6).toUpperCase()}
          </p>
        </div>
      </div>

      {/* Member Info */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="col-span-2">
          <h2 className={`font-montserrat font-bold ${isSmall ? "text-lg" : "text-2xl"} mb-2`}>
            {mockUser.name}
          </h2>
          
          <div className="space-y-1">
            <div className="flex items-center text-sm opacity-90">
              <GraduationCap className="h-3 w-3 mr-2" />
              <span>Class of {mockUser.graduationYear}</span>
            </div>
            
            <div className="flex items-center text-sm opacity-90">
              <Building className="h-3 w-3 mr-2" />
              <span className="truncate">{mockUser.profession}</span>
            </div>
            
            <div className="flex items-center text-sm opacity-90">
              <MapPin className="h-3 w-3 mr-2" />
              <span>{mockUser.location}</span>
            </div>
            
            <div className="flex items-center text-sm opacity-90">
              <Calendar className="h-3 w-3 mr-2" />
              <span>Member since {new Date(mockUser.memberSince).getFullYear()}</span>
            </div>
          </div>
        </div>
        
        {/* QR Code */}
        <div className="flex flex-col items-center justify-center">
          <QRCodePlaceholder 
            value={`https://rulangalumni.sg/member/${mockUser.id}`}
            size={isSmall ? 60 : 80}
          />
          <p className="text-xs opacity-75 mt-1 text-center">
            Scan for profile
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