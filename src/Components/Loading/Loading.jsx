import React from 'react';
import { BiColor } from 'react-icons/bi';

const Loading = () => {
  return (
    <div 
      className="d-flex justify-content-center align-items-center" 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Adds a semi-transparent background
        zIndex: 9999 // Ensures the loader is on top of other content
      }}
    >
      <div className="spinner-border" style={{color:'#F5812A',padding:'2rem'}} role="status">
        {/* Removed the text line */}
      </div>
    </div>
  );
}

export default Loading;
