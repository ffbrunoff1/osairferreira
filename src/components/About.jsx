import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Star, Globe, Telescope, Orbit, Zap, Target, Award, Book } from 'lucide-react'

export default function About() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const achievements = [
    {
      icon: Rocket,
      title: "Exploração Espacial",
      description: "Pioneiro em missões de exploração no espaço profundo, com expertise em navegação interestelar e descoberta de novos mundos.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Star,
      title: "Pesquisa Científica",
      description: "Desenvolvimento de tecnologias avançadas para estudo de fenômenos cósmicos e análise de sistemas planetários distantes.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Globe,
      title: "Descobertas Cósmicas",
      description: "Responsável pela identificação de planetas habitáveis e contribuições significativas para a astrofísica moderna.",
      color: "from-green-400 to-teal-500"
    }
  ]

  const stats = [
    { icon: Target, value: "∞", label: "Missões Espaciais" },
    { icon: Award, value: "Cosmos", label: "Área de Pesquisa" },
    { icon: Book, value: "Futuro", label: "Foco Temporal" },
    { icon: Telescope, value: "Infinito", label: "Alcance" }
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 2 }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star className="w-8 h-8 text-primary-500" />
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
            className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-cosmic-600 text-white rounded-full text-sm font-space font-semibold mb-6"
          >
            🚀 Sobre o Explorador
          </motion.span>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-cosmic font-bold text-gray-900 mb-6">
            <span className="block">Transformando o</span>
            <span className="bg-gradient-to-r from-primary-600 via-cosmic-600 to-primary-700 bg-clip-text text-transparent">
              Futuro Espacial
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 font-space max-w-3xl mx-auto leading-relaxed">
            Uma jornada dedicada à exploração dos mistérios do universo, descobrindo novos horizontes 
            e expandindo os limites do conhecimento humano no cosmos infinito.
          </p>
        </motion.div>

        {/* Conteúdo principal em grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Área visual interativa */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative flex items-center justify-center h-96">
              {/* Órbitas animadas */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-80 h-80 border-2 border-primary-200 rounded-full opacity-30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 border-2 border-cosmic-300 rounded-full opacity-40"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 border-2 border-primary-400 rounded-full opacity-50"
              />

              {/* Centro astronauta */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-32 h-32 bg-gradient-to-br from-primary-500 to-cosmic-600 rounded-full flex items-center justify-center shadow-2xl cursor-pointer group"
              >
                <Rocket className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-primary-400 to-cosmic-500 rounded-full opacity-20"
                />
              </motion.div>

              {/* Elementos orbitais */}
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 20 + index * 10, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute"
                  style={{
                    transformOrigin: `${120 + index * 40}px`,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer`}
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Conteúdo textual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-cosmic font-bold text-gray-900 mb-4">
                Uma Visão Além das Estrelas
              </h3>
              <p className="text-lg text-gray-600 font-space leading-relaxed mb-6">
                Osair Ferreira representa a nova geração de exploradores espaciais, combinando 
                conhecimento científico avançado com uma paixão infinita pela descoberta. 
                Sua missão transcende as barreiras convencionais da exploração espacial.
              </p>
              <p className="text-lg text-gray-600 font-space leading-relaxed">
                Através de pesquisas inovadoras e expedições pioneiras, Osair continua 
                expandindo nossa compreensão do universo, inspirando futuras gerações 
                a olhar além do horizonte terrestre.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h4 className="text-xl font-cosmic font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary-500" />
                Missão Atual
              </h4>
              <p className="text-gray-600 font-space leading-relaxed">
                "Vamos além das estrelas juntos" - Desenvolvendo tecnologias revolucionárias 
                para tornar a exploração espacial acessível à humanidade, criando pontes 
                entre a Terra e o cosmos infinito.
              </p>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-cosmic-600 text-white rounded-full font-space font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explorar Missão
            </motion.button>
          </motion.div>
        </div>

        {/* Cards de conquistas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-cosmic font-bold text-gray-900 mb-4">
                {achievement.title}
              </h4>
              <p className="text-gray-600 font-space leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-500 to-cosmic-600 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-cosmic font-bold text-white mb-4">
              Conquistas Cósmicas
            </h3>
            <p className="text-primary-100 font-space text-lg">
              Números que refletem nossa jornada pelo infinito
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-cosmic font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-100 font-space text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}