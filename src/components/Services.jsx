import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Star, Telescope, Globe, Orbit, Zap, Target, Compass, Lightbulb, ArrowRight } from 'lucide-react'

export default function Services() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const missions = [
    {
      icon: Telescope,
      title: "Exploração Profunda",
      description: "Missões especializadas para descoberta de novos sistemas planetários e análise de fenômenos cósmicos únicos no universo distante.",
      features: ["Navegação Interestelar", "Análise Espectral", "Mapeamento Cósmico"],
      color: "from-blue-500 to-cyan-600",
      glow: "blue"
    },
    {
      icon: Globe,
      title: "Pesquisa Planetária",
      description: "Estudos avançados de mundos habitáveis, análise atmosférica e investigação de condições para vida extraterrestre.",
      features: ["Análise Atmosférica", "Bioassinaturas", "Habitabilidade"],
      color: "from-green-500 to-teal-600",
      glow: "green"
    },
    {
      icon: Orbit,
      title: "Tecnologia Espacial",
      description: "Desenvolvimento de sistemas avançados de propulsão e navegação para missões de longa duração no espaço profundo.",
      features: ["Propulsão Avançada", "Sistemas Autônomos", "Comunicação Quântica"],
      color: "from-purple-500 to-pink-600",
      glow: "purple"
    },
    {
      icon: Star,
      title: "Cartografia Estelar",
      description: "Mapeamento detalhado de regiões inexploradas da galáxia, criando rotas seguras para futuras expedições espaciais.",
      features: ["Navegação Galáctica", "Rotas Seguras", "Dados Precisos"],
      color: "from-yellow-500 to-orange-600",
      glow: "yellow"
    },
    {
      icon: Zap,
      title: "Energia Cósmica",
      description: "Pesquisa e aproveitamento de fontes de energia renovável no espaço, incluindo radiação solar e campos magnéticos.",
      features: ["Coleta Solar", "Campos Magnéticos", "Eficiência Máxima"],
      color: "from-indigo-500 to-purple-600",
      glow: "indigo"
    },
    {
      icon: Target,
      title: "Missões Direcionadas",
      description: "Expedições focadas em objetivos específicos, desde coleta de amostras até estabelecimento de bases de pesquisa.",
      features: ["Objetivos Claros", "Precisão Absoluta", "Resultados Garantidos"],
      color: "from-red-500 to-pink-600",
      glow: "red"
    }
  ]

  const highlights = [
    {
      icon: Compass,
      title: "Navegação Precisa",
      value: "100%",
      description: "Precisão em navegação interestelar"
    },
    {
      icon: Lightbulb,
      title: "Inovação Contínua",
      value: "∞",
      description: "Desenvolvimento de novas tecnologias"
    },
    {
      icon: Rocket,
      title: "Missões Ativas",
      value: "24/7",
      description: "Operações contínuas no cosmos"
    }
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-br from-space-200 via-space-100 to-space-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.05, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 2 }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star className="w-6 h-6 text-white" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-cosmic-500 to-primary-600 text-white rounded-full text-sm font-space font-semibold mb-6"
          >
            🌌 Nossa Missão
          </motion.span>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-cosmic font-bold text-white mb-6">
            <span className="block">Explorando o</span>
            <span className="bg-gradient-to-r from-primary-300 via-cosmic-400 to-primary-500 bg-clip-text text-transparent">
              Cosmos Infinito
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 font-space max-w-3xl mx-auto leading-relaxed">
            Cada missão é uma jornada única rumo ao desconhecido, expandindo os horizontes 
            da humanidade e descobrindo os segredos mais profundos do universo.
          </p>
        </motion.div>

        {/* Grid de missões */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group glass-effect"
            >
              <div className="flex flex-col h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${mission.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <mission.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-cosmic font-bold text-white mb-4">
                  {mission.title}
                </h4>
                
                <p className="text-gray-300 font-space leading-relaxed mb-6 flex-grow">
                  {mission.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {mission.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span className="text-sm text-gray-300 font-space">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className={`w-full mt-auto px-6 py-3 bg-gradient-to-r ${mission.color} text-white rounded-full font-space font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}
                >
                  Explorar
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Seção de destaques */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-600/20 to-cosmic-600/20 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-cosmic font-bold text-white mb-4">
              Excelência em Cada Missão
            </h3>
            <p className="text-gray-300 font-space text-lg max-w-2xl mx-auto">
              Nossa dedicação à exploração espacial resulta em conquistas extraordinárias 
              que expandem os limites do conhecimento humano.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <highlight.icon className="w-10 h-10 text-primary-300" />
                </div>
                <div className="text-4xl font-cosmic font-bold text-white mb-2">
                  {highlight.value}
                </div>
                <div className="text-lg font-cosmic font-semibold text-primary-300 mb-2">
                  {highlight.title}
                </div>
                <div className="text-gray-300 font-space text-sm">
                  {highlight.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl lg:text-4xl font-cosmic font-bold text-white mb-6">
            Vamos Além das Estrelas Juntos
          </h3>
          <p className="text-xl text-gray-300 font-space max-w-2xl mx-auto mb-8">
            Junte-se à nossa missão estelar e faça parte da próxima era da exploração espacial. 
            O universo infinito aguarda nossa descoberta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-cosmic-600 text-white rounded-full font-space font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-2xl transition-all duration-300"
            >
              Conectar-se Agora
              <Rocket className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-space font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Descobrir Mais
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}