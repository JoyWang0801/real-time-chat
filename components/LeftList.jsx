import React from 'react';

const LeftList = () => {
  return (
    <div className="flex flex-col w-full h-full bg-gray-800 text-white">
      <div className="p-4 flex items-center border-b border-gray-700">
        <div className="bg-gray-600 rounded-full h-12 w-12 flex items-center justify-center">
          <span className="text-xl">A</span>
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">John Doe</h2>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {['Jane Doe', 'Jane Doe', 'Jane Doe', 'Jane Doe'].map((name, index) => (
          <div key={index} className="flex items-center p-4 border-b border-gray-700">
            <div className="bg-gray-600 rounded-full h-10 w-10 flex items-center justify-center">
              <span className="text-sm">A</span>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium">{name}</h3>
              <p className="text-xs">Hello</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftList;
