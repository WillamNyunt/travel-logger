import React from 'react'
import { useGetNotesByTripIdQuery } from 'src/slices/note'
import './NoteModal.scss';
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { setNoteModal } from 'src/slices/modal';
import { useSelector } from 'react-redux';

export default function NoteModal(props) {
  const trip = useSelector(state => state.trip.trip);
  const { data, error, isLoading} = useGetNotesByTripIdQuery(trip?.id); 
  const dispatch = useDispatch();

  return (
    <div className={`note-modal ${props.className}`}>
      <div className='note-modal__header flex flex-row justify-between items-center'>
        <h3>Notes</h3>
        <RxCross2 className='note-modal__exit'  onClick={() => {
              dispatch(setNoteModal(false))
             }} />
      </div>
        <div className='note-modal__notes'>
             <div className='note-modal__note-list'>
              {isLoading && <p>Loading...</p>}
              {data ? data.map((note) => {
                return (
                  <div className='note-modal__note'>
                    <span className='note-modal__integer'>1</span>
                    <p>{note.title}</p>
                  </div>
                )
              }) : <p>There appears to be no notes.</p>}
              </div>
        </div>
    </div>
  )
}
