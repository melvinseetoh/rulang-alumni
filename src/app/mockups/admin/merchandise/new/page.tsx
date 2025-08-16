"use client"

import EditMerchandisePage from '../[id]/edit/page'

export default function NewMerchandisePage() {
  // Reuse the edit page component with 'new' as the ID
  return <EditMerchandisePage params={{ id: 'new' }} />
}