export default function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white min-h-screen flex items-center">
      {/* background texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT SIDE */}
        <div className="max-w-2xl">
          <div className="overflow-hidden">

            <h1 className="leading-[0.9] font-light">
              <span className="block text-5xl md:text-7xl lg:text-8xl">
                Reklama
              </span>

              <div className="flex items-start gap-4 mt-2">
                <span className="text-lg md:text-2xl text-white/50 mb-3">
                  s ktorou
                </span>

                <span className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-black tracking-[-0.08em] text-blue-500">
                  VÁS
                </span>
              </div>

              <div className="flex items-center gap-5 mt-3">
                <div className="h-px flex-1 bg-white/10" />

                <span className="uppercase tracking-[0.4em] text-sm text-white/50 whitespace-nowrap">
                  uvidia všetci
                </span>
              </div>
            </h1>
          </div>

          <p className="mt-12 text-white/45 max-w-md leading-relaxed text-sm md:text-base">
            Tlačoviny, billboardy, polepy áut a vizuály ktoré nezaostávajú medzi
            ostatnými.
          </p>

          <div className="mt-10 flex">
            <button className="px-7 py-4 bg-red-800 border border-white/20 text-white rounded-l-xl text-sm font-medium hover:scale-[1.03] transition">
              Zobraziť služby
            </button>

            <button className="px-7 py-4 bg-zinc-800 border border-white/10 rounded-r-xl text-sm text-white/70 hover:border-white/30 transition">
              Kontakt
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end">
          {/* shadow */}
          <div className="absolute bottom-8 w-75 h-15 bg-black/60 blur-2xl rounded-full" />

          {/* floating flyer */}
          <div className="relative group">
            <div className="absolute inset-0 bg-white/5 rounded-[28px] blur-2xl scale-95" />

            <img
              src="/heroFlyer.png"
              alt="Magazine flyer"
              className="
                relative
                w-70
                md:w-95
                lg:w-110
                object-contains
                animate-float
                drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]
                select-none
                pointer-events-none
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}