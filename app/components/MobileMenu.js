'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function MobileMenu({ links }) {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <>
      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <nav className="nav-mobile">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  )
}
