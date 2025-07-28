// API service placeholders for future backend integration

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export interface TripData {
  id: string
  startTime: string
  endTime?: string
  route: string
  passengerCount: number
  status: "active" | "completed" | "cancelled"
}

export interface VehicleInfo {
  plateNumber: string
  vehicleType: string
  capacity: number
  route: string
  operatingHours: {
    start: string
    end: string
  }
}

// Mock API functions - replace with actual API calls
export const apiService = {
  // Authentication
  async login(email: string, password: string): Promise<ApiResponse<any>> {
    // Mock implementation
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return {
      success: true,
      data: { token: "mock-token", user: { id: "1", email, name: "Driver Name" } },
    }
  },

  // Vehicle management
  async updateVehicleInfo(vehicleInfo: VehicleInfo): Promise<ApiResponse<VehicleInfo>> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return {
      success: true,
      data: vehicleInfo,
      message: "Vehicle information updated successfully",
    }
  },

  // Trip management
  async startTrip(routeId: string): Promise<ApiResponse<TripData>> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return {
      success: true,
      data: {
        id: "trip-" + Date.now(),
        startTime: new Date().toISOString(),
        route: "Cubao - Fairview",
        passengerCount: 0,
        status: "active",
      },
    }
  },

  async endTrip(tripId: string): Promise<ApiResponse<TripData>> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return {
      success: true,
      data: {
        id: tripId,
        startTime: new Date(Date.now() - 3600000).toISOString(),
        endTime: new Date().toISOString(),
        route: "Cubao - Fairview",
        passengerCount: 8,
        status: "completed",
      },
    }
  },

  // Location tracking
  async updateLocation(lat: number, lng: number): Promise<ApiResponse<any>> {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return {
      success: true,
      data: { lat, lng, timestamp: new Date().toISOString() },
    }
  },
}
