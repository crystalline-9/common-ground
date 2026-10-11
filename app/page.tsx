import Link from "next/link";
import { categoryDetails } from "@/app/data/resources";
import { Footer, SiteHeader } from "@/components/site-header";
import { Orb } from "@/components/page-intro";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Orb className="orb-one" />
        <Orb className="orb-two" />
        <section className="hero home-hero">
          <div className="hero-copy">
            <p className="eyebrow">A community resource finder</p>
            <h1>
              A place
              <br />
              <i>to begin.</i>
            </h1>
            <p className="lede">
              Find resources, discover opportunities, and explore what&apos;s
              available in your community.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/find-resources">
                Find resources <span>→</span>
              </Link>
              <Link className="button-link" href="/ai-assistance">
                Explore AI assistance <span>↗</span>
              </Link>
            </div>
          </div>
          <div className="hero-search">
            <p className="eyebrow">Start with a place</p>
            <div className="search-field">
              <span aria-hidden="true">⌖</span>
              <input
                aria-label="Enter a location"
                placeholder="Enter a neighbourhood or postal code"
              />
              <Link
                href="/find-resources"
                className="search-arrow"
                aria-label="Search resources"
              >
                →
              </Link>
            </div>
            <p className="field-note">
              You can also browse without sharing your location.
            </p>
            <div className="trust-note">
              <span className="trust-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M12 3.5 19 6v5.2c0 4.5-2.9 7.8-7 9.3-4.1-1.5-7-4.8-7-9.3V6l7-2.5Z" />
                  <path d="m8.8 12 2.1 2.1 4.4-4.4" />
                </svg>
              </span>
              <div>
                <p className="trust-title">Free to use. No sign-up.</p>
                <p>
                  Explore resources without creating an account, sharing
                  personal information, or paying to access the platform.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="statement section-narrow">
          <p className="eyebrow">What this is about</p>
          <h2>Useful things are often closer than they feel.</h2>
          <p>
            Common Ground brings together everyday resources, welcoming spaces,
            and ways to participate—so finding a next step doesn&apos;t depend
            on knowing the right organization to call.
          </p>
        </section>
        <section className="category-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Explore by category</p>
              <h2>There&apos;s more than one way to find your way in.</h2>
            </div>
            <Link className="button-link" href="/find-resources">
              See all resources <span>→</span>
            </Link>
          </div>
          <div className="category-grid">
            {categoryDetails.map((category) => (
              <Link
                href={`/find-resources?category=${encodeURIComponent(category.name)}`}
                className={`category-card ${category.tone}`}
                key={category.name}
              >
                <span className="category-number">
                  0{categoryDetails.indexOf(category) + 1}
                </span>
                <h3>{category.name}</h3>
                <p>{category.items.join(" · ")}</p>
                <span className="category-arrow">↗</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="split-callout">
          <div>
            <p className="eyebrow">A wider idea of support</p>
            <h2>Community is not just a safety net.</h2>
          </div>
          <p>
            It&apos;s a library, a free class, a meal with people you
            haven&apos;t met yet, a place to make something, or an afternoon
            that opens up a possibility. This is a place to find those things
            too.
          </p>
        </section>
        <section className="ai-teaser">
          <div>
            <p className="eyebrow">Coming soon</p>
            <h2>Not sure where to start?</h2>
            <p>
              An approachable assistant will help you explore options in plain
              language, with no perfect question required.
            </p>
          </div>
          <Link className="button button-light" href="/ai-assistance">
            See the preview <span>→</span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
