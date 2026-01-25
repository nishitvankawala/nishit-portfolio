'use client'
import { motion } from 'framer-motion'

interface SectionSeparatorProps {
  variant?: 'default' | 'gradient' | 'dots'
}

export default function SectionSeparator({ variant = 'default' }: SectionSeparatorProps) {
  if (variant === 'gradient') {
    return (
      <div className="w-full py-16 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        />
      </div>
    )
  }

  if (variant === 'dots') {
    return (
      <div className="w-full py-16 flex justify-center">
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="w-2 h-2 bg-accent/40 rounded-full"
            />
          ))}
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div className="w-full py-12 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
      />
    </div>
  )
}