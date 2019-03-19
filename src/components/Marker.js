import React from 'react';
import { Marker as Point } from 'react-map-gl';

const Marker = ({
  latitude, longitude, handleMapClick, icon,
}) => (
  <Point latitude={latitude} longitude={longitude} onClick={handleMapClick} captureClick>
    <img style={{ borderRadius: 100, width: 48, height: 48 }} src={icon} />
  </Point>
);

export default Marker;

/*
<Marker
latitude={-23.5439958}
longitude={-46.6065552}
onClick={this.handleMapClick}
captureClick
>
<img
  style={{
    borderRadius: 100,
    width: 48,
    height: 48,
  }}
  src="https://avatars2.githubusercontent.com/u/2254731?v=4"
/>
</Marker>
*/
