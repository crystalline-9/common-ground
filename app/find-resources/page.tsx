"use client";
import { useMemo, useState } from "react";
import {
  categories,
  filterResources,
  locations,
  radii,
  type Resource,
} from "@/app/data/resources";
import { Footer, SiteHeader } from "@/components/site-header";
import {
  MapPanel,
  ResourceCard,
  ResourceDetail,
} from "@/components/resource-card";
import { Orb, PageIntro } from "@/components/page-intro";

export default function FindResources() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [freeOnly, setFreeOnly] = useState(false);
  const [radius, setRadius] = useState(25);
  const [location, setLocation] = useState("Downtown");
  const [detail, setDetail] = useState<Resource>();
  const results = useMemo(
    () => filterResources(query, selected, freeOnly, radius),
    [query, selected, freeOnly, radius],
  );
  const toggle = (category: string) =>
    setSelected((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
  const clear = () => {
    setQuery("");
    setSelected([]);
    setFreeOnly(false);
    setRadius(25);
  };
  return (
    <>
      <SiteHeader />
      <main className="finder-page">
        <Orb className="orb-three" />
        <PageIntro
          kicker="Find resources"
          title="Start where you are."
          description="Explore community resources and opportunities near a place you choose. This is a demonstration experience using sample data."
        >
          <div className="demo-note">
            <span>✦</span>
            <p>
              <strong>Demonstration mode</strong>
              <br />
              No location is collected or shared.
            </p>
          </div>
        </PageIntro>
        <section className="finder-layout">
          <aside className="filters">
            <div className="filter-block">
              <label htmlFor="location">Your starting point</label>
              <div className="location-input">
                <span>⌖</span>
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  {locations.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
              <p className="filter-help">
                Eventually, you&apos;ll be able to use your location, enter an
                address, or drop a pin.
              </p>
            </div>
            <div className="filter-block">
              <label htmlFor="keyword">Search by keyword</label>
              <input
                id="keyword"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try “food” or “classes”"
              />
            </div>
            <div className="filter-block">
              <span className="filter-label">Categories</span>
              <div className="check-list">
                {categories.map((category) => (
                  <label key={category}>
                    <input
                      type="checkbox"
                      checked={selected.includes(category)}
                      onChange={() => toggle(category)}
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="filter-block">
              <label htmlFor="radius">Search radius</label>
              <select
                id="radius"
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
              >
                {radii.map((item) => (
                  <option key={item} value={item}>
                    {item} km
                  </option>
                ))}
              </select>
            </div>
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={freeOnly}
                onChange={(e) => setFreeOnly(e.target.checked)}
              />
              <span className="fake-toggle" />
              Show free resources only
            </label>
            <button className="clear-button" onClick={clear}>
              Clear filters
            </button>
          </aside>
          <div className="results-area">
            <MapPanel selectedId={detail?.id} />
            <div className="results-heading">
              <div>
                <p className="eyebrow">
                  {results.length} results near {location}
                </p>
                <h2>Places to explore</h2>
              </div>
              <span className="result-sort">Closest first</span>
            </div>
            <div className="resource-list">
              {results.length ? (
                results.map((resource) => (
                  <ResourceCard
                    resource={resource}
                    onSelect={setDetail}
                    key={resource.id}
                  />
                ))
              ) : (
                <div className="empty-state">
                  <h3>No matches just yet.</h3>
                  <p>Try widening your radius or clearing a filter.</p>
                </div>
              )}
            </div>
            <p className="disclaimer">
              <strong>Important:</strong> Demonstration data only. Resources and
              availability have not been verified.
            </p>
          </div>
        </section>
      </main>
      {detail && (
        <ResourceDetail
          resource={detail}
          onClose={() => setDetail(undefined)}
        />
      )}
      <Footer />
    </>
  );
}
