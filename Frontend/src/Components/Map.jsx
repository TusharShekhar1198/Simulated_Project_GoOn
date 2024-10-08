import React, { useState } from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl';
import axios from 'axios';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const MapComponent = () => {
  const apiKey = import.meta.env.VITE_Ola_API_KEY;

  const [viewState, setViewState] = useState({
    longitude: 77.5946,
    latitude: 12.9716,
    zoom: 10,
  });

  const [directions, setDirections] = useState(null);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [vehicleOptions, setVehicleOptions] = useState([]);

  const fetchDirections = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/directions', {
        params: { origin, destination },
      });
      setDirections(response.data);
      fetchVehicleOptions();
    } catch (error) {
      console.error('Error fetching directions:', error);
    }
  };

  const fetchVehicleOptions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/vehicles');
      setVehicleOptions(response.data);
    } catch (error) {
      console.error('Error fetching vehicle options:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDirections();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px', width: '100%', maxWidth: '600px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Origin (lat,long):
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="12.9716,77.5946"
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Destination (lat,long):
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="13.0827,80.2707"
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>Get Directions</button>
      </form>

      <div style={{ position: 'relative', width: '100%', height: 'calc(100% - 100px)' }}>
        <DeckGL
          style={{ width: '100%', height: '100%', overflow: 'hidden' }}
          viewState={viewState}
          onViewStateChange={({ viewState }) => setViewState(viewState)}
          controller={true}
          layers={[]} 
        >
          <Map
            mapLib={maplibregl}
            mapStyle="https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json"
            transformRequest={(url, resourceType) => {
              return { url: url.includes("?") ? `${url}&api_key=${apiKey}` : `${url}?api_key=${apiKey}`, resourceType };
            }}
          />
        </DeckGL>
      </div>

      {directions && (
        <div style={{ marginTop: '20px' }}>
          <h3>Directions</h3>
          <pre>{JSON.stringify(directions, null, 2)}</pre>
        </div>
      )}

      {vehicleOptions.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Vehicle Options</h3>
          {vehicleOptions.map(vehicle => (
            <div key={vehicle._id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={vehicle.image} alt={vehicle.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <div>
                <h4>{vehicle.name}</h4>
                <p>{vehicle.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
