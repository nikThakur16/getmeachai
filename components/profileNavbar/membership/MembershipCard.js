import React from 'react';

export default function MembershipCard({ data }) {
  return (
    <div
      className={`
        flex-shrink-0
       h-full w-full
        bg-gray-800 
        rounded-xl 
        overflow-hidden 
        border 
        ${data.badge ? 'border-green-400' : 'border-gray-700'}
        ${data.disabled ? 'opacity-50' : 'opacity-100'}
      `}
    >
      {/* Badge */}
      {data.badge && (
        <div className="text-xs uppercase text-gray-700 bg-gray-200 text-center py-1">
          {data.badge}
        </div>
      )}

      {/* Image */}
      <img
        src={data.image}
        alt={data.title}
        className="w-full md:h-60 h-40  "
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          transform: 'scale(1)',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        
      />

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="md:text-lg text-sm font-semibold mb-1">{data.title}</h3>

        <div className="md:text-2xl text-lg font-bold mb-2 md:mb-4">
          ${data.price.toFixed(2)}
          <span className="md:text-sm text-xs font-normal">/{data.unit}</span>
        </div>

        <button
          disabled={data.disabled}
          className={`
            md:mb-4 mb-2 md:px-4 px-2 md:py-2 py-1 rounded 
            ${data.disabled 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-green-400 hover:bg-green-500'}
          `}
        >
          {data.disabled ? 'Sold Out' : 'Join'}
        </button>

        <ul className="md:text-sm text-xs flex-1 space-y-1 overflow-auto">
          {data.features.map((f, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2 text-green-400">•</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
