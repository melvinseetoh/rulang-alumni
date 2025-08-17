"use client"

import * as React from "react"
import { generateContactQRCode, type ContactInfo } from "../../lib/qr-generator"
import { Loader2, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactQRCodeProps {
  contact: ContactInfo
  size?: number
  className?: string
  showActions?: boolean
}

export function ContactQRCode({ 
  contact, 
  size = 200, 
  className = "",
  showActions = false 
}: ContactQRCodeProps) {
  const [qrCodeUrl, setQrCodeUrl] = React.useState<string | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  // Generate QR code when component mounts or contact changes
  React.useEffect(() => {
    const generateQR = async () => {
      setIsLoading(true)
      setError(null)
      
      try {
        const dataUrl = await generateContactQRCode(contact, { 
          width: size,
          margin: 2,
          color: {
            dark: '#FFFFFF', // White for dark backgrounds
            light: '#00000000' // Transparent background
          }
        })
        setQrCodeUrl(dataUrl)
      } catch (err) {
        setError('Failed to generate QR code')
        console.error('QR Code generation error:', err)
      } finally {
        setIsLoading(false)
      }
    }

    generateQR()
  }, [contact, size])

  const handleDownload = () => {
    if (!qrCodeUrl) return
    
    const link = document.createElement('a')
    link.href = qrCodeUrl
    link.download = `${contact.firstName}-${contact.lastName}-contact-qr.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleShare = async () => {
    if (!qrCodeUrl) return

    try {
      if (navigator.share && navigator.canShare && navigator.canShare()) {
        // Convert data URL to blob for native sharing
        const response = await fetch(qrCodeUrl)
        const blob = await response.blob()
        const file = new File([blob], `${contact.firstName}-${contact.lastName}-contact.png`, {
          type: 'image/png'
        })

        await navigator.share({
          title: `${contact.firstName} ${contact.lastName} - Contact Info`,
          text: 'Scan this QR code to add my contact information',
          files: [file]
        })
      } else {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(qrCodeUrl)
        alert('QR code image copied to clipboard!')
      }
    } catch (err) {
      console.error('Failed to share:', err)
      // Fallback to download
      handleDownload()
    }
  }

  if (isLoading) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 rounded ${className}`}
        style={{ width: size, height: size }}
      >
        <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
      </div>
    )
  }

  if (error || !qrCodeUrl) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 rounded text-gray-500 text-xs font-mono ${className}`}
        style={{ width: size, height: size }}
      >
        QR Error
      </div>
    )
  }

  return (
    <div className={`inline-block ${className}`}>
      <img
        src={qrCodeUrl}
        alt={`Contact QR code for ${contact.firstName} ${contact.lastName}`}
        width={size}
        height={size}
        className="rounded"
        style={{ width: size, height: size }}
      />
      
      {showActions && (
        <div className="flex justify-center space-x-2 mt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            className="text-xs"
          >
            <Download className="h-3 w-3 mr-1" />
            Download
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleShare}
            className="text-xs"
          >
            <Share2 className="h-3 w-3 mr-1" />
            Share
          </Button>
        </div>
      )}
    </div>
  )
}