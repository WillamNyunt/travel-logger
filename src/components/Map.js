import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {MapContainer, TileLayer, useMapEvents, Marker, useMap } from 'react-leaflet'
import '../scss/Map.scss';
import DesktopBar from "./DekstopBar";
import { useSelector } from 'react-redux';
import DarkModeBtn from './Widgets/DarkModeBtn';
import LeftUtilityBar from './Widgets/LeftUtilityBar';
import { TripModal } from './Modal/TripModal';
import AccountBar from './Widgets/AccountBar';
import TopUtilityBar from './Widgets/TopUtilityBar';
import MapMarker from './MapMarker';
import NoteModal from './Modal/NoteModal';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


function Map () {
    const theme = useSelector((state) => state.theme.theme);
    const tripModalOpen = useSelector(state => state.modal.tripModal);
    const noteModalOpen = useSelector(state => state.modal.noteModal);

    return (
        <MapContainer className="full-height-map"
            center={[10, 120]}
            zoom={5}
            minZoom={3}
            maxZoom={19}
            scrollWheelZoom={true}
            >
            <TileLayer
                className='map-tile'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
                url={theme === 'dark-theme' ?  ('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png') : ('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png')}
            />
            <DesktopBar/>
            <MapMarker/>
            {tripModalOpen && <TripModal />}
            {noteModalOpen && <NoteModal />}
            <LeftUtilityBar/>
            <DarkModeBtn/>
            <TopUtilityBar/>
            <AccountBar />
        </MapContainer>
    );
}

export default Map;