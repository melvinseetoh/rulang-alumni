"use client"

import * as React from "react"

interface AvatarProps {
  src?: string
  alt?: string
  name: string
  size?: number
  className?: string
}

export function Avatar({ src, alt, name, size = 40, className = "" }: AvatarProps) {
  const [imageError, setImageError] = React.useState(false)
  const [imageLoaded, setImageLoaded] = React.useState(false)
  
  // Generate initials from name
  const getInitials = (fullName: string) => {
    const names = fullName.trim().split(' ')
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase()
    }
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase()
  }
  
  // Generate consistent background color based on name
  const getBackgroundColor = (fullName: string) => {
    const colors = [
      'bg-red-500',
      'bg-orange-500', 
      'bg-amber-500',
      'bg-yellow-500',
      'bg-lime-500',
      'bg-green-500',
      'bg-emerald-500',
      'bg-teal-500',
      'bg-cyan-500',
      'bg-sky-500',
      'bg-blue-500',
      'bg-indigo-500',
      'bg-violet-500',
      'bg-purple-500',
      'bg-fuchsia-500',
      'bg-pink-500',
      'bg-rose-500'
    ]
    
    // Simple hash function to consistently assign colors
    let hash = 0
    for (let i = 0; i < fullName.length; i++) {
      hash = fullName.charCodeAt(i) + ((hash << 5) - hash)
    }
    const index = Math.abs(hash) % colors.length
    return colors[index]
  }

  const initials = getInitials(name)
  const bgColor = getBackgroundColor(name)
  
  const handleImageError = () => {
    setImageError(true)
  }
  
  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  // Show placeholder if no src, image failed to load, or image hasn't loaded yet
  const showPlaceholder = !src || imageError || !imageLoaded

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Profile Image */}
      {src && !imageError && (
        <img
          src={src}
          alt={alt || name}
          className={`w-full h-full object-cover transition-opacity duration-200 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      )}
      
      {/* Placeholder with Initials */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-white font-semibold transition-opacity duration-200 ${bgColor} ${
          showPlaceholder ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          fontSize: size * 0.4, // Scale font size with avatar size
          lineHeight: 1
        }}
      >
        {initials}
      </div>
    </div>
  )
}