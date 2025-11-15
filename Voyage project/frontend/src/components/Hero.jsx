import React from 'react'

const Hero = () => {

  return (
    
<div className="relative h-screen">
  {/* Background video */}
  <video src="ass3 video.mp4"   muted autoPlay  loop playsInline
   className="w-full h-full object-cover"></video>

  {/* Overlay content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
    <h1 className="text-6xl font-bold">Discover Your Next Journey ✈️</h1>
    <p className="mt-4 text-2xl">Find the best destinations, packages, and travel tips with Voyage</p>
    <button className="mt-6 px-6 py-3 bg-[#474769] rounded-lg hover:bg-[#474769a0] "
        onClick={() => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  }}>
      Explore Now
    </button>
  </div>
</div>




  )
}

export default Hero
