"use client";
import React from 'react'

const ProfileCard = ({ profile }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(profile.url)
    alert('Profile link copied to clipboard!')
  }

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 h-80 hover:shadow-2xl transition-shadow duration-500 ease-in-out">
      <div className="flex justify-center items-center bg-gray-200 h-48 cursor-pointer transform hover:scale-110 transition-transform duration-500 ease-in-out">
        {profile.icon}
      </div>
      <div className="px-5 py-4 h-18">
        <div className="font-bold text-xl mb-1">{profile.name}</div>
      </div>
      <div className="px-5 pt-1 flex justify-between">
        <button onClick={() => window.open(profile.url, '_blank')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Profile
        </button>
        <button onClick={copyToClipboard} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Copy Link
        </button>
      </div>
    </div>
  )
}

export default ProfileCard
