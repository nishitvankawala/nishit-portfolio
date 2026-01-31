
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
      <section className="min-h-screen flex items-center px-6 md:px-12 pt-20 pb-32 relative overflow-hidden">
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
            className="text-center space-y-8"
          >
            {/* Name with typing effect */}
            <motion.div
              initial={{opacity:0}} 
              animate={{opacity:1}}
              transition={{delay:0.3}}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-black leading-tight"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                style={{
                  background: "linear-gradient(90deg, #ffffff, #DC2626, #3B82F6, #6B7280, #ffffff)",
                  backgroundSize: "400% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Nishit Vankawala
              </motion.h1>
            </motion.div>
            
            {/* Enhanced subtitle */}
            <motion.div
              initial={{opacity:0,y:30}} 
              animate={{opacity:1,y:0}}
              transition={{delay:0.6, duration:0.8}}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-gray-200">
                Senior Full Stack Engineer
              </h2>
              
              {/* Core MERN Stack */}
              <div className="space-y-4">
                <p className="text-gray-400 text-sm font-mono">Core Stack</p>
                <div className="flex flex-wrap justify-center gap-3 text-sm font-mono">
                  {['Node.js', 'React.js', 'JavaScript', 'MongoDB', 'MySQL', 'PostgreSQL'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="px-4 py-2 bg-accent/20 text-accent border border-accent/40 rounded-full hover:bg-accent/30 transition-colors font-semibold"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                {/* Extended Skills */}
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm font-mono">Also Expert In</p>
                  <div className="flex flex-wrap justify-center gap-2 text-xs font-mono">
                    {[
                      'TypeScript', 'Next.js', 'NestJS', 'Fastify', 
                      'Platformatic', 'Prisma', 'GraphQL', 'Redis', 
                      'AWS', 'Socket.io', 'Docker', 'Angular'
                    ].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 + index * 0.05 }}
                        className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/30 rounded-full hover:bg-secondary/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Enhanced description */}
            <motion.div
              initial={{opacity:0,y:30}} 
              animate={{opacity:1,y:0}}
              transition={{delay:1, duration:0.8}}
              className="max-w-4xl mx-auto space-y-6"
            >
              <p className="text-gray-300 leading-relaxed text-xl">
                <span className="text-accent font-semibold">7+ years</span> of expertise in building 
                <span className="text-secondary font-semibold"> scalable web applications</span> and 
                <span className="text-highlight font-semibold"> enterprise solutions</span>. 
                Specialized in full-stack development, team leadership, and delivering high-performance applications 
                that serve millions of users.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm max-w-3xl mx-auto">
                {[
                  { label: "Full Stack Development", color: "text-blue-500", bgColor: "bg-blue-500" },
                  { label: "Team Leadership", color: "text-gray-500", bgColor: "bg-gray-500" },
                  { label: "System Architecture", color: "text-slate-600", bgColor: "bg-slate-600" },
                  { label: "Performance Optimization", color: "text-gray-400", bgColor: "bg-gray-400" }
                ].map((item, index) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <motion.div 
                      className={`w-2 h-2 ${item.bgColor} rounded-full flex-shrink-0`}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                    <span className="text-gray-400 whitespace-nowrap">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced action buttons */}
            <motion.div 
              initial={{opacity:0,y:30}} 
              animate={{opacity:1,y:0}}
              transition={{delay:1.4, duration:0.8}}
              className="flex flex-wrap justify-center gap-3 pt-8"
            >
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 font-semibold text-base shadow-lg glow-blue"
              >
                <Download size={18} />
                <span className="hidden sm:inline">Download Resume</span>
                <span className="sm:hidden">Resume</span>
              </motion.button>
              
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLinkedIn}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 font-semibold text-base shadow-lg"
              >
                <Linkedin size={18} />
                <span className="hidden sm:inline">LinkedIn</span>
                <span className="sm:hidden">Profile</span>
              </motion.button>
              
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 15px 30px rgba(220, 38, 38, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactClick}
                className="bg-highlight hover:bg-highlight/90 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 font-semibold text-base shadow-lg glow-red"
              >
                <Mail size={18} />
                <span className="hidden sm:inline">Let's Talk</span>
                <span className="sm:hidden">Contact</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
