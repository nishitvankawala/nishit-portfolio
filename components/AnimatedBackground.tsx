'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create floating code symbols
    const codeSymbols = ['{ }', '< />', '( )', '[ ]', '=>', '&&', '||', '===', '!==', '...']
    const particles = []
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute text-xs font-mono text-white/10 pointer-events-none select-none'
      particle.textContent = codeSymbols[Math.floor(Math.random() * codeSymbols.length)]
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      containerRef.current.appendChild(particle)
      particles.push(particle)
    }

    // Create floating geometric shapes
    for (let i = 0; i < 20; i++) {
      const shape = document.createElement('div')
      const shapeType = Math.random()
      
      if (shapeType < 0.33) {
        shape.className = 'absolute w-2 h-2 border border-accent/20 rotate-45'
      } else if (shapeType < 0.66) {
        shape.className = 'absolute w-3 h-3 rounded-full bg-secondary/10'
      } else {
        shape.className = 'absolute w-2 h-2 bg-tertiary/15'
      }
      
      shape.style.left = Math.random() * 100 + '%'
      shape.style.top = Math.random() * 100 + '%'
      containerRef.current.appendChild(shape)
      particles.push(shape)
    }

    // Animate all particles
    particles.forEach((particle, index) => {
      // Vertical movement
      gsap.to(particle, {
        y: -window.innerHeight - 100,
        duration: 15 + Math.random() * 10,
        repeat: -1,
        ease: "none",
        delay: Math.random() * 10
      })

      // Horizontal drift
      gsap.to(particle, {
        x: (Math.random() - 0.5) * 200,
        duration: 8 + Math.random() * 8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: Math.random() * 5
      })

      // Opacity pulse
      gsap.to(particle, {
        opacity: Math.random() * 0.6 + 0.1,
        duration: 3 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      })

      // Rotation for shapes
      if (particle.classList.contains('rotate-45')) {
        gsap.to(particle, {
          rotation: 360,
          duration: 20 + Math.random() * 10,
          repeat: -1,
          ease: "none"
        })
      }
    })

    // Cleanup
    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      })
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Dynamic gradient orbs with enhanced animations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-accent/20 via-accent/8 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-radial from-secondary/18 via-secondary/6 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-radial from-tertiary/15 via-tertiary/5 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/6 right-1/3 w-64 h-64 bg-gradient-radial from-highlight/12 via-highlight/4 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }} />
      
      {/* Additional moving orbs */}
      <div className="absolute top-2/3 left-1/6 w-48 h-48 bg-gradient-radial from-accent/10 via-accent/3 to-transparent rounded-full blur-2xl animate-float" />
      <div className="absolute top-1/3 right-1/6 w-56 h-56 bg-gradient-radial from-secondary/12 via-secondary/4 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'float 25s ease-in-out infinite'
        }} />
      </div>
    </div>
  )
}