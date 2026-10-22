import React, { useState } from 'react';
import { Play, Camera, Monitor, ArrowRight, Video, ChevronRight, Search, Menu, X, Star } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [photoFilter, setPhotoFilter] = useState('All');

  return (
    <div className="min-h-screen bg-[#150B33] text-[#F7F5FC] font-['Jost',sans-serif] selection:bg-[#2F6BFF] selection:text-white">
      {/* Font Imports */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Jost:wght@400;500;600&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
      `}} />

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#150B33]/80 backdrop-blur-md border-b border-[#F7F5FC]/10">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Mark */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#4B1FA6] transform rotate-45"></div>
              <div className="absolute w-2 h-2 bg-[#2F6BFF] -top-1"></div>
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl tracking-wider uppercase leading-none">King's</h1>
              <p className="text-[0.65rem] tracking-[0.2em] text-[#F7F5FC]/70 uppercase">Concepts Media</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#videography" className="hover:text-[#2F6BFF] transition-colors">Showreel</a>
            <a href="#photography" className="hover:text-[#2F6BFF] transition-colors">Photography</a>
            <a href="#web" className="hover:text-[#2F6BFF] transition-colors">Web Design</a>
            <a href="#workflow" className="hover:text-[#2F6BFF] transition-colors">Process</a>
            <a href="#contact" className="hover:text-[#2F6BFF] transition-colors">About</a>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Search className="w-5 h-5 cursor-pointer hover:text-[#2F6BFF] transition-colors" />
            <button className="bg-[#2F6BFF] hover:bg-[#2F6BFF]/90 text-white px-6 py-2.5 rounded-sm text-sm font-semibold transition-all">
              Book a Project
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 min-h-[90vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#4B1FA6]/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-[#2F6BFF]/15 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F7F5FC]/20 text-xs font-medium mb-6 uppercase tracking-widest text-[#2F6BFF]">
              <span className="w-2 h-2 rounded-full bg-[#2F6BFF] animate-pulse"></span>
              Open for Global Commissions Q3/Q4
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              Crafting concepts that <span className="italic text-[#4B1FA6]">command</span> attention.
            </h2>
            <p className="text-[#F7F5FC]/70 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Bridging the gap between Hollywood-tier cinematography, high-fashion editorial imagery, and award-winning spatial web engineering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-[#F7F5FC] text-[#150B33] px-8 py-4 rounded-sm text-sm font-semibold hover:bg-white transition-all">
                <Play className="w-4 h-4 fill-current" />
                Watch 2025 Showreel
              </button>
              <button className="flex items-center justify-center gap-2 border border-[#F7F5FC]/20 hover:border-[#2F6BFF] hover:text-[#2F6BFF] bg-transparent px-8 py-4 rounded-sm text-sm font-semibold transition-all">
                Explore Services
              </button>
            </div>
          </div>

        
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOGRAPHY */}
      <section id="videography" className="py-24 px-6 bg-[#0A051A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16 border-b border-[#F7F5FC]/10 pb-8">
            <Video className="w-8 h-8 text-[#2F6BFF]" />
            <h2 className="font-serif text-4xl font-bold">Sports & Athletics Videography</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Court Vision Vol. 1", tag: "Athletic Spot", rig: "Cinema Rig", youtubeId: "U4ZwqE6ZVG0" },
              { title: "Court Vision Vol. 2", tag: "Athletic Spot", rig: "Cinema Rig", youtubeId: "7TWS94yso60" },
              { title: "Hoops Vertical Edit", tag: "Social / Shorts", rig: "Vertical Format", youtubeId: "I3nKEUtmNYw" },
              { title: "Game Day Action", tag: "Social / Shorts", rig: "Vertical Format", youtubeId: "gpdtqS75Ago" }
            ].map((vid, i) => (
              <div key={i} className="group flex flex-col h-full">
                <div className="relative aspect-video bg-black rounded-sm overflow-hidden mb-4 border border-[#F7F5FC]/10 group-hover:border-[#2F6BFF]/50 transition-colors">
                  <iframe 
                    className="w-full h-full absolute inset-0"
                    src={`https://www.youtube.com/embed/${vid.youtubeId}?rel=0&modestbranding=1&controls=0`}
                    title={vid.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex flex-col flex-grow justify-start mt-2">
                  <p className="text-xs text-[#2F6BFF] font-medium tracking-wider uppercase mb-1">{vid.tag}</p>
                  <h4 className="font-serif text-xl font-semibold mb-1">{vid.title}</h4>
                  <p className="text-[#F7F5FC]/50 text-xs font-mono">{vid.rig}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHY */}
      <section id="photography" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-[#F7F5FC]/10 pb-8">
            <div className="flex items-center gap-4">
              <Camera className="w-8 h-8 text-[#4B1FA6]" />
              <h2 className="font-serif text-4xl font-bold">High-Impact Photography</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['All', 'Editorial', 'Commercial', 'Lookbooks', 'Architecture'].map(filter => (
                <button 
                  key={filter}
                  onClick={() => setPhotoFilter(filter)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider rounded-sm transition-colors border ${photoFilter === filter ? 'border-[#4B1FA6] bg-[#4B1FA6]/20 text-white' : 'border-[#F7F5FC]/10 text-[#F7F5FC]/60 hover:border-[#F7F5FC]/30'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7 h-[600px] relative group overflow-hidden bg-black rounded-sm">
              <img src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Editorial" />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-[#150B33] to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[#2F6BFF] text-xs font-mono mb-2 block">Phase One IQ4 / 150MP</span>
                <h4 className="font-serif text-2xl">Vanguard Autumn Lookbook</h4>
              </div>
            </div>
            <div className="md:col-span-5 grid grid-rows-2 gap-4">
              <div className="h-[292px] relative group overflow-hidden bg-black rounded-sm">
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Commercial" />
                 <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-[#150B33] to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[#2F6BFF] text-[10px] font-mono mb-1 block">Hasselblad H6D-100c</span>
                  <h4 className="font-serif text-lg">Horology Macro Study</h4>
                </div>
              </div>
              <div className="h-[292px] relative group overflow-hidden bg-black rounded-sm">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Architecture" />
                 <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-[#150B33] to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[#2F6BFF] text-[10px] font-mono mb-1 block">Sony A7R IV / Tilt-Shift</span>
                  <h4 className="font-serif text-lg">Neo-Brutalist Structures</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEB DESIGN */}
      <section id="web" className="py-24 px-6 bg-[#0A051A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 border-b border-[#F7F5FC]/10 pb-8">
             <div className="flex items-center gap-4">
              <Monitor className="w-8 h-8 text-[#2F6BFF]" />
              <h2 className="font-serif text-4xl font-bold">Creative Engineering</h2>
            </div>
            <div className="flex gap-4 mt-6 md:mt-0">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F7F5FC]/80 bg-[#150B33] px-3 py-1.5 border border-[#F7F5FC]/10 rounded-sm">
                <Star className="w-3 h-3 text-[#4B1FA6] fill-current" /> Awwwards SOTD
              </span>
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F7F5FC]/80 bg-[#150B33] px-3 py-1.5 border border-[#F7F5FC]/10 rounded-sm">
                <Star className="w-3 h-3 text-[#2F6BFF] fill-current" /> FWA of the Day
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "ScholarArch Repository",
                desc: "Academic repository for past exams, lecture notes, and research papers.",
                stack: ["React", "Tailwind CSS", "Node.js"],
                img: "Screenshot 2026-10-22 210323.png" //[cite: 1]
              },
              {
                title: "Kinetix Performance",
                desc: "High-velocity sportswear flagship.",
                stack: ["Next.js 15", "Tailwind CSS", "Lighthouse 99+"],
                img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((project, i) => (
              <div key={i} className="group flex flex-col gap-6">
                <div className="relative aspect-[4/3] bg-[#150B33] rounded-sm overflow-hidden border border-[#F7F5FC]/10 group-hover:border-[#4B1FA6]/50 transition-colors">
                  <div className="absolute top-0 w-full h-8 bg-black/40 border-b border-white/5 flex items-center px-4 gap-2 z-10">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  </div>
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover mt-4 opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale group-hover:grayscale-0" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-2 flex items-center justify-between">
                    {project.title}
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#2F6BFF]" />
                  </h3>
                  <p className="text-[#F7F5FC]/60 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-1 bg-[#4B1FA6]/10 text-[#4B1FA6] border border-[#4B1FA6]/30 rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="py-24 px-6 border-y border-[#F7F5FC]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">The Sovereign Production Workflow</h2>
            <p className="text-[#F7F5FC]/60">A rigorous 4-phase methodology bridging cinematic capture with digital execution.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Discovery & Treatment", time: "Weeks 1–2", desc: "Creative direction, visual moodboards, brand sovereignty audit, narrative scriptwriting." },
              { num: "02", title: "Pre-Production", time: "Weeks 2–3", desc: "Talent scouting, location permits, technical camera package & lighting rigging, storyboarding." },
              { num: "03", title: "Production & Capture", time: "3–10 Shoot Days", desc: "Multi-camera cinema shoot, high-speed motion rigs, specialized lighting, DIT color proofing." },
              { num: "04", title: "Color, Sound & Launch", time: "Weeks 3–4", desc: "Orchestral audio scoring, Hollywood DaVinci grading, interactive platform engineering, 8K delivery." }
            ].map((step, i) => (
              <div key={i} className="relative border-l border-[#2F6BFF]/30 pl-6 pb-8">
                <div className="absolute top-0 -left-[17px] bg-[#150B33] text-[#2F6BFF] font-serif font-bold text-lg border border-[#2F6BFF]/30 w-8 h-8 flex items-center justify-center rounded-sm">
                  {step.num}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#4B1FA6] font-semibold mb-2">{step.time}</div>
                <h4 className="font-serif text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-sm text-[#F7F5FC]/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <section id="contact" className="py-24 px-6 bg-[url('https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2079&auto=format&fit=crop')] bg-cover bg-center bg-fixed relative">
        <div className="absolute inset-0 bg-[#150B33]/95 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-5xl font-bold mb-4">Command Attention.</h2>
            <p className="text-[#F7F5FC]/70">Initiate a project commission. Guaranteed response within &lt; 12 hours.</p>
          </div>

          <form className="bg-black/40 border border-[#F7F5FC]/10 p-8 md:p-12 rounded-sm space-y-8 backdrop-blur-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#F7F5FC]/60">Name / Title</label>
                <input type="text" className="w-full bg-transparent border-b border-[#F7F5FC]/20 py-3 text-[#F7F5FC] focus:outline-none focus:border-[#2F6BFF] transition-colors" placeholder="e.g. Sarah Jenkins, CMO" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#F7F5FC]/60">Corporate Work Email</label>
                <input type="email" className="w-full bg-transparent border-b border-[#F7F5FC]/20 py-3 text-[#F7F5FC] focus:outline-none focus:border-[#2F6BFF] transition-colors" placeholder="sarah@brand.com" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs uppercase tracking-wider text-[#F7F5FC]/60">Primary Service Focus</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Videography', 'Photography', 'Web Design', 'Full Retainer'].map(svc => (
                  <label key={svc} className="flex items-center gap-3 border border-[#F7F5FC]/10 p-4 rounded-sm cursor-pointer hover:border-[#4B1FA6] transition-colors">
                    <input type="radio" name="service" className="accent-[#2F6BFF]" />
                    <span className="text-sm font-medium">{svc}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-4">
                <label className="text-xs uppercase tracking-wider text-[#F7F5FC]/60">Estimated Budget</label>
                <select className="w-full bg-transparent border-b border-[#F7F5FC]/20 py-3 text-[#F7F5FC] focus:outline-none focus:border-[#2F6BFF] transition-colors appearance-none cursor-pointer">
                  <option className="bg-[#150B33]">$25,000 – $50,000</option>
                  <option className="bg-[#150B33]">$50,000 – $100,000</option>
                  <option className="bg-[#150B33]">$100,000+</option>
                </select>
              </div>
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-wider text-[#F7F5FC]/60">Target Delivery</label>
                 <select className="w-full bg-transparent border-b border-[#F7F5FC]/20 py-3 text-[#F7F5FC] focus:outline-none focus:border-[#2F6BFF] transition-colors appearance-none cursor-pointer">
                  <option className="bg-[#150B33]">Q3 2025</option>
                  <option className="bg-[#150B33]">Q4 2025</option>
                  <option className="bg-[#150B33]">Q1 2026</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-[#F7F5FC]/60">Project Narrative & Vision</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-[#F7F5FC]/20 py-3 text-[#F7F5FC] focus:outline-none focus:border-[#2F6BFF] transition-colors resize-none" placeholder="Describe the creative objective, target audience, and scale..."></textarea>
            </div>

            <button type="button" className="w-full bg-[#2F6BFF] hover:bg-[#2F6BFF]/90 text-white py-4 rounded-sm font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all">
              Submit Commission Inquiry <ChevronRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A051A] pt-20 pb-8 px-6 border-t border-[#F7F5FC]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
             <div className="flex items-center gap-3 mb-6">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#4B1FA6] transform rotate-45"></div>
                <div className="absolute w-1.5 h-1.5 bg-[#2F6BFF] -top-1"></div>
              </div>
              <h1 className="font-serif font-bold text-lg tracking-wider uppercase">King's</h1>
            </div>
            <p className="text-sm text-[#F7F5FC]/50 mb-6 max-w-xs">
              Crafting concepts that command attention. Bridging high-fashion, cinema, and spatial web.
            </p>
            <a href="mailto:commissions@kingsconcepts.com" className="text-[#2F6BFF] font-medium text-sm hover:underline">
              commissions@kingsconcepts.com
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-xs">Capabilities</h4>
            <ul className="space-y-3 text-sm text-[#F7F5FC]/60">
              <li><a href="#" className="hover:text-[#F7F5FC] transition-colors">Commercial Video</a></li>
              <li><a href="#" className="hover:text-[#F7F5FC] transition-colors">Documentaries</a></li>
              <li><a href="#" className="hover:text-[#F7F5FC] transition-colors">Editorial Photography</a></li>
              <li><a href="#" className="hover:text-[#F7F5FC] transition-colors">WebGL / Three.js</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-xs">Studios</h4>
            <ul className="space-y-3 text-sm text-[#F7F5FC]/60">
              <li>Los Angeles</li>
              <li>London</li>
              <li>Tokyo</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-xs">Connect</h4>
            <ul className="space-y-3 text-sm text-[#F7F5FC]/60">
              <li><a href="#" className="hover:text-[#2F6BFF] transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-[#2F6BFF] transition-colors">Vimeo Pro</a></li>
              <li><a href="#" className="hover:text-[#2F6BFF] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#2F6BFF] transition-colors">Behance</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#F7F5FC]/5 text-xs text-[#F7F5FC]/40">
          <p>© {new Date().getFullYear()} King's Concepts Media. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#F7F5FC]">Privacy Policy</a>
            <a href="#" className="hover:text-[#F7F5FC]">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
