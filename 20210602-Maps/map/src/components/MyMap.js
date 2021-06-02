import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { restaurants } from '../restaurants';

const MyMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.0815867,
    longitude: 14.4271704,
    zoom: 14,
  });

  const [chosenPopup, setChosenPopup] = useState(null);

  return (
    <ReactMapGL
      mapStyle={{
        version: 8,
        sources: {
          'raster-tiles': {
            type: 'raster',
            tiles: ['https://mapserver.mapy.cz/base-m/{z}-{x}-{y}'],
            tileSize: 256,
            attribution:
              'Mapové podklady od <a target="_top" rel="noopener" href="https://mapy.cz/">Seznam.cz</a> a <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>.',
          },
        },
        layers: [
          {
            id: 'simple-tiles',
            type: 'raster',
            source: 'raster-tiles',
            minzoom: 0,
            maxzoom: 20,
          },
        ],
      }}
      width="100%"
      height={400}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <GeolocateControl
        style={{
          right: 10,
          top: 10,
        }}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      />
      {restaurants.map((restaurant) => (
        <React.Fragment key={restaurant.id}>
          <Marker
            latitude={restaurant.lat}
            longitude={restaurant.long}
            offsetLeft={-25}
            offsetTop={-50}
          >
            <img
              onClick={() => {
                setChosenPopup(restaurant.id);
              }}
              src={restaurant.icon}
              width={50}
              height={50}
              alt={restaurant.name}
            />
          </Marker>
          {chosenPopup === restaurant.id ? (
            <Popup
              latitude={restaurant.lat}
              longitude={restaurant.long}
              offsetTop={-60}
              onClose={() => setChosenPopup(null)}
            >
              {restaurant.name}
            </Popup>
          ) : null}
        </React.Fragment>
      ))}
    </ReactMapGL>
  );
};

export default MyMap;
