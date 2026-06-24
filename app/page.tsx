'use client'

import { useState } from 'react'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) return

    setLoading(true)

    console.log("Suche nach:", searchTerm)
    alert(`Suche gestartet nach: ${searchTerm}\n\n(Echte Steam-Suche kommt als Nächstes)`)

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-900/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tighter">FragFocus</h1>
          <div className="text-xs text-zinc-500 hidden sm:block">CS2 Stats • Community • Ladder</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-xl text-center">
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-6">
            Finde jeden<br />CS2 Spieler
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 mb-10">
            Steam Name, SteamID64 oder Profil-Link
          </p>

          {/* Suchleiste */}
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="s1mple, donk, 7656119..."
                className="w-full bg-zinc-900 border border-zinc-700 focus:border-blue-600 rounded-3xl px-7 py-5 text-lg outline-none transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-700 px-8 py-3 rounded-2xl font-semibold transition-all active:scale-95"
              >
                {loading ? "..." : "Suchen"}
              </button>
            </div>
          </form>

          <p className="text-zinc-500 text-sm mt-6">
            Tipp: Probiere "s1mple", "ZywOo" oder eine SteamID
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-800">
        FragFocus • Built with ❤️ for the CS2 Community
      </footer>
    </div>
  )
}