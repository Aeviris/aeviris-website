import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Icon } from './Header'

const ecosystem = [
  ['◈', 'AEVIRIS Learn', 'LIVE', 'An AI learning platform for deeper understanding and deliberate practice.', 'AI Tutor · Projects · Cross-platform'],
  ['⌘', 'AEVIRIS API', 'BETA', 'Production-ready intelligence for teams building the next generation of software.', 'LLMs · Agents · Developer APIs'],
  ['◉', 'Agent Studio', 'IN DEVELOPMENT', 'A workspace for creating, testing, and orchestrating autonomous agents.', 'Agentic AI · Workflows · Tools'],
  ['◎', 'Vision AI', 'COMING SOON', 'Computer vision systems designed to understand the world with context.', 'Multimodal · Vision · Perception'],
  ['▣', 'Edge AI SDK', 'COMING SOON', 'Efficient intelligence that runs closer to the people and devices it serves.', 'TinyML · ONNX · Edge inference'],
  ['◌', 'Speech AI', 'RESEARCH', 'Natural voice intelligence for more human and accessible interfaces.', 'Audio · Voice · Multimodal'],
  ['▤', 'Data Intelligence', 'RESEARCH', 'Turn complex data into decisions with dependable AI analytics.', 'Data systems · Analytics · Retrieval'],
  ['◇', 'LLM Studio', 'RESEARCH', 'Tools and foundations for building capable, efficient language models.', 'LLMs · Training · Evaluation'],
]
const research = ['TinyML', 'Neuromorphic Computing', 'Efficient LLMs', 'Autonomous Agents', 'Edge Intelligence', 'Distributed AI', 'Multimodal Systems', 'Responsible AI']
const technologies = ['Python', 'PyTorch', 'TensorFlow', 'LangChain', 'LangGraph', 'FastAPI', 'Flutter', 'Firebase', 'Docker', 'Kubernetes', 'ONNX', 'OpenCV', 'Vector Databases']
const roadmap = [['2026', 'AEVIRIS Learn'], ['Next', 'AEVIRIS API'], ['Next', 'Agent Studio'], ['Future', 'Vision AI'], ['Future', 'Edge SDK'], ['Future', 'LLM Studio'], ['Beyond', 'Robotics AI']]
const learnPlayStoreUrl = 'https://play.google.com/store/apps/details?id=com.Claustronic.Clasutronic_Learn&hl=en_IN'

function Reveal({ children, delay = 0, className = '' }) { return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .55, delay }}>{children}</motion.div> }
function Label({ children }) { return <p className="eyebrow">{children}</p> }
function Status({ children }) { return <span className={`product-status ${children.toLowerCase().replaceAll(' ', '-')}`}>{children}</span> }

const architectureStates = [
  { label: 'SYSTEM / 01', nodes: [['Research Engine', 18, 24], ['Aeviris Learn', 50, 18], ['Vision AI', 50, 57], ['Impact', 84, 80]], edges: [[0, 1], [0, 2], [1, 3], [2, 3]] },
  { label: 'SYSTEM / 02', nodes: [['Research Engine', 18, 24], ['Developer API', 50, 18], ['Agent Studio', 50, 57], ['Impact', 84, 80]], edges: [[0, 1], [0, 2], [1, 3], [2, 3]] },
  { label: 'SYSTEM / 03', nodes: [['Research Engine', 18, 24], ['Edge SDK', 50, 18], ['Aeviris Learn', 50, 57], ['Impact', 84, 80]], edges: [[0, 1], [0, 2], [1, 3], [2, 3]] },
]

export function StoryArchitecture() {
  const visualRef = useRef(null)
  const isVisible = useInView(visualRef, { once: true, amount: .35 })
  const [stateIndex, setStateIndex] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => setStateIndex((current) => (current + 1) % architectureStates.length), 8000)
    return () => window.clearInterval(timer)
  }, [])
  const state = architectureStates[stateIndex]
  return <div ref={visualRef} className="ecosystem-visual story-architecture" aria-label="Interactive AI product ecosystem architecture"><div className="story-blueprint" /><div className="story-meta"><span>AEVIRIS / PRODUCT ECOSYSTEM</span><b>{state.label}</b></div><svg className="story-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><g key={stateIndex}>{state.edges.map(([from, to], index) => <motion.line key={`${stateIndex}-${index}`} x1={state.nodes[from][1]} y1={state.nodes[from][2]} x2={state.nodes[to][1]} y2={state.nodes[to][2]} initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }} transition={{ duration: 1.4, delay: index * .16, ease: 'easeInOut' }} />)}</g></svg><div className="story-nodes">{state.nodes.map(([name, x, y], index) => <motion.div key={`${stateIndex}-${name}`} className={`story-node ${name === 'Impact' ? 'impact' : ''}`} style={{ left: `${x}%`, top: `${y}%` }} initial={{ opacity: 0, scale: .88 }} animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : .88 }} transition={{ duration: .7, delay: index * .1 }}><span className="story-node-dot" /><strong>{name}</strong><small>{name === 'Research Engine' ? 'Curiosity layer' : name === 'Impact' ? 'Real-world outcomes' : 'Intelligent system'}</small></motion.div>)}</div><motion.div className="story-core" initial={{ opacity: 0, scale: .7 }} animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : .7 }} transition={{ duration: .9, delay: .25 }}><span>AI</span><small>AEVIRIS</small></motion.div><div className="story-footer"><span>RESEARCH</span><i>↗</i><span>ENGINEERING</span><i>↗</i><span>IMPACT</span></div></div>
}

