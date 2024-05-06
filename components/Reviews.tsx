"use client" 
import React from 'react'
import GridYoutube from "@/components/YouTubeVideo";


export default function Reviews() {
    const youtubeVideoId = "https://youtu.be/CSujWKoCVB4?si=3nACqfcRsJ3vsRoI";

  return (
    <main className=''>
        <h1 className='text-bold text-7xl m-28 text-center'>
        Reviews from sweet tooths

        </h1>
      <div className="m-28 grid grid-cols-1 md:grid-cols-3 gap-5 grid-flow-row-dense">
        <div className='col-span-1 row-span-1'>
        <GridYoutube  videoId={youtubeVideoId}  />
        </div>

        <div className='col-span-1 row-span-2'>
        <GridYoutube  videoId={youtubeVideoId}  />
        </div>

        <div className='col-span-1 row-span-1'>
        <GridYoutube  videoId={youtubeVideoId}  />
        </div>

        <div className='col-span-1 row-span-2'>
        <GridYoutube  videoId={youtubeVideoId}  />
        </div>

        <div className='col-span-1 row-span-1'>
        <GridYoutube  videoId={youtubeVideoId}  />
        </div>

        <div className='col-span-1 row-span-2'>
        <GridYoutube  videoId={youtubeVideoId}  />
        </div>
        
      </div>
      </main>
  )
}
