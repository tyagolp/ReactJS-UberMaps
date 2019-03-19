import React, { Component } from 'react';
import MapGL from 'react-map-gl';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'mapbox-gl/dist/mapbox-gl.css';
/* import Marker from './Marker'; */

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  // eslint-disable-next-line class-methods-use-this
  handleMapClick(e) {
    const [latitude, longitude] = e.lngLat;

    // eslint-disable-next-line no-alert
    alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
  }

  render() {
    /* const { user } = this.props; */
    /* const { viewport } = this.state; */
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoidHlhZ29scCIsImEiOiJjanRhdW5kNjUwZXpuNDNzejh1MG1kZmp3In0.q9zgpxA39j-kl9Q-W_xMEg"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {/* user.map(dev => (
          <Marker
            latitude={dev.latitude}
            longitude={dev.longitude}
            onClick={this.handleMapClick}
            captureClick
            icon={dev.icon}
          />
        )) */}
      </MapGL>
    );
  }
}

export default Map;
