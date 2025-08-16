import QRCode from 'qrcode'

export interface ContactInfo {
  firstName: string
  lastName: string
  email: string
  phone?: string
  memberSince: string
  memberId: string
  organization?: string
  graduationYear?: number
}

/**
 * Generates vCard format string for contact information
 * vCard 3.0 format is widely supported by mobile devices
 */
export function generateVCard(contact: ContactInfo): string {
  const {
    firstName,
    lastName,
    email,
    phone,
    memberSince,
    memberId,
    organization = "Rulang Primary School Alumni Association",
    graduationYear
  } = contact

  // Format member since date
  const memberSinceYear = new Date(memberSince).getFullYear()
  
  // Create notes with member information
  const notes = [
    `Rulang Alumni Member since ${memberSinceYear}`,
    `Member ID: ${memberId}`,
    graduationYear ? `Class of ${graduationYear}` : null
  ].filter(Boolean).join('\\n')

  // Generate vCard in version 3.0 format
  const vCard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${firstName} ${lastName}`,
    `N:${lastName};${firstName};;;`,
    `EMAIL:${email}`,
    phone ? `TEL:${phone}` : null,
    `ORG:${organization}`,
    `NOTE:${notes}`,
    'END:VCARD'
  ].filter(Boolean).join('\n')

  return vCard
}

/**
 * Generates QR code as data URL for the given vCard data
 */
export async function generateContactQRCode(
  contact: ContactInfo,
  options: {
    width?: number
    margin?: number
    color?: {
      dark?: string
      light?: string
    }
  } = {}
): Promise<string> {
  const vCard = generateVCard(contact)
  
  const qrOptions = {
    width: options.width || 200,
    margin: options.margin || 2,
    color: {
      dark: options.color?.dark || '#000000',
      light: options.color?.light || '#FFFFFF'
    },
    errorCorrectionLevel: 'M' as const // Medium error correction for better scanning
  }

  try {
    const dataUrl = await QRCode.toDataURL(vCard, qrOptions)
    return dataUrl
  } catch (error) {
    console.error('Failed to generate QR code:', error)
    throw new Error('Failed to generate QR code')
  }
}

/**
 * Generates QR code as SVG string for the given vCard data
 */
export async function generateContactQRCodeSVG(
  contact: ContactInfo,
  options: {
    width?: number
    margin?: number
    color?: {
      dark?: string
      light?: string
    }
  } = {}
): Promise<string> {
  const vCard = generateVCard(contact)
  
  const qrOptions = {
    width: options.width || 200,
    margin: options.margin || 2,
    color: {
      dark: options.color?.dark || '#000000',
      light: options.color?.light || '#FFFFFF'
    },
    errorCorrectionLevel: 'M' as const
  }

  try {
    const svg = await QRCode.toString(vCard, { 
      ...qrOptions,
      type: 'svg'
    })
    return svg
  } catch (error) {
    console.error('Failed to generate QR code SVG:', error)
    throw new Error('Failed to generate QR code SVG')
  }
}

/**
 * Preview function to show what the vCard contains (for debugging)
 */
export function previewVCard(contact: ContactInfo): string {
  return generateVCard(contact)
}