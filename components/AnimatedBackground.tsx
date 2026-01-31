'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create floating code symbols - Enhanced for mobile
    const codeSymbols = ['{ }', '< />', '( )', '[ ]', '=>', '&&', '||', '===', '!==', '...', 'fn', 'var', 'let', 'const']
    const particles = []
    
    for (let i = 0; i < 35; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute text-xs md:text-sm font-mono text-white/15 md:text-white/10 pointer-events-none select-none'
      particle.textContent = codeSymbols[Math.floor(Math.random() * codeSymbols.length)]
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      containerRef.current.appendChild(particle)
      particles.push(particle)
    }

    // Create floating geometric shapes - Enhanced for mobile
    for (let i = 0; i < 25; i++) {
      const shape = document.createElement('div')
      const shapeType = Math.random()
      
      if (shapeType < 0.25) {
        shape.className = 'absolute w-2 h-2 md:w-3 md:h-3 border border-accent/25 md:border-accent/20 rotate-45'
      } else if (shapeType < 0.5) {
        shape.className = 'absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-secondary/15 md:bg-secondary/10'
      } else if (shapeType < 0.75) {
        shape.className = 'absolute w-2 h-2 md:w-3 md:h-3 bg-tertiary/20 md:bg-tertiary/15'
      } else {
        shape.className = 'absolute w-2 h-2 md:w-3 md:h-3 bg-highlight/20 md:bg-highlight/15 rounded-full'
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
      {/* Dynamic gradient orbs with enhanced animations - More visible on mobile */}
      <div className="absolute top-1/4 left-1/4 w-80 md:w-96 h-80 md:h-96 bg-gradient-radial from-accent/30 via-accent/12 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-3/4 right-1/4 w-72 md:w-80 h-72 md:h-80 bg-gradient-radial from-secondary/25 via-secondary/10 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 md:w-72 h-64 md:h-72 bg-gradient-radial from-tertiary/20 via-tertiary/8 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/6 right-1/3 w-56 md:w-64 h-56 md:h-64 bg-gradient-radial from-highlight/18 via-highlight/6 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }} />
      
      {/* Additional moving orbs - Enhanced for mobile */}
      <div className="absolute top-2/3 left-1/6 w-40 md:w-48 h-40 md:h-48 bg-gradient-radial from-accent/15 via-accent/5 to-transparent rounded-full blur-2xl animate-float" />
      <div className="absolute top-1/3 right-1/6 w-48 md:w-56 h-48 md:h-56 bg-gradient-radial from-secondary/18 via-secondary/6 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* New red accent orbs for mobile visibility */}
      <div className="absolute top-1/5 left-1/2 w-36 md:w-44 h-36 md:h-44 bg-gradient-radial from-highlight/20 via-highlight/6 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-32 md:w-40 h-32 md:h-40 bg-gradient-radial from-red-500/15 via-red-500/4 to-transparent rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '5s' }} />
      
      {/* Enhanced animated grid pattern - More visible on mobile */}
      <div className="absolute inset-0 opacity-[0.05] md:opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px),
            linear-gradient(rgba(220,38,38,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220,38,38,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 50px 50px, 100px 100px, 100px 100px',
          animation: 'float 25s ease-in-out infinite'
        }} />
      </div>
    </div>
  )
}