import { motion } from "motion/react";
import { Apple, Play, Quote, Menu, X } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-signal-red selection:text-white">
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-ink/80 backdrop-blur-md">
        <div className="text-2xl font-bold headline-focus tracking-tighter text-on-surface">
          RETURN
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          <a href="#" className="text-[11px] uppercase tracking-[0.2em] font-medium text-on-surface border-b-2 border-signal-red pb-1">
            APP
          </a>
          <a href="#" className="text-[11px] uppercase tracking-[0.2em] font-medium text-on-surface/60 hover:text-on-surface transition-colors">
            Philosophy
          </a>
          <a href="#" className="text-[11px] uppercase tracking-[0.2em] font-medium text-on-surface/60 hover:text-on-surface transition-colors">
            Store
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden sm:block bg-signal-red text-white px-8 py-2.5 rounded-full text-[11px] uppercase tracking-widest font-bold hover:bg-signal-red/90 transition-colors active:scale-95">
            Download
          </button>
          <button 
            className="md:hidden text-on-surface"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center space-y-8 md:hidden"
        >
          <a href="#" className="text-2xl headline-focus" onClick={() => setIsMenuOpen(false)}>APP</a>
          <a href="#" className="text-2xl headline-focus" onClick={() => setIsMenuOpen(false)}>Philosophy</a>
          <a href="#" className="text-2xl headline-focus" onClick={() => setIsMenuOpen(false)}>Store</a>
          <button className="bg-signal-red text-white px-12 py-4 rounded-full text-sm uppercase tracking-widest font-bold">
            Download
          </button>
        </motion.div>
      )}

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-7 max-w-3xl"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl lg:text-8xl headline-focus font-bold leading-[1.05] text-on-surface mb-8"
            >
              The world is unstable. <br />
              You don&apos;t have to be.
            </motion.h1>
            
            <motion.div 
              variants={fadeIn}
              className="text-xl md:text-2xl text-on-surface/80 font-light mb-8 max-w-2xl border-l-2 border-signal-red pl-6"
            >
              Build an internal anchor against the noise of an unpredictable future.
            </motion.div>
            
            <motion.p 
              variants={fadeIn}
              className="text-sm md:text-base text-on-surface/60 leading-relaxed mb-12 max-w-xl"
            >
              Markets shift. AI accelerates. The news cycle never stops. You cannot control the world, but you can control your internal state. Return is your daily practice for maintaining stability in the shift.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <button className="bg-signal-red text-white px-10 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-signal-red/90 transition-all active:scale-95">
                <Apple size={20} fill="currentColor" />
                <div className="text-left">
                  <p className="text-[9px] uppercase tracking-tighter leading-none opacity-80">Download on</p>
                  <p className="text-sm font-bold leading-none">App Store</p>
                </div>
              </button>
              <button className="bg-surface-container-high border border-outline-variant/15 text-on-surface px-10 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-surface-container-highest transition-all active:scale-95">
                <Play size={20} fill="currentColor" />
                <div className="text-left">
                  <p className="text-[9px] uppercase tracking-tighter leading-none opacity-80">Get it on</p>
                  <p className="text-sm font-bold leading-none">Google Play</p>
                </div>
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="aspect-[4/5] bg-surface-container-low rounded-2xl overflow-hidden relative group">
              {/* App UI Device Frame Mockup */}
              <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                <div className="relative w-full max-w-[260px] aspect-[9/19] bg-ink rounded-[3rem] border-[8px] border-surface-bright shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-ink via-surface-container-lowest to-ink flex flex-col items-center justify-center py-12 px-6 overflow-hidden" style={{ perspective: '1000px' }}>
                    
                    {/* 3D Pulsing Cube */}
                    <motion.div 
                      animate={{ 
                        rotateX: [0, 360],
                        rotateY: [0, 360],
                        scale: [0.8, 1.4, 0.8]
                      }}
                      transition={{ 
                        rotateX: { duration: 20, repeat: Infinity, ease: "linear" },
                        rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
                        scale: { duration: 10, repeat: Infinity, ease: "easeInOut" } // 5s expand, 5s contract
                      }}
                      className="relative w-24 h-24"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* 6 Faces of the Cube */}
                      {[
                        { transform: 'rotateY(0deg) translateZ(48px)' },
                        { transform: 'rotateY(90deg) translateZ(48px)' },
                        { transform: 'rotateY(180deg) translateZ(48px)' },
                        { transform: 'rotateY(-90deg) translateZ(48px)' },
                        { transform: 'rotateX(90deg) translateZ(48px)' },
                        { transform: 'rotateX(-90deg) translateZ(48px)' },
                      ].map((style, i) => (
                        <div
                          key={i}
                          className="absolute inset-0 border border-signal-red/60 bg-signal-red/10 backdrop-blur-sm"
                          style={{ ...style, backfaceVisibility: 'visible' }}
                        />
                      ))}
                      
                      {/* Inner Glow */}
                      <div className="absolute inset-0 bg-signal-red/5 blur-2xl rounded-full" style={{ transform: 'translateZ(0)' }} />
                    </motion.div>

                    <div className="w-full space-y-4 mt-16">
                      <button className="w-full bg-signal-red py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest">Start</button>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-surface-container p-3 rounded-lg">
                          <div className="text-[8px] opacity-40 uppercase">Duration</div>
                          <div className="text-xs">5 min</div>
                        </div>
                        <div className="bg-surface-container p-3 rounded-lg">
                          <div className="text-[8px] opacity-40 uppercase">Pattern</div>
                          <div className="text-xs">Balanced</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-40">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="bg-surface-container-low p-12 md:p-16 border-r border-outline-variant/10 hover:bg-surface-container transition-colors duration-500">
              <span className="text-signal-red font-mono text-xs mb-8 block tracking-widest">01 // ISOLATION</span>
              <h3 className="text-2xl headline-focus font-bold mb-6 text-on-surface">Establish Your Ground</h3>
              <p className="text-on-surface/60 leading-relaxed text-sm">
                A morning practice designed to insulate your neurological system from the volatility of the daily news cycle before you engage.
              </p>
            </div>
            <div className="bg-surface-container-low p-12 md:p-16 border-r border-outline-variant/10 hover:bg-surface-container transition-colors duration-500">
              <span className="text-signal-red font-mono text-xs mb-8 block tracking-widest">02 // FORTITUDE</span>
              <h3 className="text-2xl headline-focus font-bold mb-6 text-on-surface">Mental Fortitude</h3>
              <p className="text-on-surface/60 leading-relaxed text-sm">
                Train your body to maintain a state of biological calm specifically when your external environment is in a state of flux.
              </p>
            </div>
            <div className="bg-surface-container-low p-12 md:p-16 hover:bg-surface-container transition-colors duration-500">
              <span className="text-signal-red font-mono text-xs mb-8 block tracking-widest">03 // BASELINE</span>
              <h3 className="text-2xl headline-focus font-bold mb-6 text-on-surface">An Unshakable Baseline</h3>
              <p className="text-on-surface/60 leading-relaxed text-sm">
                The definitive tool for managing the modern cognitive load. Maintain physiological resilience through precision breathing.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-40 py-24 bg-surface-container-lowest flex flex-col items-center">
          <motion.div 
            className="max-w-4xl text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Quote className="text-signal-red w-12 h-12 mx-auto mb-8 opacity-50" />
            <blockquote className="text-3xl md:text-5xl headline-focus italic font-light text-on-surface leading-tight mb-12">
              &quot;Return is not an app for &apos;relaxing&apos;. It is a tool for professional-grade stability in a world that has lost its center.&quot;
            </blockquote>
            <div className="flex flex-col items-center">
              <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-on-surface">Hans Kofler</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface/40 mt-1">Reader, &apos;Return to Breath&apos;</span>
            </div>
          </motion.div>
        </section>

        {/* Technical Specs */}
        <section className="px-6 md:px-12 lg:px-24 mb-40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[11px] uppercase tracking-[0.5em] text-signal-red font-bold mb-16 text-center">Technical Specifications</h2>
            <div className="space-y-1">
              <div className="bg-surface-container-low p-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
                <h4 className="text-lg font-bold headline-focus text-on-surface md:w-1/3">How long does it take?</h4>
                <p className="text-on-surface/60 text-sm leading-relaxed md:w-2/3">
                  Five minutes a day builds the physiological resilience needed for a high-stress world. Consistency creates the baseline, not duration.
                </p>
              </div>
              <div className="bg-surface-container-low p-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
                <h4 className="text-lg font-bold headline-focus text-on-surface md:w-1/3">Is it guided?</h4>
                <p className="text-on-surface/60 text-sm leading-relaxed md:w-2/3">
                  The app provides technical visual cues and tactile haptics. It is an instrument you play, rather than a recording you listen to.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 md:px-12 lg:px-24 mb-32">
          <div className="bg-surface-container-low p-16 md:p-32 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-signal-red/5 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl headline-focus font-bold text-on-surface mb-8">Find your ground.</h2>
              <p className="text-on-surface/60 max-w-xl mx-auto mb-12">
                Join the collective of individuals building a resilient internal architecture. 
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-signal-red text-white px-10 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-signal-red/90 transition-all active:scale-95">
                  <Apple size={20} fill="currentColor" />
                  <span className="text-sm font-bold">App Store</span>
                </button>
                <button className="bg-on-surface text-ink px-10 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-white transition-all active:scale-95">
                  <Play size={20} fill="currentColor" />
                  <span className="text-sm font-bold">Google Play</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6 md:px-12 lg:px-24 border-t border-outline-variant/10 bg-surface-container-lowest">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="text-xl font-bold text-on-surface headline-focus mb-2">RETURN</div>
            <p className="text-[10px] uppercase tracking-widest text-on-surface/40">
              © 2026 RETURN. BUILT FOR THE UNSTABLE WORLD.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-on-surface/40 hover:text-signal-red transition-colors">Privacy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-on-surface/40 hover:text-signal-red transition-colors">Terms</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-on-surface/40 hover:text-signal-red transition-colors">Research</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-on-surface/40 hover:text-signal-red transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
