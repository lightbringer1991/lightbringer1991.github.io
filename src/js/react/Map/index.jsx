import React from 'react';
import PropTypes from 'prop-types';
import marker from '../../../img/map-marker.svg';


class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      mapOptions: {
        // How zoomed in you want the map to start at (always required)
        zoom: 10,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(props.latitude, props.longitude),
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,
        styles: [{
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 17
          }]
        }, {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 20
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 17
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 29
          }, {
            "weight": 0.2
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 18
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 16
          }]
        }, {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 21
          }]
        }, {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "visibility": "on"
          }, {
            "color": "#000000"
          }, {
            "lightness": 16
          }]
        }, {
          "elementType": "labels.text.fill",
          "stylers": [{
            "saturation": 36
          }, {
            "color": "#000000"
          }, {
            "lightness": 40
          }]
        }, {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 19
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 20
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 17
          }, {
            "weight": 1.2
          }]
        }]
      },
    };
  }

  componentDidMount() {
    const map = new google.maps.Map(this.mapElement, this.state.mapOptions);
    const myLocation = new google.maps.LatLng(this.props.latitude, this.props.longitude);
    new google.maps.Marker({
      position: myLocation,
      map: map,
      icon: marker,
    });
  }

  render() {
    return (<div id="map" ref={(ref) => this.mapElement = ref}></div>);
  }
}

Map.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

Map.defaultProps = {
  latitude: -37.8229077,    // Melbourne
  longitude: 144.9515486,   // Melbourne
};

export default Map;
