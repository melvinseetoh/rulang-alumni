"use client"

import * as React from "react"
import { Globe, Users, Shield, Lock, Info } from "lucide-react"

interface PrivacyControlsProps {
  field: string
  value: string
  onChange: (value: string) => void
  className?: string
}

const privacyOptions = [
  {
    value: "public",
    label: "Public",
    description: "Visible to everyone",
    icon: Globe,
    color: "text-blue-600 bg-blue-50"
  },
  {
    value: "members-only",
    label: "Members Only",
    description: "Visible to registered members",
    icon: Users,
    color: "text-green-600 bg-green-50"
  },
  {
    value: "admins-only",
    label: "Admins Only",
    description: "Visible to admins only",
    icon: Shield,
    color: "text-orange-600 bg-orange-50"
  },
  {
    value: "private",
    label: "Private",
    description: "Visible only to you",
    icon: Lock,
    color: "text-red-600 bg-red-50"
  }
]

export function PrivacyControls({ field, value, onChange, className }: PrivacyControlsProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const selectedOption = privacyOptions.find(option => option.value === value) || privacyOptions[0]
  const Icon = selectedOption.icon

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${selectedOption.color} border-current hover:bg-opacity-80`}
      >
        <Icon className="w-3 h-3 mr-1" />
        {selectedOption.label}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 z-20 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
            <div className="px-3 py-2 border-b border-gray-100">
              <div className="flex items-center text-sm font-medium text-gray-900">
                <Info className="w-4 h-4 mr-2 text-gray-400" />
                Privacy for {field}
              </div>
            </div>
            
            {privacyOptions.map((option) => {
              const OptionIcon = option.icon
              const isSelected = option.value === value
              
              return (
                <button
                  key={option.value}
                  onClick={() => {
                    onChange(option.value)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors ${
                    isSelected ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-1.5 rounded-full ${option.color}`}>
                      <OptionIcon className="w-3 h-3" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-medium ${
                        isSelected ? 'text-blue-900' : 'text-gray-900'
                      }`}>
                        {option.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {option.description}
                      </div>
                    </div>
                    {isSelected && (
                      <div className="text-blue-600">
                        <div className="w-2 h-2 bg-current rounded-full"></div>
                      </div>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}