import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const features = [
  { title: 'Design sprints', body: 'Go from rough idea to clickable prototype in one week.' },
  { title: 'Web development', body: 'Fast, accessible sites built on modern frameworks.' },
  { title: 'Ongoing support', body: 'Small changes shipped every week, no tickets lost.' },
]

export default function Home({ searchParams }) {
  const variant = searchParams?.['__ronda_variant'] === 'control' || searchParams?.['__ronda_variant'] === 'test' || searchParams?.['__ronda_variant'] === 'test_2' ? searchParams?.['__ronda_variant'] : 'control'
  
  if (typeof window !== 'undefined') {
    if (searchParams?.['__ronda_variant']) {
      sessionStorage.setItem('__ronda_variant', searchParams?.['__ronda_variant'])
    } else {
      const storedVariant = sessionStorage.getItem('__ronda_variant')
      if (storedVariant === 'test' || storedVariant === 'test_2') {
        sessionStorage.setItem('__ronda_variant', storedVariant)
      }
    }
  }
  
  const getHeadingColor = () => {
    switch (variant) {
      case 'test': return '#0ea5e9' // blue
      case 'test_2': return '#22c55e' // green
      default: return 'inherit' // original color
    }
  }
  
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Design and development studio</p>
          <h1 style={{ color: getHeadingColor() }}>We build websites that small teams love</h1>
          <p className="lead">
            Brightside helps founders launch and improve their marketing site without hiring a full team.
          </p>
          <div className="actions">
            <Link href="/pricing" className="button primary">See pricing</Link>
            <a href="#features" className="button">How we work</a>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container grid">
          {features.map((f) => (
            <div key={f.title} className="card">
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
