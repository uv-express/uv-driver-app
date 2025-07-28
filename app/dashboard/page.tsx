"use client"

import { useState } from "react"
import ProtectedRoute from "@/components/auth/protected-route"
import Sidebar from "@/components/layout/sidebar"
import DynamicMap from "@/components/map/dynamic-map"
import { useAuth } from "@/context/auth-context"
import { Play, Square, Users, MapPin, Clock } from "lucide-react"

export default function DashboardPage() {
  const [isTripActive, setIsTripActive] = useState(false)
  const [availableSeats, setAvailableSeats] = useState(12)
  const { user } = useAuth()

  const handleTripToggle = () => {
    setIsTripActive(!isTripActive)
    // Mock trip functionality
    if (!isTripActive) {
      alert("Trip started! Safe travels!")
    } else {
      alert("Trip ended. Thank you for using UV Express Driver App!")
    }
  }

  return (
    <ProtectedRoute>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 md:ml-64">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
              <p className="text-gray-600">Manage your UV Express operations from your dashboard</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Users className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Available Seats</dt>
                        <dd className="text-lg font-medium text-gray-900">
                          {availableSeats} / {user?.vehicleInfo?.capacity || 14}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Current Route</dt>
                        <dd className="text-lg font-medium text-gray-900">Cubao - Fairview</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Trip Status</dt>
                        <dd className={`text-lg font-medium ${isTripActive ? "text-green-600" : "text-gray-900"}`}>
                          {isTripActive ? "Active" : "Inactive"}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                        🚐
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Vehicle</dt>
                        <dd className="text-lg font-medium text-gray-900">
                          {user?.vehicleInfo?.plateNumber || "Not Set"}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Map Section */}
              <div className="lg:col-span-2">
                <div className="bg-white shadow rounded-lg p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Route Map</h2>
                  <DynamicMap />
                </div>
              </div>

              {/* Control Panel */}
              <div className="space-y-6">
                {/* Trip Control */}
                <div className="bg-white shadow rounded-lg p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Trip Control</h2>
                  <button
                    onClick={handleTripToggle}
                    className={`w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white ${
                      isTripActive ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      isTripActive ? "focus:ring-red-500" : "focus:ring-green-500"
                    }`}
                  >
                    {isTripActive ? (
                      <>
                        <Square className="h-5 w-5 mr-2" />
                        End Trip
                      </>
                    ) : (
                      <>
                        <Play className="h-5 w-5 mr-2" />
                        Start Trip
                      </>
                    )}
                  </button>
                </div>

                {/* Quick Actions */}
                <div className="bg-white shadow rounded-lg p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
                  <div className="space-y-3">
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md border">
                      Update Passenger Count
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md border">
                      Report Issue
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md border">
                      Emergency Contact
                    </button>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white shadow rounded-lg p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">10:30 AM</span> - Trip completed to Fairview
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">09:45 AM</span> - 8 passengers boarded
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">09:15 AM</span> - Trip started from Cubao
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
