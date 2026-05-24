// components/SloganSection.jsx

export default function SloganSection() {
  const items = [
    {
      src: "/cap.png",
      className:
        "top-[10%] left-[6%] w-110 rotate-[-5deg] animate-floatSlow",
    },
    {
      src: "/mug.png",
      className:
        "top-[14%] right-[12%] w-100 rotate-[-40deg] animate-floatReverse",
    },
    {
      src: "/pen.png",
      className:
        "bottom-[5%] right-[8%] w-26 rotate-[18deg] animate-floatMedium",
    },
    {
      src: "/sticker.png",
      className:
        "bottom-[10%] left-[5%] w-100 rotate-[-18deg] animate-floatSlow",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden text-white flex items-center justify-center px-6">
      {/* subtle texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[30px_30px]" />

      {/* ambient blur */}
      <div className="absolute top-1/2 left-1/2 w-125 h-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/3 blur-3xl" />

      {/* floating pngs */}
      <div className="absolute inset-0 pointer-events-none">
        {items.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt=""
            className={`absolute object-contain select-none pointer-events-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] ${item.className}`}
          />
        ))}
      </div>

      {/* center slogan */}
      <div className="relative z-10 text-center max-w-6xl">
        <div className="inline-flex flex-col items-start">
          {/* top line */}
          <div className="flex flex-wrap items-end gap-4 md:gap-6">
            <span className="text-3xl md:text-5xl lg:text-6xl text-white/75 font-light tracking-[-0.04em]">
              čo zvládnete
            </span>

            <span className="text-6xl md:text-8xl lg:text-[10rem] leading-none font-black tracking-[-0.08em]">
              vymenovať,
            </span>
          </div>

          {/* divider */}
          <div className="w-full flex items-center gap-5 my-5 md:my-8">
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* bottom line */}
          <div className="flex flex-wrap items-end gap-4 md:gap-6 self-end justify-end">
            <span className="text-6xl md:text-8xl lg:text-[10rem] leading-none font-black tracking-[-0.08em]">
              my
            </span>

            <div className="flex flex-col items-start">
              <span className="text-3xl md:text-5xl lg:text-6xl text-white/75 font-light tracking-[-0.04em]">
                zvládneme
              </span>

              <span className="text-4xl md:text-6xl lg:text-7xl italic font-light text-white">
                potlačiť
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}