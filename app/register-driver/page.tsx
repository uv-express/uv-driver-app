"use client"

import type React from "react"

import { useState } from "react"
import ProtectedRoute from "@/components/auth/protected-route"
import Sidebar from "@/components/layout/sidebar"

export default function RegisterDriverPage() {
  const [formData, setFormData] = useState({
    plateNumber: "",
    vehicleType: "UV Express Van",
    capacity: 14,
    route: "",
    operatingHours: {
      start: "06:00",
      end: "20:00",
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock form submission
    alert("Vehicle information saved successfully!")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (name.includes(".")) {
      const [parent, child] = name.split(".")
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof typeof prev] as any),
          [child]: value,
        },
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: name === "capacity" ? Number.parseInt(value) : value,
      }))
    }
  }

  return (
    <ProtectedRoute>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 md:ml-64">
          <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Vehicle Registration & Route Setup</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="plateNumber" className="block text-sm font-medium text-gray-700">
                        Plate Number
                      </label>
                      <input
                        type="text"
                        name="plateNumber"
                        id="plateNumber"
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                        placeholder="ABC-1234"
                        value={formData.plateNumber}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
                        Vehicle Type
                      </label>
                      <select
                        name="vehicleType"
                        id="vehicleType"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                        value={formData.vehicleType}
                        onChange={handleInputChange}
                      >
                        <option value="UV Express Van">UV Express Van</option>
                        <option value="UV Express Bus">UV Express Bus</option>
                        <option value="FX">FX</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">
                        Passenger Capacity
                      </label>
                      <input
                        type="number"
                        name="capacity"
                        id="capacity"
                        min="1"
                        max="50"
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                        value={formData.capacity}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="route" className="block text-sm font-medium text-gray-700">
                        Primary Route
                      </label>
                      <input
                        type="text"
                        name="route"
                        id="route"
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                        placeholder="e.g., Cubao - Fairview"
                        value={formData.route}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="operatingHours.start" className="block text-sm font-medium text-gray-700">
                        Operating Hours - Start
                      </label>
                      <input
                        type="time"
                        name="operatingHours.start"
                        id="operatingHours.start"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                        value={formData.operatingHours.start}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="operatingHours.end" className="block text-sm font-medium text-gray-700">
                        Operating Hours - End
                      </label>
                      <input
                        type="time"
                        name="operatingHours.end"
                        id="operatingHours.end"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"
                        value={formData.operatingHours.end}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Save Vehicle Information
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
