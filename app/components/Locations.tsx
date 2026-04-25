const shops = [
    { name: "Тихая Садовая", time: "09:00 — 21:00", img: "https://images.unsplash.com/photo-1596435345780-60f99479b37c?q=80&w=600" },
    { name: "Уголок на Мира", time: "10:00 — 22:00", img: "https://images.unsplash.com/photo-1525310238806-e19133036981?q=80&w=600" }
  ];
  
  export default function Locations() {
    return (
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-20">
          <h2 className="text-4xl font-serif uppercase tracking-widest text-[24px]">Наши адреса</h2>
          <div className="h-[1px] bg-soft-line flex-grow mx-12 hidden md:block" />
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {shops.map((shop, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-8 bg-gray-100">
                <img src={shop.img} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="flex justify-between items-end border-b border-soft-line pb-4">
                <div>
                  <h4 className="text-2xl font-serif mb-1">{shop.name}</h4>
                  <p className="text-xs opacity-50 uppercase tracking-tighter">Режим работы: {shop.time}</p>
                </div>
                <span className="text-[10px] uppercase border border-soft-text/20 rounded-full px-4 py-1">Маршрут</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}