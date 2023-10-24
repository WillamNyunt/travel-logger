import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { divIcon } from 'leaflet'
import { renderToString } from "react-dom/server";
import '../scss/MapMarker.scss';
import { useGetNotesByTripIdQuery } from 'src/slices/note'
import { useSelector } from 'react-redux'
import {IoLocationOutline } from "react-icons/io5";

export default function MapMarker() {
  const trip = useSelector(state => state.trip.trip);
  const { data } = useGetNotesByTripIdQuery(trip?.id);


  const mapData = data?.map((data) => {
    return {
      id: data.id,
      title: data.title,
      position: [Number(data.position.lat) , Number(data.position.lng)]
    }
  })

  return (
    <>
        {mapData && mapData.map((mapData) => {
            return (
                <Marker
                key={mapData.id}
                icon = {
                divIcon ({
                    className:'custom-icon',
                    html: renderToString(<IoLocationOutline/>),
                    iconSize: [40, 40]
                })
                }
                position={mapData.position}
                >
                <Popup>{mapData.title}</Popup>
                </Marker>
            )

        })}
    </>
  )
}
