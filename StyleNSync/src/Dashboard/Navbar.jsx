// Navbar Component
import React from 'react'
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='mt-5 mx-auto block w-full max-w-screen-xl lg:rounded-2xl border border-white/80 bg-white bg-opacity-90 py-2 px-4 text-gray-900 shadow-md backdrop-blur-3xl backdrop-saturate-300 lg:px-8 lg:py-4'>
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
    <div className='lg:mr-20 flex items-center gap-6'>
      {/* Link to User Details Page */}
      <NavLink 
        to="/UserProfile"
        activeclassname="text-sky-700 font-bold"
        className='block p-1 hover:text-red-400 font-sans text-xl font-normal leading-normal text-inherit antialiased'
      >
        Personal Details
      </NavLink>
      {/* Link to User Account Creation Page */}
      <NavLink
        to="/PhysicalAttributes"
        activeclassname="text-sky-700 font-bold"
        className='block p-1 hover:text-red-400 font-sans text-xl font-normal leading-normal text-inherit antialiased'
      >
        Physical Attributes
      </NavLink>

      <NavLink
        to="/StylePreferences"
        activeclassname="text-sky-700 font-bold"
        className='block p-1 hover:text-red-400 font-sans text-xl font-normal leading-normal text-inherit antialiased'
      >
        Style Preferences
      </NavLink>

      <NavLink
        to="/ColorSeason"
        activeclassname="text-sky-700 font-bold"
        className='block p-1 hover:text-red-400 font-sans text-xl font-normal leading-normal text-inherit antialiased'
      >
        Color Season
      </NavLink>
    </div>
  </div>
</div>

  )
}

export default Navbar