import React from 'react'
import { Marker, useMapEvents, Popup } from 'react-leaflet'
import { useState } from 'react'
import { BiSwim } from "react-icons/bi"
import { divIcon } from 'leaflet'
import { renderToStaticMarkup } from "react-dom/server";
import '../scss/MapMarker.scss';

export default function MapMarker(props) {
  const [position, setPosition] = useState([0 , 0])


  const map = useMapEvents({
    click(e) {
      console.log('map clicked')
      map.flyTo(e.latlng, map.getZoom())
      setPosition(e.latlng)
    },
  })
  return (
    <Marker
        icon = {
          divIcon ({
            className:'custom-icon',
            html: renderToStaticMarkup(<BiSwim/>),
            iconSize: [40, 40]
          })
        }
        position={position}
    ><Popup>Bangkok</Popup></Marker>
  )
}