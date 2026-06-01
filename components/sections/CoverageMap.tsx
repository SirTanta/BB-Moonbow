'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Polygon, AttributionControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Rough NC outline polygon — major vertices only for visual coverage overlay
// STUB: these are approximate polygon coordinates for visual effect, not precise state borders
const NC_POLYGON: [number, number][] = [
  [36.59, -84.32],
  [36.61, -80.29],
  [36.55, -76.92],
  [36.07, -75.72],
  [35.91, -75.46],
  [34.80, -76.67],
  [33.85, -78.56],
  [34.05, -79.68],
  [34.49, -80.78],
  [34.99, -81.04],
  [35.20, -83.11],
  [35.46, -84.29],
  [36.59, -84.32],
];

// Rough VA outline polygon — major vertices only
// STUB: these are approximate polygon coordinates for visual effect, not precise state borders
const VA_POLYGON: [number, number][] = [
  [39.46, -80.51],
  [39.46, -77.72],
  [38.96, -77.04],
  [38.79, -76.91],
  [38.02, -75.24],
  [37.12, -75.89],
  [36.55, -76.00],
  [36.55, -79.68],
  [36.59, -80.29],
  [37.29, -81.68],
  [37.75, -82.31],
  [38.45, -82.60],
  [39.10, -81.76],
  [39.46, -80.51],
];

const mapStyle: React.CSSProperties = {
  height: '400px',
  width: '100%',
  border: '2px solid var(--brass)',
  boxShadow: '0 4px 16px rgba(44,24,16,0.15)',
};

export default function CoverageMap() {
  // Fix Leaflet default icon issue in Next.js
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const L = require('leaflet');
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <MapContainer
      center={[36.5, -79.5]}
      zoom={6}
      style={mapStyle}
      attributionControl={false}
      zoomControl={true}
    >
      {/* Stamen Watercolor tiles via fastly CDN */}
      <TileLayer
        url="https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>'
      />

      <AttributionControl position="bottomright" />

      {/* NC coverage polygon */}
      <Polygon
        positions={NC_POLYGON}
        pathOptions={{
          color: 'var(--oxblood, #722f37)',
          fillColor: 'var(--oxblood, #722f37)',
          fillOpacity: 0.3,
          weight: 2,
          opacity: 0.6,
        }}
      />

      {/* VA coverage polygon */}
      <Polygon
        positions={VA_POLYGON}
        pathOptions={{
          color: 'var(--oxblood, #722f37)',
          fillColor: 'var(--oxblood, #722f37)',
          fillOpacity: 0.3,
          weight: 2,
          opacity: 0.6,
        }}
      />
    </MapContainer>
  );
}
