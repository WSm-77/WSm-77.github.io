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
  ChevronLeft,
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
  FileText,
  Brain,
  Binary
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
                    <motion.div
              className="text-5xl font-bold tracking-tight text-slate-900"
              style={{ fontFamily: "'Dancing Script', 'Brush Script MT'" }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              WS<span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">m</span>
            </motion.div>
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
          <h3 className="text-3xl font-bold tracking-tight mb-2">CheckEmbed: LLM Verification</h3>
          <p className="text-slate-600 font-medium">Effective Verification of LLM Solutions to Open-Ended Tasks</p>
        </div>
        <div className="p-3 bg-purple-100 rounded-xl">
          <ShieldCheck className="w-8 h-8 electric-violet" />
        </div>
      </div>

      <p className="text-slate-700 leading-relaxed mb-6">
        CheckEmbed (CE) is a simple, scalable and accurate verification method that uses LLM answers reduced
        to single embedding vectors for fast, semantically rich comparisons at the whole-answer level.
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
                  We introduce CheckEmbed, a verification framework that overcomes the limitations of token-level
                  methods by performing whole-answer level comparisons. Using modern embedding LLMs, CE reliably
                  detects hallucinations in complex tasks like summarization and knowledge extraction,
                  generalizing across text and vision modalities.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Core Models</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-mono bg-white px-2 py-1 rounded border border-slate-200">SFR-Embedding-Mistral</span>
                    <span className="text-[10px] font-mono bg-white px-2 py-1 rounded border border-slate-200">e5-mistral-7b-instruct</span>
                  </div>
                </div>
                <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Performance</h5>
                  <div className="text-sm font-bold text-slate-900">Whole-Answer Granularity</div>
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
      setMessages(prev => [...prev, { role: 'ai', text: "Wiktor's CheckEmbed framework performs whole-answer level verification using modern embedding LLMs. It's designed to detect hallucinations in complex open-ended tasks with high scalability." }]);
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
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Poznaj Góry",
      period: "09/2025 - Present",
      bullets: [
        "Implement and maintain full-stack features for the Poznaj Góry platform.",
        "Designed and integrated Google OAuth2 authentication flows to improve sign-in reliability and security.",
        "Built content ingestion scripts to import and validate content, ensuring consistent formatting and database integrity."
      ],
      isPrimary: true
    },
    {
      title: "Junior Software Developer",
      company: "Aptiv",
      period: "07/2025 - Present",
      bullets: [
        "Working on embedded and tooling for automotive systems.",
        "Utilized gRPC-based services for data exchange between QNX and Linux targets.",
        "Implemented secure image signing and verification tooling to streamline firmware delivery."
      ],
      isPrimary: true
    },
    {
      title: "Frontend Web Developer",
      company: "Redinn",
      period: "05/2025 - 08/2025",
      bullets: [
        "Implemented a frontend from Figma designs for the company landing page.",
        "Converted Figma assets to responsive HTML/CSS with TailwindCSS and the Astro framework."
      ],
      isPrimary: false
    },
    {
      title: "Software Intern (C++)",
      company: "Aptiv",
      period: "07/2024 - 10/2024",
      bullets: [
        "Focused on automotive software development and tooling.",
        "Fixed functional bugs across control modules.",
        "Developed a Bash utility to detect unused components in the codebase, reducing build size and maintenance overhead.",
        "Wrote unit tests for modified applications."
      ],
      isPrimary: false
    },
    {
      title: "Software Intern (C++)",
      company: "Aptiv",
      period: "06/2023 - 10/2023",
      bullets: [
        "Focused on safety-relevant components and test infrastructure.",
        "Implemented a checksum component for partition-integrity verification.",
        "Refactored outdated Google Test unit tests and updated the CMake build system."
      ],
      isPrimary: false
    }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resources/resume.pdf';
    link.download = 'Wiktor_Sedzimir_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                    Currently developing the CheckEmbed framework to enable effective verification of LLM solutions
                    to open-ended tasks using whole-answer embedding analysis.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Cpu className="w-5 h-5 electric-violet" /> Experience
                  </h3>
                  <div className="space-y-6">
                    {experiences.map((exp, idx) => (
                      <div key={idx} className="relative pl-6 border-l-2 border-purple-100">
                        <div className={cn(
                          "absolute left-[-9px] top-0 w-4 h-4 rounded-full border-4 border-white",
                          exp.isPrimary ? "bg-purple-500" : "bg-purple-200"
                        )} />
                        <div className="text-sm font-bold">{exp.title}</div>
                        <div className="text-xs text-slate-500 mb-2">{exp.company} • {exp.period}</div>
                        <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                          {exp.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
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
              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-purple-600 transition-colors shadow-lg shadow-purple-500/20"
              >
                <Download className="w-4 h-4" /> Download PDF
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass p-8 rounded-2xl border border-white/40 flex flex-col h-full group"
    >
      <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
        <div className="electric-violet">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:electric-violet transition-colors">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {skills.map(s => (
          <span key={s} className="text-[10px] font-mono bg-white/50 px-2 py-1 rounded border border-slate-100 text-slate-500">
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselProjects = [
    {
      title: "Word2Vec in pure NumPy",
      description: "Word2Vec embedding model architecture and training implemented from scratch using CBOW and negative sampling, built solely with NumPy without relying on ML frameworks.",
      tech: ["Python", "NumPy", "ML"],
      date: "03/2026",
      link: "https://github.com/WSm-77/word2vec_numpy",
      insight: "Manual backpropagation & CBOW gradient optimization"
    },
    {
      title: "Fake Router",
      description: "Simulation of a fake router that broadcasts malicious RIPv2 packets to redirect network traffic. Utilizes Docker containers to demonstrate impact on network security.",
      tech: ["Python", "Scapy", "Docker"],
      date: "01/2026",
      link: "https://github.com/WSm-77/scapy_project",
      insight: "RIPv2 packet crafting via Scapy & Docker network isolation"
    },
    {
      title: "Draw Master",
      description: "A high-performance Discord bot that splits users in a voice channel into teams or randomly selects winners. Built for scalability and low latency.",
      tech: ["Rust", "Serenity", "Shuttle"],
      date: "06/2025",
      link: "https://github.com/WSm-77/DrawMaster",
      insight: "Asynchronous event handling & Rust-based concurrency"
    },
    {
      title: "Darwin World",
      description: "An evolutionary simulation project where an evolving world of animals and plants unfolds over time, featuring a custom JavaFX UI for real-time visualization.",
      tech: ["Java", "JavaFX"],
      date: "01/2025",
      link: "https://github.com/WSm-77/project_darwin_world",
      insight: "JavaFX rendering loop & evolutionary heuristic logic"
    },
    {
      title: "Kirkpatrick Point Location",
      description: "Interactive visualization tool demonstrating the Kirkpatrick point-location algorithm for efficient spatial querying in planar subdivisions.",
      tech: ["Python", "Jupyter", "Algorithms"],
      date: "2024",
      link: "https://github.com/WSm-77/kirkpatrick_point_location",
      insight: "Hierarchical DAG structure for O(log n) point location"
    },
    {
      title: "Space Invaders v1 & v2",
      description: "Retro arcade game implementations following strict Object-Oriented Programming paradigms to ensure modularity and clean code structure.",
      tech: ["Python", "Pygame", "OOP"],
      date: "05/2024",
      link: "https://github.com/WSm-77/python_games",
      insight: "State pattern implementation for game-loop modularity"
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % carouselProjects.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + carouselProjects.length) % carouselProjects.length);

  return (
    <div className="relative mt-20">
      <div className="text-center mb-12">
        <h2 className="text-xs font-mono electric-violet uppercase tracking-[0.3em] mb-4">Extended Portfolio</h2>
        <h3 className="text-3xl font-bold tracking-tight">Additional Projects</h3>
      </div>

      <div className="relative group">
        <div className="overflow-hidden rounded-[2.5rem] glass border border-white/60 p-1 shadow-2xl shadow-purple-500/5">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {carouselProjects.map((project, index) => (
              <div key={index} className="min-w-full p-8 md:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-[10px] font-mono electric-violet uppercase tracking-widest border border-purple-100">
                      {project.date}
                    </div>
                    <h3 className="text-4xl font-bold tracking-tight leading-tight">{project.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map(t => (
                        <span key={t} className="px-4 py-1.5 bg-white/80 rounded-xl text-xs font-semibold border border-slate-100 text-slate-700 shadow-sm">{t}</span>
                      ))}
                    </div>
                    <div className="pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/10"
                      >
                        Explore Repository <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="hidden lg:block aspect-square lg:aspect-video bg-gradient-to-br from-purple-500/5 to-indigo-600/5 rounded-3xl border border-white/80 relative overflow-hidden group/img">
                     <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.05, 0.95, 1]
                          }}
                          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Terminal className="w-32 h-32 text-purple-200/50" />
                        </motion.div>
                     </div>
                     <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/40 translate-y-4 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-500">
                        <div className="text-xs font-mono text-slate-400 mb-1">Technical Insight</div>
                        <div className="text-sm font-bold">{project.insight}</div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 z-10">
          <button
            onClick={prev}
            className="p-4 glass rounded-full hover:bg-white transition-all border border-white/80 shadow-xl hover:scale-110 active:scale-95 group"
          >
            <ChevronLeft className="w-6 h-6 text-slate-400 group-hover:text-purple-500 transition-colors" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 z-10">
          <button
            onClick={next}
            className="p-4 glass rounded-full hover:bg-white transition-all border border-white/80 shadow-xl hover:scale-110 active:scale-95 group"
          >
            <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-purple-500 transition-colors" />
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-12">
        {carouselProjects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              currentIndex === i ? "bg-purple-500 w-8" : "bg-slate-200 hover:bg-slate-300"
            )}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const skills = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      description: "Proficient in multiple paradigms, with a focus on high-performance and type-safe systems.",
      skills: ["Python", "Rust", "Java", "Go", "TypeScript", "C++"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      description: "Specializing in LLM verification frameworks and high-dimensional embedding space research.",
      skills: ["LLM Verification", "NumPy", "PyTorch", "Embedding Models", "Neural Networks"]
    },
    {
      title: "Systems & Networking",
      icon: <Cpu className="w-6 h-6" />,
      description: "Experience in building low-latency distributed systems and network security simulations.",
      skills: ["gRPC", "Scapy", "Docker", "Tokio", "Microservices", "Distributed Systems"]
    },
    {
      title: "Software Engineering",
      icon: <Layers className="w-6 h-6" />,
      description: "Applying rigorous OOP principles and scalable architecture patterns to complex software projects.",
      skills: ["OOP Design", "Scalable Architecture", "CI/CD", "Git", "Linux", "Shuttle"]
    },
    {
      title: "Algorithms & Research",
      icon: <Binary className="w-6 h-6" />,
      description: "Implementing complex computational geometry and evolutionary algorithms for research applications.",
      skills: ["Spatial Querying", "Kirkpatrick Algorithm", "Evolutionary Simulation", "Heuristics"]
    },
    {
      title: "Tools & Infrastructure",
      icon: <Terminal className="w-6 h-6" />,
      description: "Managing development environments and deployment pipelines for robust software delivery.",
      skills: ["Jupyter", "JavaFX", "Pygame", "Serenity", "Discord API"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <h2 className="text-xs font-mono electric-violet uppercase tracking-[0.3em]">Technical Expertise</h2>
          <h3 className="text-4xl font-bold tracking-tight">Core Competencies</h3>
        </div>
        <p className="text-slate-500 max-w-md text-sm leading-relaxed">
          A comprehensive set of technical skills developed through rigorous academic research and complex engineering projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            icon={skill.icon}
            description={skill.description}
            skills={skill.skills}
          />
        ))}
      </div>

      <ProjectCarousel />
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
            <motion.div
              className="text-5xl font-bold tracking-tight text-slate-900"
              style={{ fontFamily: "'Dancing Script', 'Brush Script MT'" }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              WS<span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">m</span>
            </motion.div>
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
