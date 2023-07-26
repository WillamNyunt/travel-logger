import React, {Component} from 'react';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {MapContainer, TileLayer} from 'react-leaflet'
import '../scss/Map.scss';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class Map extends Component {
    render() {
        return (
            <MapContainer className="full-height-map"
                center={[38, 139.69222]}
                zoom={6}
                minZoom={3}
                maxZoom={19}
                scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
            </MapContainer>
        );
    }
}

export default Map;