"use client"
import Link from "next/link";
import React, { useState } from "react";

export default function HomePage() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const code = shortUrl && new URL(shortUrl).pathname.slice(1);
  const handleClick = async () => {
  try {
    const response = await fetch("/api/long", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      
      body: JSON.stringify({ originalUrl }) 
    });

    const msg = await response.json();
    setShortUrl(msg.ShortUrl);
  } catch (error) {
    console.log("error sending url", error);
  }
};





  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-4xl flex justify-center flex-col">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🔗 Link Shortener</h1>

        <input
          type="text"
          placeholder="Enter your long URL"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          className="w-2xl m-auto p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleClick}
          className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition w-lg m-auto"
        >
          Shorten URL
        </button>

        {shortUrl && (
          <div className="mt-6 bg-gray-100 p-4 rounded-xl text-center">
            <p className="text-gray-600">Shortened URL:</p>
            <a href={`/api/${code}`} className="text-blue-600 font-medium underline" target="_blank" rel="noreferrer">
  {`${shortUrl}`}
</a>
          </div>
        )}
      </div>
    </div>
  );
}
