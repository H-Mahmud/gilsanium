import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
const DefaultIcon = L.icon({ iconUrl, shadowUrl });
L.Marker.prototype.options.icon = DefaultIcon;

export default function StoreMap() {
  return (
    <MapContainer
      center={[23.8103, 90.4125]}
      className="h-full w-full rounded-md"
      scrollWheelZoom={true}
      zoom={12}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[23.8103, 90.4125]}>
        <Popup>Dhaka City Center</Popup>
      </Marker>
    </MapContainer>
  );
}
