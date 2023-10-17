import React, { useEffect } from 'react'
import { useState } from 'react'
import { useAddTripMutation } from 'src/slices/trip'
import {Alert} from '@mui/material';

export default function AddTripForm() {
  const [name, setName] = useState('')
  const [addTrip, result] = useAddTripMutation()
  const [showAlert, setShowAlert] = useState(false)
  const [alertStatus, setAlertStatus] = useState('')
  const [resultMessage, setResultMessage] = useState('')


  console.log('component has rendered')

  const addTripSubmitListener = async (e) => {
    e.preventDefault()
    const startLocation = { lat: 0, lng: 0}
    const endLocation = { lat: 0, lng: 0}
    console.log(name)
    addTrip({ name , startLocation, endLocation })
  }

  useEffect(() => {
    console.log('use effect fired')
    console.log(result)
    if(!result.isError || !result.isSuccess) return
    console.log(result)
    if (result.isError) {
      console.log(alertStatus)
      setAlertStatus('error')
      setShowAlert(true)
      // setResultMessage(result.error.message)
    } else {
      setAlertStatus('success')
      setShowAlert(true)
      // setResultMessage('Trip added successfully')
      setTimeout(() => {
        setShowAlert(false)
      }
      , 5000)
    }
    }, [])


  return (
    <form className='flex flex-col gap-y-4' onSubmit={addTripSubmitListener}>
        <div>
            <label forhtml='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
            <input type='text' value={name} onChange={e => setName(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name='name'/>
        </div>
        <button type='submit' className="btn btn-dm-white rounded-lg hover:bg-gray-100">Add</button>
        {showAlert && <Alert severity={alertStatus}>{resultMessage}</Alert>}
    </form>
  )
}
