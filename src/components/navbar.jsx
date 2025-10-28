import React from 'react'

export default function Navbar({ active, setActive }) {
    const tabs = [
        { key: 'message', label: '💬 Message' },
        { key: 'music', label: '🎵 Music' },
        { key: 'reminders', label: '⏰ Reminders' },
        { key: 'album', label: '📸 Album' }
    ]

    return (
        <nav className="flex gap-2" role="tablist">
            {tabs.map(t => (
                <button key={t.key} onClick={() => setActive(t.key)} className={`px-3 py-2 rounded-full font-bold ${active === t.key ? 'bg-white/80 border border-white shadow-md text-accent transform -translate-y-1' : 'bg-transparent text-rose-700'}`} role="tab">{t.label}</button>
            ))}
        </nav>
    )
}