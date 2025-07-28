"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Smartphone,
  Star,
  Phone,
  Mail,
  MapIcon,
} from "lucide-react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/scroll-reveal"
import TestimonialsCarousel from "@/components/sections/testimonials-carousel"
import MapPreview from "@/components/sections/map-preview"

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Your Earnings",
    description: "Optimize routes and maximize passenger capacity to boost your daily income by up to 30%.",
  },
  {
    icon: MapPin,
    title: "Smart Route Planning",
    description: "AI-powered route optimization helps you avoid traffic and find the most efficient paths.",
  },
  {
    icon: Users,
    title: "Passenger Management",
    description: "Track available seats, manage bookings, and never miss a passenger pickup again.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Built-in safety features including emergency contacts and real-time location sharing.",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Monitor your working hours, break times, and optimize your schedule for better work-life balance.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Access all features on your smartphone with our responsive, mobile-first design.",
  },
]

const steps = [
  {
    number: "01",
    title: "Register Your Vehicle",
    description:
      "Sign up and add your UV Express vehicle details, including plate number, capacity, and preferred routes.",
    icon: "🚐",
  },
  {
    number: "02",
    title: "Start Managing Trips",
    description: "Use our intuitive dashboard to start trips, track passengers, and monitor your route in real-time.",
    icon: "📱",
  },
  {
    number: "03",
    title: "Optimize & Earn More",
    description: "Leverage our analytics and route optimization to increase your daily earnings and efficiency.",
    icon: "💰",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <ScrollReveal>
              <motion.h1
                className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Drive Smarter with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                  UV Express Pro
                </span>
              </motion.h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
                The complete digital solution for UV Express drivers. Manage routes, track passengers, optimize
                earnings, and grow your transportation business with cutting-edge technology.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/login"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Driving Smart
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/register-driver"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white rounded-full border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Register Vehicle
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Free to start
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  24/7 support
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started in three simple steps and transform your UV Express business today
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="relative text-center">
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl shadow-lg">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-blue-600 shadow-md">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full">
                      <div className="flex items-center justify-center">
                        <ArrowRight className="h-6 w-6 text-gray-300" />
                      </div>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Driver Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Drivers Choose Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of drivers who have transformed their business with our comprehensive platform
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Interactive Map Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Route Management</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience real-time route tracking, passenger management, and intelligent trip optimization
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <MapPreview />
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drivers Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from real drivers who have transformed their business with our platform
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TestimonialsCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Join Now Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join over 10,000 drivers who have increased their earnings by an average of 30% using our platform.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/login"
                className="group inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/register-driver"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
              >
                Register Vehicle
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-100">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                4.9/5 Driver Rating
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                10,000+ Active Drivers
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                30% Average Earnings Increase
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-4">UV Express Driver</h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  Empowering UV Express drivers with smart technology to optimize routes, manage passengers, and
                  increase earnings.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>📘
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>🐦
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>📷
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/login" className="text-gray-400 hover:text-white transition-colors">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link href="/register-driver" className="text-gray-400 hover:text-white transition-colors">
                      Register Vehicle
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-400">
                    <Phone className="h-4 w-4 mr-2" />
                    +63 912 345 6789
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Mail className="h-4 w-4 mr-2" />
                    support@uvexpress.ph
                  </li>
                  <li className="flex items-center text-gray-400">
                    <MapIcon className="h-4 w-4 mr-2" />
                    Manila, Philippines
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 UV Express Driver WebApp. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  )
}