function CleanArchitecture() {
  const visualRef = useRef(null)
  const isVisible = useInView(visualRef, { once: true, amount: .35 })
  const [stateIndex, setStateIndex] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => setStateIndex((current) => (current + 1) % architectureStates.length), 8000)
    return () => window.clearInterval(timer)
  }, [])
  const state = architectureStates[stateIndex]
  return <div ref={visualRef} className="ecosystem-visual clean-architecture" aria-label="Animated connected AI architecture"><div className="clean-blueprint" /><svg className="clean-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><g key={stateIndex}>{state.edges.map(([from, to], index) => <motion.line key={`${stateIndex}-${index}`} x1={state.nodes[from][1]} y1={state.nodes[from][2]} x2={state.nodes[to][1]} y2={state.nodes[to][2]} initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: isVisible ? 1 : 0, opacity: isVisible ? .9 : 0 }} transition={{ duration: 1.5, delay: index * .14 }} />)}</g></svg><div className="clean-nodes">{state.nodes.map(([name, x, y], index) => <motion.i key={`${stateIndex}-${index}`} style={{ left: `${x}%`, top: `${y}%` }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }} transition={{ duration: .6, delay: index * .12 }}><span>{name}</span></motion.i>)}</div><motion.b className="clean-core" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }} transition={{ duration: .8, delay: .2 }}><span>AI</span><small>AEVIRIS</small></motion.b></div>
}

function LivingArchitecture() {
  const [stateIndex, setStateIndex] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => setStateIndex((current) => (current + 1) % architectureStates.length), 8000)
    return () => window.clearInterval(timer)
  }, [])
  const state = architectureStates[stateIndex]
  return <div className="ecosystem-visual living-architecture" aria-label="Animated AI product architecture map"><div className="blueprint-grid" /><div className="architecture-meta"><span>AEVIRIS / LIVE ARCHITECTURE</span><b>{state.label}</b></div><svg className="architecture-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><defs><filter id="architectureGlow"><feGaussianBlur stdDeviation="1.8" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs><g key={stateIndex} filter="url(#architectureGlow)">{state.edges.map(([from, to], index) => <motion.line key={`${stateIndex}-${index}`} x1={state.nodes[from][1]} y1={state.nodes[from][2]} x2={state.nodes[to][1]} y2={state.nodes[to][2]} initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} exit={{ pathLength: 0, opacity: 0 }} transition={{ duration: 1.8, delay: index * .15, ease: 'easeInOut' }} />)}</g></svg><div className="architecture-nodes">{state.nodes.map(([name, x, y], index) => <motion.div key={`${stateIndex}-${name}`} className={`architecture-node ${name === 'Products' || name === 'Models' ? 'primary' : ''}`} style={{ left: `${x}%`, top: `${y}%` }} initial={{ opacity: 0, scale: .65, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .7 }} transition={{ duration: .65, delay: index * .12 }}><span className="node-pulse" /><strong>{name}</strong><small>{name === 'Research' ? 'Curiosity layer' : name === 'Impact' ? 'Real-world outcomes' : name === 'Models' ? 'Learned intelligence' : name === 'Developer API' ? 'Build with AI' : 'Practical systems'}</small></motion.div>)}</div><div className="architecture-core"><span>AI</span><small>AEVIRIS</small></div><div className="architecture-footer"><span>RESEARCH</span><i>↗</i><span>ENGINEERING</span><i>↗</i><span>IMPACT</span></div></div>
}

