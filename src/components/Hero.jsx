import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Star, Orbit, Telescope, Globe, Zap, ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const floatingElements = [
    { Icon: Star, delay: 0, duration: 6, className: 'top-20 left-20' },
    { Icon: Orbit, delay: 1, duration: 8, className: 'top-32 right-32' },
    { Icon: Telescope, delay: 2, duration: 7, className: 'bottom-40 left-16' },
    { Icon: Globe, delay: 0.5, duration: 9, className: 'bottom-20 right-20' },
    { Icon: Zap, delay: 1.5, duration: 5, className: 'top-40 left-1/3' },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space-gradient">
      {/* Elementos flutuantes animados */}
      {floatingElements.map(({ Icon, delay, duration, className }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 100 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1], 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            delay,
            duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute hidden lg:block ${className}`}
        >
          <Icon className="w-8 h-8 text-primary-300" />
        </motion.div>
      ))}

      {/* Gradiente de fundo dinâmico */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-200/20 via-space-100/10 to-cosmic-900/30"></div>
      
      {/* Efeito de estrelas */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-cosmic-gradient text-white rounded-full text-sm font-space font-medium mb-4">
                ✨ Explorando o Infinito
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-cosmic font-bold text-white mb-6 leading-tight">
                <span className="block">OSAIR</span>
                <span className="block bg-gradient-to-r from-primary-300 via-cosmic-400 to-primary-500 bg-clip-text text-transparent">
                  FERREIRA
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl text-gray-200 font-space mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Especialista em <span className="text-primary-300 font-semibold">exploração espacial</span> e 
              <span className="text-cosmic-300 font-semibold"> pesquisa científica avançada</span> no cosmos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(14, 165, 233, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-cosmic-600 text-white rounded-full font-space font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-2xl transition-all duration-300"
              >
                Descobrir Mais
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-space font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Conectar-se
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {[
                { label: "Missões", value: "∞" },
                { label: "Exploração", value: "Cosmos" },
                { label: "Pesquisa", value: "Avançada" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-cosmic font-bold text-primary-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-space">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Área Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative"
          >
            <div className="relative flex items-center justify-center">
              {/* Círculos orbitais */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute w-96 h-96 border border-primary-300/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-80 h-80 border border-cosmic-400/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 border border-primary-500/30 rounded-full"
              />

              {/* Centro com astronauta */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-48 h-48 bg-gradient-to-br from-primary-500 to-cosmic-600 rounded-full flex items-center justify-center shadow-2xl cosmic-glow"
              >
                <Rocket className="w-20 h-20 text-white" />
              </motion.div>

              {/* Planetas orbitais */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className={`absolute w-4 h-4 bg-gradient-to-br ${
                    i % 3 === 0 ? 'from-primary-400 to-primary-600' :
                    i % 3 === 1 ? 'from-cosmic-400 to-cosmic-600' :
                    'from-yellow-400 to-orange-500'
                  } rounded-full`}
                  style={{
                    transformOrigin: `${100 + i * 30}px`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
            className="text-white/80 hover:text-white transition-colors"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-space">Explorar</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                />
              </div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}