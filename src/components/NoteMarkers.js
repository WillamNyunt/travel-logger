import React from 'react'
import { Marker, Popup, useMapEvent } from 'react-leaflet'
import { divIcon } from 'leaflet'
import { renderToString } from "react-dom/server";
import '../scss/MapMarker.scss';
import { useGetNotesByTripIdQuery, useAddNoteByTripIdMutation } from 'src/slices/note'
import { useSelector, useDispatch } from 'react-redux'
import {IoLocationOutline } from "react-icons/io5";
import { setCursor } from 'src/slices/map';
import { useState, useEffect } from 'react';

export default function MapMarker() {
  const trip = useSelector(state => state.trip.trip);
  const { data } = useGetNotesByTripIdQuery(trip?.id);
  const cursor = useSelector(state => state.map.cursor)
  const [addNote , result ] = useAddNoteByTripIdMutation();
  const [mapData, setMapdata ] = useState();  
  const dispatch = useDispatch();



  useEffect(() => {
    setMapdata(data?.map((data) => {
      return {
        id: data.id,
        title: data.title,
        position: [Number(data.position.lat) , Number(data.position.lng)]
      }
    }))
  }, [data])

  useMapEvent('click', async (e) => {
    if (cursor === 'cursor-add') {
      try{
          addNote({tripId: trip.id, title: 'test', comment: 'test', date: 'test', location: {lat: e.latlng.lat, lng: e.latlng.lng}, color: 'test'}).then(() => {
          dispatch(setCursor('cursor-pointer'));
        })
      } catch (err) {
        console.log(err)
        console.log(result)
      }
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
