"use client";

import { useEffect, useRef } from "react";
import * as maplibregl from "maplibre-gl";
import { setWorkerUrl } from "maplibre-gl";

export function InteractiveMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    setWorkerUrl(
      new URL(
        "maplibre-gl/dist/maplibre-gl-worker.mjs",
        import.meta.url,
      ).toString(),
    );

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [-79.42, 44.61],
      zoom: 12,
    });

    map.addControl(
      new maplibregl.NavigationControl({
        showCompass: true,
        showZoom: true,
        visualizePitch: false,
      }),
      "top-right",
    );

    return () => map.remove();
  }, []);

  return (
    <div
      ref={containerRef}
      className="interactive-map"
      aria-label="Interactive map of the area"
    />
  );
}
