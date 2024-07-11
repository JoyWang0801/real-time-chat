"use client";

import { useState, useEffect } from "react";

const LeftList = ({ user, signOut }) => {

  return (
    <>
        <div>
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
            </div>
        </div>
        

        {user ? (
            <button
            type="button"
            onClick={() => {
                signOut;
                alert("Signed out");
            }}
            className="outline_btn"
            >
            Sign Out
            </button>
        ) : (
            <button>no</button>
        )}
    </>
  );
};

export default LeftList;
