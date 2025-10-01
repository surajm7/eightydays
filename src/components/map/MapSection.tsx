'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function MapSection() {
  const locations = [
    { 
      name: "Agonda", 
      area: "Canacona", 
      position: [15.0111, 74.0312] as [number, number],
      description: "Agonda Beach, Goa" 
    },
    { 
      name: "Palolem", 
      area: "Canacona", 
      position: [15.0100, 74.0239] as [number, number],
      description: "Palolem Beach, Goa" 
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Beach Locations</h3>
      
      {/* Leaflet Map */}
      <div className="rounded-xl overflow-hidden h-48 mb-4">
        <MapContainer
          center={[15.0111, 74.0312]}
          zoom={12}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location, index) => (
            <Marker key={index} position={location.position}>
              <Popup>
                <div className="text-sm">
                  <strong>{location.name}</strong>
                  <br />
                  {location.area}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      {/* Location Cards */}
      <div className="grid gap-3">
        {locations.map((location, index) => (
          <div 
            key={index}
            className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => {
              // You can add map focus logic here
              console.log('Focus on:', location.name);
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-gray-900 text-lg">{location.name}</h4>
                <p className="text-gray-600 text-sm">{location.area}</p>
              </div>
              <div className="text-right">
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  Beach
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}