import React from 'react';

export default function MembershipCard({ data }) {
  return (
    <div
      className={`
        flex-shrink-0 
        w-[20vw] 
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
        className="w-full h-60   "
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
        <h3 className="text-lg font-semibold mb-1">{data.title}</h3>

        <div className="text-2xl font-bold mb-4">
          ${data.price.toFixed(2)}
          <span className="text-sm font-normal">/{data.unit}</span>
        </div>

        <button
          disabled={data.disabled}
          className={`
            mb-4 px-4 py-2 rounded 
            ${data.disabled 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-green-400 hover:bg-green-500'}
          `}
        >
          {data.disabled ? 'Sold Out' : 'Join'}
        </button>

        <ul className="text-sm flex-1 space-y-1 overflow-auto">
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
