// components/ProductsGridSection.jsx

export default function ProductsGridSection() {
  return (
    <section className="relative min-h-screen text-white px-6 py-24 overflow-hidden">
      {/* background texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[28px_28px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-6 auto-rows-[180px] gap-4">

          {/* TITLE BLOCK */}
          <div className="md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between">
            <span className="uppercase tracking-[0.35em] text-white/30 text-xs">
              produkty
            </span>

            <h2 className="text-4xl md:text-6xl leading-[0.9] font-light tracking-tighter">
              Vyberte si z
              <br />
              <span className="font-black">našich</span>
              <br />
              Produktov
            </h2>

            <div className="w-full h-px bg-white/10 mt-6" />
          </div>

          {/* CATEGORY 1 */}
          <div className="md:col-span-2 md:row-span-4 border border-white/10 bg-white/1.5 rounded-[30px] p-6 hover:bg-white/3 transition">
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/40 mb-4">
              Tlač & reklamné materiály
            </h3>

            <p className="text-xs text-white/40 mb-4 leading-relaxed">
              Klasika, ktorá robí prvý dojem. Od vizitky po firemný katalóg.
            </p>

            <ul className="text-sm text-white/75 space-y-1">
              <li>Vizitky</li>
              <li>Hlavičkové papiere</li>
              <li>Letáky & brožúry</li>
              <li>Firemné obálky</li>
              <li>Papierové & PE tašky</li>
              <li>Nástenné kalendáre</li>
              <li>Lepiace pásky s potlačou</li>
              <li>Identifikačné náramky</li>
            </ul>
          </div>

          {/* CATEGORY 2 */}
          <div className="md:col-span-2 md:row-span-3 border border-white/10 bg-white/1.5 rounded-[30px] p-6 hover:bg-white/3 transition">
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/40 mb-4">
              Reklama & vizuálna propagácia
            </h3>

            <p className="text-xs text-white/40 mb-4 leading-relaxed">
              Veci, ktoré vidia všetci — presne tam, kde ich treba.
            </p>

            <ul className="text-sm text-white/75 space-y-1">
              <li>Billboardy & bigboardy</li>
              <li>Svetelné reklamy</li>
              <li>Reklama na autá</li>
              <li>Výklady & polepy</li>
              <li>Interiérové brandingy</li>
            </ul>
          </div>

          {/* CTA BLOCK (ENHANCED) */}
          <div className="md:col-span-2 md:row-span-4 border border-white/10 bg-white/2 rounded-[30px] p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-white/30">
                kontakt
              </span>

              <h3 className="text-2xl md:text-3xl mt-6 leading-snug font-light">
                Máte nápad? My ho vieme premeniť na{" "}
                <span className="font-black">reálny výstup</span>.
              </h3>

              <p className="text-sm text-white/60 mt-6 leading-relaxed">
                Stačí pár slov. Navrhneme, pripravíme, vytlačíme a doručíme.
                Bez zbytočných krokov, bez komplikácií.
              </p>

              <p className="text-sm text-white/40 mt-4 leading-relaxed">
                Rýchle nacenenie • individuálny prístup • kompletná výroba
              </p>
            </div>

            <button className="mt-10 px-7 py-4 rounded-full bg-white text-black text-sm font-medium hover:scale-[1.03] transition w-fit">
              Dohodnúť spoluprácu
            </button>
          </div>

          {/* CATEGORY 3 */}
          <div className="md:col-span-2 md:row-span-3 border border-white/10 bg-white/1.5 rounded-[30px] p-6 hover:bg-white/3 transition">
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/40 mb-4">
              Digitálne služby
            </h3>

            <p className="text-xs text-white/40 mb-4 leading-relaxed">
              Online prítomnosť, ktorá nie je len “web”, ale nástroj predaja.
            </p>

            <ul className="text-sm text-white/75 space-y-1">
              <li>Tvorba webstránok & e-shopov</li>
              <li>SEO optimalizácia</li>
              <li>PPC kampane (Google Ads)</li>
              <li>Social media reklama</li>
              <li>Brand identity & dizajn</li>
            </ul>
          </div>

          {/* CATEGORY 4 */}
          <div className="md:col-span-2 md:row-span-2 border border-white/10 bg-white/1.5 rounded-[30px] p-6 hover:bg-white/3 transition">
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/40 mb-4">
              Personalizované produkty
            </h3>

            <p className="text-xs text-white/40 mb-4 leading-relaxed">
              Malé detaily, ktoré robia značku zapamätateľnou.
            </p>

            <ul className="text-sm text-white/75 space-y-1">
              <li>Darčekové predmety</li>
              <li>Pečiatky</li>
              <li>Medené & hliníkové štítky</li>
              <li>Gravírovanie</li>
              <li>Prémiové firemné darčeky</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}