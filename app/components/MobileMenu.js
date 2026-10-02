'use client'

import Link from 'next/link'

export default function MobileMenu({ open, onToggle, onNavigate, links }) {
  return (
    <>
      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={onToggle}
      >
        {open ? '✕' : '☰'}
      </button>
      {open && (
        <nav className="nav-mobile">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={onNavigate}>{l.label}</Link>
          ))}
        </nav>
      )}
    </>
  )
}
