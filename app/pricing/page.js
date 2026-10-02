export const metadata = { title: 'Pricing | Brightside Studio' }

const plans = [
  { name: 'Starter', price: '$900', per: 'per month', items: ['Up to 4 page updates', 'Email support'] },
  { name: 'Growth', price: '$2,400', per: 'per month', items: ['Unlimited page updates', 'Weekly check-in', 'A/B test setup'] },
  { name: 'Launch', price: '$6,000', per: 'one-time', items: ['New 5-page site', 'Copywriting', 'Two rounds of revisions'] },
]

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <h1>Simple pricing</h1>
        <p className="lead">Pick a plan. Change or cancel any time.</p>
        <div className="grid">
          {plans.map((p) => (
            <div key={p.name} className="card">
              <h3>{p.name}</h3>
              <p className="price">{p.price} <span>{p.per}</span></p>
              <ul>
                {p.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
