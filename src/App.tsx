/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  ChevronDown, 
  Download, 
  X, 
  Send, 
  MessageSquare,
  Cpu,
  ShieldCheck,
  Code2,
  Terminal,
  Layers,
  FileText
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utils ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center justify-between px-6 md:px-12">
      <div className="font-headline font-bold text-xl tracking-tighter">
        NEURAL<span className="electric-violet">FROST</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#research" className="hover:text-[#8B5CF6] transition-colors">Research</a>
        <a href="#projects" className="hover:text-[#8B5CF6] transition-colors">Projects</a>
        <a href="#github" className="hover:text-[#8B5CF6] transition-colors">Github</a>
        <a href="#contact" className="hover:text-[#8B5CF6] transition-colors">Contact</a>
      </div>
      <div className="flex items-center gap-4">
        <Github className="w-5 h-5 cursor-pointer hover:text-[#8B5CF6] transition-colors" />
        <Linkedin className="w-5 h-5 cursor-pointer hover:text-[#8B5CF6] transition-colors" />
      </div>
    </nav>
  );
};

const ResearchCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      className="glass rounded-2xl p-8 max-w-3xl mx-auto border border-white/40"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="text-xs font-mono electric-violet mb-2 uppercase tracking-widest">ArXiv: 2406.02524</div>
          <h3 className="text-3xl font-bold tracking-tight mb-2">CheckEmbed: Embedding Verification</h3>
          <p className="text-slate-600 font-medium">Collaboration with ETH Zurich</p>
        </div>
        <div className="p-3 bg-purple-100 rounded-xl">
          <ShieldCheck className="w-8 h-8 electric-violet" />
        </div>
      </div>

      <p className="text-slate-700 leading-relaxed mb-6">
        CheckEmbed is a novel verification framework for high-dimensional embedding spaces, 
        ensuring neural network consistency across distribution shifts.
      </p>

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-sm font-bold electric-violet hover:opacity-80 transition-opacity"
      >
        {isExpanded ? "Hide Methodology" : "View Methodology"}
        {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-8 mt-8 border-t border-slate-200/50 space-y-4">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Abstract</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We present a framework for detecting hallucinations in Large Language Models by analyzing 
                  the geometric properties of text embeddings. By measuring cosine similarity and latent 
                  drift, we can formally verify the reliability of model outputs in real-time.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Tech Stack</h5>
                  <div className="flex gap-3">
                    <span className="text-xs font-mono bg-white px-2 py-1 rounded border border-slate-200">Python</span>
                    <span className="text-xs font-mono bg-white px-2 py-1 rounded border border-slate-200">PyTorch</span>
                  </div>
                </div>
                <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Metrics</h5>
                  <div className="text-sm font-bold text-slate-900">98.4% Robustness Score</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const GithubPulse = () => {
  // Mock data for contribution graph
  const days = Array.from({ length: 52 * 7 }, (_, i) => Math.floor(Math.random() * 5));
  
  return (
    <div className="glass rounded-2xl p-8 border border-white/40">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Github className="w-6 h-6" />
          <h3 className="text-xl font-bold">Commit Pulse</h3>
        </div>
        <div className="text-xs font-mono text-slate-400">@WSm-77</div>
      </div>
      
      <div className="flex gap-[2px] overflow-x-auto pb-4 scrollbar-hide">
        {Array.from({ length: 52 }).map((_, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-[2px]">
            {Array.from({ length: 7 }).map((_, rowIndex) => {
              const level = days[colIndex * 7 + rowIndex];
              return (
                <div 
                  key={rowIndex}
                  className={cn(
                    "w-3 h-3 rounded-[2px]",
                    level === 0 && "bg-slate-100",
                    level === 1 && "bg-purple-100",
                    level === 2 && "bg-purple-300",
                    level === 3 && "bg-purple-500",
                    level === 4 && "bg-purple-700",
                  )}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white/50 rounded-xl border border-white/50 flex items-center justify-between group cursor-pointer hover:bg-white transition-colors">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 electric-violet" />
            <div>
              <div className="text-sm font-bold">Frost-CLI</div>
              <div className="text-xs text-slate-500">Rust, Tokio</div>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-purple-500 transition-colors" />
        </div>
        <div className="p-4 bg-white/50 rounded-xl border border-white/50 flex items-center justify-between group cursor-pointer hover:bg-white transition-colors">
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 electric-violet" />
            <div>
              <div className="text-sm font-bold">Loom-Mesh</div>
              <div className="text-xs text-slate-500">Go, gRPC</div>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-purple-500 transition-colors" />
        </div>
      </div>
    </div>
  );
};

const NeuralTwin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hello! I'm Wiktor's Neural Twin. Ask me anything about his research or background." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);
    
    // Mock AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: "Wiktor is currently focused on embedding verification at ETH Zurich. His CheckEmbed framework has achieved a 98.4% robustness score." }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass w-80 md:w-96 h-[500px] mb-4 rounded-2xl flex flex-col overflow-hidden border border-white/50"
          >
            <div className="p-4 bg-purple-500 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">Neural Twin</div>
                  <div className="text-[10px] opacity-80 uppercase tracking-widest">Active Research Node</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "flex",
                  msg.role === 'user' ? "justify-end" : "justify-start"
                )}>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm",
                    msg.role === 'user' ? "bg-purple-500 text-white rounded-tr-none" : "bg-white/80 text-slate-800 rounded-tl-none border border-slate-100"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/80 p-3 rounded-2xl rounded-tl-none border border-slate-100 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-100 bg-white/50">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button 
                  onClick={handleSend}
                  className="p-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-purple-500 text-white rounded-full shadow-xl shadow-purple-500/20 flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
      >
        <MessageSquare className="w-8 h-8" />
      </button>
    </div>
  );
};

const ResumeModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col relative z-10 border border-white/60"
          >
            <div className="p-6 md:p-10 flex flex-col md:flex-row gap-10 overflow-y-auto scrollbar-hide">
              <div className="md:w-1/3 space-y-8">
                <div className="space-y-4">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold">
                    WS
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Wiktor Sędzimir</h2>
                    <p className="text-slate-500 font-medium">AI/ML Researcher</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Skills Cloud</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "PyTorch", "Rust", "C++", "TypeScript", "Docker", "Kubernetes", "gRPC", "LLMs"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium border border-slate-100">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Contact</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Mail className="w-4 h-4" /> wiktor.sedzimir@gmail.com
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Linkedin className="w-4 h-4" /> wiktor-sędzimir-2799862b4
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 space-y-8">
                <section>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 electric-violet" /> Professional Summary
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Full Stack Developer and AI/ML Researcher with a focus on neural robustness and interpretability. 
                    Currently developing the CheckEmbed framework in cooperation with ETH Zurich to detect LLM hallucinations 
                    using geometric embedding analysis.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Cpu className="w-5 h-5 electric-violet" /> Experience
                  </h3>
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-purple-100">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-white" />
                      <div className="text-sm font-bold">Full Stack Developer</div>
                      <div className="text-xs text-slate-500 mb-2">Poznaj Góry • 2025 - Present</div>
                      <p className="text-xs text-slate-600">Designed and integrated Google OAuth2 authentication flows. Built content ingestion scripts for database integrity.</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-purple-100">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-200 border-4 border-white" />
                      <div className="text-sm font-bold">Junior Software Developer</div>
                      <div className="text-xs text-slate-500 mb-2">Aptiv • 2025 - Present</div>
                      <p className="text-xs text-slate-600">Utilized gRPC-based services for data exchange. Implemented secure image signing and verification tooling.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 electric-violet" /> Education
                  </h3>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-sm font-bold">B.Sc. Computer Science</div>
                    <div className="text-xs text-slate-500">AGH UST • 2023 - Present</div>
                  </div>
                </section>
              </div>
            </div>

            <div className="p-6 bg-white/80 border-t border-white/50 flex items-center justify-between">
              <button 
                onClick={onClose}
                className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors"
              >
                Close Overlay
              </button>
              <button className="flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-purple-600 transition-colors shadow-lg shadow-purple-500/20">
                <Download className="w-4 h-4" /> Download PDF
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  date: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, date, link }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass p-6 rounded-2xl border border-white/40 flex flex-col h-full group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-[10px] font-mono electric-violet uppercase tracking-widest">{date}</div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-purple-500 transition-colors">
          <Github className="w-5 h-5" />
        </a>
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:electric-violet transition-colors">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tech.map(t => (
          <span key={t} className="text-[10px] font-mono bg-white/50 px-2 py-1 rounded border border-slate-100 text-slate-500">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Word2Vec in pure NumPy",
      description: "Word2Vec embedding model architecture and training implemented from scratch using CBOW and negative sampling, built solely with NumPy without relying on ML frameworks.",
      tech: ["Python", "NumPy", "ML"],
      date: "03/2026",
      link: "https://github.com/WSm-77"
    },
    {
      title: "Fake Router",
      description: "Simulation of a fake router that broadcasts malicious RIPv2 packets to redirect network traffic. Utilizes Docker containers to demonstrate impact on network security.",
      tech: ["Python", "Scapy", "Docker"],
      date: "01/2026",
      link: "https://github.com/WSm-77"
    },
    {
      title: "Draw Master",
      description: "A high-performance Discord bot that splits users in a voice channel into teams or randomly selects winners. Built for scalability and low latency.",
      tech: ["Rust", "Serenity", "Shuttle"],
      date: "06/2025",
      link: "https://github.com/WSm-77"
    },
    {
      title: "Darwin World",
      description: "An evolutionary simulation project where an evolving world of animals and plants unfolds over time, featuring a custom JavaFX UI for real-time visualization.",
      tech: ["Java", "JavaFX"],
      date: "01/2025",
      link: "https://github.com/WSm-77"
    },
    {
      title: "Kirkpatrick Point Location",
      description: "Interactive visualization tool demonstrating the Kirkpatrick point-location algorithm for efficient spatial querying in planar subdivisions.",
      tech: ["Python", "Jupyter", "Algorithms"],
      date: "2024",
      link: "https://github.com/WSm-77"
    },
    {
      title: "Space Invaders v1 & v2",
      description: "Retro arcade game implementations following strict Object-Oriented Programming paradigms to ensure modularity and clean code structure.",
      tech: ["Python", "Pygame", "OOP"],
      date: "05/2024",
      link: "https://github.com/WSm-77"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <h2 className="text-xs font-mono electric-violet uppercase tracking-[0.3em]">Engineering Portfolio</h2>
          <h3 className="text-4xl font-bold tracking-tight">Technical Projects</h3>
        </div>
        <p className="text-slate-500 max-w-md text-sm leading-relaxed">
          A collection of systems, simulations, and algorithms developed to solve complex computational problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title}
            description={project.description}
            tech={project.tech}
            date={project.date}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-purple-200 selection:text-purple-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 rounded-full glass border border-white/60 text-xs font-mono electric-violet uppercase tracking-widest"
          >
            Active Lab Research 2024
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]"
          >
            Engineering Trust <br />
            <span className="electric-violet">in LLMs.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            Engineering neural robustness and interpretability through the lens of ethical computation. 
            Currently focusing on embedding verification at <span className="font-bold text-slate-900">ETH Zurich</span>.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="px-8 py-4 bg-purple-500 text-white rounded-2xl font-bold shadow-xl shadow-purple-500/20 hover:scale-105 transition-transform active:scale-95"
            >
              Open Resume
            </button>
            <a 
              href="https://github.com/WSm-77" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 glass rounded-2xl font-bold flex items-center gap-2 hover:bg-white/50 transition-colors"
            >
              <Github className="w-5 h-5" /> GitHub Link
            </a>
          </motion.div>
        </div>
      </section>

      {/* Research Spotlight */}
      <section id="research" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono electric-violet uppercase tracking-[0.3em] mb-4">Featured Publication</h2>
          <h3 className="text-4xl font-bold tracking-tight">Research Spotlight</h3>
        </div>
        <ResearchCard />
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Github Integration */}
      <section id="github" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Open Source & Engineering</h2>
            <p className="text-slate-600 leading-relaxed">
              Beyond the lab, I build high-performance systems and tools that streamline the development 
              lifecycle and optimize computational infrastructure.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold">14+</div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Repositories</div>
              </div>
              <div>
                <div className="text-3xl font-bold">800+</div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Commits</div>
              </div>
            </div>
          </div>
          <GithubPulse />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 px-6 md:px-12 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4 text-center md:text-left">
            <div className="font-bold text-2xl tracking-tighter">NEURAL<span className="electric-violet">FROST</span></div>
            <p className="text-sm text-slate-500">© 2024 Neural Frost Lab. ArXiv: 2406.02524</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="p-3 glass rounded-xl hover:text-purple-500 transition-colors"><Github className="w-6 h-6" /></a>
            <a href="#" className="p-3 glass rounded-xl hover:text-purple-500 transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="p-3 glass rounded-xl hover:text-purple-500 transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
        </div>
      </footer>

      {/* Overlays */}
      <NeuralTwin />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
