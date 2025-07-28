"use client"

import { useEffect, useState } from "react"

// Mock map component since we can't install react-leaflet in this environment
export default function MapComponent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    )
  }

  return (
    <div className="h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
      <div className="text-center">
        <div className="text-lg font-semibold text-gray-700 mb-2">📍 Interactive Map Placeholder</div>
        <div className="text-sm text-gray-600">Manila, Philippines (14.5995° N, 120.9842° E)</div>
        <div className="text-xs text-gray-500 mt-2">Leaflet map will be rendered here</div>
      </div>
    </div>
  )
}
