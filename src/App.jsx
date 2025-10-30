import React, { useState, useEffect, useRef } from 'react'
import Login from './components/login'
import Navbar from "./components/navbar";
import Message from './components/Message'
import Music from './components/Music'
import Reminders from './components/Reminders'
import Album from './components/Album'

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [activeTab, setActiveTab] = useState('message')
    const mainRef = useRef(null)

    useEffect(() => {
        if (mainRef.current) {
            mainRef.current.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [activeTab])

    return (
        <div
            className={`min-h-screen flex items-center justify-center p-6 transition-all duration-700 ${
                loggedIn
                    ? 'bg-[url(/background/background.png)] bg-cover bg-center'
                    : 'bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400'
            }`}
        >
            {!loggedIn && (
                <div className="w-full max-w-md">
                    <Login onSuccess={() => setLoggedIn(true)} />
                </div>
            )}

            {loggedIn && (
                <div className="w-full max-w-5xl bg-white/80 rounded-2xl shadow-xl p-4 backdrop-blur-md">
                    <header className="flex items-center justify-between mb-3">
                        <Navbar active={activeTab} setActive={setActiveTab} />
                        <div className="text-sm text-rose-700">Welcomee, Elaa!! 👋</div>
                    </header>

                    <main
                        ref={mainRef}
                        className="bg-white/50 rounded-xl p-4 h-[70vh] overflow-y-auto shadow-inner animate-fade-in"
                    >
                        {activeTab === 'message' && <Message />}
                        {activeTab === 'music' && <Music />}
                        {activeTab === 'reminders' && <Reminders />}
                        {activeTab === 'album' && <Album />}
                    </main>

                    <footer className="text-center mt-4 text-rose-600">
                        Made with ❤️ and a sprinkle of pink ✨
                    </footer>
                </div>
            )}
        </div>
    )
}
