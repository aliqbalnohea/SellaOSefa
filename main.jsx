import { useRef, useState } from "react"

const homePokemon = [
  {
    name: "Sylveon",
    id: 700,
    className: "absolute top-[650px] right-[55%] w-34 rotate-6",
  },
  {
    name: "Skitty",
    id: 300,
    className: "absolute top-[70px] left-[7%] w-24 -rotate-12",
  },
  {
    name: "Stufful",
    id: 759,
    className: "absolute top-[650px] right-[8%] w-34 rotate-12",
  },
  {
    name: "Slowpoke",
    id: 79,
    className: "absolute bottom-[1645px] right-[20%] w-33 -rotate-0",
  },
  {
    name: "Latias",
    id: 380,
    className: "absolute top-[150px] right-[40%] w-70 rotate-6",
  },
  
]

const galleryPokemon = [
  {
    name: "Jigglypuff",
    id: 39,
    className: "absolute top-[80px] left-[7%] w-28 -rotate-12",
  },
  {
    name: "Clefairy",
    id: 35,
    className: "absolute top-[600px] right-[-10%] w-32 rotate-12",
  },
  {
    name: "Mew",
    id: 151,
    className: "absolute top-[980px] left-[-7%] w-44 rotate-6",
  },
  {
    name: "Espeon",
    id: 196,
    className: "absolute top-[118px] right-[28%] w-41 -rotate-2",
  },
]

const aboutPokemon = [
  {
    name: "Eevee",
    id: 133,
    className: "absolute top-[80px] right-[8%] w-38 rotate-0",
  },
  {
    name: "Togepi",
    id: 175,
    className: "absolute top-[80px] left-[8%] w-31 -rotate-3",
  },
  {
    name: "Chansey",
    id: 113,
    className: "absolute top-[545px] right-[65%] w-40 rotate-1",
  },
   {
    name: "Latios",
    id: 381,
    className: "absolute top-[400px] right-[13%] w-46 rotate-6",
  },
  
]

const homePhotos = [
  "/foto1.jpg",
  "/foto2.jpg",
  "/foto3.jpg",
  "/foto4.jpg",
  "/foto6.jpg",
  "/foto7.jpg",
  "/foto9.jpg",
  "/foto8.jpg",
]

const galleryPhotos = [
  ...homePhotos,
  "/foto10.jpg",
  "/foto11.jpg",
  "/foto12.jpg",
  "/foto13.jpg",
  "/foto14.jpg",
  "/foto15.jpg",
]

const aboutCards = [
  ["♡ Things I Love", "Cute Pokémon, flowers, soft songs, plushies, pink sunset, and sweet memories."],
  ["✨ Personality", "Calm, dreamy, lovely, emotional, and always trying to spread warmth."],
  ["♫ Favorite Song", "Daisies — Justin Bieber"],
]

const fullAboutCards = [
  ...aboutCards,
  ["My Story", "Write your first longer description here."],
  ["More About Me", "Write your second longer description here."],
]

