import React from 'react'

import { useState, useEffect } from "react";
import Pages from '../Pages/Pages';
const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
<div className="flex justify-center items-center min-h-screen">
      {loading ? (
        <div className="flex flex-col justify-center items-center">
          {/* Loading Spinner */}
          <div className="w-16 h-16 border-4 border-gray-300 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="text-gray-500 text-lg mt-4">Loading...</p>
        </div>
      ) : (
    <Pages/>
      )}
    </div>
    
    </>
  )
}

export default Main