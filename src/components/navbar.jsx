import React from 'react'

export default function Navbar({ active, setActive }) {
    const tabs = [
        { key: 'message', icon: '💬', label: 'Message' },
        { key: 'music', icon: '🎵', label: 'Music' },
        { key: 'reminders', icon: '⏰', label: 'Reminders' },
        { key: 'album', icon: '📸', label: 'Album' }
    ]

    return (
        <nav className="flex gap-2 sm:gap-3 justify-center" role="tablist">
            {tabs.map(t => (
                <button
                    key={t.key}
                    onClick={() => setActive(t.key)}
                    className={`flex items-center justify-center gap-1 px-3 py-2 rounded-full font-bold transition-all duration-200 ${
                        active === t.key
                            ? 'bg-white/80 border border-white shadow-md text-accent transform -translate-y-1'
                            : 'bg-transparent text-rose-700'
                    }`}
                    role="tab"
                >
                    <span className="text-lg">{t.icon}</span>
                    <span className="hidden sm:inline">{t.label}</span>
                </button>
            ))}
        </nav>
    )
}
