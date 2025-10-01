'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet with proper typing
const defaultIcon = L.Icon.Default;
delete (defaultIcon.prototype as { _getIconUrl?: () => string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Location {
  name: string;
  area: string;
  position: [number, number];
  description: string;
}

export default function MapSection() {
  const locations: Location[] = [
    { 
      name: "Agonda", 
      area: "Canacona", 
      position: [15.0111, 74.0312],
      description: "Agonda Beach, Goa" 
    },
    { 
      name: "Palolem", 
      area: "Canacona", 
      position: [15.0100, 74.0239],
      description: "Palolem Beach, Goa" 
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Beach Locations</h3>
      
      {/* Leaflet Map */}
      <div className="rounded-lg sm:rounded-xl overflow-hidden h-40 sm:h-48 mb-3 sm:mb-4">
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
      <div className="grid gap-2 sm:gap-3">
        {locations.map((location, index) => (
          <div 
            key={index}
            className="p-3 sm:p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => {
              console.log('Focus on:', location.name);
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">{location.name}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{location.area}</p>
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