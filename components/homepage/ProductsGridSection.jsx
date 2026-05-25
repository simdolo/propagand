// components/ProductsGridSection.jsx

export default function ProductsGridSection() {
  return (
    <section className="relative min-h-screen text-white px-6 py-24 overflow-hidden">
      {/* background texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[28px_28px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-6 auto-rows-[180px] gap-1">
          {/* TITLE BLOCK */}
          <div className="md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between">
            <span className="uppercase tracking-[0.35em] text-white/30 text-xs">
              produkty
            </span>

            <h2 className="text-4xl md:text-6xl leading-[0.9] font-light tracking-tighter">
              Vyberte si z našich
              <br />
              <span className="font-black">Produktov</span>
              <br />
            </h2>

            <div className="w-full h-px bg-white/10 mt-6" />
          </div>

          {/* CATEGORY 1 */}
          <div className="md:col-span-2 md:row-span-4 border border-red-500/30 bg-white/2 rounded-tl-4xl p-6 hover:bg-white/4 transition">
            <div className="mb-5">
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Tlač & reklamné materiály
              </h3>

              <div className="mt-3 w-14 h-px bg-white/15" />
            </div>

            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-md">
              Klasika, ktorá robí prvý dojem. Od vizitky po firemný katalóg.
            </p>

            <ul className="space-y-2">
              {[
                "Vizitky",
                "Hlavičkové papiere",
                "Letáky & brožúry",
                "Firemné obálky",
                "Papierové & PE tašky",
                "Nástenné kalendáre",
                "Lepiace pásky s potlačou",
                "Identifikačné náramky",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/75"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CATEGORY 2 */}
          <div className="md:col-span-2 md:row-span-3 border border-red-500/30 bg-white/2 rounded-tr-4xl p-6 hover:bg-white/4 transition">
            <div className="mb-5">
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Reklama & vizuálna propagácia
              </h3>

              <div className="mt-3 w-14 h-px bg-white/15" />
            </div>

            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-md">
              Veci, ktoré vidia všetci — presne tam, kde ich treba.
            </p>

            <ul className="space-y-2">
              {[
                "Billboardy & bigboardy",
                "Svetelné reklamy",
                "Reklama na autá",
                "Výklady & polepy",
                "Interiérové brandingy",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/75"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA BLOCK (ENHANCED) */}
          <div className="md:col-span-2 md:row-span-4 border border-red-500/30 bg-white/2 rounded-l-4xl p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-white/30">
                kontakt
              </span>

              <h3 className="text-2xl md:text-3xl mt-6 leading-snug font-light">
                Máte nápad? My ho vieme premeniť na{" "}
                <span className="font-black">reálny výstup</span>.
              </h3>

              <p className="text-sm text-white/60 mt-6 leading-relaxed">
                Stačí pár slov. Navrhneme, pripravíme, vytlačíme a doručíme. Bez
                zbytočných krokov, bez komplikácií.
              </p>

              <p className="text-sm text-white/40 mt-4 leading-relaxed">
                Rýchle nacenenie • individuálny prístup • kompletná výroba
              </p>
            </div>

            <button className="px-7 py-4 bg-red-800 border border-white/20 text-white rounded-xl text-sm font-medium hover:scale-[1.03] transition w-fit">
              Dohodnúť spoluprácu
            </button>
          </div>

          {/* CATEGORY 3 */}
          <div className="md:col-span-2 md:row-span-3 border border-red-500/30 bg-white/2 rounded-br-4xl p-6 hover:bg-white/4 transition">
            <div className="mb-5">
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Digitálne služby
              </h3>

              <div className="mt-3 w-14 h-px bg-white/15" />
            </div>

            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-md">
              Online prítomnosť, ktorá nie je len web, ale nástroj predaja.
            </p>

            <ul className="space-y-2">
              {[
                "Tvorba webstránok & e-shopov",
                "SEO optimalizácia",
                "PPC kampane (Google Ads)",
                "Social media reklama",
                "Brand identity & dizajn",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/75"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CATEGORY 4 */}
          <div className="md:col-span-2 md:row-span-2 border border-red-500/30 bg-white/2 p-6 hover:bg-white/4 transition">
            <div className="mb-5">
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Personalizované produkty
              </h3>

              <div className="mt-3 w-14 h-px bg-white/15" />
            </div>

            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-md">
              Malé detaily, ktoré robia značku zapamätateľnou.
            </p>

            <ul className="space-y-2">
              {[
                "Darčekové predmety",
                "Pečiatky",
                "Medené & hliníkové štítky",
                "Gravírovanie",
                "Prémiové firemné darčeky",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/75"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
