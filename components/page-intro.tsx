import type { ReactNode } from 'react'

export function PageIntro({ kicker, title, description, children }: { kicker: string; title: string; description: string; children?: ReactNode }) { return <section className="page-intro"><div><p className="eyebrow">{kicker}</p><h1>{title}</h1><p className="lede">{description}</p></div>{children}</section> }

export function Orb({ className = '' }: { className?: string }) { return <div aria-hidden="true" className={`orb ${className}`} /> }
