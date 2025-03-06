'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <main className="min-h-screen py-8">
      {/* Filter Panel */}
      <div className="mb-8">
        <div className="flex justify-center gap-4">
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'all'
                ? 'bg-[#00A3FF] text-white'
                : 'bg-gray-800 text-gray-400'
            } hover:bg-[#00A3FF] hover:text-white transition-all`}
            onClick={() => setActiveTab('all')}
          >
            All Items
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'art'
                ? 'bg-[#00A3FF] text-white'
                : 'bg-gray-800 text-gray-400'
            } hover:bg-[#00A3FF] hover:text-white transition-all`}
            onClick={() => setActiveTab('art')}
          >
            Art
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'gaming'
                ? 'bg-[#00A3FF] text-white'
                : 'bg-gray-800 text-gray-400'
            } hover:bg-[#00A3FF] hover:text-white transition-all`}
            onClick={() => setActiveTab('gaming')}
          >
            Gaming
          </button>
        </div>
      </div>

      {/* Product Card */}
      <div className="px-4">
        <div className="w-[180px] bg-gray-800 rounded-xl overflow-hidden">
          <div className="relative">
            <img
              src="/nft.jpg"
              alt="NFT"
              className="w-full h-40 object-cover"
            />
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 px-2 py-1 rounded-full">
              <span className="text-sm text-white">2.5 ETH</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">Lol Pop</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="/avatar.jpg"
                  alt="Creator"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="text-sm text-gray-400">@creator</span>
              </div>
              <span className="text-sm text-[#00A3FF]">#123</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}