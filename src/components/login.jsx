import React, { useState } from 'react'

export default function Login({ onSuccess }) {
    const [value, setValue] = useState('')
    const [feedback, setFeedback] = useState('')
    const correct = 'ela'


    function checkPassword() {
        const val = value.trim().toLowerCase()
        if (!val) {
            setFeedback('Masukkin Passwordnya Dulu Ya 💗')
            return
        }
        if (val === correct) {
            setFeedback('')
            onSuccess()
        } else {
            setFeedback('Passwordnya Salah, Bbyy 😔')
            const el = document.getElementById('secretInput')
            if (el) {
                el.classList.add('animate-shake')
                setTimeout(() => el.classList.remove('animate-shake'), 500)
            }
        }
    }

    return (
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center animate-fade-in">
            <h1 className="text-4xl fancy text-accent mb-2">
                Enter the Secret Code
            </h1>

            <label className="text-sm text-rose-600 mb-3 block">Clue: <span className="font-semibold">Nama Kamu</span></label>

            <form onSubmit={(e) => { e.preventDefault(); checkPassword(); }} className="flex flex-col gap-3">
                <input id="secretInput" value={value} onChange={e => setValue(e.target.value)} className="rounded-xl p-3 border-2 border-white/60 outline-none shadow-inner" placeholder="Type the secret..." aria-label="secret code" />

                <button type="button" onClick={checkPassword} className="bg-gradient-to-b from-accent to-[#ff2d8c] text-white font-bold rounded-xl py-2">
                    Buka
                </button>

                <p className="min-h-[1.2rem] text-rose-700 font-semibold">{feedback}</p>
                
            </form>
            
        </div>
    )
} 

