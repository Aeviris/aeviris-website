import React from 'react'
import { motion } from 'framer-motion'
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

function Reveal({ children, delay = 0, className = '' }) { return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .55, delay }}>{children}</motion.div> }
function Label({ children }) { return <p className="eyebrow">{children}</p> }
function Status({ children }) { return <span className={`product-status ${children.toLowerCase().replaceAll(' ', '-')}`}>{children}</span> }

export default function ProductsPage() {
  return <main className="products-page">
    <section className="products-hero">
      <div className="products-constellation" aria-hidden="true"><span /><span /><span /><span /><span /><i /><i /><i /><b /><b /><b /></div>
      <div className="products-hero-copy"><Label>Aeviris AI / Product ecosystem</Label><h1>Products<br /><em>built for the future.</em></h1><p>Discover the ecosystem of AI products, developer platforms, research initiatives, and intelligent systems we are building to shape the future of artificial intelligence.</p><div className="products-chips">{['Artificial Intelligence', 'Machine Learning', 'Agentic AI', 'Computer Vision', 'Edge AI', 'Developer Tools', 'Open Source', 'Research'].map((item) => <span key={item}>{item}</span>)}</div></div>
      <div className="ecosystem-visual" aria-label="Connected AI product ecosystem"><div className="visual-ring ring-a" /><div className="visual-ring ring-b" /><div className="visual-core"><span>AI</span><small>AEVIRIS</small></div>{['LEARN', 'API', 'AGENTS', 'VISION', 'EDGE'].map((item, i) => <span key={item} className={`visual-node node-${i}`}>{item}</span>)}</div>
    </section>

    <section className="featured-product products-width"><Reveal><Label>Featured product</Label><div className="featured-grid"><div><div className="featured-title"><span className="product-symbol">◈</span><div><Status>LIVE</Status><h2>Aeviris Learn</h2></div></div><p className="featured-description">A focused AI learning platform that helps people understand difficult ideas, practice deliberately, and build the confidence to apply what they know.</p><div className="feature-list"><span>10K+ Topics</span><span>AI Tutor</span><span>Projects</span><span>Interview Prep</span><span>Cross Platform</span></div><div className="featured-actions"><a className="pill-button" href="#ecosystem">Learn more <Icon name="arrow" size={16} /></a><a className="text-button" href="#contact">Visit platform <Icon name="arrow" size={16} /></a></div></div><div className="learn-mockup"><div className="mockup-top"><span /><span /><span /><small>aeviris / learn</small></div><div className="mockup-body"><div className="mockup-sidebar"><b>Learn</b><span>Explore</span><span>Practice</span><span>Projects</span></div><div className="mockup-main"><small>YOUR LEARNING PATH</small><h3>Build understanding<br /><em>that compounds.</em></h3><div className="mockup-progress"><span style={{ width: '68%' }} /></div><div className="mockup-cards"><i /><i /><i /></div></div></div></div></div></Reveal></section>

    <section id="ecosystem" className="ecosystem-section products-width"><Reveal><Label>The ecosystem</Label><h2>One vision.<br /><em>Many ways to build.</em></h2><p className="products-section-copy">Each product is designed to stand on its own—and become more powerful when connected to the rest of the Aeviris ecosystem.</p></Reveal><div className="ecosystem-grid">{ecosystem.map(([icon, name, status, description, tech], index) => <Reveal key={name} delay={(index % 3) * .06}><article className="ecosystem-card"><span className="ecosystem-icon">{icon}</span><Status>{status}</Status><h3>{name}</h3><p>{description}</p><small>{tech}</small><a href="#contact">Explore <Icon name="arrow" size={15} /></a></article></Reveal>)}</div></section>

    <section id="research" className="research-section"><div className="products-width"><Reveal><Label>Research & innovation</Label><h2>Questions worth<br /><em>going deeper on.</em></h2><p className="products-section-copy">The products begin with research. These are the areas where we are exploring what intelligent systems can become.</p></Reveal><div className="research-grid">{research.map((item, index) => <a className="research-card" href="#contact" key={item}><span>0{index + 1}</span><h3>{item}</h3><p>Explore the frontier of useful intelligence.</p><strong>Read research →</strong></a>)}</div></div></section>

    <section className="stack-section products-width"><Reveal><Label>Technology stack</Label><h2>Built with the<br /><em>best foundations.</em></h2></Reveal><div className="technology-cloud">{technologies.map((item) => <span key={item}>{item}</span>)}</div></section>

    <section className="roadmap-section products-width"><Reveal><Label>Development roadmap</Label><h2>A clear direction.<br /><em>A long horizon.</em></h2></Reveal><div className="products-roadmap">{roadmap.map(([date, title], index) => <div className="roadmap-step" key={`${date}-${title}`}><span className="roadmap-dot" /><small>{date}</small><strong>{title}</strong>{index < roadmap.length - 1 && <i />}</div>)}</div></section>

    <section className="why-products products-width"><Reveal><Label>Why our products</Label><h2>Research-driven.<br /><em>People-first.</em></h2></Reveal><div className="why-grid">{['Research Driven', 'Privacy First', 'Scalable', 'Developer Friendly', 'Cross Platform', 'Edge Optimized', 'Open Ecosystem', 'Fast & Reliable'].map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3><p>Thoughtful engineering for real-world impact.</p></div>)}</div></section>

    <section className="products-cta" id="contact"><Reveal><Label>Build with Aeviris</Label><h2>Building the next<br /><em>generation of AI.</em></h2><p>We’re just getting started. Join us as we build intelligent products for the future.</p><div><a className="pill-button" href="#research">Explore research <Icon name="arrow" size={16} /></a><a className="text-button" href="mailto:hello@aeviris.ai">Contact us <Icon name="arrow" size={16} /></a></div></Reveal></section>
  </main>
}
