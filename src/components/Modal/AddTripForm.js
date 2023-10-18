import React, { useEffect } from 'react'
import { useState } from 'react'
import { useAddTripMutation } from 'src/slices/trip'
import {Alert} from '@mui/material';

export default function AddTripForm(props) {
  const [name, setName] = useState('')
  const [addTrip, result] = useAddTripMutation()
  const [showAlert, setShowAlert] = useState(false)
  const [alertStatus, setAlertStatus] = useState('')
  const [alertMessage, setAlertMessage] = useState('')

  const addTripSubmitListener = async (e) => {
    e.preventDefault()
    const startLocation = { lat: 0, lng: 0}
    const endLocation = { lat: 0, lng: 0}
    try {
      await addTrip({ name , startLocation, endLocation }).then(() => {
        setShowAlert(true)
        setAlertMessage(`Trip ${name} added successfully!`)
        setAlertStatus('success')
        setName('')
        setTimeout(() => {
          setShowAlert(false)
          props.changeToPreviousPage()
        }, 3000)
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className='flex flex-col gap-y-4' onSubmit={addTripSubmitListener}>
        <div>
            <label forhtml='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
            <input type='text' value={name} onChange={e => setName(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name='name'/>
        </div>
        <button type='submit' className="btn btn-dm-white rounded-lg hover:bg-gray-100">Add</button>
        {showAlert && <Alert severity={alertStatus}>{alertMessage}</Alert>}
    </form>
  )
}
