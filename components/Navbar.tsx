
'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['hero', 'journey', 'projects', 'architecture', 'experience', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: 'journey', label: 'Journey', icon: '🚀' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' },
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        solid 
          ? 'bg-base/95 backdrop-blur-xl shadow-2xl border-b border-accent/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo with enhanced styling */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <span className="font-bold text-xl bg-gradient-to-r from-accent via-secondary to-tertiary bg-clip-text text-transparent animate-gradient-x">
            Nishit Vankawala
          </span>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-secondary opacity-60"></div>
        </motion.div>

        {/* Navigation items with enhanced animations */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(220, 38, 38, 0.1)'
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeSection === item.id
                  ? 'text-highlight bg-highlight/10 border border-highlight/30'
                  : 'text-gray-300 hover:text-white hover:bg-highlight/5'
              }`}
            >
              <span className="text-xs">{item.icon}</span>
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile menu indicator */}
        <motion.div 
          className="md:hidden"
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
            <div className="w-4 h-0.5 bg-accent"></div>
            <div className="w-4 h-0.5 bg-secondary"></div>
            <div className="w-4 h-0.5 bg-tertiary"></div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
