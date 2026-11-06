import type { Resource } from "@/app/data/resources";
import { InteractiveMap } from "@/components/interactive-map";

export function ResourceCard({
  resource,
  onSelect,
}: {
  resource: Resource;
  onSelect: (resource: Resource) => void;
}) {
  return (
    <article className="resource-card">
      <div className="resource-card-top">
        <span className="eyebrow">{resource.resourceType}</span>
        <span className="distance">{resource.distance} km</span>
      </div>
      <h3>{resource.name}</h3>
      <p>{resource.description}</p>
      <div className="resource-meta">
        <span>{resource.address}</span>
        <span>{resource.cost}</span>
      </div>
      <div className="resource-card-bottom">
        <span className="status-dot">{resource.lastVerified}</span>
        <button className="text-button" onClick={() => onSelect(resource)}>
          View details <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );
}

export function ResourceDetail({
  resource,
  onClose,
}: {
  resource: Resource;
  onClose: () => void;
}) {
  return (
    <div
      className="detail-panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-title"
    >
      <div className="detail-heading">
        <span className="eyebrow">{resource.resourceType}</span>
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close details"
        >
          ×
        </button>
      </div>
      <h2 id="detail-title">{resource.name}</h2>
      <p className="detail-description">{resource.description}</p>
      <dl className="detail-list">
        <div>
          <dt>Location</dt>
          <dd>
            {resource.address} · {resource.distance} km away
          </dd>
        </div>
        <div>
          <dt>Hours</dt>
          <dd>{resource.hours}</dd>
        </div>
        <div>
          <dt>Cost</dt>
          <dd>{resource.cost}</dd>
        </div>
        <div>
          <dt>Eligibility</dt>
          <dd>{resource.eligibility}</dd>
        </div>
        <div>
          <dt>Access</dt>
          <dd>{resource.accessibility}</dd>
        </div>
        <div>
          <dt>Contact</dt>
          <dd>
            {resource.phone} · {resource.website}
          </dd>
        </div>
      </dl>
      <p className="detail-source">
        {resource.source}. This is demonstration data and has not been verified.
      </p>
    </div>
  );
}

export function MapPanel({
  resources,
  selectedId,
}: {
  resources: Resource[];
  selectedId?: string;
}) {
  void resources;
  void selectedId;

  return (
    <div className="map-panel" aria-label="Interactive map">
      <InteractiveMap />
    </div>
  );
}
