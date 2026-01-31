'use client'
import { motion } from 'framer-motion'

const architectureCategories = [
  {
    title: "Backend Architecture",
    items: [
      { text: "Microservices with NestJS & Fastify", icon: "🏗️", description: "Scalable service-oriented architecture" },
      { text: "RESTful & GraphQL APIs", icon: "🌐", description: "Flexible data querying and manipulation" },
      { text: "Redis caching & message queues", icon: "⚡", description: "High-performance data layer" },
      { text: "Database optimization (SQL/NoSQL)", icon: "🗄️", description: "PostgreSQL, MongoDB, MySQL expertise" }
    ]
  },
  {
    title: "Frontend Engineering", 
    items: [
      { text: "React.js with Next.js SSR", icon: "⚛️", description: "Modern component-based architecture" },
      { text: "State management (Redux Toolkit)", icon: "🔄", description: "Predictable application state" },
      { text: "Real-time UI with Socket.io", icon: "📡", description: "Live data synchronization" },
      { text: "Responsive design systems", icon: "📱", description: "Mobile-first approach" }
    ]
  },
  {
    title: "DevOps & Infrastructure",
    items: [
      { text: "Docker containerization", icon: "🐳", description: "Consistent deployment environments" },
      { text: "AWS cloud services", icon: "☁️", description: "EC2, S3, Lambda, RDS integration" },
      { text: "CI/CD pipeline automation", icon: "🔄", description: "Automated testing and deployment" },
      { text: "Performance monitoring", icon: "📊", description: "Application health tracking" }
    ]
  },
  {
    title: "AI & Advanced Features",
    items: [
      { text: "GPT-4 embeddings integration", icon: "🤖", description: "Intelligent knowledge systems" },
      { text: "AI-powered development (Cursor, Kiro)", icon: "🚀", description: "Enhanced productivity with AI coding assistants" },
      { text: "Workflow automation engine", icon: "⚙️", description: "Business process optimization" },
      { text: "Cross-module ERP integrations", icon: "🔗", description: "Unified business operations" }
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export default function Architecture() {
  return (
    <section id="architecture" className="px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h3 
            className="text-3xl md:text-6xl font-black mb-8 whitespace-nowrap"
            style={{
              background: "linear-gradient(90deg, #ffffff, #DC2626, #3B82F6, #6B7280, #ffffff)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            Architecture & Engineering
          </motion.h3>
          <motion.p 
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Architectural decisions and engineering practices that power <span className="text-accent font-semibold">enterprise applications</span>. 
            From <span className="text-secondary font-semibold"> microservices design</span> to 
            <span className="text-highlight font-semibold"> AI integration patterns</span> - 
            the technical foundation behind successful software delivery.
          </motion.p>
        </motion.div>

        {/* Architecture categories */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {architectureCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="space-y-6"
            >
              {/* Category header */}
              <motion.div 
                className="text-center mb-8"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-2xl font-bold text-white mb-3 flex items-center justify-center gap-3">
                  <span className="text-accent font-mono text-lg">&lt;</span>
                  {category.title}
                  <span className="text-accent font-mono text-lg">/&gt;</span>
                </h4>
              </motion.div>

              {/* Category items */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.text}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      x: 8,
                      transition: { duration: 0.3 }
                    }}
                    className="group p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-accent/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="text-xl flex-shrink-0 mt-1"
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity,
                          delay: itemIndex * 0.3
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.h5 
                          className="text-white font-semibold mb-2 group-hover:text-accent transition-colors"
                        >
                          {item.text}
                        </motion.h5>
                        <motion.p 
                          className="text-gray-400 text-sm leading-relaxed"
                        >
                          {item.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20 pt-12 border-t border-gray-700/30"
        >
          <motion.p 
            className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed"
          >
            Combining <span className="text-accent font-semibold">modern development practices</span> with 
            <span className="text-secondary font-semibold"> proven architectural patterns</span> to deliver 
            robust, scalable solutions that meet enterprise requirements and drive <span className="text-highlight font-semibold">innovation</span>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}