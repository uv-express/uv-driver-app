"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Miguel Santos",
    role: "UV Express Driver",
    image: "/placeholder.svg?height=80&width=80&text=MS",
    content:
      "This app has revolutionized how I manage my daily routes. The trip tracking feature helps me optimize my schedule and earn more.",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    role: "FX Driver",
    image: "/placeholder.svg?height=80&width=80&text=MR",
    content:
      "The passenger management system is incredible. I can now track available seats in real-time and never miss a booking opportunity.",
    rating: 5,
  },
  {
    id: 3,
    name: "Carlos Mendoza",
    role: "UV Express Operator",
    image: "/placeholder.svg?height=80&width=80&text=CM",
    content:
      "As a fleet operator, this platform helps me monitor all my drivers efficiently. The dashboard provides all the insights I need.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ana Dela Cruz",
    role: "UV Express Driver",
    image: "/placeholder.svg?height=80&width=80&text=AD",
    content: "The route optimization feature has helped me reduce fuel costs by 20%. This app pays for itself!",
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonials[currentIndex].name}</div>
                  <div className="text-blue-600">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
