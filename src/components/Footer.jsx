import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Star, Globe, ArrowUp, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = [
    {
      title: "Navegação",
      links: [
        { name: "Início", action: () => scrollToSection('hero') },
        { name: "Sobre", action: () => scrollToSection('about') },
        { name: "Missão", action: () => scrollToSection('services') },
        { name: "Contato", action: () => scrollToSection('contact') }
      ]
    },
    {
      title: "Exploração",
      links: [
        { name: "Pesquisa Espacial", action: () => scrollToSection('services') },
        { name: "Tecnologia Avançada", action: () => scrollToSection('services') },
        { name: "Descobertas Cósmicas", action: () => scrollToSection('about') },
        { name: "Missões Futuras", action: () => scrollToSection('contact') }
      ]
    },
    {
      title: "Conexão",
      links: [
        { name: "Entre em Contato", action: () => scrollToSection('contact') },
        { name: "Colaborações", action: () => scrollToSection('contact') },
        { name: "Parcerias", action: () => scrollToSection('contact') },
        { name: "Comunidade", action: () => scrollToSection('contact') }
      ]
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-space-200 via-space-100 to-space-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: i * 0.02, duration: 2 }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star className="w-4 h-4 text-white" />
          </motion.div>
        ))}
      </div>

      {/* Gradiente de transição */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Seção principal do footer */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Logo e descrição */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 mb-6 cursor-pointer"
                onClick={scrollToTop}
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="p-3 rounded-full bg-gradient-to-br from-primary-400 to-cosmic-500"
                  >
                    <Rocket className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-1 -right-1"
                  >
                    <Star className="w-4 h-4 text-yellow-300" />
                  </motion.div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold font-cosmic tracking-wider text-white">
                    OSAIR
                  </span>
                  <span className="text-sm font-space tracking-widest text-primary-200">
                    FERREIRA
                  </span>
                </div>
              </motion.div>
              
              <p className="text-gray-300 font-space leading-relaxed mb-6">
                Explorando o infinito, transformando o futuro. Especialista em exploração 
                espacial e pesquisa científica avançada no cosmos.
              </p>
              
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 cursor-pointer"
                >
                  <Globe className="w-5 h-5 text-primary-300" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -180 }}
                  className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 cursor-pointer"
                >
                  <Star className="w-5 h-5 text-cosmic-300" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 cursor-pointer"
                >
                  <Rocket className="w-5 h-5 text-primary-300" />
                </motion.div>
              </div>
            </motion.div>

            {/* Links de navegação */}
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1, duration: 0.8 }}
                className="lg:col-span-1"
              >
                <h4 className="text-lg font-cosmic font-bold text-white mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.button
                        whileHover={{ x: 5, color: '#60a5fa' }}
                        onClick={link.action}
                        className="text-gray-300 hover:text-primary-300 font-space transition-all duration-300 text-left"
                      >
                        {link.name}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white/10"></div>

        {/* Seção de copyright */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-8 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0"
        >
          <div className="text-center lg:text-left">
            <p className="text-gray-300 font-space">
              © 2023 Osair Ferreira. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-300 font-space">
            <span>Criado com</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-400" fill="currentColor" />
            </motion.div>
            <a 
              href="https://papum.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-300 hover:text-primary-200 transition-colors font-semibold"
            >
              Papum
            </a>
          </div>
        </motion.div>
      </div>

      {/* Botão de voltar ao topo */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-primary-500 to-cosmic-600 text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:shadow-3xl transition-all duration-300"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}