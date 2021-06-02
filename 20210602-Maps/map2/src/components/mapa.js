import React, { useState } from 'react';
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import spendlikUrl from '../img/spendlik.svg';
import bagrUrl from '../img/bagr.svg';
import infoUrl from '../img/info.svg';
import kotvaUrl from '../img/kotva.svg';
import './marker-button.css';
import './ovladani.css';

const mista = [
  {
    id: 1,
    ikonaUrl: bagrUrl,
    latitude: 50.08415631476569,
    longitude: 14.423472469019359,
  },
  {
    id: 2,
    ikonaUrl: infoUrl,
    latitude: 50.08140252219053,
    longitude: 14.425123690476866,
  },
  {
    id: 3,
    ikonaUrl: infoUrl,
    latitude: 50.08315119880879,
    longitude: 14.42713937555392,
  },
  {
    id: 4,
    ikonaUrl: bagrUrl,
    latitude: 50.08147136893371,
    longitude: 14.427310912961879,
  },
];

export const Mapa = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.08221135864258,
    longitude: 14.426607731018066,
    zoom: 15,
  });

  const [popupOtevren, setPopupOtevren] = useState(false);
  const [bargrySkryty, setBargrySkryty] = useState(false);
  const [polohaKotvy, setPolohaKotvy] = useState({
    latitude: 50.07991082461841,
    longitude: 14.423133523227039,
  });

  return (
    <>
      <ReactMapGL
        onClick={(event) =>
          setPolohaKotvy({
            latitude: event.lngLat[1],
            longitude: event.lngLat[0],
          })
        }
        mapStyle={{
          version: 8,
          sources: {
            'raster-tiles': {
              type: 'raster',
              tiles: ['https://mapserver.mapy.cz/zemepis-m/{z}-{x}-{y}'],
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
        {...viewport}
        width="100%"
        height={400}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <div className="ovladani">
          <NavigationControl />
          <GeolocateControl />
        </div>
        {mista
          .filter(
            (misto) => bargrySkryty === false || misto.ikonaUrl !== bagrUrl,
          )
          .map((misto) => (
            <Marker
              key={misto.id}
              latitude={misto.latitude}
              longitude={misto.longitude}
              offsetLeft={-15}
              offsetTop={-15}
            >
              <img src={misto.ikonaUrl} width={30} height={30} alt="" />
            </Marker>
          ))}
        <Marker
          latitude={50.08211135864258}
          longitude={14.426697731018066}
          offsetLeft={-25}
          offsetTop={-50}
        >
          <button
            onClick={() => setPopupOtevren(true)}
            className="marker-button"
          >
            <img src={spendlikUrl} width={50} height={50} alt="Czechitas" />
          </button>
        </Marker>
        {popupOtevren && (
          <Popup
            latitude={50.0833715}
            longitude={14.4252452}
            offsetTop={-50}
            onClose={() => setPopupOtevren(false)}
          >
            Czechitas
          </Popup>
        )}
        <Marker
          {...polohaKotvy}
          offsetLeft={-25}
          offsetTop={-50}
          draggable
          onDragEnd={(event) =>
            setPolohaKotvy({
              latitude: event.lngLat[1],
              longitude: event.lngLat[0],
            })
          }
        >
          <img
            src={kotvaUrl}
            width={50}
            height={50}
            alt="kotva"
            style={{ pointerEvents: 'none' }}
          />
        </Marker>
      </ReactMapGL>
      <button onClick={() => setBargrySkryty(!bargrySkryty)}>
        {bargrySkryty ? 'zobrazit' : 'skrýt'} bagry
      </button>
    </>
  );
};
