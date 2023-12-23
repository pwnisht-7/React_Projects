/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const PlaceDescriptionCard = (props) => {
    const {latitude,longitude,address,timezone,description} = props
  return (
    <div className='flex flex-col rounded-md pb-3 bg-zinc-900 m-10 w-[350px]' >
        <h1 className='bg-zinc-700 p-3 rounded-md text-center uppercase text-2xl text-white'>Place</h1>
      <div className='py-2 px-4 rounded-sm flex flex-col gap-2'>
        <h1 className='text-sm text-white uppercase font-normal'>Address </h1>
        <p className='text-md text-white bg-zinc-700 p-3'>{address}</p>
      </div>
      <div className='py-2 px-4 rounded-sm flex flex-col gap-2'>
        <h1 className='text-sm text-white uppercase font-normal'>Weather </h1>
        <p className='text-md text-white bg-zinc-700 p-3'>{description}</p>
      </div>
      <div className='py-2 px-4 rounded-sm flex flex-col gap-2'>
        <h1 className='text-sm text-white uppercase font-normal'>Time-Zone </h1>
        <p className='text-md text-white bg-zinc-700 p-3'>{timezone}</p>
      </div>
      <div className='py-2 px-4 rounded-sm flex flex-col gap-2'>
        <h1 className='text-sm text-white uppercase font-normal'>Lognitude </h1>
        <p className='text-md text-white bg-zinc-700 p-3'>{longitude}</p>
      </div>
      <div className='py-2 px-4 rounded-sm flex flex-col gap-2'>
        <h1 className='text-sm text-white uppercase font-normal'>Latitude </h1>
        <p className='text-md text-white bg-zinc-700 p-3'>{latitude}</p>
      </div>
    </div>
  )
}

export default PlaceDescriptionCard
