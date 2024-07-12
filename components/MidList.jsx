// components/MidColumn.js
import React from 'react';
import ChatBox from './ChatBox';

const MidList = () => {
  return (
    <div className="flex flex-col w-full h-full bg-gray-700 bg-opacity-50">
      <div className="p-4 flex items-center border-b border-gray-600">
        <div className="bg-gray-600 rounded-full h-12 w-12 flex items-center justify-center">
          <span className="text-xl">A</span>
        </div>
        <div className="ml-4 flex-1">
          <h2 className="text-lg font-semibold">Jane Doe</h2>
          <p className="text-sm">Lorem ipsum dolor, sit amet.</p>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-600 rounded-full">
            <i className="fas fa-phone"></i>
          </button>
          <button className="p-2 bg-gray-600 rounded-full">
            <i className="fas fa-video"></i>
          </button>
          <button className="p-2 bg-gray-600 rounded-full">
            <i className="fas fa-info-circle"></i>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {/* Chat messages go here */}
        <ChatBox/>
      </div>
      <div className="p-4 border-t border-gray-600">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 bg-gray-800 rounded-lg border border-gray-600 text-white"
          />
          <button className="p-2 bg-blue-500 rounded-lg text-white">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MidList;
