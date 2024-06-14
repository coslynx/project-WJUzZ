import React from 'react';
import { GoogleMap, Marker, InfoWindow } from 'google-maps-react';

class GoogleMapsAPI extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div>
        <GoogleMap
          google={this.props.google}
          zoom={14}
          initialCenter={{
            lat: 37.774929,
            lng: -122.419416,
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'Event Location'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </GoogleMap>
      </div>
    );
  }
}

export default GoogleMapsAPI;