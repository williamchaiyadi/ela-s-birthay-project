import React from 'react'

export default function Reminders() {
    const reminders = [
        "Saayaanggggg 😆 Jangan lupa senyummm yeeaaaaaaa, biar dunia tauu senyum maniss kamuuu buat happyyyyy!! 🌎",
        "Minumm airr putihh yang banyak yaaa, byyyy 💧 Kalau kamu kurangg minumm, nanti aku worryy 😢",
        "Jangan lupaa istirahatt yaaa, byyy.. Jangan terlalu push diri kamuuu! 🌷",
        "Tarik napass duluu dalemm-dalemm, relaxing badann kamuu, kalau udah siap lanjuttinn lagiii 😌",
        "Jangan lupa makannn yaaaa 🤭 Perut kamuu penting lohh! Jangan sampee maag dateng duluann!",
        "Tidur yang cukup yaaa, jangan begadang terus 😴 Masih ada hari esokk buat dijalaninnn..",
        "Semangat yaaa babyyyy 💕, kamu pasti bisaaa 😎 Aku percayaa sama kamuu pastiii bisaaaa!!!",
        "Kalau lagi capek, ingattt teruss aku sayang kamu 😘 dan kamu masih punya aku yang kadang random banget",
        "Haaaii Ela, jangan lupa dengerin musik yang bikin kamu senyum 😁 biar aku juga senyum bayangin kamu",
        "Kalo kamu lagii stress, ingettt: Liam selalu dukung kamu, kapanpunn dan dimanapunnn 🤪 Liam juga selalu ada buat elll!!",
        "Udah sateee belummm?? Satee dulu dongg sayangggg. Aktivitas memang penting, tapi selalu ingett Tuhan Yesus yaa ✝"
    ]

    return (
        <div className='animate-fade-in'>
        <div className="bg-pink-100 text-pink-800 p-4 rounded mb-4 shadow-sm">
            <p className="font-semibold text-lg">💌 Pesan kecil untuk Ela:</p>
            <br />
            <p className="italic mb-2">
                "Ini sedikit reminder dari aku untuk El, biar hari-hari kamu tetep hangat dan semangattt 💖"
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
