"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { Menu, X, User, LogOut } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">UV Express Driver</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link href="/dashboard" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                  Dashboard
                </Link>
                <Link href="/register-driver" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                  Vehicle Info
                </Link>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>{user.name}</span>
                  <button
                    onClick={logout}
                    className="hover:bg-blue-700 px-3 py-2 rounded-md flex items-center space-x-1"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <Link href="/login" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="block hover:bg-blue-800 px-3 py-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/register-driver"
                  className="block hover:bg-blue-800 px-3 py-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Vehicle Info
                </Link>
                <div className="px-3 py-2 text-sm">Logged in as: {user.name}</div>
                <button
                  onClick={() => {
                    logout()
                    setIsOpen(false)
                  }}
                  className="block w-full text-left hover:bg-blue-800 px-3 py-2 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="block hover:bg-blue-800 px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
