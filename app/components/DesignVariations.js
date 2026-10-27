import Link from 'next/link'
import './DesignVariations.css'

const variants = [
  { key: 'A', label: 'Editorial' },
  { key: 'B', label: 'After hours' },
  { key: 'C', label: 'Good energy' },
]
const services = [
  ['01', 'Design sprints', 'Go from rough idea to clickable prototype in one week.'],
  ['02', 'Web development', 'Fast, accessible sites built on modern frameworks.'],
  ['03', 'Ongoing support', 'Small changes shipped every week, no tickets lost.'],
]
const plans = [
  ['Starter', '$900', '/ month', 'Up to 4 page updates · Email support'],
  ['Growth', '$2,400', '/ month', 'Unlimited page updates · Weekly check-in · A/B test setup'],
  ['Launch', '$6,000', 'one-time', 'New 5-page site · Copywriting · Two rounds of revisions'],
]

function Sun({ className = '' }) {
  return <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true"><circle cx="50" cy="50" r="21" fill="currentColor" />{Array.from({length: 12}, (_, i) => <path key={i} d="M50 4V18" stroke="currentColor" strokeWidth="5" transform={'rotate(' + i * 30 + ' 50 50)'} />)}</svg>
}

function Actions() {
  return <div className="v-actions"><a className="v-primary" href="#plans">Find your plan <span aria-hidden="true">↗︎</span></a><a className="v-secondary" href="#services">How we work <span aria-hidden="true">↓</span></a></div>
}

function Editorial() {
  return <section className="v-hero editorial-hero">
    <div className="v-hero-copy">
      <p className="v-kicker">Small team. Bright possibilities.</p>
      <h1>A little studio.<br />A <em>brighter</em><br />website.</h1>
      <p className="v-intro">Thoughtful design and development for founders ready for their next chapter.</p>
      <Actions />
      <p className="v-note">From first idea to the next small improvement.</p>
    </div>
    <div className="editorial-art" role="img" aria-label="Illustrative website design with olive green arches and a warm yellow sun">
      <div className="art-caption"><span>THE SHAPE OF WHAT’S NEXT</span><span>01 / 03</span></div>
      <div className="arch-scene"><div className="arch arch-back" /><div className="arch arch-front" /><Sun className="editorial-sun" /><div className="scene-line" /></div>
      <div className="art-bottom"><span>A fresh perspective.</span><span>Built around you. ↗︎</span></div>
      <div className="paper-tag">Made with care.<br /><em>Built to grow.</em></div>
    </div>
  </section>
}

function AfterHours() {
  return <section className="v-hero dark-hero">
    <div className="v-hero-copy">
      <p className="v-kicker"><span className="status-dot" /> YOUR NEXT CHAPTER, ONLINE</p>
      <h1>Small team.<br />Big ideas.<br /><span>Ship them.</span></h1>
      <p className="v-intro">Your design and development partner. From the first prototype to the site you keep making better.</p>
      <Actions />
      <div className="dark-note"><span>DESIGN</span><span>BUILD</span><span>KEEP GOING ↗︎</span></div>
    </div>
    <div className="dark-art" role="img" aria-label="Concept website preview on a technical grid with green orbital graphics">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <span className="coord coord-top">BRIGHTSIDE / DIGITAL STUDIO</span>
      <div className="browser-concept">
        <div className="browser-top"><i /><i /><i /><span>YOUR NEXT BIG THING</span><span>↗︎</span></div>
        <div className="concept-body"><span className="concept-logo">onward®</span><span className="concept-label">A WEBSITE CONCEPT</span><h2>Make<br />your move.</h2><div className="concept-pill">Let’s get started ↗︎</div><div className="concept-sphere" /></div>
        <div className="browser-bottom"><span>01 — A NEW PERSPECTIVE</span><span>SCROLL TO EXPLORE ↓</span></div>
      </div>
      <div className="floating-label"><span className="status-dot" /> Idea → prototype → launch</div>
      <span className="coord coord-bottom">BUILT FOR WHAT COMES NEXT +</span>
    </div>
  </section>
}

function GoodEnergy() {
  return <>
    <section className="v-hero playful-hero">
      <div className="v-hero-copy">
        <p className="v-kicker">YOUR SMALL TEAM’S NEXT BIG THING</p>
        <h1>Big dreams.<br />Small team.<br /><span>Bright side.</span></h1>
        <p className="v-intro">We make the website. You make your next move. Design, development, and a little good energy.</p>
        <Actions />
      </div>
      <div className="playful-art" role="img" aria-label="Playful yellow sunshine illustration and stacked colorful website cards">
        <span className="playful-caption">A FRESH START LOOKS GOOD ON YOU.</span>
        <Sun className="playful-sun" />
        <div className="playful-window"><div className="playful-window-top"><span>● ● ●</span><span>hello, possibility ↗︎</span></div><div className="playful-window-body"><span>YOUR NEXT CHAPTER</span><strong>Oh, hey.<br />Looking<br /><em>bright.</em></strong><div className="mini-button">Let’s make it happen ↗︎</div></div></div>
        <div className="round-sticker">SMALL TEAM<br /><span>↗︎</span><br />BIG ENERGY</div>
      </div>
    </section>
    <div className="energy-strip"><span>GOOD DESIGN</span><span aria-hidden="true">✳︎</span><span>GREAT WEBSITES</span><span aria-hidden="true">✳︎</span><span>BRIGHT IDEAS</span><span aria-hidden="true">✳︎</span><span>LET’S BUILD</span></div>
  </>
}

export default function DesignVariations({ variant }) {
  return <div className={'design-variation variant-' + variant}>
    <nav className="v-compare" aria-label="Compare design variations"><span>DESIGN EXPLORATIONS</span><div><Link href="/">Original</Link>{variants.map(v => <Link key={v.key} href={'/?__ronda_variant=' + v.key} aria-current={variant === v.key ? 'page' : undefined}>{v.key} <span>{v.label}</span></Link>)}</div></nav>
    <header className="v-header"><Link className="v-logo" href={'/?__ronda_variant=' + variant}><Sun />brightside<span className="logo-period">®</span></Link><nav aria-label="Main navigation"><a href="#services">What we do</a><a href="#plans">Pricing</a><a className="v-nav-cta" href="#plans">Let’s build <span aria-hidden="true">↗︎</span></a></nav></header>
    {variant === 'A' ? <Editorial /> : variant === 'B' ? <AfterHours /> : <GoodEnergy />}
    <section id="services" className="v-services"><div className="v-section-head"><p className="v-kicker">FROM FIRST IDEA TO WHAT’S NEXT</p><h2>A small studio.<br />All the right skills.</h2><p>Design, development, and ongoing care.<br />The support you need, without a full team.</p></div><div className="v-service-grid">{services.map(([n,title,body]) => <article key={n}><span className="service-number">{n} /</span><h3>{title}<span aria-hidden="true">↗︎</span></h3><p>{body}</p></article>)}</div></section>
    <section id="plans" className="v-plans"><div className="v-section-head"><p className="v-kicker">ROOM TO GROW</p><h2>Your next step,<br />simply priced.</h2><p>Find the right fit for your team.</p></div><div className="v-plan-grid">{plans.map(([name,price,period,details]) => <article key={name}><h3>{name}</h3><p className="v-price">{price} <span>{period}</span></p><p>{details}</p></article>)}</div></section>
    <footer className="v-footer"><Link className="v-logo" href={'/?__ronda_variant=' + variant}><Sun />brightside</Link><span>© {new Date().getFullYear()} Brightside Studio. Ronda demo.</span><a href="#">Back to the bright side ↑</a></footer>
  </div>
}
