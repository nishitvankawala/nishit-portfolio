'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, User, Mail, Building, MessageSquare } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  role: string
  inquiryType: string
  salaryRange: string
  workType: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    inquiryType: '',
    salaryRange: '',
    workType: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const roles = [
    'HR/Recruiter',
    'Hiring Manager',
    'Tech Lead/CTO',
    'Engineering Manager',
    'Fellow Developer',
    'Startup Founder',
    'Other'
  ]

  const inquiryTypes = [
    'Job Opportunity',
    'Interview Request',
    'Portfolio Feedback',
    'Technical Discussion',
    'Collaboration Opportunity',
    'Freelance Project',
    'Other'
  ]

  const salaryRanges = [
    '$60k - $80k',
    '$80k - $100k',
    '$100k - $120k',
    '$120k - $150k',
    '$150k+',
    'Prefer not to say'
  ]

  const workTypes = [
    'Remote',
    'Hybrid',
    'On-site',
    'Open to discuss'
  ]

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.role) newErrors.role = 'Role is required'
    if (!formData.inquiryType) newErrors.inquiryType = 'Inquiry type is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // Create email content
      const emailSubject = `Portfolio Inquiry: ${formData.inquiryType} - ${formData.name}`
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Role: ${formData.role}
Inquiry Type: ${formData.inquiryType}
${formData.salaryRange ? `Salary Range: ${formData.salaryRange}` : ''}
${formData.workType ? `Work Type: ${formData.workType}` : ''}

Message:
${formData.message}

---
Sent from Nishit's Portfolio Contact Form
      `.trim()

      // For now, open email client with pre-filled content
      const mailtoLink = `mailto:nishitvankawala@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      window.open(mailtoLink, '_blank')
      
      setSubmitStatus('success')
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          inquiryType: '',
          salaryRange: '',
          workType: '',
          message: ''
        })
        setSubmitStatus('idle')
      }, 3000)
      
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <section id="contact" className="px-6 md:px-12 py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
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
            Let's Connect
          </motion.h3>
          <motion.p 
            className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Interested in my work? Looking to hire a senior MERN stack developer? 
            I'd love to hear from you about opportunities, feedback, or collaboration.
          </motion.p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-accent/10 to-secondary/5 backdrop-blur-xl border-2 border-accent/20 rounded-3xl p-6 md:p-8 lg:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <User size={16} />
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-accent'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <Mail size={16} />
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-accent'
                  }`}
                  placeholder="your.email@company.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Company and Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <Building size={16} />
                  Company/Organization *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.company ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-accent'
                  }`}
                  placeholder="Your company name"
                />
                {errors.company && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.company}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Role *
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.role ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-accent'
                  }`}
                >
                  <option value="">Select your role</option>
                  {roles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
                {errors.role && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.role}
                  </p>
                )}
              </div>
            </div>

            {/* Row 3: Inquiry Type and Salary Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Inquiry Type *
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.inquiryType ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-accent'
                  }`}
                >
                  <option value="">What's this about?</option>
                  {inquiryTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.inquiryType && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.inquiryType}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Salary Range (Optional)
                </label>
                <select
                  value={formData.salaryRange}
                  onChange={(e) => handleInputChange('salaryRange', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                >
                  <option value="">Select range</option>
                  {salaryRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Work Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Work Type Preference (Optional)
              </label>
              <select
                value={formData.workType}
                onChange={(e) => handleInputChange('workType', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
              >
                <option value="">Select work type</option>
                {workTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                <MessageSquare size={16} />
                Message *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={5}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                  errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-accent'
                }`}
                placeholder="Tell me about the opportunity, your feedback, or what you'd like to discuss..."
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  submitStatus === 'success'
                    ? 'bg-green-600 text-white'
                    : submitStatus === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-accent hover:bg-accent/90 text-white shadow-lg glow-blue'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent Successfully!
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <AlertCircle size={20} />
                    Please try again
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">Or reach out directly:</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(220, 38, 38, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('mailto:nishitvankawala@gmail.com', '_blank')}
              className="bg-highlight hover:bg-highlight/90 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl flex items-center gap-2 transition-all duration-300 font-semibold text-sm md:text-base shadow-lg glow-red"
            >
              <Mail size={16} className="md:hidden text-white" />
              <Mail size={18} className="hidden md:block text-white" />
              <span className="hidden sm:inline text-white">nishitvankawala@gmail.com</span>
              <span className="sm:hidden text-white">Email</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
              onClick={() => window.open('https://www.linkedin.com/in/nishit-vankawala-7240bb3a', '_blank')}
              className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-500 text-white border border-blue-500 hover:border-blue-400 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm md:text-base shadow-xl font-medium"
            >
              <span className="hidden sm:inline">LinkedIn Message</span>
              <span className="sm:hidden">LinkedIn</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}