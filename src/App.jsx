import { useEffect, useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Linkedin,
  Menu,
  Terminal,
  X,
} from 'lucide-react'
import { capabilities, linkedin, members } from './data.js'

const navItems = [
  ['About', 'about'],
  ['Capabilities', 'capabilities'],
  ['Roster', 'roster'],
]

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="CYB3R L0GS home">
      <span className="logo-mark" aria-hidden="true">
        C<span>/</span>L
      </span>
      <span className="logo-type">CYB3R_L0GS</span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Logo />
        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ExternalLink size={14} />
          </a>
        </nav>
      </div>
    </header>
  )
}

function HeroTerminal() {
  return (
    <div className="terminal-card reveal delay-2" aria-label="CYB3R L0GS live operation preview">
      <div className="terminal-bar">
        <div className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span>op-center.log</span>
        <span className="terminal-status"><i /> live</span>
      </div>
      <div className="terminal-body">
        <p><span className="muted">$</span> ./parse --target modern_attack_surface</p>
        <p><span className="log-time">[00:01]</span> Loading operators <span className="success">[4/4]</span></p>
        <p><span className="log-time">[00:03]</span> Mapping web + API routes</p>
        <div className="signal-line">
          <span className="signal-label">SIGNAL</span>
          <span>authorization boundary mismatch</span>
          <span className="severity">HIGH</span>
        </div>
        <p><span className="log-time">[00:08]</span> Validating exploit path...</p>
        <p><span className="log-time">[00:13]</span> Evidence captured <span className="success">✓</span></p>
        <p className="terminal-cursor"><span className="muted">$</span> awaiting_next_flag<span>_</span></p>
      </div>
      <div className="terminal-footer">
        <span>PAK / UTC+5</span>
        <span>FOUNDED 2025</span>
        <span>STATUS: HUNTING</span>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <main id="top">
      <section className="hero shell">
        <div className="hero-kicker reveal">
          <span className="eyebrow-line" />
          Competitive CTF & cybersecurity team
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="reveal delay-1">
              We read the noise.<br />
              <span>Find the signal.</span>
            </h1>
            <p className="hero-lede reveal delay-2">
              CYB3R_L0GS is a collective of offensive security operators turning modern attack surfaces into solvable systems.
            </p>
            <div className="hero-actions reveal delay-3">
              <a className="button button-primary" href="#roster">
                Meet the operators <ArrowDownRight size={18} />
              </a>
              <a className="button button-ghost" href={linkedin} target="_blank" rel="noreferrer">
                Follow the logs <Linkedin size={17} />
              </a>
            </div>
          </div>
          <HeroTerminal />
        </div>
        <div className="hero-metrics reveal delay-3" aria-label="Team facts">
          <div><strong>04</strong><span>Core operators</span></div>
          <div><strong>05+</strong><span>Security domains</span></div>
          <div><strong>40+</strong><span>Labs completed</span></div>
          <div><strong>2025</strong><span>Team established</span></div>
        </div>
      </section>

      <section className="statement" id="about">
        <div className="shell statement-grid">
          <div className="section-index">[ 01 — MANIFESTO ]</div>
          <div>
            <p className="statement-copy">
              Attack surfaces are noisy. We parse the logs, question the assumptions, and follow every anomaly until it becomes <em>proof.</em>
            </p>
            <div className="statement-meta">
              <p>
                Built in Peshawar, Pakistan. Competing globally. Learning in public. We combine distinct specialties into one disciplined team.
              </p>
              <blockquote>“Together We Parse, Together We Pwn.”</blockquote>
            </div>
          </div>
        </div>
      </section>

      <Capabilities />
      <Roster />
      <Contact />
    </main>
  )
}

function SectionHeading({ index, eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <div className="section-index">[ {index} — {eyebrow} ]</div>
      <div>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  )
}

function Capabilities() {
  return (
    <section className="section shell" id="capabilities">
      <SectionHeading
        index="02"
        eyebrow="CAPABILITIES"
        title="Different disciplines. One attack chain."
        copy="We approach challenges as connected systems—because the interesting bugs rarely live inside one category."
      />
      <div className="capability-grid">
        {capabilities.map((item) => (
          <article className="capability-card" key={item.number}>
            <div className="capability-top">
              <span>{item.number}</span>
              <ArrowDownRight size={22} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <ul>
              {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function MemberCard({ member, onSelect }) {
  return (
    <article className="member-card">
      <button type="button" className="member-open" onClick={() => onSelect(member)} aria-label={`View ${member.name}'s profile`}>
        <div className="portrait-wrap">
          <img src={member.image} alt={`${member.name}, ${member.role}`} loading="lazy" />
          <span className="member-number">0{members.indexOf(member) + 1}</span>
          <span className="view-profile">View profile <ArrowRight size={15} /></span>
        </div>
        <div className="member-card-body">
          <p className="member-handle">@{member.handle}</p>
          <h3>{member.name}</h3>
          <p className="member-role">{member.role}</p>
          <div className="member-skills">
            {member.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </button>
    </article>
  )
}

function MemberModal({ member, onClose }) {
  useEffect(() => {
    const handleKey = (event) => event.key === 'Escape' && onClose()
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  if (!member) return null

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="member-modal" role="dialog" aria-modal="true" aria-labelledby="member-modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close profile"><X size={20} /></button>
        <div className="modal-image"><img src={member.image} alt="" /></div>
        <div className="modal-content">
          <p className="member-handle">@{member.handle}</p>
          <h2 id="member-modal-title">{member.name}</h2>
          <p className="modal-role">{member.role}</p>
          <p className="modal-summary">{member.summary}</p>
          <p className="member-signal"><Terminal size={15} /> {member.signal}</p>
          <a className="button button-primary" href={member.linkedin} target="_blank" rel="noreferrer">
            LinkedIn profile <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}

function Roster() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="section roster-section" id="roster">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="ROSTER"
          title="Operators behind the logs."
          copy="Four perspectives, shared methodology, and a bias toward hands-on proof."
        />
        <div className="roster-grid">
          {members.map((member) => <MemberCard key={member.name} member={member} onSelect={setSelected} />)}
        </div>
      </div>
      {selected && <MemberModal member={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="shell contact-grid">
        <div>
          <div className="section-index">[ 05 — OPEN CHANNEL ]</div>
          <h2>Got a flag worth chasing?</h2>
        </div>
        <div className="contact-side">
          <p>Competitions, security research, knowledge exchange, and serious collaborations—our channel is open.</p>
          <a className="button button-light" href={linkedin} target="_blank" rel="noreferrer">
            Connect on LinkedIn <ArrowRight size={18} />
          </a>
        </div>
      </div>
      <div className="contact-marquee" aria-hidden="true">
        <div>PARSE / PWN / DOCUMENT / SHARE / PARSE / PWN / DOCUMENT / SHARE /</div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="shell footer-inner">
        <Logo />
        <p>Competitive CTF & cybersecurity team · Peshawar, Pakistan</p>
        <div className="footer-links">
          <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} /></a>
          <a href="#top">Back to top <ChevronRight size={13} /></a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <Header />
      <Hero />
      <Footer />
    </>
  )
}
