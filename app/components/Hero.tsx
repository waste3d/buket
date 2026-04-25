'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between border-b border-soft-line pb-12">
        <div className="max-w-xl">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif leading-tight mb-8"
          >
            Цветы как <br /> <i>тихое</i> высказывание
          </motion.h1>
          <p className="text-lg opacity-70 leading-relaxed mb-8 font-light">
            Мы создаем лаконичные букеты для тех, кто ценит естественную красоту и сезонность. Сеть павильонов с душой в каждом районе.
          </p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 rotate-90 origin-right translate-y-[-50px]">
            est. 2024 • Flora Collective
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-4 mt-12">
        <div className="col-span-12 md:col-span-8 h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1470" 
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
          />
        </div>
        <div className="col-span-12 md:col-span-4 bg-soft-clay/20 p-12 flex flex-col justify-center">
          <span className="text-xs uppercase tracking-widest mb-4 opacity-60">Коллекция месяца</span>
          <h3 className="text-3xl font-serif mb-6 italic">Белый пион</h3>
          <p className="text-sm opacity-70 mb-8 leading-relaxed">Символ чистоты и новых начинаний. Доступен в павильонах до конца недели.</p>
          <button className="text-xs uppercase tracking-[0.2em] border-b border-soft-text w-fit pb-1 hover:opacity-50 transition-opacity">
            Подробнее
          </button>
        </div>
      </div>
    </section>
  );
}