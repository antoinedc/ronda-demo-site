import Link from 'next/link'

const features = [
  { title: 'Design sprints', body: 'Go from rough idea to clickable prototype in one week.' },
  { title: 'Web development', body: 'Fast, accessible sites built on modern frameworks.' },
  { title: 'Ongoing support', body: 'Small changes shipped every week, no tickets lost.' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Design and development studio</p>
          <h1>Freestyle preview is live.</h1>
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
