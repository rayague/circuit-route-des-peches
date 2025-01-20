// components/MapWithMarkers.js
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline
} from "react-leaflet";
import L from "leaflet";
import { useState } from "react";

// Liste des points d'intérêt de la Route des Pêches au Bénin
const pointsOfInterest = [
  {
    title: "Port de pêche de Cotonou",
    description: "Le port de pêche de Cotonou est le plus grand du Bénin.",
    coordinates: [6.3665, 2.4224] // Cotonou
  },
  {
    title: "Plage de Fidjrossè",
    description: "Plage emblématique, très prisée des locaux et des touristes.",
    coordinates: [6.34, 2.4415] // Fidjrossè
  },
  {
    title: "Cotonou",
    description: "La capitale économique du Bénin, un centre urbain dynamique.",
    coordinates: [6.3665, 2.4272] // Cotonou centre
  },
  {
    title: "Ouidah",
    description: "Ville historique et centre de la culture vaudou.",
    coordinates: [6.3537, 2.0873] // Ouidah
  },
  {
    title: "Grand-Popo",
    description: "Plage magnifique et village de pêcheurs traditionnels.",
    coordinates: [6.3528, 1.9659] // Grand-Popo
  },
  {
    title: "Locogohoué",
    description:
      "Petit village de pêcheurs avec une belle vue sur l'Atlantique.",
    coordinates: [6.4344, 1.9602] // Locogohoué
  }
];

// Route des pêches (coordonnées approximatives pour dessiner la ligne)
const routeCoordinates = [
  [6.3665, 2.4224], // Port de pêche de Cotonou
  [6.34, 2.4415], // Plage de Fidjrossè
  [6.3537, 2.0873], // Ouidah
  [6.3528, 1.9659], // Grand-Popo
  [6.4344, 1.9602] // Locogohoué
];

export default function MapWithMarkers() {
  const position = [6.3665, 2.4272]; // Point central de la carte (Cotonou)

  return (
    <MapContainer
      center={position}
      zoom={8} // Zoom initial
      style={{ height: "100%", width: "100%" }}
      maxBounds={[
        [37.0, -20.0], // Limites en haut à gauche de l'Afrique
        [-35.0, 51.0] // Limites en bas à droite de l'Afrique
      ]}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marqueurs pour les points d'intérêt */}
      {pointsOfInterest.map((poi, index) => (
        <Marker
          key={index}
          position={poi.coordinates}
          icon={
            new L.Icon({
              iconUrl:
                "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34]
            })
          }
        >
          <Popup>
            <strong>{poi.title}</strong>
            <br />
            {poi.description}
          </Popup>
        </Marker>
      ))}

      {/* Trace de la Route des Pêches */}
      <Polyline positions={routeCoordinates} color="blue" weight={5} />
    </MapContainer>
  );
}
