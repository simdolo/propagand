// components/ContactSection.jsx

export default function ContactSection() {
  return (
    <section className="relative min-h-screen text-white px-6 py-24 overflow-hidden">
      {/* texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[28px_28px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-6 auto-rows-[180px] gap-4">
          {/* CONTACT INFO */}
          <div className="md:col-span-2 md:row-span-1 p-2 flex flex-col justify-between">
            <div>
              <span className="uppercase tracking-[0.35em] text-white/30 text-xs">
                kontakt
              </span>

              <h2 className="text-3xl md:text-5xl mt-4 font-light leading-tight">
                Ozvite sa.
                <br />
                Zvyšok už vyriešime my.
              </h2>
            </div>
          </div>

          {/* MAP */}
          <div className="md:col-span-4 md:row-span-2 border border-white/10 bg-white/5 rounded-[30px] overflow-hidden relative">
            <iframe
              title="map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.0853768635357!2d17.617984776923144!3d47.99273716123276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b9d6435c7f5df%3A0x1895401c99eaadbf!2sBiskupa%20Kond%C3%A9ho%204577%2F18%2C%20929%2001%20Dunajsk%C3%A1%20Streda!5e0!3m2!1ssk!2ssk!4v1779638587035!5m2!1ssk!2ssk"
              loading="lazy"
            />
          </div>

          {/* COMPANY DATA */}
          <div className="md:col-span-2 md:row-span-2 border border-white/10 bg-white/1.5 rounded-[30px] p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xs uppercase tracking-[0.35em] text-white/30 mb-4">
                fakturačné údaje
              </h3>

              <div className="space-y-2 text-sm text-white/70">
                <p className="text-white/90 font-medium">PRINT STUDIO s.r.o.</p>
                <p>Reklamná 123, 971 01 Prievidza</p>
                <p>IČO: 00000000</p>
                <p>DIČ / IČ DPH: SK0000000000</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-white/70">
              <div>
                <p className="text-white/40 uppercase tracking-wide text-xs">
                  telefonne číslo
                </p>
                <p className="text-white/90 font-medium">+421 900 000 000</p>
              </div>

              <div>
                <p className="text-white/40 uppercase tracking-wide text-xs">
                  email
                </p>
                <p className="text-white/90 font-medium">info@firma.sk</p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="md:col-span-4 md:row-span-2 border border-white/10 bg-white/2 rounded-[30px] p-8">
            <h3 className="text-xs uppercase tracking-[0.35em] text-white/30 mb-6">
              napíšte nám
            </h3>

            <p className="text-sm text-white/60 mb-6 max-w-xl">
              Máte nápad, projekt alebo len približnú predstavu? Stačí pár viet
              — zvyšok premeníme na funkčný návrh a realizáciu.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Vaše meno"
                className="bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-white/30"
              />

              <input
                type="email"
                placeholder="Email"
                className="bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-white/30"
              />

              <input
                type="text"
                placeholder="O čo ide?"
                className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-white/30"
              />

              <textarea
                placeholder="Popíšte váš projekt..."
                rows={5}
                className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-white/30 resize-none"
              />

              <button
                type="submit"
                className="md:col-span-2 bg-white text-black rounded-full py-4 font-medium hover:scale-[1.02] transition"
              >
                Odoslať požiadavku
              </button>
            </form>
          </div>

          {/* NEWSLETTER */}
          <div className="md:col-span-2 md:row-span-1 border border-white/10 bg-white/1.5 rounded-[30px] p-6 flex flex-col justify-between">
            {/* top row */}
            <div className="flex justify-start">
              <h3 className="text-xs uppercase tracking-[0.35em] text-white/30 text-left">
                newsletter
              </h3>
            </div>

            {/* middle content */}
            <div className="mt-6">
              <p className="text-sm text-white/70 leading-relaxed">
                Dostávajte prehľad o našich nových projektoch, print riešeniach
                a marketingových nápadoch, ktoré reálne fungujú.
              </p>

              <p className="text-xs text-white/40 mt-3 leading-relaxed">
                Žiadny spam. Len občasné inšpirácie, ktoré vám môžu pomôcť
                zlepšiť vašu značku.
              </p>
            </div>

            {/* bottom input */}
            <div className="mt-6 flex gap-2">
              <input
                type="email"
                placeholder="Váš email"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-white/30"
              />
              <button className="px-5 bg-white text-black rounded-xl text-sm font-medium hover:scale-[1.03] transition">
                Prihlásiť
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
