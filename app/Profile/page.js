"use client";
import React from 'react'
import ProfileCard from './ProfileCard'
import SocialProfiles from './SocialProfiles'
import Layout from "../layout";


const page = () => (
<Layout>
  <div className="text-blue-950 bg-zinc-200">
    <h1 className="font-bold text-4xl">Profiles</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {SocialProfiles.map(profile => <ProfileCard key={profile.name} profile={profile} />)}
    </div>
  </div>
  </Layout>
)

export default page