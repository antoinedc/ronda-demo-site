import Link from 'next/link'

const features = [
  { title: 'Design sprints', body: 'Go from rough idea to clickable prototype in one week.' },
  { title: 'Web development', body: 'Fast, accessible sites built on modern frameworks.' },
  { title: 'Ongoing support', body: 'Small changes shipped every week, no tickets lost.' },
]

export default function Home({ searchParams }) {
  const variant = searchParams['__ronda_variant'] || 'control'

  const heroHeadingStyle =
    variant === 'test'
      ? { outline: '2px solid #3b82f6' }
      : variant === 'test_2'
      ? { backgroundColor: '#10b981', color: '#fff' }
      : undefined

  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Design and development studio</p>
          <h1 style={heroHeadingStyle}>
            We build websites that small teams love
          </h1>
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