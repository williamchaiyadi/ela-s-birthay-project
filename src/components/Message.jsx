import React, { useState } from "react";

const Message = () => {
    const [selectedChat, setSelectedChat] = useState(null);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [password, setPassword] = useState("");

    const correctPassword = "19"; 

    const messages = [
        { 
            id: 1, title: "Hai Elaa! 👋 Happy Birthday! ✨", body: 
                `Haii ell, I just want to say thank you, after these days, kamu masih tetap excited ngobrol sama aku, masih mau curhat ke aku, sharing berbagai hal dari yang gak penting sampai penting pakai banget dan semua-semuanya bareng aku. Thank you so muchh… Kamu udah ngubah aku jadi pribadi yang lebih baik. Yang tadinya aku tertutup ini, sekarang bisa lebih terbuka ke orang-orang. Yang tadinya aku gampang overthinking, jadi lebih santaii. Yang tadinya aku jarang misa, jadi rajin misa. Walaupun ego aku ini perlu dibilangin bangett, tapi kamu masih sabar hadapin aku. Thank you so muchh yaa, ellllll.

                Anywayyy, happy birthdayyy sayangggg ✨ Semoga di usia kamu yang ke-19 inii, kamu semakin bahagiaa, semakin kuatttt, semakin percaya dirii sama semua hal yang kamu jalaninn. Semoga Tuhan Yesus selalu menjaga kamu, memberikan hati kamu damai, berkat, kesehatan dan kebahagiaan setiap harinyaa.

                Lewat tulisan-tulisan ini, aku pengen mencurahkan cerita-cerita aku yang belum bisa tersampaikan ke kamu. Sekaligus project ini aku buat sebagai hadiah ulang tahun kamuu dan tanda terima kasih aku karena kamu sudah mau hadir menemani dan bertahan sama aku sampai sejauh inii.

                Mengingat kamu pasti sibuk dan lainnya, jadi aku nggak mau mengganggu kamu dengan banyak chat dan lain-lain. Tapi aku pengen kamu punya sesuatu yang bisa kamu buka kapan aja kalau lagi kangen atau butuh semangat. Sesuatu yang bisa ngingetin kamu tentang aku dan tentang betapa berharganya kamu buat aku. Semoga kamu suka yaa...

                Maaf ya kalau belum sempurnaa, karena sempurnanya ada di kamuu 😘 hahahaaaa. Aku bersyukur banget bisa ketemu kamu, dan lebih bersyukur lagi bisa punya kamu di sisi aku. And, aku udah pernah bilang ke kamu, I'll never get bored or tired to say that I love u, sayang ❤️ 

                From a funny man 

                William 

                2025-09-27 12.38`
        },

        { 
            id: 2, title: "Good Morningg Sunshineee 🌻🌞", body: 
                `Good morningggg my sunshineeee ☀️🌼

                Selamattt pagiiii dan selamattt bangunnn, my favv personn in the whole universeee 😚💞. Howw'sss ur sleeep last nighttt??? Nyenyakk kahhh??? 💤 Semoga mimpi kamu indahhh yaaa dan semogaa yang kamu mimpiin tuh hal-hal yang bisa bikin kamu senyum pas bangunnn 😆. Aku harap sihhh, aku juga muncul di mimpi kamuuu walaupun cuma dikittt hehehehehehe 😝💭💞. 

                Anywayyyy, hari baru udah datengg nihhhh 🌅✨. Saatnya kamu mulai hari lagi dengan penuhh semangat yang baruuu dan hari yang penuh sukacitaaa 🤗🌈. Apapun yang kamu hadapi hari inii, entah nugass, belajarr, kuliahh, ataupun rutinitas biasaa, aku yakin kamu bisa ngelewatin semuanya dengan baikk bangetttt 💪. Kamu tuh kuatt, rajin dan punya hati yang luarr biasaaa lembuttt 💖. 

                Ohhh yaaa, kamu jangan lupa sarapan yaaa 🍞🥛, biar energi kamu full dair pagiii 🔋⚡. Minum air jugaa, jangan langsung buka HP lama-lamaa 📱. Ambil waktu bentar buat bersyukur, tarik napas pelan, dan bilang ke diri kamu sendiri: "Hari ini aku mau bahagiaa, aku mau semangatt, dan aku bisaa!!!" 💕

                Aku doainnn semoga sepanjang hari inii, kamu dikasih kedamaian, berkat, kebahagiaan, dan hal-hal kecil yang bisa bikin kamu senyum terusss 🌻. Kalau kamu capeee, ingett yaaa, ada aku yang selalu bangga dan selalu support kamu dari jauhhh. Aku percaya sama kamuu, sayanggg 🤍. Kamu tuh hebatt bangett, dan aku selalu bersyukur bisa sama kamuuu. 

                Soo, let's startt the dayy with a biggg smileee 😄☀️. Semangatt teruss yaa jalanin harii inii, jangan takut buat jadi diri kamu sendirii. Yesus pasti selalu jagain langkah kamu anywhere and anytimeee 🙏✨. 

                Havee a blessed and wonderfull dayy yaa, sayanggkuuu, cintaakkuuu, manisskuuu, clingyykuu, duniakkuu, bahagiaakuu, babyyykuuu, hatiikuuuu, matahariikuu, bulannkuu, bintanggkuuu, cantikkuuu, dan semuaanyaaaaaa 💞🌤️. You gottt thisss!!! I love u more than yesterday and i'll keep loving you again andd againnnn 😘💗`
        },

        { 
            id: 3, title: "Good Night My World 🌠🌎", body: 
                `Good nighttt, yangggg 🌙💫

                Akhirnyaa hari ini selesaii jugakkkk yaaaa hahaahaaha. Pasti capek bangett yaa dari pagi udah ngerjain ini ituu, ngelakuin banyak hall dan lainnnyaaaa. Tapi aku bangga bangett sama kamuu, udah tetep kuat dan semangattt!!!! I'm very proudd of uuu 🥰💪💪

                Kamu tuh selalu kerenn bangett tauu, selalu berjuangg dan kadang aku mikir.. gimana bisa sih ada orang sekuat kamu yang masih bisa tetep lembut dan caree kayak gituuu ❤️. Jadii, sebelum kamu tidurr, aku cuma mau bilang terima kasih yaaa... karena udah jadi versi terbaik dari diri kamu hari inii 🤗✨

                Soo, sekarang waktunya kamu istirahat yaa, byyy. Biarin tubuh kamu tenang, pikiran kamuu damaii, dan hari kamu juga ikut happyy. Jangan dipikirin dulu aktivitas yang lainnn, jangan mikirin hal-hal yang lainnn, semuanya bisa diselesaiin besok pelan-pelannn. 

                Semoga malam ini kamu tidur yang nyenyakk yaaa, dan semoga mimpiiin hal-hal yang bikin kamu senyum pas bangun nantiii. Ehh, kalau bisa sih mimpiin aku juga dikit gapapa kali yaaaaa HEHEHEHEHE 😝💞

                Sebelum tidurr, jangan lupa doa dulu yaa sayanggg 🙏✨. Ajak Yesus, Para Malaikat, dan Roh Kudus jagain kamu malam ini. Biar Yesus juga peluk kamu lewat mimpii dan bangunin kamu besok pagi dengan hati yang penuh damaii ☀️ Semoga semua lelah kamu hari ini terbayar dengan ketenangan malam yang indahhh. 

                Besok pas kamu bangunn, semoga kamu ngerasa segerr semangat, dan siapp buat jalanin hari lagi dengan happyyy, jadi semua orang juga bisa ketularan happy-nya kamuu 🥰. Dan semoga apapun yang kamu kerjain dan lakuin, bisa menjadi berkat buat semuanya karena hari kamu yang tulusss bangettt. 

                Ingeet yaa, jangan lupa minum air duluu sebelum tidurr 💧, jangan scroll-scroll sosmedd kelamaan 📱, dan pastiin kamu tidur dengan keadaan nyamannn. Kamu udah cukup berjuang hari ini. 

                Aku bakal selalu dukung kamu, selalu doain yang terbaik buat kamu, dan selalu sayang sama kamu, apapun yang terjadi. Kamu nggak jalan sendirian kokk, aku disini selalu jagain dan selalu bangga sama kamu 💫 . 

                Tidur nyenyak yaa sayanggg 😚💤 Semoga mimpi kamu seindah senyum kamu 💞 Good nighttt my fav person 🌙💐 See you in the morninggg ☀️💛 Love youu moree and moree everydayyy 💕💕
                `
        }, 

        { 
            id: 4, title: "Selamat Ujiann!!! ✊📚📑", body: 
                `Alloowwww sayanggkuuu, 😚 Semanggattt yaaaa buat ujiann hari iniii!!! 💪💪 Aku tauu kok kamu pasti udah belajar dengan kerass bangett buat ujiann inii, udah begadang, udah nyiapin semuaanyaa dan penuhh persiapannn, andd aku bangga bangett sama kamuuu ❤️

                Jangan dibawa tegangg buat ujiann hari ini yaa, sayanggg. Take a deep and relaxing breathh, dan bilang ke diri kamu sendiri "All Is Welll!" WKKWKWKWWK. Kamu tuh sebenarnya udah bisaa, tinggal nunjukkin ajaa hasil dari semua kerja keras kamu selama inii. Jangan terlalu fokus ke takut salah atau lupa yaa, fokus aja ke yang kamu tau dan percayain diri kamu sendirii!! Kamu hebatt kokk, kamu rajin dan tekuunnn, soo pasti bisa bangett buat ngelewatin semuanyaa dengan lancarrr!!!✨

                Kalau nanti kamu ngerasa panik, berhenti sebentar, tarik napas, dan ingettt.. kamu gak sendiriann 🤍 ada aku yang selalu doain kamu dari jauhh, biar Tuhan terus bantu dan tenangin hati kamuuu. 

                Apapun hasilnya nanti, kamu udah hebat banget bisa berjuang sejauh inii 🌷. So proudd of u, alwayssss 😚. Jangan lupa senyum yaa abis ujiannn iniii, biar capeknya hilang pelan-pelannn 🌈. Kalau bisa i gave u a virtual hug, hahahahahaha. 
                `
        },

        { id: 5, 
            title: "Kamu kangen sama aku? 🥰", 
            body: `Haii byyy, kamu kangen yaa sama akuu?? Hahahaa 😆 It's alrightttt….. Jangan sedihh, jangan nangiss, sayangg... Aku juga kangen sama kamuuu... 

            Kadang pas aku lagi aktivitas, aku suka keinget sama ell, terus senyam-senyum sendiri dehh... Apa kepala kamu gak pusing? Kamu muter-muter di kepala aku teruss *ciaelahhh. Anyway, Kamu kangen ajaa atau kangen beratt sama akuu??? Jangan kangen teruss, beratt.. biar liam ajaaa. 

            Honestly, aku juga kangen sama kamu byyy. Aku kangen ngobrol sama kamu, aku kangen elus kepala kamu, aku kangen pegangan tangan sama kamu, aku kangen peluk kamu, aku kangen jalan-jalan sama kamu, aku kangen ketawa hal random bareng sama kamuu, denger curhat-curhatnya kamu, cerita-cerita kamuu sampai laporan-laporan random kamuuu.... Aku kangen semua ituu.... Tapi aku tau kamu lagi sibuk sekarang ini, tapi ingatt, kamu perlu prioritasin sesuatu yang lebih penting dahuluu. Kangen sama akunya belakangan aja yaa. 

            Walaupun sekarang ini kita belum bisa ketemuu, aku yakin bakal ada saatnya kokkk. Hari di mana kita ketemu dan spend a lot of time bareng lagii. Sementara itu, kamu perlu sabar dulu yaaa, nantii kita juga bakal bertemuuu. Simpen dulu rindunyaaa. Jangan lupa buat jaga diri dan fokus ke diri sendirii, makan yang benerr, istirahat yang cukupp. Aku tetap disini kokk, gak akan kemana-manaa. Aku tetap sayang kamu, dan tetap kasih doa yang terbaik buat kamu. 

            Okayy?? See u till we met yaa? Gak sabar juga aku buat ketemu sama kamuuu... I really miss u too, cantikk.. ❤️`
        },

        { id: 6, 
            title: "Kamu cape? Baca aku yaa 😪", 
            body: `Haii byyy 🖖. Lohh? Kamu kenapaa, sayangg??? Kamu cape?? Ouwwwww 🥺 It's okaayyy, byyy.... Don't be saddd. Siniii aku peluk kamuu duluu supaya sadd nya hilangg 🤗. It's alright, sayangg. Jangan terlalu dipikirkann, jangan terlalu dibawa masuk sampai ke dalamm. Jangan terlalu overthinkk.

            Take a deep relaxing breath 😮‍💨, tenangin dahulu pikiran dan badan kamu. Setelah kamu siap, kamu boleh lanjutin lagi yaaa. Umpamanya seperti HP yang lowbatt, nggak mungkin kan kamu maksain HP tetap dipakai tanpa di charge? Sama kayak kamu, butuh istirahat untuk lanjutin aktivitas kamu. Kalau kamu lagi rebahan, atau lagi tidur lebih lama dari biasanya, jangan ngerasa bersalah. Anggap aja itu cara tubuhmu bilang, “Aku butuh istirahat.”

            Aku tau kokk, kamu lagi di titik cape banget dengan jadwal kamu yang padatt dan kamu sangat butuh jeda untuk hal ituu. It's okayy, babyy. Itu manusiawii, stress dan cape itu wajarr bangett. Karena dibalik semua ini, akan ada hasil yang besar yang akan kamu dapat. Jangan takut kalau sekarang rasanya redup, bisa kok nyala lagi kalau waktunya pas dan akan lebih terang lagi. Always remember that i'll be here with u and for u..

            Walaupun kamu lagi sibuk dan lain-lain, aku tetap selalu bisa jadi tempat kamu cerita dan curhat segala hal yang kamu pengen sampaikan. Aku gak mau kalau cerita-cerita yang bikin kamu overthinking atau bikin kamu makin cape kamu simpen sendrian. 

            Okayy, babyy? Semangatt teruss yaaa, sayangg ❤️. Jangan mudah overthinking atas sesuatu. Jangan dipanggul sendirian. Kalau ada apa-apa, cerita ajaa. I Love u ❤️.`
        },

        { id: 7, 
            title: "Wuiihh!! Ela lagi Happy Nieeehhh 😁", 
            body: `Haii babyy 🌞✨

            Wahhh, kamu lagi happy yaa?? Hehehee ku jugaa ikutt happyy jugaa donggg. Liat kamu atau denger kamu happy aja udah bikin hari aku cerah bangett. Kamu sadar aku gampang banget dibuat senyum, padahal cuma tau kamu happy aku juga ikutann. 

            Aku tuh pengen liat kamu bahagia gini teruss. Rasanya kayak beban di pundak aku jadi ringan banget kalau tau kamu lagi senengg. Kayak semua capek-capeknya aku kebayar lunas cuma dengan satu tawa kamu. U know what? Kamu itu sunshine buat aku, kalau kamu bersinar terang, aku juga ikutan hangat 🥰. 

            Aku juga mau ingetin kamu satu hal penting, sayang. Kamu layak banget bahagia, bukan cuma sekarang aja, tapi setiap harinyaa. Jangan pernah ngeremehin hal-hal kecil yang buat kamu seneng, entah itu makan ur favourite food, watching ur favourite movie, atau sekedar scroll ig/tikok aja. Itu semua bisa jadi alasan kamu senyumm. 

            Dan i promise, kapanpun dan dimanapun kamu lagi happy, aku selalu bakal jadi orang pertama yang ikutan seneng bareng kamu. Bahagia aku sederhana, cuma dengan kamu happy, aku udah lebih dari cukup, sayang. Soo, nikmatin moment happy kamu ini yaa, baby. Letakin semua worry dan overthinking kamu sebentar dan biarin suasana happy ini menyelumuti kamu ❤️.

            Okayy??? I loveee youu soo muchh, hapyy soul kuu ✨❤️`
        },

        { id: 8, 
            title: "Kamu Overthinking Apa, Sayang? 🥺", 
            body: `Sayangggg, adaa apaa 🤗💕??? Kamu lagi kepikiran macem-macem yaa? It's okayyyy, babyy. Aku tau kok kamu orangnya sering banget overhinkingg sampai bikin diri kamu sendiri capee. Dikit-dikit mikir "Aku cukup nggak ya?" atau "Aku ada salah gak ya?". Padahal kamu gak usah mikirin itu banget, sayangg. 

            Aku nggak pernah minta kamu jadi orang lain. Aku fall in love sama kamu karena kamu apa adanya. Cara kamu ketawa, cara kamu bercanda, bahkan sampai cara kamu ngambek receh aja bikin aku makin sayang sama kamu. Jadi tolong yaa, jangan ngeraguin diri kamu sendiri. Kamu itu berharga banget, nggak cuma buat aku, tapi buat kamu juga.

            Kalau overthinking itu dateng lagi, take a deep breath 😮‍💨. Always remember that u never alone, sayang. I'm always here to support u, jadi tempat cerita kamu. Aku nggak mau kamu kepikiran terus. Mau sekecil apapun masalah yang dihadepin, akan jadi jauh lebih ringan kalau kita hadapin bareng-bareng. So please, jangan biarin overhinking itu jadi kepikiran terus ya, my love.` 
        },

        { id: 9, 
            title: "Kamu Sibuk Banget, Ya? 😤", 
            body: `Ada apaa, ell? Kokk muka kamu kusut gituu? 🥺 Kamu cape yaa, sayang? To do list kamu gak ada habisnyaa? Aku paham kokk, kadang sibuk itu bikin kepala pusing dan hati rasanya sendirian. But don't scared, el, kamu nggak sendirian kok, byyy. Aku disini tetep temenin kamu dari jauh yang lagi super sibukk. Jadi, kamu tetep tau kalau aku selalu ada di belakang kamu, support kamu terus menerus. Okayy? I always proud of u bisa jalanin ini semuaa. Jangan lupa istirahat ya, sayang. Minum air, tarik nafas panjang, kalau udah ready, lanjut lagi pelan-pelan. Kamu hebat, babyy ❤️ Semangattt!!!

            📜 This message was written back when everything was still warm between us, before the storm. I decided to keep it here, because even after everything, the feeling was real.` 
        },

        { id: 10, 
            title: "Birthday Letter 🎂", 
            body: `Haiii byyyy 💖 Haapppyyy Birtthhhdayyyy 🥳🥳 Tiupp lilin duluu yukkkssss 🎂🕯 Hahahahahaha

            Wahhh udah nambah umur ajaa nihh kamuu 😝✨ Gimana rasanyaaa udah umur 19??? Hehehe pasti kamu exciteddd yaaa, semakin dewasaa semakin banyak cerita dan pengalaman baruu 😆 Semogaaa di umur kamu yang ke-19 inii, semua hal baik dateng satu-satu ke hidup kamu yaaa 💫 mulai dari rezekii yang lancarr, kesehatan yang terus dijagaaa, hati yang tenangg, dan pastinya kamu happyyy terusss tanpa absen setiap harinyaaaa 😍 Dan semogaaa juga Jesus always bless uu abundantlyyy 🙏💖

            Kamu tuh amazing bangetttt tauu byyy 😭 dari dulu sampai sekarang tetap bisa bertahan, tetap semangat, tetap berjuang walaupun kadang banyak hal yang bikin kamu cape bangettt 🥺 tapi kamu gak pernah nyerah, malah terus nyoba dan terus jalann 💪 Itu salah satu hal yang paling aku kagumin dari kamu 🥰 and honestlyyy, i’m very veryy veryyy prouddd of uuuuu ✨

            Actuallyyy, aku udah nyiapin banyak hal sihh buat ulang tahun kamu inii 😆 Mulai dari project website yang aku buat dari pertengahan September, terus pelan-pelan aku kerjain sampai hampir selesai di pertengahan Oktober. Semua hal aku pikirin satu-satu biar hasilnya bisa nunjukin betapa spesialnya kamu buat akuu 💖

            Sebenarnya hampir semua bagian udah beres, dari message, ui/ux, sampai detail kecil yang aku ubek-ubek wkwkwk 🤭 Kalau pun nanti ada yang mau ditambah, ya gampang aja, aku tinggal update hehehe~. Nahhh buat bagian album fotooo itu juga bagian favorit akuuu 😆 Makanya aku sering banget minta pap ke kamuuu (selain karena aku emang mau juga 😜), tapi juga biar bisa aku taro di project inii hehe. Soooo, semogaaa kamu sukaa yaa sama website dan semua isinya 🤗🤗

            Oh iyaa, selain itu aku juga beliin kamu beberapa barang yang aku harap kamu sukaaa 🛍 Barang-barang ini aku pikirin banget dari awal project ini berjalan, dan jujur aku sempet gonta-ganti pilihan gara-gara overthinking wkwkwk 🙈 Takut kamu gak suka, takut gak cocok, tapi akhirnya aku milih yang menurut aku paling pas, yaitu tas ituu 👜 Semoga bisa berguna buat kamu yaaa 😚 Maaf kalau hadiahnya bukan hal yang mewah kayak cincin, gelang, atau bunga, tapi ini aku kasih dari hati yang paling dalam, tulus buat kamuuu~ 💖

            Aku juga excitedd bangett sihh, udah ngebayangin gimana kalau kita ngerayain ulang tahun kamu bareng-bareng. Entah itu makan bareng, atau cuma sekadar tiup lilin via video call, yang penting barenggg 🤭 Tadinya aku juga mau bikin surprise lohh, tapi yaa kamu tau sendiri aku gak bakat yang begitu-begitu wkwkwkwk 🤣 jadi aku pikir mending aku jujur aja HAHAHA

            Anywayyy in busswayyy to hawaayyy 🚌🌴 aku cuma mau bilang makasih banyaaakkk buat semuanyaaa. Makasih udah hadir di hidup aku, udah jadi sosok yang bisa bikin aku senyum tiap hariii 😆💞 Kamu tuh beneran kayak vitamin mood versi manusiaa 😝 tiap kali ngobrol sama kamu tuh rasanya adem, hangat, nyaman, bahkan kadang bikin ngantuk karena aku ngerasa tenang banget 😴💗 Mau kamu lagi bete, clingy, happy, atau random gak jelas pun, asal kamu cerita aja itu udah cukup buat aku semangat lagi 😆🌈

            Kamu tuh berharga banget buat aku byyy ❤ Jadi aku bakal terus jagain kamu, support kamu, dan doain kamu di setiap langkah yang kamu jalanin ✨✨ I'm very gratefull bisa kenal dan punya kamu di hidup aku

            Once againn, Happpyyy Birthdaayyy my lovelyyy Elaaa 🎂🕯✨💖 Semoga kamu selalu dikelilingi cinta, kedamaian, dan kebahagiaan setiap harinya 😍 Aku sayang banget sama kamu, dan aku harap hari ini jadi salah satu hari paling spesial di hidup kamuuu 🥳💞

            Love uuuuu so so muchhh byyyyy 💋💖💖` 
        },

        { id: 11, 
            title: "An Explanation 🌙", 
            body: `Hai ell, 
            Aku gak tahu kamu bakal buka halaman ini lagi atau enggak, tapi kalau kamu baca ini… aku cuma mau jujur. Aku gak mau cari pembenaran, gak mau ngerayu, cuma mau ngomong apa adanya aja. 

            Awalnya aku kira kamu cuma lagi capek, kamu cuma butuh waktu buat sendiri, kayak biasanya kalau kamu lagi banyak pikiran atau lagi bete. Tapi ternyata aku salah, aku baru sadar kalau kamu bukan cuma capek, tapi kamu juga marah, terluka, dan kecewa sama aku. 
            Mungkin selama ini kamu udah ngerasa sakit, tapi kamu tahan itu. Kamu udah banyak ngertiin, banyak ngalah, banyak tutup mata atas kesalahan-kesalahan kecil yang aku lakuin. Tapi aku malah terus ngulang hal yang sama, terus ngelakuin hal bodoh yang bikin kamu capek sendiri. Kamu tutupin semuanya dengan keceriaan kamu, sampai akhirnya aku ngomong hal yang gak seharusnya aku ucapin… dan itu jadi titik di mana semuanya berubah. 

            Waktu aku bilang kata itu, aku bener-bener gak sadar seberapa dalam itu bisa ngena ke kamu. Aku kira itu cuma candaan, tapi ternyata aku salah besar. Aku nyesel banget, ell. Aku nyesel karena udah ngebuat kamu ngerasa gak dihargain, padahal kamu sama sekali gak pantas buat ngerasain hal itu.
            Soal “sayang-sayangan” itu… aku gak akan ngeles. Aku tahu aku salah banget. Aku gak sadar kalau itu bisa bikin kamu ngerasa gak yakin sama aku, bikin kamu ngerasa gak cukup. Padahal kamu tuh selalu cukup, bahkan lebih dari cukup. Aku yang gagal jadi orang yang bisa jaga perasaan kamu dengan bener.

            Walaupun konteksnya waktu itu cuma bercanda, aku sadar candaan itu tetap nyakitin. Aku mungkin ngelakuinnya tanpa niat jahat, tapi hasilnya tetep bikin kamu gak nyaman, bikin kamu ngerasa gak dihargai, dan aku benar-benar nyesel karena itu. Aku harusnya bisa lebih jaga cara aku ngomong, apalagi ke orang yang aku sayang.
            Aku tahu, maaf aja gak cukup buat balikin semuanya. Aku sadar banget kalau kepercayaan gak bisa langsung pulih kayak gitu aja. Tapi aku tetap mau bilang makasih. Makasih karena kamu masih mau maafin aku, padahal kamu gak harus. Makasih karena kamu udah jujur, walaupun jujur itu sakit banget buat aku. Dan makasih karena kamu pernah hadir di dalam hidup aku, ngubah aku, ngajar aku banyak hal, dan bikin aku sadar seberapa berharganya kamu buat aku.

            Sekarang aku gak mau maksa kamu buat berubah pikiran. Aku tahu kamu butuh waktu, dan aku juga harus kasih ruang buat itu. Tapi dari hati yang paling dalam, aku masih pengen pelan-pelan ngebangun semuanya lagi. Aku masih pengen benerin yang aku rusak, bukan buat mengulang yang lama, tapi buat mulai lagi dengan cara yang lebih dewasa, lebih tenang, dan lebih tulus.

            Kalaupun nanti ternyata semesta belum ngizinin, aku bakal tetap jalan. Tapi kalau Tuhan masih kasih kesempatan, aku janji aku bakal jaga kamu dan perasaan kamu dengan cara yang jauh lebih baik dari sebelumnya. Aku gak akan ngejar kamu dengan maksa. Aku cuma mau kamu tahu, rasa ini belum hilang. Aku masih sayang, masih pengen kamu, tapi kali ini aku mau nunjukin lewat tindakan, bukan sekadar kata.

            Jaga diri kamu baik-baik ya, ell. Makan yang bener, jangan suka begadang, jangan lupa istirahat. Aku masih di sini, pelan-pelan belajar, pelan-pelan jadi lebih baik, sambil tetap nyimpen doa kecil kalau suatu hari nanti, Tuhan bawa kita balik, tapi kali ini di waktu yang lebih tepat dan aku nggak akan menyia-nyain kesempatan itu.` 
        },

        { id: 12, 
            title: "Thank You For Everything ✨", 
            body: `Alllowww Elaa... Bagaimana kabar kamuu???? Aku harap kamu baik-baik aja yaa. Anddd semoga kamu happy terusss sehingga happy kamu bisa tersebar ke semua orangg di penjuru duniaaa.. Hahahahahaa. Oh ya, sebenarnya di tulisan ini aku mau sharing aja sih perasaan aku sekarang setelah kita done. Bukan bermaksud mengambil simpati kamu atau apapun, enggak sama sekali. Aku gak ada niat ke arah sana. It's just a pure sharing thinggss. Kita mulai yaaa...

            Setelah kita ketemu dan ngobrol, disitu hati aku kacau banget. Rasanya sakit banget sih, karena aku kehilangan orang yang aku sayang. Yaa.. awal-awal aku merasa bener-bener marah, sedih, pokoknya semuanya campur aduk. Tapi aku sadar, kalau ini terjadi karena kesalahan aku sendiri, dan aku bener-bener nyesalin perbuatan aku. 

            Aku tahu kalau permintaan maaf aku nggak akan ngilangin rasa kecewa kamu terhadap aku, ngebuat kamu balik lagi sama aku dan ngebalikin semuanya. Aku sudah menyesali itu semua dan aku udah sadar kalau aku nggak akan begitu lagi. 

            Tapi intinya disini adalah, aku mau berterima kasih ke kamu sebesar-besarnya dan sebanyak-banyaknya. Terima kasih udah hadir di dalam hidup aku,  terima kasih udah sharing semua hal bareng aku, dan terima kasih juga udah mengubah diri aku ini. Kehadiran kamu di hidup aku bener-bener berarti buat aku, jadi membuat aku sadar juga betapa pentingnya kamu untuk aku. 

            Mungkin memang betul saat ini kita belum berjodoh, tapi yang kayak kamu bilang aja, kalaupun kita berjodoh, kita bakal disatuin sama Tuhan lagi walaupun entah kapan waktunya. Tapi yang pasti Tuhan akan menyatukan dan mempertemukan kita berdua ketika sudah sama-sama siap. Saat ini aku udah memberikan segala hal yang terbaik buat kamu, dan aku bakal tunggu waktunya aku memberikan lagi segalanya untuk kamu. 

            Betul sih, titik tertinggi kita mencintai dan menyayangi seseorang adalah mengikhlaskan. So, aku sudah ikhlas dan aku udah rela kalau kamu mau fokus terhadap mimpi kamu. Aku disini bakal tetep menjadi support system kamu. Kalaupun kamu sama orang lain, aku harap orang itu bisa menjaga kamu baik-baik dan sayang kamu banyak-banyak. 

            Kalau suatu saat kamu baca tulisan ini, aku cuma mau kamu tahu, aku tulis ini bukan untuk bikin kamu balik, tapi untuk bilang bahwa aku bener-bener tulus sayang kamu waktu itu. Dan aku bersyukur pernah punya kamu.

            See u on top ya? God bless you, Ela, Anddd Happyyy Birthdayyyyy. Baiyee! 🖖
            ` 
        },

        { id: 13, 
            title: "Surat Untuk Ela 💌", 
            body: `Hai byy, aku mau ngomong serius sama kamu. 

            Lewat tulisan ini, aku mau ceritain beberapa hal yang belum sempet aku bilang ke kamu. Tulisan ini nggak langsung aku tulis dari pikiran dan hati aku, tapi butuh waktu lama buat aku ceritain semuanya dan butuh waktu juga buat sempurnain semuanya. Ya, seperti yang kita tau, kalau kita sama-sama sibuk, dan belum punya banyak waktu buat ngobrol bareng. Jadi, kalau kamu merasa lagi sibuk atau belum siap saatnya buat baca tulisan ini, it's okay. Kamu bisa baca ini di lain waktu kalau kamu udah siap, karena isi dari tulisan ini adalah semua overthinking aku yang belum bisa diceritain ke kamu.

            First of all, aku mau bilang thank you ke kamu sebesar-besar dan sebanyak-banyaknya. Aku bersyukur banget kamu udah hadir dan nyediain waktu kamu untuk aku. Mungkin tanpa kamu, bakal sulit buat aku untuk berproses menjadi sampai sekarang ini. Kamu buat aku membuka mata akan banyak hal, terlebih dari sisi iman aku. Kamu selalu ngajak aku buat saat teduh bareng, ceritain bible story setiap malem, dan hal-hal lainnya yang secara gak langsung menampar iman aku yang kurang ini buat menjadi lebih tekun lagi. Dari pov aku secara personal, sekarang aku jadi paham bagaimana sulitnya proses menjadi ela yang dewasa ini, dan aku juga paham perjalanan kamu mengenal dan mencintai Tuhan lebih dalam lagi. Cerita-cerita kamu itu yang menjadi motivasi aku bagaimana menjadi diri aku yang lebih baik. So, once again, thank you telah hadir di hidup aku, dan aku bersyukur akan hal itu. 

            Sebenarnya awal aku interest sama kamu itu di tahun 2021/2022 (aku lupa), pada saat kita krisma. Aku notice kamu di kelas itu, karena apalagi kalau bukan karena kencantikan kamu. Tapi setelah selesai krisma, kita gak pernah ketemu lagi. Tapi mungkin Tuhan mempertemukan kita lagi di acara nobar film tahun 2023 untuk promosi camping Panggilan Alam. Seperti yang pernah aku ceritain ke kamu, aku notice kalau ada kamu disitu setelah selesai acara. Setelah itu aku minta devi kenalin aku sama kamu, karena pada saat itu aku juga lagi mencari seseorang untuk hadir menemani aku. Dan tejadilah perkenalan pertama kita di natal 2023. Aku merasa aku fall in love banget sama kamu, hehehe. Kamu memang cantik banget, dan sampai sekarang juga masih sama cantiknya. Tapi di saat itu aku belum berani untuk mengungkapakn semua, dan aku juga malu buat ngobrol lebih dalam lagi sama kamu. Lalu berlanjut sampai 2024, aku mengejar kamu sampai masuk jadi pendamping Bina Iman, yang alasan selain karena panggilan, salah satu faktor aku masuk ke BIA adalah karena mau ngejar kamu.  

            Setelah 1 tahun berlalu, aku masih menahan rasa interest dan suka aku terhadap kamu sampai di 2025 ini, alias 1 tahun lebih. Pada saat itu memang aku merasa sedih juga, udah 1 tahun aku interest sama kamu, tapi aku takut bergerak, karena cerita dan trauma yang udah lalu. Jadinya aku cuma bisa diam mengagumi dan sayang kamu dari jauh, tapi rencana Tuhan gak ada yang tau. Waktu di kantor, aku lagi stalk akun tiktok @akunkeduaela kamu, dan di salah satu postingannya, ada kamu lagi ikut KKS. Aku pikir itu video lama, tapi pas aku perhatiin lagi, ternyata tanggalnya Juni 2025, dan pas banget aku nonton itu di hari selasa. Langsung aku ngajak beberapa orang buat ke gerjeja. Tapi takdir juga mengatakan yang lain. Awalnya memang aku datang buat memandang kamu, tapi karena dukungan teman-teman yang lain, jadinya aku coba bergerak untuk chat kamu. Dan ternyata ketakutan aku dan overthinking aku selama ini dipatahkan sama fast-respond kamu, dan akhirnya kita chat sampai jam 2 pagi. Itu pertama kali kita saling sharing, dan karena itu, aku memutuskan buat memulai perjalanan cinta aku. 
            
            To be honest, aku merasa nyaman ketika aku dekat dan ngobrol bareng kamu. Aku nyaman dengan keadaan di mana kita ngobrol hal yang aneh, ketawa hal random, dengerin curhat kamu, sampai responin laporan-laporan kecil kamu. Dan setelah beberapa lama kita saling sharing, disitu aku mulai untuk membuka diri dan memberikan segala bentuk perhatian aku ke kamu, dan disitulah sepertinya kamu sadar bahwa aku ada perasaan sama kamu. Kamu sering tanya ke aku, tapi aku selalu mengelak kalau aku chat kamu karena ingin deket aja, no interest at all. Tapi, seiring berjalannya waktu, kamu semakin yakin kalau aku memang ada perasaan terhadap kamu, begitu sebaliknya, dan sampai akhirnya, setelah 2 bulan, kamu mulai nanyain maksud dan tujuan sampai bagaimana perasaaan hati kita masing-masing. Akhirnya aku terbuka sama kamu bagaimana perasaan aku ke kamu selama ini dan begitu sebaliknya.  

            Aku sadar semenjak kita saling confess, aku merasa hubungan kita ini menjadi semakin dekat, tapi seringkali juga aku merasa semakin egois demi dapetin kamu. Aku buka semua batasan yang ada, hanya demi ngejar kalau aku sayang sama kamu. Tapi semakin lama, aku juga semakin sadar, kalau apa yang aku lakukan ini nggak sehat. Kamu juga semakin gak ada waktu untuk aktivitas kamu yang lain, dan seluruh kegiatan kamu terganggu. Sebenarnya aku nggak mau kehilangan momen bareng kamu, jadinya aku memikirkan bagaimana caranya aku tetap bisa sama kamu tanpa mengganggu aktivitas kamu. Hasilnya, kita nggak terlalu lost contact, kita masih ngobrol seperti biasa, namun nggak intens terus menerus. Dan, sebenarnya aku sedih juga karena waktu bareng kamu jadi berkurang, tapi supaya kamu masih bisa fokus dengan kegiatan dan aktivitas kamu lainnya. Aku pikir sebenarnya ini keputusan yang wise buat kita berdua. Karena kalau sampai break atau lost contact, kita kayak berada di hubungan remaja-remajaan, yang masih mengandalkan ego untuk bertindak tanpa berpikir jauh dulu.  

            Tapi ngomong-ngomong hubungan remaja, aku merasa pas awal-awal kita deket, aku adalah orang yang paling nggak dewasa, karena keposesifan aku dan kecemburuan aku yang berlebihan, salah satu contohnya pas kamu ngobrol deket sama Ko Bernard ataupun Ko Kevin. Disitu aku cemburu banget kamu deket sama laki-laki lain, padahal konteksnya adalah sama-sama pendamping kelas TK. Lalu, kamu juga deket sama Ci Feni yang buat aku merasa aku nggak ada apa-apanya di mata kamu. Aku cemburu pas Ci Feni tenangin kamu, sampai aku mikir: "Kenapa harus Ci Feni? Kan bisa aku? Kita udah deket, kok kamu masih deket sama Ci Feni?" kayak gitu kira-kira. Sama anak-anak lektor juga. Aku merasa kalau anak-anak lektor terlalu pick me supaya dapat perhatian dari kamu. Aku kesel disana aku nggak bisa deket sama kamu karena anak-anak lektor itu. Intinya pada saat itu aku ngerasa nggak berguna dan aku biasa aja di mata kamu. 

            Tapi pada saat momen-momen itu, aku selalu berpikir pakai logika aku: "Lah, emang kenapa kamu deket sama Ko Ber atau Ko Kevin? Kan sama-sama pendamping TK. Lah, wajar dong kalau Ci Feni perhatian ke kamu, itu tandanya memang Ci Feni perhatian sama kamu. Lah, bagus dong kamu kasih perhatian ke anak-anak, supaya mereka juga bisa dihargai, jadi lebih semangat!". Aku pernah bilang sebelumnya, kalau ego dari hati aku dan logika dari pikiran aku seringkali berantem, dan kadang juga ego aku kecolongan yang membuat aku panas. Tapi sekarang-sekarang ini aku udah cuek dengan ego aku ini, karena aku sadar kalau aku selalu posesif, tandanya aku belum dewasa. Dan kalau aku belum dewasa, artinya aku nggak layak buat menjadi laki-laki. That's why sekarang aku merasa biasa aja kalau kamu berteman dengan siapa aja dan dimana aja, atau kamu kasih perhatian ke siapapun itu, karena itu hak kamu. Aku gak berhak untuk mengatur kamu, dan bukan pikiran yang sehat juga kalau aku apa-apa membatasi kamu. 

            Di gereja, kita masih malu-malu kucing karena nggak mau terlihat dekat dan memiliki hubungan, padahal nyatanya orang-orang udah tau kita ini dekat banget. Pasti salah satu atau bahkan kita berdua selalu agak menjauh, karena takut dikira punya hubungan, apalagi ke orang-orang yang kenal kamu, kita sangat menjaga banget hal itu. Di lain sisi aku merasa berasalah juga kalau kita harus terus nutupin kedekatan kita ini entah sampai kapan.  Makanya, aku mau kita terbuka aja ke orang-orang, tapi gak yang sangat terbuka. Maksud aku disini adalah terbuka kita deket seperti biasa, bukan deket peluk-pelukan atau gelendotan, tapi dekat seperti sahabat, saling care dan gak perlu malu-malu. Aku pernah ngobrolin ini sama Devi, intinya, selama kita terus berusaha menutupi kedekatan kita ini, kita bakal diomongin terus, padahal kalau kita terbuka aja, lama-lama mereka juga mengerti dan cuek. Omongan atau ceng-cengan itu bakal berlalu dengan sendirinya kok. 

            Mungkin ini juga karena aku bisa dibilang awam dalam dunia percintaan. Aku gak peka banget terhadap kamu dan seringkali gak sesuai sama apa yang kamu inginin, mau dari tindakan atau kata-kata. Orang juga sering banget kasih aku advice-advice soal hubungan, tapi (mungkin karena aku terlalu egois) aku gak dengerin mereka sepenuhnya, karena aku percaya setiap hubungan punya caranya masing-masing, gak bisa disamain. Contohnya waktu momen kuah angkak itu yang akhirnya bikin kamu diomelin, itu sebenarnya ide dari orang lain, dan dari situ aku belajar buat berhenti terlalu nurut sama saran orang-orang. Aku lebih pilih buat belajar dari cerita mereka tentang hubungan, bukan disuruh harus ini-itu. Karena menurut aku, hubungan akan rusak kalau salah satu dari pasangannya terlalu dengerin dan nurut sama orang luar. Kadang orang lain gak perlu ikut campur terlalu jauh, cukup tahu aja kita ada di mana. That's why akhir-akhir ini aku jarang banget cerita ke orang-orang tentang hubungan kita, dan aku cuma tanya-tanya hal yang perlu aja, itupun ke orang-orang yang menurut aku kompeten (ex: Ci Silvi, Devina, Ester, Ci Shully, Ci Ailin, Ko Kevin)

            Untuk persoalan papi mami kamu, to be honest, aku sadar kita nggak bisa untuk memaksa supaya papi dan mami kamu bisa menerima aku ini, pasti semua butuh waktu supaya berjalan. Kamu belum boleh pacaran, itu juga memang keputusan dari papi dan mami kamu. Selain itu, kegiatan kamu juga dibatasi oleh mereka, sehingga ada muncul sedikit perasaan membengkang dari diri kamu. Kesimpulannya, sebenarnya niat mereka sebagai orang tua adalah menjauhkan kamu dari hal-hal yang buruk, dan itu keputusan terbaik yang bisa mereka berikan kepada kamu. Sama halnya dimana pas kita ketahuan lagi vidcall, mami kamu langsung tanya-tanya soal aku ke kamu. Itu feeling dari seorang ibu, mami kamu nggak mau kalau kamu pacaran di waktu yang masih terbilang muda. Mami kamu mau kamu fokus dengan apa yang di depan, untuk masa depan kamu. Mami kamu juga merasa aku ini belum cukup dari sisi manapun, dan itu adalah hal yang wajar. Selain karena masih muda, aku juga belum ketemu sama mami papi kamu untuk ngomongin masa depan bareng kamu. 

            Aku nggak mau kita begini terus, aku nggak mau kamu bohong terus ke papi dan mami kamu soal kedekatan kita. Aku mau kedekatan kita ini transparan ke papi mami kamu. Karena aku juga yang merasa bersalah kamu harus bohong ke papi mami kamu hanya untuk spending time sama aku. Kalaupun papi mami kamu udah tau, kita nggak perlu lagi nutup-nutupin ini semua. Walapun aku merasa takut juga, aku tetep seorang laki-laki, harus ketemu sama orang tua kamu. Ibarat kayak interview kerja aja, HRD perlu tau sifat dan karakteristik calon pegawainya bagaimana. HRD tidak terpaku sama data aja, melainkan pembicaraan secara langsung. Keputusan pastinya dari papi mami kamu akan terlihat seiring waktu berjalan. 

            And then untuk persoalan kamu yakin sama aku atau enggak, walaupun saat ini aku bukan tipe pasangan hidup kamu, dan aku paham aku masih banyak kekurangannya, tapi aku bakal terus berjuang untuk berkembang menjadi orang yang lebih baik lagi. Kamu selalu buat aku kepikiran all day, setiap harinya. Aku merasa kita emang bukan teman biasa, walaupun kamu selalu ingetin kalau kita ini teman. Justru aku mau kalau kita lebih dari seorang teman, membangun hubungan dewasa bersama, tapi aku gak mau terburu-buru sampai punya hubungan dan lainnya. Aku mau kita pelan tapi pasti aja, belajar dan membangun bersama. 

            Maaf ya aku selama ini aku gak mau move on dari kamu. Menghilang begitu saja setelah aku menunggu selama 1 tahun lebih itu gak akan mudah. Tapi aku punya prinsip hidup, yaitu aku merasa bahwa memang kamu dijadikan Tuhan untuk aku, dan begitu pula sebaliknya. Intinya aku bukan deny kalau kita gak cocok atau kita gak berjodoh. Tapi belum waktunya kita menyimpulkan hal tersebut karena waktu kita dekat dan sayang satu sama lain masih tergolong sebentar, yaitu cuma 3 bulan. Dan aku merasa itu waktu yang sangat singkat untuk menentukan ke mana arah kita nanti kedepannya. 

            Aku tau saat ini kamu masih merasa gak yakin sama aku untuk kedepannya, sampai married, punya anak, dan lain-lain. It's totally fine, sayang, karena umur kita ini masih  sangat muda, belum cukup umur dan mental kita untuk memikirkan hal yang jauh disana. Mungkin keyakinan aku untuk menikah dengan kamu saat ini kelihatan 100%. Namun aku belum bisa mikirin nanti kehidupan kita menikah bagaimana, kehidupan berkeluarganya kita bagaimana, dan lain sebagiannya. Dan itu wajar untuk masa-masa seperti kita ini. Nanti seiring berjalannya waktu, hubungan kita bakal dihadapkan dengan berbagai rintangan yang berat sebagai penentu apakah kita layak untuk mempertahankan satu sama lain atau nggak. Ini akan menjadi jawaban untuk kita berdua juga apakah kita akan siap menghadapi kerasnya kehidupan berumah tangga bersama. Gak semua hubungan itu berjalan dengan mulus, pasti harus lewatin jalan yang bergelombang, bahkan sampai lewatin jurang. 

            Aku mengerti dengan pov kamu di mana jodoh itu Tuhan yang pilih, dan Tuhan yang kasih, tapi Tuhan juga bisa cabut itu. Balik lagi, dalam prosesnya, ini menjadi tantangan untuk kita, apakah kita bisa mempertahankan jodoh kita atau tidak. Dari pov aku, salah satu yang menjadi tanda adalah kita semakin dekat dan semakin mengenal satu sama lain ketika ada masalah yang muncul. Makanya mau bagaimanapun juga rintangan yang dihadapi, aku bakal fight terus untuk hubungan kita sampai kapanpun.

            Tapi yang pasti aku udah yakin dan percaya sama kamu, dan aku mau kita jalanin hubungan ini dulu. Kamu memang bukan orang yang suka dengan kata 'jalanin aja dulu', tapi aku mau kamu ngerti, konteks yang aku maksud disini adalah menjalankan hubungan ini bersama-sama. Kita saling percaya, saling mengerti dan saling berjuang bersama-sama bahwa sebenarnya kita ini adalah pasangan yang telah dipertemukan oleh Tuhan, yang sedang menjalankan ujian dari-Nya sehingga kita bisa simpulkan bahwa kita sedang berusaha dan belajar untuk naik ke tahap pernikahan dan bekeluarga. Aku bisa bilang seperti ini karena cerita dari orang lain yang buat aku merasa bahwa yakin juga sama kamu, walaupun aku tahu jalan hidup tiap orang berbeda-beda, pov dari setiap orang juga berbeda-beda tapi dari situlah yang membuat aku bisa belajar juga untuk mengembangkan dan menjaga hubungan kita yang masih abu-abu ini. Kasih aku kesempatan untuk buktiin semua yang aku jelasin ke kamu selama ini.

            Intinya ini adalah semua butuh waktu untuk berproses. Kalau boleh, aku mau buka hubungan sama kamu, tapi secara pelan-pelan dan bertahap aja. Kita sama-sama belajar bersama, walaupun ada kesalahan-kesalahan yang terjadi, itu hal yang wajar dan kita sama-sama tau. Tapi, kalau kamu masih dengan pendirian kamu yang belum siap untuk membuka hubungan baru, it's totally fine juga. Boleh ya aku menunggu kamu untuk siap, walaupun kamu sampai 1000x bilang kalau itu wasting time, aku merasa itu bukan wasting time. Menunggu seseorang yang aku cinta untuk masa depan bersama nggak akan membuat aku menyesal. Kalaupun kita memang belum bisa berjodoh, Tuhan bakal kasih jalan lain yang lebih baik ke kita dan aku nggak masalah akan hal itu. Aku nggak maksa kamu untuk memberikan jawaban 'Iya', tapi aku bakal berdiri gak bergerak menanti jawaban dari kamu. Aku juga bakal terus menjaga dan mendukung kamu dari belakang. Aku cuma berharap kamu paham dari sudut pandang aku seperti apa tentang hubungan kita saat ini. 

            Semua balik lagi ke kamu, dan jalan yang diberikan oleh Tuhan. Saat ini aku cuma bisa mendoakan yang terbaik untuk hubungan kita ini. Aku menanti saat-saat kita bersama, tapi aku berpikir juga seperti ini: “Apa aku harus menghilang dulu dari hubungan ini? Kalau memang kita berjodoh, Tuhan bakal pertemukan kita lagi di lain waktu”. Ya, sulit juga untuk mengimplementasikannya, karena aku nggak mau kehilangan kamu. 

            Lasty, i want to say thank you again ke kamu yang udah mau luangin waktu untuk membaca tulisan ini. I'm sorry kalau ada sesuatu yang buat kamu gak ngerti di tulisan ini atau bahkan banyak hal yang nggak konsisten dari ucapan aku, tapi aku harap kamu paham maksudnya, hehehe. Kalau kamu mau laporan ke aku dari yang penting sampai enggak penting, it’s okay to contact me, I always available, kok. It’s okay juga untuk cerita apapun ke aku, dari curhatnya kamu, keluh kesah kamu, dan semuanya. Karena aku enggak mau kalau kamu memanggul semua itu sendirian. Setidaknya kalau kita panggul berasama, terasa menjadi lebih ringan. Dan yang pasti, aku menunggu jawaban dari kamu dan jawaban dari Tuhan. 

            Thank you for everything, Ela ❤️

            Liam

            20-10-2025
            ` 
        },
    ];

    const handleUnlock = () => {
        if (password === correctPassword) {
            setIsUnlocked(true);
        } else {
            alert("Password salah, coba lagi ya 💗");
        }
    };

    return (
        <div className="p-4 animate-fade-in">
            {!selectedChat ? (
                <div className="grid grid-cols-1 gap-4">
                    {messages.map((msg) => (
                        <button
                            key={msg.id}
                            onClick={() => {
                                setSelectedChat(msg);
                                setIsUnlocked(false);
                                setPassword("");
                            }}
                            className="bg-pink-100 p-3 rounded-lg shadow hover:bg-pink-200 transition text-left"
                        >
                            <h3 className="font-semibold">{msg.title}</h3>
                        </button>
                    ))}
                </div>
            ) : (
                <div className="bg-white p-4 rounded-xl shadow-md animate-fade-in">
                    <button
                        onClick={() => setSelectedChat(null)}
                        className="flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                        Back
                    </button>
                    <br />

                    {selectedChat.id === 13 && !isUnlocked ? (
                        <div className="text-center space-y-4 py-8">
                            <h2 className="text-lg font-semibold text-gray-700">
                                Surat ini dilock 🔒 
                            <br />
                                Kalau kamu udah siap baca surat ini, masukkin aja password nya ya!
                            </h2>
                            <p className="text-sm text-gray-500">
                                (Clue: umur kamu sekarang)
                            </p>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Masukkin passwordnyaa..."
                                className="border border-pink-300 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                            <br />
                            <button
                                onClick={handleUnlock}
                                className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition-all"
                            >
                                Unlock Surat 💌
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                            {selectedChat.body
                                .replace(/📜.*$/s, '') 
                                .split('\n\n')
                                .map((para, idx) => (
                                    <p key={idx}>{para}</p>
                                ))
                            }

                            {selectedChat.id !== 1 && selectedChat.id !== 11 && selectedChat.id !== 12 && (
                                <p className="italic text-sm mt-10 pt-4 border-t border-gray-300 text-gray-500">
                                    📜 This message was written when things were still warm and full of smiles. I decided to keep it here, as a reminder that what we had was once something real and beautiful.
                                </p>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Message;
