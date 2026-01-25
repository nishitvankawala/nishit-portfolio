'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const journeyData = [
  {
    year: "April 2023 - Present",
    company: "TrooTech Business Solutions",
    role: "Senior Software Developer",
    description: "Leading enterprise ERP development and AI-powered solutions with comprehensive business automation",
    projects: [
      {
        name: "Enterprise ERP System",
        tech: "React.js, Fastify, Platformatic, MySQL, MongoDB, Redis",
        description: "Led end-to-end development of enterprise ERP modules (Accounting, Sales, Procurement, Manufacturing, Inventory, HRMS) with comprehensive business management solution",
        impact: "40% reduction in manual intervention",
        metrics: ["Cross-module integration", "Real-time analytics", "Automated workflows"]
      },
      {
        name: "AI-Powered Knowledge Base", 
        tech: "NestJS, React.js, Prisma ORM, PostgreSQL, GPT-4",
        description: "Architected AI-powered customer support system leveraging enterprise knowledge base and embeddings with browser extension for instant contextual queries",
        impact: "60% faster ticket resolution",
        metrics: ["GPT-4 integration", "Document ingestion", "Browser extension"]
      },
      {
        name: "Social Media Monetization Platform",
        tech: "React.js, Node.js, Redux Toolkit, Sequelize ORM",
        description: "Built and scaled monetization-focused social platform for content creators with subscriptions, private media sharing, and engagement features",
        impact: "50% increase in user engagement",
        metrics: ["Payment gateway integration", "Subscription management", "Private media sharing"]
      }
    ],
    color: "from-accent/20 to-accent/5",
    borderColor: "border-accent/30"
  },
  {
    year: "Nov 2022 - Jan 2023",
    company: "Gateway Group of Companies",
    role: "Senior Software Developer", 
    description: "Microservice-based automotive platform development with focus on inventory management",
    projects: [
      {
        name: "Automotive Parts Tracking Platform",
        tech: "Node.js, React, Microservices Architecture",
        description: "Contributed to microservice-based automotive platform for multi-location parts tracking, improving inventory visibility and operational efficiency",
        impact: "Enhanced inventory visibility",
        metrics: ["Multi-location tracking", "Operational efficiency", "Microservices architecture"]
      }
    ],
    color: "from-secondary/20 to-secondary/5",
    borderColor: "border-secondary/30"
  },
  {
    year: "March 2022 - Sep 2022",
    company: "Doyenhub Software Solutions",
    role: "Senior Software Developer",
    description: "Location-based service platform and operational dashboard development",
    projects: [
      {
        name: "Handyman Hiring Platform",
        tech: "React.js, Node.js, Location-based Services",
        description: "Designed and delivered location-based handyman hiring platform with quotations, payments, and reviews system",
        impact: "Streamlined service booking",
        metrics: ["Location-based matching", "Payment integration", "Review system"]
      },
      {
        name: "TSG Process Monitoring Dashboard",
        tech: "AWS Lambda, React.js, Real-time Analytics",
        description: "Developed real-time operational dashboards to track process metrics, resource utilization, and training status with serverless architecture",
        impact: "Real-time process tracking",
        metrics: ["Serverless dashboard", "Resource allocation", "Training metrics"]
      }
    ],
    color: "from-tertiary/20 to-tertiary/5",
    borderColor: "border-tertiary/30"
  },
  {
    year: "Feb 2021 - Feb 2022", 
    company: "Agami Tech Pvt. Ltd.",
    role: "Senior Software Developer",
    description: "Omnichannel customer care platform and analytics dashboard development",
    projects: [
      {
        name: "Omnichannel Customer Care Platform",
        tech: "React.js, Node.js, RASA ML Framework, MongoDB",
        description: "Built omnichannel customer care platform integrating chat and voice bots for multi-channel customer interactions using RASA ML framework",
        impact: "45% improvement in customer interaction efficiency",
        metrics: ["Multi-channel integration", "Chat & voice bots", "RASA ML framework"]
      },
      {
        name: "Customer Satisfaction Analytics",
        tech: "React.js, Node.js, MongoDB, am4charts",
        description: "Developed analytics dashboards to measure customer satisfaction across voice, email, SMS, webchat, and social platforms for agent training insights",
        impact: "Enhanced agent training insights",
        metrics: ["Multi-channel analytics", "Customer satisfaction tracking", "Agent performance metrics"]
      }
    ],
    color: "from-highlight/20 to-highlight/5",
    borderColor: "border-highlight/30"
  },
  {
    year: "March 2018 - Feb 2021",
    company: "Yanolja Cloud Solutions (eZee Technosys)",
    role: "Software Developer",
    description: "Hospitality software development with legacy system modernization and API consolidation",
    projects: [
      {
        name: "Hotel Property Management System",
        tech: "React.js, Node.js, Express, MongoDB, Socket.io, Redis",
        description: "Led migration from legacy PHP templating to React-based architecture for Hotel PMS, ensuring scalability and UI responsiveness",
        impact: "60% faster page load times",
        metrics: ["Legacy migration", "Performance optimization", "UI responsiveness"]
      },
      {
        name: "Open API for Hospitality Industry",
        tech: "Core PHP, RESTful Architecture, API Gateway",
        description: "Consolidated multiple hospitality APIs (Property Management, Reservations, Housekeeping, OTA integrations) into unified, standardized Open API ecosystem",
        impact: "Reduced integration complexity",
        metrics: ["API consolidation", "Unified authentication", "Developer experience"]
      }
    ],
    color: "from-neutral/20 to-neutral/5",
    borderColor: "border-neutral/30"
  }
]

