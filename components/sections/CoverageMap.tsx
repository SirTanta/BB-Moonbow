'use client';

import { MapContainer, TileLayer, Polygon, AttributionControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const STADIA_KEY = process.env.NEXT_PUBLIC_STADIA_API_KEY ?? '';

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
  return (
    <MapContainer
      center={[36.5, -79.5]}
      zoom={6}
      style={mapStyle}
      attributionControl={false}
      zoomControl={true}
    >
      {/* Stamen Watercolor tiles via Stadia Maps CDN */}
      <TileLayer
        url={`https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg${STADIA_KEY ? `?api_key=${STADIA_KEY}` : ''}`}
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      <AttributionControl position="bottomright" />

      {/* NC coverage polygon */}
      <Polygon
        positions={NC_POLYGON}
        pathOptions={{
          color: '#722f37',
          fillColor: '#722f37',
          fillOpacity: 0.3,
          weight: 2,
          opacity: 0.6,
        }}
      />

      {/* VA coverage polygon */}
      <Polygon
        positions={VA_POLYGON}
        pathOptions={{
          color: '#722f37',
          fillColor: '#722f37',
          fillOpacity: 0.3,
          weight: 2,
          opacity: 0.6,
        }}
      />
    </MapContainer>
  );
}
