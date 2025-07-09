import React from 'react';

const ImagePlaceholder = ({ 
  width = 600, 
  height = 400, 
  text = '', 
  className = '',
  bgColor = 'bg-gray-100',
  textColor = 'text-gray-500',
  icon = null,
  showDimensions = true
}) => {
  const aspectRatio = (height / width) * 100;
  
  return (
    <div 
      className={`relative ${bgColor} rounded-lg overflow-hidden ${className}`}
      style={{ paddingBottom: `${aspectRatio}%` }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        {/* Icon */}
        {icon && (
          <div className="mb-3">
            <i className={`${icon} text-3xl ${textColor} opacity-60`}></i>
          </div>
        )}
        
        {/* Main Text */}
        {text && (
          <div className={`text-center ${textColor} font-medium mb-2`}>
            {text}
          </div>
        )}
        
        {/* Dimensions */}
        {showDimensions && (
          <div className={`text-sm ${textColor} opacity-75 font-mono`}>
            {width} × {height}
          </div>
        )}
        
        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 w-3 h-3 bg-current opacity-20 rounded-full"></div>
        <div className="absolute top-4 right-4 w-2 h-2 bg-current opacity-20 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-current opacity-20 rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-3 h-3 bg-current opacity-20 rounded-full"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-current"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePlaceholder;