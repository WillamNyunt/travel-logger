import React from 'react'
import { Marker, useMapEvents, Popup } from 'react-leaflet'
import { useState } from 'react'
import { BiSwim } from "react-icons/bi"
import { divIcon } from 'leaflet'
import { renderToString } from "react-dom/server";
import '../scss/MapMarker.scss';

export default function MapMarker(props) {
  const [position, setPosition] = useState([0 , 0])

  return (
    <Marker
        icon = {
          divIcon ({
            className:'custom-icon',
            html: renderToString(<BiSwim/>),
            iconSize: [40, 40]
          })
        }
        position={position}
    ><Popup>Bangkok</Popup></Marker>
  )
}
