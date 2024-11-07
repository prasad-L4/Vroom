import React from 'react'

import { useState, useEffect } from "react";
import Pages from '../Pages/Pages';
const Main = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setLoading(false); 
          return prev;
        }
      });
    }, 90); 

    return () => clearInterval(interval);
  }, []);
  return (
    <>
   <div className="flex justify-center items-center min-h-screen bg-black">
  {loading ? (
    <div className="flex flex-col justify-center items-center">
      {/* Image Placeholder */}
   

      {/* Progress Percentage */}
      <p className="text-gray-500 text-lg  text-[10rem] sm:text-[15rem] md:text-[20rem] font-Rajdhani">
        {progress}%
      </p>
    </div>
  ) : (
    <>
      <Pages />
    </>
  )}
</div>
    
    </>
  )
}

export default Main