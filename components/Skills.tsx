'use client'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, Globe, Server } from 'lucide-react'

const skillCategories = [
  {
    title: "Backend Frameworks",
    icon: Server,
    skills: ["Node.js", "Express.js", "NestJS", "Fastify", "Platformatic"],
    color: "from-green-500/20 to-green-600/5",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400"
  },
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["React.js", "Next.js", "Redux Toolkit", "JavaScript", "jQuery", "Angular"],
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400"
  },
  {
    title: "Database Systems",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "Redis"],
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400"
  },
  {
    title: "API & Integration",
    icon: Globe,
    skills: ["GraphQL", "React Query", "REST APIs"],
    color: "from-red-500/20 to-red-600/5",
    borderColor: "border-red-500/30",
    iconColor: "text-red-400"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS RDS", "Docker"],
    color: "from-orange-500/20 to-orange-600/5",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-400"
  }
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.h3
            className="text-4xl md:text-6xl font-black mb-8"
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
            Technical Skills
          </motion.h3>
          <motion.p 
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Technologies and frameworks I work with to build <span className="text-accent font-semibold">scalable applications</span> and 
            <span className="text-highlight font-semibold"> enterprise solutions</span>.
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className={`bg-gradient-to-br ${category.color} backdrop-blur-sm border ${category.borderColor} rounded-2xl p-6 transition-all duration-300`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg">
                  <category.icon size={20} className={category.iconColor} />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {category.title}
                </h4>
              </div>
              
              {/* Skills list - simple tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-2 bg-white/10 text-white text-sm font-medium rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            <span className="text-accent font-semibold">7+ years</span> of hands-on experience with these technologies, 
            building everything from small applications to enterprise-scale systems.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}