export default function ProfessionalJourney() {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !timelineRef.current) return

    const ctx = gsap.context(() => {
      // Enhanced timeline line animation
      gsap.fromTo('.timeline-line', 
        { height: 0, opacity: 0 },
        {
          height: '100%',
          opacity: 1,
          duration: 2.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1.5
          }
        }
      )

      // Journey items with enhanced animations
      gsap.fromTo('.journey-item',
        { 
          opacity: 0, 
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Project cards with 3D effects
      gsap.fromTo('.project-card',
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.project-card',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Enhanced floating animation for timeline dots
      gsap.to('.timeline-dot', {
        y: -10,
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.5
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="journey" className="px-6 md:px-12 py-20 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Enhanced header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h3 
            className="text-5xl md:text-7xl font-black mb-8"
            style={{
              background: "linear-gradient(90deg, #ffffff, #3B82F6, #6B7280, #ffffff)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            Professional Journey
          </motion.h3>
          <motion.p 
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            My career progression from <span className="text-accent font-semibold">Software Developer to Senior Software Engineer</span>, 
            building solutions across <span className="text-secondary font-semibold">hospitality</span>, 
            <span className="text-tertiary font-semibold">enterprise ERP</span>, and 
            <span className="text-highlight font-semibold">customer care platforms</span>. 
            Each role contributed to my expertise in the MERN stack ecosystem.
          </motion.p>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          {/* Enhanced timeline line with gradient */}
          <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-accent via-secondary to-tertiary timeline-line transform -translate-x-1/2 rounded-full shadow-lg"></div>

          <div className="space-y-20">
            {journeyData.map((item, index) => (
              <div key={item.company} className="journey-item relative">
                
                {/* Enhanced timeline dot */}
                <motion.div 
                  className={`timeline-dot absolute left-1/2 w-6 h-6 bg-gradient-to-br ${item.color} rounded-full border-3 ${item.borderColor} transform -translate-x-1/2 z-10 shadow-xl`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content - Centered layout */}
                <div className="max-w-4xl mx-auto">
                  <motion.div 
                    className={`bg-gradient-to-br ${item.color} backdrop-blur-xl border-2 ${item.borderColor} rounded-3xl p-10 hover:scale-[1.02] transition-all duration-700 hover:shadow-2xl relative overflow-hidden group`}
                    whileHover={{ y: -5 }}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8 relative z-10">
                      <motion.div 
                        className="text-accent font-mono text-lg mb-3 font-bold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {item.year}
                      </motion.div>
                      <motion.h4 
                        className="text-3xl font-black text-white mb-3"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {item.company}
                      </motion.h4>
                      <motion.p 
                        className="text-xl text-gray-200 mb-4 font-semibold"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {item.role}
                      </motion.p>
                      <motion.p 
                        className="text-gray-300 text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {item.description}
                      </motion.p>
                    </div>

                    {/* Enhanced projects */}
                    <div className="space-y-6 relative z-10">
                      <h5 className="text-xl font-bold text-white mb-6 text-center">
                        Key Projects
                      </h5>
                      
                      <div className={`grid gap-6 ${item.projects.length === 1 ? 'md:grid-cols-1 justify-items-center max-w-md mx-auto' : item.projects.length === 3 ? 'md:grid-cols-2 max-w-4xl mx-auto [&>*:nth-child(3)]:md:col-start-1 [&>*:nth-child(3)]:md:col-end-3 [&>*:nth-child(3)]:justify-self-center [&>*:nth-child(3)]:max-w-md' : 'md:grid-cols-2'}`}>
                        {item.projects.map((project, projectIndex) => (
                          <motion.div 
                            key={project.name} 
                            className="project-card bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/40 hover:border-accent/40 transition-all duration-500 group/card flex flex-col h-full"
                            whileHover={{ scale: 1.02, y: -3 }}
                          >
                            <div className="flex items-start justify-between mb-4">
                              <h6 className="text-lg font-bold text-white group-hover/card:text-accent transition-colors">
                                {project.name}
                              </h6>
                            </div>
                            
                            <p className="text-sm text-gray-400 font-mono mb-4 bg-gray-800/50 p-3 rounded-lg">
                              {project.tech}
                            </p>
                            
                            <p className="text-gray-300 leading-relaxed mb-4 text-sm flex-grow">
                              {project.description}
                            </p>

                            {/* Metrics */}
                            <div className="grid grid-cols-1 gap-2 mb-4">
                              {project.metrics.map((metric, metricIndex) => (
                                <motion.div
                                  key={metric}
                                  className="bg-gray-800/40 p-2 rounded-lg text-center border border-gray-700/30 text-xs"
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <span className="text-gray-400">{metric}</span>
                                </motion.div>
                              ))}
                            </div>
                            
                            <div className="text-center mt-auto">
                              <span className="text-accent font-bold text-sm">
                                Impact: {project.impact}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}