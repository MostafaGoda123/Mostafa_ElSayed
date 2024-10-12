import React from 'react'
import GetAboutMe from './GetAboutMe'
import GetLeaveMessage from './GetLeaveMessage'

const GetInTouch = () => {
  return (
    <main id='getInTouch' className='flex flex-col gap-8'>
      <GetAboutMe />
      <GetLeaveMessage />
  </main>
  )
}

export default GetInTouch