export default function App() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [page, setPage] = useState("home")
  const pagePokemon = {
    home: homePokemon,
    gallery: galleryPokemon,
    about: aboutPokemon,
  }

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (audioRef.current.paused) {
      audioRef.current.play()
      setIsPlaying(true)
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const startMusic = () => {
    if (!audioRef.current || isPlaying) return

    audioRef.current.play()
    setIsPlaying(true)
  }

  return (
    <div
      onClick={startMusic}
      className="min-h-screen relative text-white overflow-hidden bg-gradient-radial from-pink-300 via-pink-100 to-white"
    >

      {/* BACKGROUND GLOW ORBS */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-400/40 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-300/30 blur-[140px] rounded-full"></div>

        {/* center glow biar makin “fade ke putih” */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/40 blur-[160px] rounded-full"></div>
      </div>

      {/* MUSIC */}
      <audio ref={audioRef} loop className="hidden">
        <source
          src="music.mp3"
          type="audio/mp3"
        />
      </audio>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          toggleMusic()
        }}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-pink-200/70 bg-white/80 px-5 py-3 text-pink-700 shadow-2xl backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-pink-100"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-pink-400 text-white shadow-lg">
          {isPlaying ? "❚❚" : "▶"}
        </span>
        <span className="text-sm font-bold">
          {isPlaying ? "Music playing" : "Play music"}
        </span>
      </button>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-10 relative">

        {pagePokemon[page].map((pokemon) => (
          <img
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
            className={`${pokemon.className} hidden sm:block pointer-events-none select-none drop-shadow-2xl z-20`}
          />
        ))}

        {/* NAVBAR */}
        <nav className="flex items-center justify-between mb-20">

          <h1 className="text-2xl md:text-3xl font-black tracking-[6px] text-pink-700">
            SELLA O. SEFA
          </h1>

          <div className="hidden md:flex gap-8 text-pink-700/60 text-sm">
            <button type="button" onClick={() => setPage("home")} className="hover:text-pink-700">
              HOME
            </button>
            <button type="button" onClick={() => setPage("gallery")} className="hover:text-pink-700">
              GALLERY
            </button>
            <button type="button" onClick={() => setPage("about")} className="hover:text-pink-700">
              ABOUT
            </button>
          </div>

        </nav>

        {/* HERO */}
        <section className={`${page === "home" ? "grid" : "hidden"} md:grid-cols-2 gap-14 items-center`}>

          {/* LEFT */}
          <div>

            <p className="text-pink-600/70 mb-3 text-lg">
              welcome to my little world ♡
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight text-pink-700">
              SELLA
              <br />
              O. SEFA
            </h1>

            <p className="mt-7 text-pink-700/60 leading-relaxed text-lg max-w-lg">
              A soft little space filled with memories,
              lovely moments, pink skies, cute Pokémon,
              warm feelings, and peaceful midnight music.
            </p>

            {/* BUTTON */}
            <div className="flex gap-4 mt-10 flex-wrap">

              <button
                type="button"
                onClick={() => setPage("gallery")}
                className="bg-pink-400 text-white px-7 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
              >
                My Gallery ♡
              </button>

              <button
                type="button"
                onClick={() => setPage("about")}
                className="border border-pink-400/40 text-pink-700 px-7 py-3 rounded-2xl hover:bg-pink-200/30 transition duration-300"
              >
                About Me
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center relative">

            <img
              src="/foto5.jpg"
              alt="sella"
              className="w-[320px] h-[430px] object-cover rounded-[35px] shadow-2xl border border-pink-300/30"
            />

            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
              className="absolute -bottom-8 -left-8 w-24 drop-shadow-2xl"
            />

            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
              className="absolute top-0 -right-6 w-24 drop-shadow-2xl"
            />

          </div>

        </section>

        {/* GALLERY */}
        <section className={`${page === "home" || page === "gallery" ? "block" : "hidden"} mt-28`}>

          <h2 className="text-3xl font-black text-pink-700 mb-10">
            Lovely Memories ✨
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {(page === "gallery" ? galleryPhotos : homePhotos).map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-64 object-cover rounded-3xl hover:scale-105 transition duration-300 shadow-xl border border-pink-200/30"
              />
            ))}

          </div>

        </section>

        {/* ABOUT CARDS */}
        <section className={`${page === "home" || page === "about" ? "grid" : "hidden"} md:grid-cols-3 gap-6 mt-28`}>

          {(page === "about" ? fullAboutCards : aboutCards).map(([title, desc], i) => (
            <div key={i} className="bg-white/40 border border-pink-200/40 rounded-[30px] p-7 backdrop-blur-xl">

              <h3 className="text-2xl font-bold text-pink-700 mb-4">
                {title}
              </h3>

              <p className="text-pink-700/60 leading-relaxed">
                {desc}
              </p>

            </div>
          ))}

        </section>

        {/* FOOTER */}
        <footer className="text-center mt-28 pb-10 text-pink-700/40">

          <p>
            made with love, soft dreams, and pink memories ♡
          </p>

        </footer>

      </main>

    </div>
  )
}
