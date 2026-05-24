// components/AboutSection.jsx
export default function AboutSection() {
  const floatingItems = [
    "LETÁKY",
    "POHÁRE",
    "NÁLEPKY",
    "TRIČKÁ",
    "PERO",
    "CEDULE",
    "ŠTÍTKY",
    "ČIAPKY",
    "VIZITKY",
    "POLEPY",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden text-white flex items-center justify-center px-6 py-24">
      {/* subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[28px_28px]" />


      {/* floating objects */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingItems.map((item, index) => (
          <div
            key={item}
            className={`absolute floating-item-${index} border border-white/10 bg-white/3 backdrop-blur-sm text-white/60 px-5 py-3 rounded-full text-xs tracking-[0.25em]`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* CENTER BLOCK */}
      <div className="relative z-10 max-w-6xl w-full border border-white/10 bg-white/3 backdrop-blur-md rounded-[40px] p-8 md:p-14 lg:p-20">
        <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-20">
          {/* LEFT */}
          <div className="flex flex-col justify-start">
            <span className="uppercase text-white/35 tracking-[0.3em] text-xs mb-6">
              O NÁS
            </span>

            <h2 className="text-5xl md:text-7xl leading-[0.9] font-light tracking-[-0.06em]">
              Sme
              <br />
              <span className="font-black pb-2">experti</span>
              <br />
              v obore
            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-between">
            <p className="text-lg md:text-2xl leading-relaxed pt-8 text-white/75 max-w-3xl">
              Grafikou sa zaoberáme už{" "}
              <span className="text-white font-medium">20 rokov</span> a stále
              ideme s dobou. Zatiaľ čo trendy sa menia, naše profesionálne
              výsledky zostávajú.
            </p>

            {/* bottom line */}
            <div className="mt-16 flex items-center gap-6">
              <div className="h-px flex-1 bg-white/10" />

              <span className="text-xs uppercase tracking-[0.4em] text-white/30 whitespace-nowrap">
                print • branding • reklama
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}