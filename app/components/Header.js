'use client'

import Link from 'next/link'
import MobileMenu from './MobileMenu'

const links = [
  { href: '/', label: 'Home' },
  { href: '/#features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">Brightside</Link>

        <nav className="nav-desktop">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>

        <MobileMenu links={links} />
      </div>
    </header>
  )
}
