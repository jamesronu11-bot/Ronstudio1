import { motion, useScroll, useTransform } from "motion/react";
import { 
  Palette, 
  Video, 
  Zap, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Play,
  ChevronRight,
  Github,
  MapPin,
  Briefcase,
  Compass,
  TrendingUp
} from "lucide-react";
import { useState, useRef } from "react";

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-display font-black tracking-tighter">
          RON STUDIO<span className="text-brand">.</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-white/60">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors text-brand">Hire Me</a>
        </div>
        <div className="md:hidden">
          <button className="p-2">
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={targetRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <h2 className="text-brand font-bold uppercase tracking-[0.3em] text-sm mb-4">Creative Director</h2>
          <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-8">
            VISUAL <br />
            <span className="text-white/20 outline-text">STORYTELLER</span> <br />
            & MOTION
          </h1>
          <p className="text-lg text-white/60 max-w-md mb-10 font-light leading-relaxed">
            Crafting high-impact visual identities and cinematic motion graphics for brands that dare to be different.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="px-8 py-4 bg-brand text-white font-bold uppercase tracking-widest text-xs hover:bg-brand/80 transition-all flex items-center gap-2">
              View Projects <ChevronRight size={16} />
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all">
              Get In Touch
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-video lg:aspect-square group"
        >
          <div className="absolute inset-0 bg-brand/20 blur-3xl rounded-full -z-10 opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="w-full h-full bg-[#111] border border-white/5 overflow-hidden relative">
            <img 
              src="https://picsum.photos/seed/portfolio-hero/1200/1200?grayscale" 
              alt="Showreel Placeholder" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Video Editing UI Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Corner Markers */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/20"></div>
              <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-white/20"></div>
              
              {/* Timeline UI at the bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <div className="flex flex-col gap-3">
                  {/* Timeline Tracks */}
                  <div className="flex gap-1 h-2.5">
                    <div className="w-1/4 bg-brand/30 border border-brand/50 rounded-sm"></div>
                    <div className="w-1/6 bg-accent/30 border border-accent/50 rounded-sm"></div>
                    <div className="w-1/3 bg-white/10 border border-white/20 rounded-sm"></div>
                    <div className="flex-1 bg-brand/20 border border-brand/40 rounded-sm"></div>
                  </div>
                  
                  {/* Progress Bar / Playhead */}
                  <div className="w-full h-1 bg-white/10 rounded-full relative">
                    <motion.div 
                      animate={{ width: ["20%", "85%"] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-y-0 left-0 bg-brand shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-xl"></div>
                    </motion.div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <p className="text-[7px] font-mono text-white/30 tracking-widest uppercase mb-0.5">Sequence_01_Final</p>
                      <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">2024 Showreel</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-mono text-brand tracking-widest font-bold">00:04:12:18</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center pl-1 shadow-2xl shadow-brand/20 z-10"
              >
                <Play fill="currentColor" size={32} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Elements with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 -right-20 w-96 h-96 bg-brand/5 blur-[120px] rounded-full"
      ></motion.div>
      <motion.div 
        style={{ y: y2 }}
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/5 blur-[120px] rounded-full"
      ></motion.div>
    </section>
  );
};

const Gallery = () => {
  const [filter, setFilter] = useState<'all' | 'graphic' | 'video'>('all');

  const projects = [
    { id: 1, title: "Cyberpunk Poster", category: "graphic", image: "https://picsum.photos/seed/p1/800/1000" },
    { id: 2, title: "Urban Motion", category: "video", image: "https://picsum.photos/seed/p2/800/600" },
    { id: 3, title: "Minimalist Branding", category: "graphic", image: "https://picsum.photos/seed/p3/800/800" },
    { id: 4, title: "Music Video Edit", category: "video", image: "https://picsum.photos/seed/p4/800/1200" },
    { id: 5, title: "Abstract 3D Art", category: "graphic", image: "https://picsum.photos/seed/p5/800/600" },
    { id: 6, title: "Commercial Reel", category: "video", image: "https://picsum.photos/seed/p6/800/800" },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-brand font-bold uppercase tracking-[0.3em] text-sm mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black tracking-tighter">SELECTED WORKS</h3>
          </div>
          
          <div className="flex bg-[#111] p-1 border border-white/5">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${filter === 'all' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('graphic')}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${filter === 'graphic' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
            >
              Graphic
            </button>
            <button 
              onClick={() => setFilter('video')}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${filter === 'video' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
            >
              Video
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={project.id}
              className="group relative aspect-[4/5] overflow-hidden bg-[#111] border border-white/5"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-brand font-bold uppercase tracking-widest text-[10px] mb-2">{project.category}</p>
                <h4 className="text-2xl font-display font-black tracking-tight mb-4">{project.title}</h4>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group/link cursor-pointer">
                  View Project <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
              {project.category === 'video' && (
                <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
                  <Play size={16} fill="white" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Palette className="text-brand" size={32} />,
      title: "Brand Identity & Poster Design",
      desc: "Creating memorable visual languages. From logo systems to high-impact promotional posters that command attention."
    },
    {
      icon: <Video className="text-accent" size={32} />,
      title: "Professional Video Editing",
      desc: "Narrative-driven editing for commercials, music videos, and social content. Precision cutting with a focus on rhythm and emotion."
    },
    {
      icon: <Zap className="text-yellow-400" size={32} />,
      title: "Motion Graphics & After Effects",
      desc: "Bringing static designs to life. Dynamic typography, logo reveals, and complex visual effects that elevate your production value."
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-brand font-bold uppercase tracking-[0.3em] text-sm mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black tracking-tighter">SERVICES PROVIDED</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="p-10 bg-[#0a0a0a] border border-white/5 hover:border-brand/30 transition-all group"
            >
              <div className="mb-8 p-4 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h4 className="text-xl font-display font-bold mb-4 tracking-tight">{s.title}</h4>
              <p className="text-white/50 leading-relaxed font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MotionManifesto = () => {
  return (
    <section className="relative py-40 overflow-hidden bg-black border-y border-white/5">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://picsum.photos/seed/motion-bg/1920/1080?grayscale&blur=5" 
          className="w-full h-full object-cover"
          alt="Motion Background"
          referrerPolicy="no-referrer"
        />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-accent font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Editing Philosophy</h4>
          <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] mb-10 uppercase">
            Motion is the <br /> 
            <span className="text-white/10 outline-text">Language</span> of <br />
            Emotion
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>24 FPS PRECISION</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/10"></div>
            <div className="flex items-center gap-3">
              <span>4K RAW WORKFLOW</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/10"></div>
            <div className="flex items-center gap-3">
              <span>PIXEL PERFECT MOTION</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative technical elements */}
      <div className="absolute top-12 left-12 font-mono text-[10px] text-white/20 uppercase tracking-widest hidden lg:block">
        REC [00:42:12:04]
      </div>
      <div className="absolute bottom-12 right-12 font-mono text-[10px] text-white/20 uppercase tracking-widest hidden lg:block">
        ISO 800 | 1/50 | f2.8
      </div>
      
      {/* Vertical scanning line animation */}
      <motion.div 
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 bottom-0 w-px bg-accent/20 shadow-[0_0_15px_rgba(239,68,68,0.5)] z-20 pointer-events-none"
      />
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative aspect-[3/4] overflow-hidden border border-white/10 bg-[#111]">
              <img 
                src="https://picsum.photos/seed/ron-portrait/800/1000?grayscale" 
                alt="Ronaldo James Andrews" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-accent font-bold uppercase tracking-[0.4em] text-[10px]">The Visionary</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-4">About Me</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-8 uppercase">
              Ronaldo James <br /> Andrews
            </h3>
            
            <p className="text-lg text-white/70 leading-relaxed mb-10 font-light italic border-l-2 border-accent pl-6">
              "Storytelling isn't just about moving images; it's about moving souls. I craft high-impact cinematic experiences that bridge the gap between imagination and reality."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Experience</h4>
                  <p className="text-sm font-medium">3+ Years Professional Editing</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Location</h4>
                  <p className="text-sm font-medium">Bangalore, India</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30">Beyond the Lens</h4>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium hover:bg-accent/10 hover:border-accent/30 transition-all cursor-default">
                  <Compass size={14} className="text-accent" /> Travel
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium hover:bg-accent/10 hover:border-accent/30 transition-all cursor-default">
                  <TrendingUp size={14} className="text-accent" /> Financial Planning
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const tools = ["After Effects", "Premiere Pro", "Photoshop", "Illustrator", "DaVinci Resolve", "Figma", "Final Cut Pro"];
  
  return (
    <section className="py-24 border-y border-white/5 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0 text-center md:text-left z-10 bg-[#0a0a0a] pr-12">
          <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-white/30 mb-2">Tech Stack</h4>
          <p className="text-xl font-display font-bold whitespace-nowrap">Industry Standard Tools</p>
        </div>
        
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-16 items-center py-4">
            {/* First set of tools */}
            {tools.map((tool, i) => (
              <div key={`tool-1-${i}`} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-default whitespace-nowrap">
                {tool}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {tools.map((tool, i) => (
              <div key={`tool-2-${i}`} className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-default whitespace-nowrap">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-brand font-bold uppercase tracking-[0.3em] text-sm mb-4">Get in touch</h2>
            <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8">LET'S CREATE <br /> SOMETHING <br /> <span className="text-brand">ICONIC.</span></h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <span className="text-lg">jamesronu11@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/ronaldo-james-83606b232/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://www.behance.net/gallery/212132173/Portfolio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7v.6h7V7zm-7.086 6.448c.125.532.454.997.926 1.292.472.295 1.047.442 1.612.442.617 0 1.174-.14 1.671-.421.497-.281.922-.723 1.275-1.326h2.5c-.133.541-.377 1.07-.724 1.547-.347.477-.769.891-1.246 1.221-.477.33-1.016.583-1.598.748-.582.165-1.199.252-1.83.252-1.028 0-1.923-.217-2.683-.651-.76-.434-1.346-1.02-1.758-1.758-.412-.738-.618-1.594-.618-2.568 0-1.032.21-1.899.63-2.601.42-.702 1.003-1.24 1.75-1.613.747-.373 1.61-.56 2.589-.56.941 0 1.78.188 2.517.564.737.376 1.33.91 1.779 1.603.449.693.673 1.508.673 2.445 0 .098-.007.266-.021.503h-7.581zm5.005-1.725c-.014-.56-.175-1.03-.483-1.411-.308-.381-.746-.572-1.313-.572-.527 0-.974.175-1.341.524-.367.349-.558.798-.573 1.348h3.21l.1-.889zm-15.919 4.827h-4v-10h4.5c1.028 0 1.878.285 2.551.855.673.57 1.01 1.32 1.01 2.25 0 .882-.268 1.55-.805 2.005-.537.455-1.135.692-1.795.71.841.159 1.485.539 1.932 1.14.447.601.67 1.322.67 2.163 0 1.103-.367 1.978-1.102 2.625-.735.647-1.752.971-3.051.971h.09zm-1.5-6.072h1.5c.457 0 .815-.117 1.071-.35.256-.233.384-.548.384-.945 0-.448-.125-.776-.375-.984-.25-.208-.616-.312-1.097-.312h-1.483v2.591zm0 3.678h1.5c.533 0 .951-.156 1.254-.469.303-.313.454-.709.454-1.187 0-.445-.147-.818-.442-1.119-.295-.301-.71-.452-1.245-.452h-1.521v3.227z" />
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="bg-[#111] p-10 border border-white/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">Project Details</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand outline-none transition-all resize-none" placeholder="Tell me about your vision..."></textarea>
              </div>
              <button className="w-full py-5 bg-brand text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand/80 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Decorative background text */}
      <div className="absolute -bottom-20 -right-20 text-[20vw] font-display font-black text-white/[0.02] select-none pointer-events-none leading-none">
        CONTACT
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-display font-black tracking-tighter">
          RON STUDIO<span className="text-brand">.</span>
        </div>
        <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">
          &copy; 2024 Ron Studio Design. All Rights Reserved.
        </p>
        <div className="flex space-x-6 text-[10px] uppercase tracking-widest font-bold text-white/40">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-brand selection:text-white">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <TechStack />
      <MotionManifesto />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
