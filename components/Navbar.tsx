
'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const handleMobileMenuClick = (itemId: string) => {
    console.log('Mobile menu clicked:', itemId) // Debug log
    setMobileMenuOpen(false)
    
    // Small delay to ensure menu closes first
    setTimeout(() => {
      const element = document.getElementById(itemId)
      console.log('Element found:', element) // Debug log
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        console.error('Element not found:', itemId)
      }
    }, 100)
  }

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
        {/* Logo with enhanced styling - clickable to go to hero */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            const heroSection = document.getElementById('hero')
            if (heroSection) {
              heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }}
          className="relative cursor-pointer"
        >
          <span className="font-bold text-lg md:text-xl bg-gradient-to-r from-red-600 via-gray-500 to-orange-500 bg-clip-text text-transparent animate-gradient-x whitespace-nowrap">
            Nishit Vankawala
          </span>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 opacity-60"></div>
        </motion.button>

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
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                boxShadow: '0 4px 20px rgba(249, 115, 22, 0.3)'
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

        {/* Mobile menu button */}
        <motion.button 
          className="md:hidden p-2"
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
            <motion.div 
              className="w-4 h-0.5 bg-accent"
              animate={mobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="w-4 h-0.5 bg-secondary"
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="w-4 h-0.5 bg-tertiary"
              animate={mobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-base/95 via-red-900/10 to-base/95 backdrop-blur-xl border-t border-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log('Button clicked:', item.id) // Debug log
                    handleMobileMenuClick(item.id)
                  }}
                  className={`w-full text-left px-4 py-4 rounded-lg text-base font-medium transition-all duration-300 flex items-center gap-3 active:bg-highlight/20 ${
                    activeSection === item.id
                      ? 'text-highlight bg-highlight/10 border border-highlight/30'
                      : 'text-gray-300 hover:text-white hover:bg-highlight/5'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
