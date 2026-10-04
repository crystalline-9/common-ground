'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { navItems, projectName } from '@/app/data/resources'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return <header className="site-header"><Link className="wordmark" href="/" onClick={() => setOpen(false)}><span className="wordmark-mark">+</span><span>{projectName}<small>a prototype</small></span></Link><button className="menu-button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}><span className="sr-only">Toggle navigation</span>{open ? 'Close' : 'Menu'}</button><nav id="site-nav" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">{navItems.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? 'active' : ''} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav></header>
}

export function Footer() { return <footer className="site-footer"><span className="footer-mark">+</span><span>Common Ground <em>is a frontend prototype.</em></span><span className="footer-note">Designed for possibility, participation, and belonging.</span></footer> }
