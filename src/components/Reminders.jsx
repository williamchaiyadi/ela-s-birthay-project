import React from 'react'

export default function Reminders() {
    const reminders = [
        "Haaai Elaaa 😆 jangan lupa senyum hari ini, biar dunia ikut happy juga!",
        "Eh byy, jangan lupa minum air yaa 💧 kalo aku liat kamu lemes, aku bakal worry 😢",
        "Kamu keren bangettt 🌷 jangan lupa istirahat ya, aku juga mau kamu sehat terus!",
        "Tarik napas dalam-dalam... Lepas semua stress, hahaa aku ikut napas juga 😌",
        "Jangan lupa makan, aku tau kamu suka lupa makan kalo sibuk 🤭 perutmu penting lohh! Jangan maag dateng duluann!",
        "Tidur yang cukup yaaa, jangan begadang terus 😴 aku bakal jagain kamu dari jauh",
        "Semangat yaaa, kamu pasti bisaaa 😎 aku percaya sama kamu lebih dari aku percaya sama aku sendiri 😂",
        "Kalau lagi capek, ingat aku sayang kamu 😘 dan kamu masih punya aku yang kadang random banget",
        "Haaaii Ela, jangan lupa dengerin musik yang bikin kamu senyum 😁 biar aku juga senyum bayangin kamu",
        "Kalo kamu stress, ingat ini: Liam selalu dukung kamu, meskipun kadang sok lucu dan lebay 🤪",
        "Udah sateee belummm?? Satee dulu dongg sayangggg. Aktivitas memang penting, tapi jangan sampai lupainn Yesus yaaa ✝"
    ]

    return (
        <div className='animate-fade-in'>
        <div className="bg-pink-100 text-pink-800 p-4 rounded mb-4 shadow-sm">
            <p className="font-semibold text-lg">💌 Pesan kecil untuk Ela:</p>
            <br />
            <p className="italic mb-2">
                "Ini sedikit reminder dari aku untuk el, biar hari-hari kamu tetep hangat dan semangattt 💖"
            </p>
        </div>

        <ul className="rem-list flex flex-col gap-2">
            {reminders.map((msg, idx) => (
            <li key={idx} className="flex items-center bg-white p-3 rounded shadow-sm">
                <span>{msg}</span>
            </li>
            ))}
        </ul>
        </div>
    )
}
