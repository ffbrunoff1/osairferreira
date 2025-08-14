import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Menu, X, Star, Orbit } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const menuItems = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Missão', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`p-2 rounded-full ${
                  isScrolled 
                    ? 'bg-gradient-to-br from-primary-500 to-cosmic-600' 
                    : 'bg-gradient-to-br from-primary-400 to-cosmic-500'
                }`}
              >
                <Rocket className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
              </motion.div>
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1"
              >
                <Star className={`w-3 h-3 ${isScrolled ? 'text-cosmic-500' : 'text-yellow-300'}`} />
              </motion.div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold font-cosmic tracking-wider ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                OSAIR
              </span>
              <span className={`text-sm font-space tracking-widest ${
                isScrolled ? 'text-primary-600' : 'text-primary-200'
              }`}>
                FERREIRA
              </span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-space font-medium transition-all duration-300 hover:text-primary-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-2 rounded-full font-space font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-primary-500 to-cosmic-600 text-white hover:shadow-lg'
                  : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
              }`}
            >
              Conectar
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg rounded-lg mt-2 shadow-lg"
        >
          <div className="py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 font-space font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 font-space font-medium bg-gradient-to-r from-primary-500 to-cosmic-600 text-white rounded-lg mx-4 mt-2 hover:shadow-lg transition-all"
            >
              Conectar
            </button>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}