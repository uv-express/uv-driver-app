"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Navigation, Users, Clock } from "lucide-react"

const mockRoutes = [
  { id: 1, name: "Cubao - Fairview", active: true, passengers: 12, eta: "15 min" },
  { id: 2, name: "Quezon Ave - SM North", active: false, passengers: 8, eta: "22 min" },
  { id: 3, name: "EDSA - Ortigas", active: false, passengers: 14, eta: "18 min" },
]

export default function MapPreview() {
  const [selectedRoute, setSelectedRoute] = useState(mockRoutes[0])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Map Visualization */}
      <div className="relative">
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 h-96 flex items-center justify-center border-2 border-dashed border-blue-200">
          <div className="text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <div className="text-xl font-semibold text-gray-700 mb-2">Interactive Route Map</div>
            <div className="text-gray-600">Real-time GPS tracking and route optimization</div>
          </div>
        </div>

        {/* Floating Route Markers */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg"
        >
          📍 Cubao Terminal
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg"
        >
          🏁 Fairview Terminal
        </motion.div>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg"
        >
          🚐 Your Vehicle
        </motion.div>
      </div>

      {/* Route Information */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Route Tracking</h3>
          <p className="text-gray-600 mb-6">
            Monitor your routes in real-time, track passenger capacity, and optimize your trips for maximum efficiency.
          </p>
        </div>

        <div className="space-y-4">
          {mockRoutes.map((route) => (
            <motion.div
              key={route.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedRoute(route)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedRoute.id === route.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${route.active ? "bg-green-500" : "bg-gray-400"}`} />
                  <div>
                    <div className="font-semibold text-gray-900">{route.name}</div>
                    <div className="text-sm text-gray-600 flex items-center space-x-4">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {route.passengers}/14
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {route.eta}
                      </span>
                    </div>
                  </div>
                </div>
                <Navigation className="h-5 w-5 text-blue-600" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl">
          <div className="flex items-center space-x-3 mb-2">
            <MapPin className="h-6 w-6" />
            <span className="font-semibold">Current Route: {selectedRoute.name}</span>
          </div>
          <div className="text-blue-100">
            {selectedRoute.passengers} passengers • ETA: {selectedRoute.eta}
          </div>
        </div>
      </div>
    </div>
  )
}
