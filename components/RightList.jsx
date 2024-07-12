// components/RightColumn.js
import React from 'react';

const RightList = () => {
  return (
    <div className="flex flex-col w-full h-full bg-gray-800 bg-opacity-50 text-white">
      <div className="p-4 items-center border-b border-gray-700">
        <div className="bg-gray-600 rounded-full h-3/4 w-3/4 flex items-center justify-center">
          <span className="text-xl">A</span>
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">Jane Doe</h2>
          <p className="text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="pt-4">
          <button className="w-full bg-red-600 py-2 rounded-lg">Block User</button>
          <button className="w-full bg-gray-600 py-2 rounded-lg mt-2">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default RightList;
