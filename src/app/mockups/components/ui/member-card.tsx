"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Avatar } from "./avatar"
import { 
  MapPin, 
  Building, 
  GraduationCap, 
  Users, 
  MessageCircle, 
  ExternalLink,
  Check,
  Clock,
  X,
  UserPlus
} from "lucide-react"

interface MemberCardProps {
  member: {
    id: string
    name: string
    graduationYear: number
    profession: string
    company?: string
    location: string
    profilePhoto: string
    connectionStatus: "connected" | "pending" | "not-connected" | "request-received"
    mutualConnections: number
    commonInterests: string[]
    bio?: string
    memberSince?: string
  }
  onConnect?: (memberId: string) => void
  onMessage?: (memberId: string) => void
  onViewProfile?: (memberId: string) => void
  onApprove?: (memberId: string) => void
  onDecline?: (memberId: string) => void
  showActions?: boolean
  size?: "small" | "medium" | "large"
}

export function MemberCard({ 
  member, 
  onConnect,
  onMessage,
  onViewProfile,
  onApprove,
  onDecline,
  showActions = true,
  size = "medium"
}: MemberCardProps) {
  const isSmall = size === "small"
  const isLarge = size === "large"

  const getConnectionStatusColor = (status: string) => {
    switch (status) {
      case "connected":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "request-received":
        return "bg-blue-100 text-blue-800"
      case "not-connected":
        return "bg-gray-100 text-gray-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  const getConnectionStatusText = (status: string) => {
    switch (status) {
      case "connected":
        return "Connected"
      case "pending":
        return "Request Sent"
      case "request-received":
        return "Request Received"
      case "not-connected":
        return "Not Connected"
      default:
        return "Unknown"
    }
  }

  const handleConnect = () => {
    onConnect?.(member.id)
  }

  const handleMessage = () => {
    onMessage?.(member.id)
  }

  const handleViewProfile = () => {
    onViewProfile?.(member.id)
  }

  const handleApprove = () => {
    onApprove?.(member.id)
  }

  const handleDecline = () => {
    onDecline?.(member.id)
  }

  return (
    <div className={`bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow ${
      isLarge ? "p-6" : isSmall ? "p-3" : "p-4"
    }`}>
      {/* Header */}
      <div className="flex items-start space-x-4 mb-4">
        <Avatar
          src={member.profilePhoto}
          name={member.name}
          size={isLarge ? 64 : isSmall ? 40 : 48}
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className={`font-montserrat font-semibold text-gray-900 truncate ${
              isLarge ? "text-lg" : isSmall ? "text-sm" : "text-base"
            }`}>
              {member.name}
            </h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2 ${
              getConnectionStatusColor(member.connectionStatus)
            }`}>
              {getConnectionStatusText(member.connectionStatus)}
            </span>
          </div>
          
          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex items-center">
              <GraduationCap className="h-3 w-3 mr-2 flex-shrink-0" />
              <span className="truncate">Class of {member.graduationYear}</span>
            </div>
            
            <div className="flex items-center">
              <Building className="h-3 w-3 mr-2 flex-shrink-0" />
              <span className="truncate">
                {member.profession}
                {member.company && ` at ${member.company}`}
              </span>
            </div>
            
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-2 flex-shrink-0" />
              <span className="truncate">{member.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bio (only for large cards) */}
      {isLarge && member.bio && (
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {member.bio}
        </p>
      )}

      {/* Connection Info */}
      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
        <div className="flex items-center">
          <Users className="h-3 w-3 mr-1" />
          <span>{member.mutualConnections} mutual connection{member.mutualConnections !== 1 ? 's' : ''}</span>
        </div>
        
        {member.commonInterests.length > 0 && (
          <div className="flex items-center">
            <span className="text-xs">
              {member.commonInterests.slice(0, 2).join(", ")}
              {member.commonInterests.length > 2 && ` +${member.commonInterests.length - 2}`}
            </span>
          </div>
        )}
      </div>

      {/* Actions */}
      {showActions && (
        <div className="flex items-center space-x-2">
          {member.connectionStatus === "connected" && (
            <>
              <Button size="sm" onClick={handleMessage} className="flex-1">
                <MessageCircle className="h-3 w-3 mr-2" />
                Message
              </Button>
              <Button variant="outline" size="sm" onClick={handleViewProfile}>
                <ExternalLink className="h-3 w-3" />
              </Button>
            </>
          )}

          {member.connectionStatus === "not-connected" && (
            <>
              <Button size="sm" onClick={handleConnect} className="flex-1">
                <UserPlus className="h-3 w-3 mr-2" />
                Connect
              </Button>
              <Button variant="outline" size="sm" onClick={handleViewProfile}>
                <ExternalLink className="h-3 w-3" />
              </Button>
            </>
          )}

          {member.connectionStatus === "pending" && (
            <>
              <Button variant="outline" size="sm" disabled className="flex-1">
                <Clock className="h-3 w-3 mr-2" />
                Request Sent
              </Button>
              <Button variant="outline" size="sm" onClick={handleViewProfile}>
                <ExternalLink className="h-3 w-3" />
              </Button>
            </>
          )}

          {member.connectionStatus === "request-received" && (
            <>
              <Button size="sm" onClick={handleApprove}>
                <Check className="h-3 w-3 mr-2" />
                Accept
              </Button>
              <Button variant="outline" size="sm" onClick={handleDecline}>
                <X className="h-3 w-3" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleViewProfile}>
                <ExternalLink className="h-3 w-3" />
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  )
}