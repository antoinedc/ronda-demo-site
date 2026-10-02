'use client'

import Link from 'next/link'

export default function MobileMenu({ links, onNavigate }) {
  return (
    <nav className="nav-mobile">
      {links.map((link) => (
        <Link key={link.href} href={link.href} onClick={onNavigate}>
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
