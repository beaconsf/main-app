import React from 'react';
import GoogleMap from 'google-map-react';
import config from '../../../mapConfig';
import Event from './Event.jsx';

const Map = props => {
  const { events, zoom, event } = props;
  const center = {
    lat: event.loc[0],
    lng: event.loc[1]
  };

  return (
    <div style={{ height: '100vh', width: '70%' }}>
      <GoogleMap
        bootstrapURLKeys={{ key: config.api_key }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {events.map(event => (
          <Event
            key={event.title}
            title={event.title}
            lat={Number(event.loc[0])}
            lng={Number(event.loc[1])}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
