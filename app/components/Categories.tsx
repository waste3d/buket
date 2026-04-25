export default function Categories() {
    return (
      <section className="py-20 px-6 bg-brand-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[600px]">
            {/* Большой блок */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all">
              <img src="https://images.unsplash.com/photo-1523694553227-ec44219973d1?q=80&w=800" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 p-8 text-white z-10">
                <h3 className="text-3xl font-bold mb-2">Авторские сеты</h3>
                <button className="bg-white text-brand-dark px-4 py-2 rounded-xl text-sm font-bold">Смотреть</button>
              </div>
              <div className="absolute inset-0 bg-black/30" />
            </div>
  
            {/* Маленькие блоки */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-brand-pink flex items-center justify-center text-white p-8">
               <div className="text-center">
                  <h3 className="text-4xl font-black mb-2">ПОДПИСКА</h3>
                  <p className="font-medium opacity-90">Цветы домой каждую неделю</p>
               </div>
            </div>
  
            <div className="relative group overflow-hidden rounded-3xl bg-white shadow-sm">
              <img src="https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=400" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-dark/20 flex items-end p-4">
                <span className="text-white font-bold">Монобукеты</span>
              </div>
            </div>
  
            <div className="relative group overflow-hidden rounded-3xl bg-brand-dark flex items-center justify-center p-6 text-center">
               <p className="text-white font-bold uppercase tracking-tighter leading-none text-2xl">
                  Скидка -15% <br /> <span className="text-brand-pink font-light text-sm">на первый заказ</span>
               </p>
            </div>
          </div>
        </div>
      </section>
    );
  }