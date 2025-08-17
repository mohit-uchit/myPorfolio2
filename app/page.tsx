'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Server,
  Shield,
  Bot,
  Zap,
  Database,
  Github,
  Download,
  Menu,
  X,
  ChevronDown,
  ShoppingCart,
  Gamepad2,
  FolderSyncIcon as Sync,
  ExternalLink,
  Terminal,
  Lock,
  Wifi,
  Activity,
  BookOpen,
  TrendingUp,
  Star,
  Sparkles,
  Cpu,
  Globe,
  Mail,
  Phone,
  Linkedin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

function TypewriterText() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = [
    '> initializing_system...',
    '> loading_neural_networks...',
    '> scanning_vulnerabilities...',
    '> deploying_microservices...',
    '> optimizing_database_queries...',
    '> securing_api_endpoints...',
    '> penetration_testing_active...',
    '> system_ready_for_deployment...',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentPhrase = phrases[currentIndex];
      if (text.length < currentPhrase.length) {
        setText(currentPhrase.slice(0, text.length + 1));
      } else {
        setTimeout(() => {
          setText('');
          setCurrentIndex(prev => (prev + 1) % phrases.length);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [text, currentIndex, phrases]);

  return (
    <div className="relative">
      <span className="text-blue-400 font-mono">
        {text}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
          className="text-blue-300"
        >
          |
        </motion.span>
      </span>
      <div className="absolute -inset-1 bg-blue-400/10 blur-sm rounded opacity-30"></div>
    </div>
  );
}

function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-slate-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

function CodeBlock() {
  const codeLines = [
    'const mohit = new BackendEngineer();',
    "mohit.skills = ['Node.js', 'Redis', 'MySQL'];",
    "mohit.deploy('production');",
    "console.log('System Online ✓');",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute bottom-4 left-4 bg-slate-900/95 backdrop-blur-xl p-4 rounded-xl border border-slate-700/50 font-mono text-xs max-w-xs shadow-2xl
                 hidden sm:block
                 sm:text-sm sm:p-6 sm:max-w-sm
                 lg:text-sm lg:max-w-xs
                 transform-gpu perspective-1000"
      style={{
        transform: 'rotateX(5deg) rotateY(-5deg)',
        boxShadow:
          '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="flex items-center space-x-2 mb-3">
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-red-400 rounded-full shadow-lg"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg"></div>
        </div>
        <span className="text-slate-400 text-xs">terminal</span>
      </div>
      {codeLines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.5, duration: 0.5 }}
          className="text-blue-300 mb-1 text-xs sm:text-sm break-all"
        >
          <span className="text-slate-500 mr-2">$</span>
          <span className="break-words">{line}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ProgressBar({
  skill,
  progress,
  color,
}: {
  skill: string;
  progress: number;
  color: string;
}) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-slate-300 flex items-center">
          <Cpu className="w-4 h-4 mr-2 text-blue-400" />
          {skill}
        </span>
        <span className="text-sm text-blue-400 font-mono">{progress}%</span>
      </div>
      <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden shadow-inner">
        <motion.div
          className={`h-3 rounded-full ${color} relative overflow-hidden shadow-lg`}
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          transition={{ duration: 2, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{
            boxShadow:
              'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.3)',
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: [-100, 300] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const services = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description:
        'Scalable REST APIs with Node.js, Express, and modern frameworks',
      gradient: 'from-slate-600 to-slate-800',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'API Integration',
      description:
        'Seamless third-party integrations and comprehensive API testing',
      gradient: 'from-blue-600 to-slate-700',
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Telegram Bots',
      description:
        'Custom bots for automation, notifications, and user engagement',
      gradient: 'from-slate-700 to-blue-800',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Task Automation',
      description:
        'Selenium scripts and JavaScript automation for repetitive tasks',
      gradient: 'from-slate-600 to-slate-800',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Design',
      description: 'Full-stack portals with secure backend architecture',
      gradient: 'from-blue-700 to-slate-800',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Testing',
      description: 'OWASP ZAP testing and ethical hacking security assessments',
      gradient: 'from-slate-700 to-slate-900',
    },
  ];

  const projects = [
    {
      name: 'VPS King Portal',
      description:
        'VPS selling portal with integrated UPI payment gateway and admin panel for managing users, coupon codes, and VPS variants efficiently',
      tech: ['Node.js', 'MySQL', 'Express.js', 'UPI Gateway'],
      github: 'https://github.com/mohit-uchit/vpkingserver',
      icon: <ShoppingCart className="w-12 h-12" />,
      color: 'from-blue-500 to-slate-600',
    },
    {
      name: 'Linode Manager Bot',
      description:
        'Automated Linode Cloud Management via Telegram Bot with proxy creation, SSH command execution, and cron job automation',
      tech: ['Node.js', 'Telegram API', 'Linode API', 'Redis'],
      github: 'https://github.com/mohit-uchit/linodeManagerBot',
      icon: <Bot className="w-12 h-12" />,
      color: 'from-slate-500 to-blue-600',
    },
    {
      name: 'ServerSync Portal',
      description:
        'Cloud-based VPS management system with API-based automation for VPS deployment, scaling, and monitoring',
      tech: ['Node.js', 'Express.js', 'Cloud APIs', 'MySQL'],
      github: 'https://github.com/mohit-uchit/serversync',
      icon: <Sync className="w-12 h-12" />,
      color: 'from-blue-600 to-slate-700',
    },
    {
      name: 'Sarth Esports Platform',
      description:
        'Competitive gaming platform for managing esports tournaments with real-time leaderboard and ranking system',
      tech: ['TypeScript', 'Vue.js', 'Tailwind CSS', 'Express.js'],
      github: 'https://github.com/mohit-uchit/sarthEsports',
      icon: <Gamepad2 className="w-12 h-12" />,
      color: 'from-slate-600 to-blue-700',
    },
  ];

  const expertSkills = [
    'JavaScript',
    'C++',
    'SQL',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Sequelize',
    'Redis',
    'BullMQ',
    'Git',
    'GitHub',
    'MySQL',
    'Linux',
    'AWS S3',
    'OWASP ZAP',
    'Postman',
  ];

  const learningSkills = [
    {
      name: 'React.js',
      progress: 75,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
    },
    {
      name: 'TypeScript',
      progress: 65,
      color: 'bg-gradient-to-r from-slate-500 to-blue-600',
    },
    {
      name: 'Vue.js',
      progress: 80,
      color: 'bg-gradient-to-r from-blue-400 to-slate-600',
    },
    {
      name: 'Tailwind CSS',
      progress: 85,
      color: 'bg-gradient-to-r from-slate-400 to-blue-500',
    },
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/Mohit_Uchit_Resume.pdf';
    link.download = 'Mohit_Uchit_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const telegramMessage = `🚀 New Contact Form Submission

👤 Name: ${formData.name}
📧 Email: ${formData.email}
💬 Message: ${formData.message}

📅 Time: ${new Date().toLocaleString()}
🌐 From: Portfolio Website`;

      const response = await fetch(
        `https://api.telegram.org/bot8067555330:AAEB2Vmf4oXipUFozzqiYoyu6gd3vwXRIIY/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: '6588896137',
            text: telegramMessage,
            parse_mode: 'HTML',
          }),
        },
      );

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden relative">
      {/* Subtle Mouse Follower */}
      <motion.div
        className="fixed w-4 h-4 bg-blue-400/30 rounded-full pointer-events-none z-50 mix-blend-screen blur-sm"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Background Effects */}
      <FloatingParticles />

      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.02%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
      </div>

      {/* Enhanced Navigation with 3D effect */}
      <nav
        className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50"
        style={{
          boxShadow:
            '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotateY: 10 }}
                transition={{ duration: 0.3 }}
                className="relative group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-slate-400/20 rounded-full blur-md opacity-50 animate-pulse group-hover:opacity-75 transition-opacity"></div>
                <div
                  className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-600 shadow-2xl"
                  style={{
                    boxShadow:
                      '0 8px 25px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Image
                    src="/images/mohit-profile.jpg"
                    alt="Mohit Uchit"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </motion.div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Mohit Uchit
                </span>
                <div className="text-xs text-slate-400 font-mono">
                  Backend Engineer
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative transition-all duration-300 px-4 py-2 rounded-lg ${
                    activeSection === item.id
                      ? 'text-white bg-slate-700/50 shadow-lg'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow:
                      activeSection === item.id
                        ? '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        : 'none',
                  }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 shadow-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow:
                  '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50"
            >
              <div className="px-4 py-2 space-y-2">
                {navItems.map(item => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-3 px-4 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50"
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Enhanced Hero Section with 3D elements */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        <CodeBlock />

        <div className="max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0.8, rotateX: 20 }}
              animate={{ scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
                <span
                  className="bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent"
                  style={{
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
                  }}
                >
                  Backend Engineer
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-3xl text-slate-300 mb-6 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-blue-400">Cloud Automation</span> •{' '}
              <span className="text-slate-300">Cybersecurity Expert</span> •{' '}
              <span className="text-blue-300">API Specialist</span>
            </motion.p>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div
                className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 max-w-2xl mx-auto shadow-2xl"
                style={{
                  boxShadow:
                    '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                }}
              >
                <TypewriterText />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white px-10 py-4 text-lg rounded-xl transition-all duration-300 shadow-2xl border border-slate-600/50 group"
                  style={{
                    boxShadow:
                      '0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Terminal className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Hire Me Now
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection('projects')}
                  variant="outline"
                  className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-white px-10 py-4 text-lg rounded-xl transition-all duration-300 shadow-lg"
                  style={{
                    boxShadow:
                      '0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <Globe className="w-5 h-5 mr-2" />
                  View Projects
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-10 h-10 text-blue-400 animate-bounce" />
        </motion.div>
      </section>

      {/* Enhanced About Section with 3D cards */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl font-bold text-center mb-16 relative"
              whileInView={{ scale: [0.8, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                className="order-2 md:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Backend Engineer with expertise in{' '}
                  <span className="text-blue-400 font-semibold">Node.js</span>,{' '}
                  <span className="text-slate-200 font-semibold">MySQL</span>,
                  and <span className="text-blue-300 font-semibold">Redis</span>
                  , delivering scalable APIs and optimizing system performance
                  by up to <span className="text-green-400 font-bold">45%</span>
                  . Currently working at Truckpedia, I specialize in building
                  robust backend architectures, automating cloud operations, and
                  implementing secure web systems.
                </p>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  My experience spans from developing marketing campaign systems
                  and QR code tracking solutions to creating automated cloud
                  management bots. I'm passionate about{' '}
                  <span className="text-red-400 font-semibold">
                    cybersecurity
                  </span>
                  , having organized webinars and developed penetration testing
                  tools, while maintaining a focus on efficiency, scalability,
                  and reliability in all projects.
                </p>

                {/* Enhanced Stats with 3D effect */}
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
                    className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm shadow-2xl"
                    style={{
                      boxShadow:
                        '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <Lock className="w-6 h-6 text-green-400" />
                      <span className="text-green-400 font-mono font-semibold">
                        Security
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-white mb-1">100%</p>
                    <p className="text-sm text-slate-400">Penetration Tests</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -5, rotateY: -5 }}
                    className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm shadow-2xl"
                    style={{
                      boxShadow:
                        '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <Activity className="w-6 h-6 text-blue-400" />
                      <span className="text-blue-400 font-mono font-semibold">
                        Performance
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-white mb-1">45%</p>
                    <p className="text-sm text-slate-400">Optimization</p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="order-1 md:order-2 flex justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  className="relative group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Enhanced 3D profile image */}
                  <div
                    className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-slate-600 shadow-2xl group-hover:shadow-blue-500/20 transition-shadow duration-300"
                    style={{
                      boxShadow:
                        '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <Image
                      src="/images/mohit-profile.jpg"
                      alt="Mohit Uchit - Backend Engineer"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                  </div>

                  {/* Floating tech icons with 3D effect */}
                  {[Terminal, Code, Database, Shield].map((Icon, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-12 h-12 bg-slate-800/90 rounded-xl flex items-center justify-center border border-slate-600/50 backdrop-blur-sm shadow-xl"
                      style={{
                        top: `${20 + index * 20}%`,
                        left: index % 2 === 0 ? '-10%' : '110%',
                        boxShadow:
                          '0 8px 25px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                      }}
                      animate={{
                        y: [0, -10, 0],
                        rotateY: [0, 360],
                      }}
                      transition={{
                        duration: 3 + index,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5,
                      }}
                      whileHover={{ scale: 1.2, rotateX: 15 }}
                    >
                      <Icon className="w-6 h-6 text-blue-400" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              {/* Enhanced Expert Skills with 3D cards */}
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full shadow-2xl"
                  style={{
                    boxShadow:
                      '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center">
                      <Terminal className="w-6 h-6 mr-3" />
                      Expert Skills
                      <Star className="w-5 h-5 ml-2 text-yellow-400" />
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {expertSkills.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, y: -3, rotateX: 10 }}
                          className="px-4 py-2 bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-full text-sm border border-slate-600/30 cursor-pointer font-mono hover:border-slate-500/50 transition-all duration-200 shadow-lg"
                          style={{
                            boxShadow:
                              '0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enhanced Learning Progress with 3D effect */}
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full shadow-2xl"
                  style={{
                    boxShadow:
                      '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center">
                      <BookOpen className="w-6 h-6 mr-3" />
                      Currently Learning
                      <TrendingUp className="w-5 h-5 ml-2 text-green-400" />
                    </h3>
                    <div className="space-y-6">
                      {learningSkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <ProgressBar
                            skill={skill.name}
                            progress={skill.progress}
                            color={skill.color}
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center text-sm text-slate-400 bg-green-500/10 p-3 rounded-lg border border-green-500/20">
                      <Sparkles className="w-4 h-4 mr-2 text-green-400" />
                      Actively improving through hands-on projects
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section with 3D cards */}
      <section
        id="experience"
        className="py-20 px-4 relative z-10 bg-gradient-to-b from-slate-900/20 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl font-bold text-center mb-16 relative"
              whileInView={{ scale: [0.8, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Work Experience
              </span>
            </motion.h2>

            <div className="space-y-8">
              <motion.div
                whileHover={{ scale: 1.02, y: -5, rotateX: 2 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border-slate-700/30 hover:border-slate-600/60 transition-all duration-300 overflow-hidden relative shadow-2xl"
                  style={{
                    boxShadow:
                      '0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-slate-600"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-blue-400 flex items-center mb-2">
                          <Server className="w-6 h-6 mr-3" />
                          Backend Engineer
                        </h3>
                        <p className="text-xl text-white font-medium">
                          Truckpedia
                        </p>
                        <p className="text-slate-400 flex items-center">
                          <Globe className="w-4 h-4 mr-2" />
                          Los Angeles, CA
                        </p>
                      </div>
                      <span className="text-blue-400 font-medium font-mono bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/30 shadow-lg">
                        Oct 2023 - Present
                      </span>
                    </div>
                    <ul className="text-slate-300 space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">▶</span>
                        Developed scalable solutions using MySQL, Sequelize,
                        Node.js, Redis, and BullMQ
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">▶</span>
                        Designed and implemented REST APIs and integrated
                        third-party APIs for seamless system communication
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">▶</span>
                        Optimized cron jobs to automate scheduled tasks,
                        enhancing operational efficiency
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">▶</span>
                        Built a marketing campaign system to streamline
                        promotional activities and customer engagement
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">▶</span>
                        Created a QR code system for transport managers to
                        improve tracking and security
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">★</span>
                        <span className="text-green-400 font-semibold">
                          Reduced ORM-based database query complexity by 39%,
                          boosting performance and scalability
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5, rotateX: 2 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border-slate-700/30 hover:border-slate-600/60 transition-all duration-300 overflow-hidden relative shadow-2xl"
                  style={{
                    boxShadow:
                      '0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-500 to-blue-600"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-blue-400 flex items-center mb-2">
                          <Code className="w-6 h-6 mr-3" />
                          Backend Engineer
                        </h3>
                        <p className="text-xl text-white font-medium">
                          Freelance Projects
                        </p>
                        <p className="text-slate-400 flex items-center">
                          <Wifi className="w-4 h-4 mr-2" />
                          Remote
                        </p>
                      </div>
                      <span className="text-blue-400 font-medium font-mono bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/30 shadow-lg">
                        Feb 2022 - Jun 2023
                      </span>
                    </div>
                    <ul className="text-slate-300 space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">▶</span>
                        Built a Linode Akamai Cloud Manager Bot using Node.js,
                        automating proxy creation faster than the Akamai portal
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">★</span>
                        <span className="text-green-400 font-semibold">
                          Improved backend efficiency by 45% through reduced
                          code complexity and enhanced performance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">▶</span>
                        Integrated Redis to optimize cron jobs, significantly
                        speeding up server operations
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">▶</span>
                        Designed backend architecture to balance complexity,
                        scalability, and reliability
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section with 3D cards */}
      <section id="services" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl font-bold text-center mb-16 relative"
              whileInView={{ scale: [0.8, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                  className="group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Card
                    className="h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border-slate-700/30 hover:border-slate-600/60 transition-all duration-300 relative overflow-hidden shadow-2xl"
                    style={{
                      boxShadow:
                        '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <CardContent className="p-8 relative z-10">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.2, rotateY: 15 }}
                        className="text-blue-400 mb-6 group-hover:text-slate-200 transition-colors duration-300"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Projects Section with 3D effects */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl font-bold text-center mb-16 relative"
              whileInView={{ scale: [0.8, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -10, rotateY: 5 }}
                  className="group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Card
                    className="h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border-slate-700/30 hover:border-slate-600/60 transition-all duration-300 overflow-hidden shadow-2xl"
                    style={{
                      boxShadow:
                        '0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div
                      className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.3, rotateY: 15 }}
                        transition={{ duration: 0.8 }}
                        className="text-white/90 z-10 relative"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {project.icon}
                      </motion.div>

                      <div className="absolute inset-0 bg-black/20"></div>

                      {/* Subtle animated particles */}
                      <div className="absolute inset-0">
                        {Array.from({ length: 15 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/20 rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              y: [0, -20, 0],
                              opacity: [0.2, 0.6, 0.2],
                            }}
                            transition={{
                              duration: 3 + Math.random() * 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map(tech => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.1, y: -2, rotateX: 10 }}
                            className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300 border border-slate-600/30 font-mono hover:border-slate-500/50 transition-all duration-200 shadow-lg"
                            style={{
                              boxShadow:
                                '0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-600/50 text-slate-400 hover:bg-slate-700/50 hover:text-white bg-transparent group-hover:border-slate-500 transition-all duration-300 shadow-lg"
                          onClick={() => window.open(project.github, '_blank')}
                          style={{
                            boxShadow:
                              '0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                          }}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                          <ExternalLink className="w-3 h-3 ml-2" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Resume Section */}
      <section id="resume" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl font-bold mb-8 relative"
              whileInView={{ scale: [0.8, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Resume
              </span>
            </motion.h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Download my complete resume to learn more about my experience,
              skills, and certifications.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Button
                onClick={downloadResume}
                className="bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white px-12 py-4 text-lg rounded-xl transition-all duration-300 shadow-2xl border border-slate-600/50 group"
                style={{
                  boxShadow:
                    '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                }}
              >
                <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Download Resume PDF
                <Sparkles className="w-5 h-5 ml-3" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Education & Certifications Section */}
      <section id="education" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl font-bold text-center mb-16 relative"
              whileInView={{ scale: [0.8, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Education & Certifications
              </span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.03, y: -5, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border-slate-700/30 hover:border-slate-600/60 transition-all duration-300 h-full shadow-2xl"
                  style={{
                    boxShadow:
                      '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center">
                      <Database className="w-6 h-6 mr-3" />
                      Education
                    </h3>
                    <div className="space-y-4">
                      <p className="text-xl text-white font-medium">
                        B.Tech - Computer Science and Engineering
                      </p>
                      <p className="text-lg text-slate-300">
                        IITM (DCRUST Murthal)
                      </p>
                      <p className="text-slate-400 flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        Murthal, Haryana
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -5, rotateY: -5 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border-slate-700/30 hover:border-slate-600/60 transition-all duration-300 h-full shadow-2xl"
                  style={{
                    boxShadow:
                      '0 15px 35px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center">
                      <Shield className="w-6 h-6 mr-3" />
                      Certifications
                    </h3>
                    <ul className="text-slate-300 space-y-4">
                      <li className="flex items-center">
                        <Star className="w-4 h-4 mr-3 text-yellow-400" />
                        Node.js - Udemy
                      </li>
                      <li className="flex items-center">
                        <Star className="w-4 h-4 mr-3 text-yellow-400" />
                        Ethical Hacking - Code Virus Security
                      </li>
                      <li className="flex items-center">
                        <Star className="w-4 h-4 mr-3 text-yellow-400" />
                        Web Security Fundamentals - Great Learning
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl font-bold text-center mb-16 relative"
              whileInView={{ scale: [0.8, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-blue-400 flex items-center">
                  <Wifi className="w-6 h-6 sm:w-8 sm:h-8 mr-3" />
                  Let's Work Together
                </h3>
                <p className="text-base sm:text-lg text-slate-300 mb-8 sm:mb-10 leading-relaxed">
                  Ready to build something amazing? I'm available for freelance
                  projects, consulting, and full-time opportunities. Let's
                  discuss how I can help bring your backend vision to life.
                </p>

                <div className="space-y-4 sm:space-y-6">
                  <motion.a
                    href="mailto:official.mohit.uchit@gmail.com"
                    whileHover={{ x: 10, scale: 1.02, rotateY: 5 }}
                    className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 bg-slate-800/30 rounded-lg border border-slate-700/20 hover:border-slate-600/40 transition-all duration-300 cursor-pointer shadow-lg"
                    style={{
                      boxShadow:
                        '0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300 font-mono text-sm sm:text-lg break-all">
                      official.mohit.uchit@gmail.com
                    </span>
                  </motion.a>
                  <motion.a
                    href="tel:+919996974063"
                    whileHover={{ x: 10, scale: 1.02, rotateY: 5 }}
                    className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 bg-slate-800/30 rounded-lg border border-slate-700/20 hover:border-slate-600/40 transition-all duration-300 cursor-pointer shadow-lg"
                    style={{
                      boxShadow:
                        '0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300 font-mono text-sm sm:text-lg">
                      +91-9996974063
                    </span>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/mohituchit"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10, scale: 1.02, rotateY: 5 }}
                    className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 bg-slate-800/30 rounded-lg border border-slate-700/20 hover:border-slate-600/40 transition-all duration-300 cursor-pointer shadow-lg"
                    style={{
                      boxShadow:
                        '0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300 font-mono text-sm sm:text-lg break-all">
                      linkedin.com/in/mohituchit
                    </span>
                  </motion.a>
                  <motion.a
                    href="https://github.com/mohit-uchit"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10, scale: 1.02, rotateY: 5 }}
                    className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 bg-slate-800/30 rounded-lg border border-slate-700/20 hover:border-slate-600/40 transition-all duration-300 cursor-pointer shadow-lg"
                    style={{
                      boxShadow:
                        '0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300 font-mono text-sm sm:text-lg break-all">
                      github.com/mohit-uchit
                    </span>
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 shadow-2xl"
                  style={{
                    boxShadow:
                      '0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          required
                          className="w-full bg-slate-800/50 border border-slate-700/30 text-white placeholder-slate-400 font-mono text-lg p-4 rounded-lg focus:border-blue-400 focus:outline-none transition-all duration-300 shadow-inner"
                          style={{
                            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                          }}
                        />
                      </motion.div>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                          required
                          className="w-full bg-slate-800/50 border border-slate-700/30 text-white placeholder-slate-400 font-mono text-lg p-4 rounded-lg focus:border-blue-400 focus:outline-none transition-all duration-300 shadow-inner"
                          style={{
                            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                          }}
                        />
                      </motion.div>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Your Message"
                          rows={5}
                          required
                          className="w-full bg-slate-800/50 border border-slate-700/30 text-white placeholder-slate-400 font-mono text-lg p-4 rounded-lg focus:border-blue-400 focus:outline-none transition-all duration-300 resize-none shadow-inner"
                          style={{
                            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                          }}
                        />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white py-4 text-lg font-semibold disabled:opacity-50 transition-all duration-300 shadow-2xl border border-slate-600/50"
                          style={{
                            boxShadow:
                              '0 8px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                          }}
                        >
                          <Terminal className="w-5 h-5 mr-3" />
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: 'linear',
                                }}
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-3"
                              />
                              Sending...
                            </>
                          ) : (
                            'Send Message'
                          )}
                          <Sparkles className="w-5 h-5 ml-3" />
                        </Button>
                      </motion.div>

                      <AnimatePresence>
                        {submitStatus === 'success' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.8 }}
                            className="text-green-400 text-center font-mono text-lg bg-green-500/10 p-4 rounded-lg border border-green-500/30"
                          >
                            ✅ Message sent successfully!
                          </motion.div>
                        )}

                        {submitStatus === 'error' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.8 }}
                            className="text-red-400 text-center font-mono text-lg bg-red-500/10 p-4 rounded-lg border border-red-500/30"
                          >
                            ❌ Failed to send message. Please try again.
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-8 sm:py-12 px-4 border-t border-slate-700/30 relative z-10 bg-gradient-to-t from-slate-900/50 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400 font-mono text-sm sm:text-lg mb-4 px-4">
              © 2024 Mohit Uchit.
            </p>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <motion.a
                href="https://github.com/mohit-uchit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5, y: -3 }}
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohituchit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5, y: -3 }}
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer" />
              </motion.a>
              <motion.a
                href="mailto:official.mohit.uchit@gmail.com"
                whileHover={{ scale: 1.2, rotate: 5, y: -3 }}
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
