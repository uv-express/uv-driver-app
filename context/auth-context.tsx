"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface User {
  id: string
  name: string
  email: string
  vehicleInfo?: {
    plateNumber: string
    vehicleType: string
    capacity: number
  }
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = localStorage.getItem("uv-express-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    // Mock login - in real app, this would call an API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const mockUser: User = {
      id: "1",
      name: "Juan Dela Cruz",
      email: email,
      vehicleInfo: {
        plateNumber: "ABC-1234",
        vehicleType: "UV Express Van",
        capacity: 14,
      },
    }

    setUser(mockUser)
    localStorage.setItem("uv-express-user", JSON.stringify(mockUser))
    setIsLoading(false)
    router.push("/dashboard")
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("uv-express-user")
    router.push("/login")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
