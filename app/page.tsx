'use client'

import { useState } from 'react'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) return

    setLoading(true)

    // Später hier die echte Suche
    console.log("Suche nach:", searchTerm)
    
    // Nur zum Testen:
    alert(`Suche gestartet nach: ${searchTerm}\n\n(Die echte Steam-Suche kommt im nächsten Schritt)`)
    
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-900/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-tighter text-white">FragFocus</h1>
          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-white text-zinc-400 transition">Stats</a>
            <a href="#" className="hover:text-white text-zinc-400 transition">Ligen</a>
            <a href="#" className="hover:text-white text-zinc-400 transition">Community</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto pt-32 pb-20 px-6 text-center">
        <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
          Finde jeden<br />CS2 Spieler
        </h2>
        <p className="text-2xl text-zinc-400 mb-12">
          Steam Name, SteamID oder Profil-Link
        </p>

        {/* Suchleiste */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="s1mple, donk, 7656119... oder Profil-Link"
              className="w-full bg-zinc-900 border border-zinc-700 focus:border-blue-600 rounded-3xl px-8 py-6 text-xl placeholder-zinc-500 outline-none transition-all"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-2xl font-semibold transition disabled:opacity-50"
            >
              {loading ? "Suchen..." : "Suchen"}
            </button>
          </div>
        </form>

        <p className="text-zinc-500 mt-6 text-sm">
          Tipp: Probiere "s1mple", "ZywOo" oder eine SteamID64
        </p>
      </div>
    </div>
  )
}