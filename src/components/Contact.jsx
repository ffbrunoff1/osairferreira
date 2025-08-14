import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Send, Star, Rocket, Globe, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulação de envio (não há email configurado)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Rocket,
      title: "Missão Espacial",
      description: "Explorando o infinito, transformando o futuro",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: "Alcance Cósmico",
      description: "Conectando mundos através do universo",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Star,
      title: "Visão Estelar",
      description: "Descobrindo as maravilhas do cosmos",
      color: "from-yellow-500 to-orange-600"
    }
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 2 }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star className="w-6 h-6 text-primary-500" />
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
            🌌 Conecte-se
          </motion.span>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-cosmic font-bold text-gray-900 mb-6">
            <span className="block">Junte-se à Nossa</span>
            <span className="bg-gradient-to-r from-primary-600 via-cosmic-600 to-primary-700 bg-clip-text text-transparent">
              Missão Estelar
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 font-space max-w-3xl mx-auto leading-relaxed">
            Conecte-se conosco e explore as possibilidades infinitas do universo. 
            Seja parte da próxima era da exploração espacial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-cosmic font-bold text-gray-900 mb-6">
                Descubra o Universo Conosco
              </h3>
              <p className="text-lg text-gray-600 font-space leading-relaxed mb-8">
                Estamos sempre prontos para embarcar em novas jornadas de descoberta. 
                Entre em contato e vamos explorar juntos os mistérios do cosmos infinito.
              </p>
            </div>

            {/* Cards de informação */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-cosmic font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 font-space">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chamada motivacional */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-gradient-to-r from-primary-500 to-cosmic-600 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Rocket className="w-8 h-8" />
                <h4 className="text-xl font-cosmic font-bold">
                  Vamos Além das Estrelas Juntos
                </h4>
              </div>
              <p className="font-space leading-relaxed opacity-90">
                Cada mensagem é o início de uma nova jornada de descoberta. 
                O universo infinito aguarda nossa exploração conjunta.
              </p>
            </motion.div>
          </motion.div>

          {/* Formulário de contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-100"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-cosmic-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-cosmic font-bold text-gray-900 mb-2">
                Envie uma Mensagem
              </h3>
              <p className="text-gray-600 font-space">
                Compartilhe suas ideias e visões sobre exploração espacial
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-space font-semibold text-gray-700 mb-2">
                  Nome Completo
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent font-space transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-space font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent font-space transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-space font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent font-space resize-none transition-all duration-300"
                  placeholder="Compartilhe suas ideias sobre exploração espacial..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-space font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-500 to-cosmic-600 hover:shadow-xl'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Status de envio */}
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-xl flex items-center gap-2 ${
                  submitStatus === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
              >
                {submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-space">Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-space">Erro ao enviar mensagem. Tente novamente.</span>
                  </>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Call to Action final */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-space-100 to-space-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl lg:text-4xl font-cosmic font-bold text-white mb-4">
              "Descubra o universo com Osair Ferreira"
            </h3>
            <p className="text-xl text-gray-300 font-space max-w-2xl mx-auto">
              Cada conversa é uma oportunidade de expandir nossos horizontes 
              e explorar juntos as maravilhas infinitas do cosmos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}