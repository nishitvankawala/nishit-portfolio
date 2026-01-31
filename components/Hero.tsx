
'use client'
import { motion } from 'framer-motion'
import { Download, Linkedin, Mail, Code, Database, Server, Smartphone } from 'lucide-react'

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Nishit-Vankawala-2026.pdf'
    link.download = 'Nishit-Vankawala-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/nishit-vankawala-7240bb3a', '_blank')
  }

  const handleContactClick = () => {
    // Scroll to contact form section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const techIcons = [
    { icon: Code, color: 'text-accent', delay: 0 },
    { icon: Database, color: 'text-secondary', delay: 0.5 },
    { icon: Server, color: 'text-tertiary', delay: 1 },
    { icon: Smartphone, color: 'text-gray-400', delay: 1.5 },
  ]

  return (
    <div className="relative z-10" id="hero">
      {/* Main Hero Section */}
      <section className="min-h-screen flex items-center px-6 md:px-12 pt-20 pb-16 relative overflow-hidden">
        {/* Floating tech icons */}
        <div className="absolute inset-0 pointer-events-none">
          {techIcons.map((tech, index) => (
            <motion.div
              key={index}
              className={`absolute ${tech.color} opacity-5`}
              style={{
                left: `${20 + index * 20}%`,
                top: `${30 + index * 15}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + index * 2,
                repeat: Infinity,
                delay: tech.delay,
                ease: "easeInOut"
              }}
            >
              <tech.icon size={40 + index * 10} />
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto w-full">
          {/* Centered Content */}
          <motion.div 
            initial={{opacity:0,y:50}} 
            animate={{opacity:1,y:0}} 
            transition={{duration:1, ease: "easeOut"}}
            className="text-center space-y-6"
          >
            {/* Name with typing effect */}
            <motion.div
              initial={{opacity:0}} 
              animate={{opacity:1}}
              transition={{delay:0.3}}
            >
              <motion.h1 
                className="text-4xl md:text-7xl font-black leading-tight whitespace-nowrap"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                style={{
                  background: "linear-gradient(90deg, #ffffff, #DC2626, #F97316, #EAB308, #16A34A, #ffffff)",
                  backgroundSize: "400% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Nishit Vankawala
              </motion.h1>
            </motion.div>
            
            {/* Enhanced subtitle with seniority indicators */}
            <motion.div
              initial={{opacity:0,y:30}} 
              animate={{opacity:1,y:0}}
              transition={{delay:0.6, duration:0.8}}
              className="space-y-4"
            >
              <div className="space-y-0">
                <h2 className="text-xl md:text-3xl font-medium text-gray-400 -mt-4">
                  Senior Full Stack Engineer
                </h2>
              </div>
              
              {/* Small separator */}
              <div className="flex justify-center my-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"></div>
              </div>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4 text-sm md:text-base mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-highlight font-bold">7.5+ Years Experience</span>
                <span className="text-accent font-bold">Enterprise Architecture</span>
                <span className="text-secondary font-bold">Team Leadership</span>
              </motion.div>
              
              {/* Senior-Level Technology Stack - Compact & Complete */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-gray-300 text-base font-semibold">Core Technologies</p>
                  <div className="flex flex-wrap justify-center gap-3 text-sm font-mono">
                    {[
                      { tech: 'Node.js', years: '7+', color: 'bg-green-500/20 text-green-400 border-green-500/40' },
                      { tech: 'React.js', years: '6+', color: 'bg-orange-500/20 text-orange-400 border-orange-500/40' },
                      { tech: 'TypeScript', years: '5+', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40' },
                      { tech: 'MongoDB', years: '6+', color: 'bg-green-600/20 text-green-300 border-green-600/40' },
                      { tech: 'PostgreSQL', years: '5+', color: 'bg-red-500/20 text-red-400 border-red-500/40' },
                      { tech: 'AWS', years: '4+', color: 'bg-orange-500/20 text-orange-400 border-orange-500/40' }
                    ].map((item, index) => (
                      <motion.div
                        key={item.tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`px-4 py-2 ${item.color} border rounded-xl hover:shadow-lg transition-all duration-300 font-semibold`}
                      >
                        <div className="text-center">
                          <div className="font-bold">{item.tech}</div>
                          <div className="text-xs opacity-80">{item.years} years</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Also Expert In - Secondary Skills */}
                <div className="space-y-3">
                  <p className="text-gray-300 text-base font-semibold">Also Expert In</p>
                  <div className="flex flex-wrap justify-center gap-2 text-xs font-mono">
                    {[
                      'Next.js', 'NestJS', 'Fastify', 'Platformatic', 
                      'Prisma', 'GraphQL', 'Redis', 'Socket.io', 
                      'Docker', 'Angular', 'MySQL', 'Express.js'
                    ].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.8 + index * 0.05 }}
                        className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/30 rounded-full hover:bg-secondary/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Leadership & Architecture Skills - Compact */}
                <div className="space-y-3">
                  <p className="text-gray-300 text-base font-semibold">Leadership & Architecture</p>
                  <div className="flex flex-wrap justify-center gap-2 text-xs">
                    {[
                      'Microservices Architecture', 'Team Leadership', 'System Design', 
                      'Performance Optimization', 'DevOps & CI/CD', 'Code Reviews & Mentoring'
                    ].map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.2 + index * 0.05 }}
                        className="px-3 py-2 bg-highlight/10 text-highlight border border-highlight/30 rounded-lg hover:bg-highlight/20 transition-colors font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Enhanced senior-level description */}
            <motion.div
              initial={{opacity:0,y:30}} 
              animate={{opacity:1,y:0}}
              transition={{delay:2, duration:0.8}}
              className="max-w-5xl mx-auto space-y-6"
            >
              <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/30">
                <p className="text-gray-200 leading-relaxed text-lg md:text-xl text-center">
                  <span className="text-highlight font-bold">7.5+ years</span> of architecting and delivering 
                  <span className="text-accent font-semibold"> enterprise-grade applications</span> across 
                  <span className="text-secondary font-semibold"> hospitality, ERP, and customer care platforms</span>. 
                  Led cross-functional teams, designed scalable microservices architectures, and specialized in 
                  <span className="text-green-400 font-semibold"> full-stack MERN development</span> with proven expertise in 
                  system optimization and team leadership.
                </p>
              </div>
              
              {/* Authentic Senior Achievements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                {[
                  { 
                    title: "Enterprise Leadership", 
                    desc: "Led development teams across TrooTech, Gateway Group, Doyenhub, Agami Tech, and Yanolja Cloud Solutions",
                    icon: "👥",
                    color: "border-accent/30 bg-accent/5"
                  },
                  { 
                    title: "System Architecture", 
                    desc: "Designed ERP modules, AI-powered platforms, microservices, and omnichannel customer care systems",
                    icon: "🏗️",
                    color: "border-highlight/30 bg-highlight/5"
                  },
                  { 
                    title: "Technical Excellence", 
                    desc: "MERN stack expertise, React migration leadership, API consolidation, and real-time dashboard development",
                    icon: "⚡",
                    color: "border-green-400/30 bg-green-400/5"
                  }
                ].map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    className={`p-4 rounded-xl border ${achievement.color} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 + index * 0.2 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <h4 className="font-bold text-white mb-2">{achievement.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{achievement.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Compact mobile-friendly action buttons */}
            <motion.div 
              initial={{opacity:0,y:30}} 
              animate={{opacity:1,y:0}}
              transition={{delay:2.8, duration:0.8}}
              className="flex flex-wrap justify-center gap-2 md:gap-3 pt-6"
            >
              <motion.button 
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 8px 16px rgba(249, 115, 22, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadResume}
                className="bg-accent hover:bg-accent/90 text-white px-4 py-2 md:px-5 md:py-3 rounded-lg flex items-center gap-2 transition-all duration-300 font-semibold text-sm md:text-base shadow-md glow-orange"
              >
                <Download size={16} />
                <span className="hidden sm:inline">Resume</span>
                <span className="sm:hidden">CV</span>
              </motion.button>
              
              <motion.button 
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 8px 16px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLinkedIn}
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 md:px-5 md:py-3 rounded-lg flex items-center gap-2 transition-all duration-300 font-semibold text-sm md:text-base shadow-md"
              >
                <Linkedin size={16} />
                <span className="hidden sm:inline">LinkedIn</span>
                <span className="sm:hidden">Profile</span>
              </motion.button>
              
              <motion.button 
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 8px 16px rgba(220, 38, 38, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContactClick}
                className="bg-highlight hover:bg-highlight/90 text-white px-4 py-2 md:px-5 md:py-3 rounded-lg flex items-center gap-2 transition-all duration-300 font-semibold text-sm md:text-base shadow-md glow-red"
              >
                <Mail size={16} />
                <span className="hidden sm:inline">Contact</span>
                <span className="sm:hidden">Talk</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