export default function ProductsPage() {
  return <main className="products-page">
    <section className="products-hero">
      <div className="products-constellation" aria-hidden="true"><span /><span /><span /><span /><span /><i /><i /><i /><b /><b /><b /></div>
      <div className="products-hero-copy"><Label>Aeviris AI / Product ecosystem</Label><h1>Products<br /><em>built for the future.</em></h1><p>Discover the ecosystem of AI products, developer platforms, research initiatives, and intelligent systems we are building to shape the future of artificial intelligence.</p><div className="products-chips">{['Artificial Intelligence', 'Machine Learning', 'Agentic AI', 'Computer Vision', 'Edge AI', 'Developer Tools', 'Open Source', 'Research'].map((item) => <span key={item}>{item}</span>)}</div></div>
      <CleanArchitecture />
    </section>

    <section className="featured-product products-width"><Reveal><Label>Featured product</Label><div className="featured-grid"><div><div className="featured-title"><span className="product-symbol">◈</span><div><Status>LIVE</Status><h2>Aeviris Learn</h2></div></div><p className="featured-description">A focused AI learning platform that helps people understand difficult ideas, practice deliberately, and build the confidence to apply what they know.</p><div className="feature-list"><span>10K+ Topics</span><span>AI Tutor</span><span>Projects</span><span>Interview Prep</span><span>Cross Platform</span></div><div className="featured-actions"><a className="pill-button" href={learnPlayStoreUrl} target="_blank" rel="noreferrer">Get App <Icon name="arrow" size={16} /></a><a className="text-button" href={learnPlayStoreUrl} target="_blank" rel="noreferrer">Open on Play Store <Icon name="arrow" size={16} /></a></div></div><div className="learn-mockup"><div className="mockup-top"><span /><span /><span /><small>aeviris / learn</small></div><div className="mockup-body"><div className="mockup-sidebar"><b>Learn</b><span>Explore</span><span>Practice</span><span>Projects</span></div><div className="mockup-main"><small>YOUR LEARNING PATH</small><h3>Build understanding<br /><em>that compounds.</em></h3><div className="mockup-progress"><span style={{ width: '68%' }} /></div><div className="mockup-cards"><i /><i /><i /></div></div></div></div></div></Reveal></section>

    <section id="ecosystem" className="ecosystem-section products-width"><Reveal><Label>The ecosystem</Label><h2>One vision.<br /><em>Many ways to build.</em></h2><p className="products-section-copy">Each product is designed to stand on its own—and become more powerful when connected to the rest of the Aeviris ecosystem.</p></Reveal><div className="ecosystem-grid">{ecosystem.map(([icon, name, status, description, tech], index) => <Reveal key={name} delay={(index % 3) * .06}><article className="ecosystem-card"><span className="ecosystem-icon">{icon}</span><Status>{status}</Status><h3>{name}</h3><p>{description}</p><small>{tech}</small><a href="#contact">Explore <Icon name="arrow" size={15} /></a></article></Reveal>)}</div></section>

    <section id="research" className="research-section"><div className="products-width"><Reveal><Label>Research & innovation</Label><h2>Questions worth<br /><em>going deeper on.</em></h2><p className="products-section-copy">The products begin with research. These are the areas where we are exploring what intelligent systems can become.</p></Reveal><div className="research-grid">{research.map((item, index) => <a className="research-card" href="#contact" key={item}><span>0{index + 1}</span><h3>{item}</h3><p>Explore the frontier of useful intelligence.</p><strong>Read research →</strong></a>)}</div></div></section>

    <section className="stack-section products-width"><Reveal><Label>Technology stack</Label><h2>Built with the<br /><em>best foundations.</em></h2></Reveal><div className="technology-cloud">{technologies.map((item) => <span key={item}>{item}</span>)}</div></section>

    <section className="roadmap-section products-width"><Reveal><Label>Development roadmap</Label><h2>A clear direction.<br /><em>A long horizon.</em></h2></Reveal><div className="products-roadmap">{roadmap.map(([date, title], index) => <div className="roadmap-step" key={`${date}-${title}`}><span className="roadmap-dot" /><small>{date}</small><strong>{title}</strong>{index < roadmap.length - 1 && <i />}</div>)}</div></section>

    <section className="why-products products-width"><Reveal><Label>Why our products</Label><h2>Research-driven.<br /><em>People-first.</em></h2></Reveal><div className="why-grid">{['Research Driven', 'Privacy First', 'Scalable', 'Developer Friendly', 'Cross Platform', 'Edge Optimized', 'Open Ecosystem', 'Fast & Reliable'].map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3><p>Thoughtful engineering for real-world impact.</p></div>)}</div></section>

    <section className="products-cta" id="contact"><Reveal><Label>Build with Aeviris</Label><h2>Building the next<br /><em>generation of AI.</em></h2><p>We’re just getting started. Join us as we build intelligent products for the future.</p><div><a className="pill-button" href="#research">Explore research <Icon name="arrow" size={16} /></a><a className="text-button" href="mailto:hello@aeviris.ai">Contact us <Icon name="arrow" size={16} /></a></div></Reveal></section>
  </main>
}
