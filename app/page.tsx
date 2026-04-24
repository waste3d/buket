'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Oswald, Inter } from 'next/font/google';
import { ArrowRight, Plus, MapPin, Phone, Send, Zap } from 'lucide-react';

const oswald = Oswald({ subsets: ['cyrillic', 'latin'], weight: ['400', '700'] });
const inter = Inter({ subsets: ['cyrillic', 'latin'], weight: ['400', '700', '900'] });

const STORES = [
  { id: '01', name: 'КРАСНЫХ ФОРТОВ, 26', info: 'КРУГЛОСУТОЧНО / 24-7' },
  { id: '02', name: 'ГЕРОЕВ, 74', info: 'РАБОТАЕМ ДО 21:00' },
  { id: '03', name: 'МОЛОДЕЖНАЯ, 6', info: 'РАБОТАЕМ ДО 22:00' },
  { id: '04', name: 'СИБИРСКАЯ, 6', info: 'РАБОТАЕМ ДО 21:00' },
];

export default function BrutalismEdition() {
  return (
    <div className={`${inter.className} bg-white text-black antialiased selection:bg-red-600 selection:text-white`}>
      
      {/* --- ШАПКА --- */}
      <nav className="fixed w-full z-50 border-b-2 border-black bg-white">
        <div className="flex h-16 md:h-24 items-center justify-between px-4 md:px-10">
          <div className={`${oswald.className} text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none`}>
            БУКЕТ-СБ
          </div>
          <div className="hidden lg:flex gap-8 text-[11px] font-black tracking-[0.2em] uppercase">
            <a href="#catalog" className="hover:bg-black hover:text-white px-2 transition-all">КАТАЛОГ</a>
            <a href="#victory" className="text-red-600 hover:bg-red-600 hover:text-white px-2 transition-all underline decoration-2 underline-offset-4">9 МАЯ</a>
            <a href="#stores" className="hover:bg-black hover:text-white px-2 transition-all">МАГАЗИНЫ</a>
          </div>
          <button className="bg-black text-white px-6 md:px-10 py-3 md:py-5 text-xs font-black uppercase tracking-widest hover:bg-red-600 transition-all">
            ЗАКАЗАТЬ
          </button>
        </div>
      </nav>

      {/* --- ГЕРОЙ --- */}
      <section className="pt-16 md:pt-24 border-b-2 border-black flex flex-col md:flex-row">
        <div className="flex-1 p-6 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col justify-between min-h-[60vh]">
          <h1 className={`${oswald.className} text-[15vw] md:text-[10vw] font-bold leading-[0.8] tracking-tighter uppercase`}>
            СВЕЖЕСТЬ <br /> <span className="text-red-600 mt-10">ЕЖЕДНЕВНО</span>
          </h1>
          <div className="max-w-md">
            <p className="text-sm font-black uppercase tracking-tight leading-tight mb-8">
              ГЛАВНАЯ ЦВЕТОЧНАЯ СЕТЬ СОСНОВОГО БОРА. <br />
              ДАРИМ РАДОСТЬ С 2012 ГОДА .
            </p>
            <div className="flex gap-4">
               <div className="p-4 border-2 border-black">
                  <Zap size={24} fill="currentColor" />
               </div>
               <p className="text-[10px] font-bold uppercase leading-none self-center">Доставка по городу <br /> от 40 минут</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[35%] grayscale hover:grayscale-0 transition-all duration-700 bg-stone-100">
           <img src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800" className="w-full h-full object-cover" alt="flowers" />
        </div>
      </section>

      {/* --- ВЫДЕЛЕННЫЙ БЛОК: 9 МАЯ (ЦЕНТРАЛЬНЫЙ АКЦЕНТ) --- */}
      <section id="victory" className="bg-red-600 text-white border-b-2 border-black">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
            <div className="inline-block bg-black text-white px-4 py-2 mb-10 text-[10px] font-black uppercase tracking-[0.4em]">
              АКТУАЛЬНО / МАЙ
            </div>
            <h2 className={`${oswald.className} text-[18vw] md:text-[12vw] font-bold leading-[0.8] tracking-tighter uppercase mb-12`}>
              ПОБЕДА <br /> 79 ЛЕТ
            </h2>
            <div className="grid md:grid-cols-2 gap-10 border-t-2 border-black/20 pt-10">
               <p className="text-xl font-bold uppercase leading-tight">
                  СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ: <br /> КРАСНЫЕ ГВОЗДИКИ — СИМВОЛ НАШЕЙ ПАМЯТИ.
               </p>
               <div className="space-y-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/80">
                    МЫ ПОДГОТОВИЛИ БОЛЕЕ 5000 ГВОЗДИК, ТОРЖЕСТВЕННЫЕ КОРЗИНЫ И БУКЕТЫ ДЛЯ ВОЗЛОЖЕНИЯ К ПАМЯТНИКАМ СОСНОВОГО БОРА.
                  </p>
                  <button className="w-full bg-white text-red-600 py-6 text-sm font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    ЗАКАЗАТЬ К ПРАЗДНИКУ
                  </button>
               </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative min-h-[500px]">
            
             <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="border-8 border-white p-10 rotate-[-5deg] bg-red-600/20 backdrop-blur-sm">
                   <p className={`${oswald.className} text-[15vw] font-bold leading-none`}>09</p>
                   <p className="text-2xl font-black uppercase tracking-[0.3em] text-center">МАЯ</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- ТЕХНИЧЕСКИЙ БЛОК: КАТАЛОГ --- */}
      <section id="catalog" className="py-24 border-b-2 border-black px-4 md:px-10 bg-[#f9f9f9]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className={`${oswald.className} text-7xl md:text-9xl font-bold uppercase tracking-tighter leading-none`}>
            КАТАЛОГ
          </h2>
          <p className="text-xs font-black uppercase tracking-widest max-w-[200px] text-right">
            ВЫБИРАЙТЕ ГОТОВЫЕ РЕШЕНИЯ ИЛИ СОЗДАЙТЕ СВОЕ.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-px bg-black border-2 border-black">
          {['МОНОБУКЕТЫ', 'АВТОРСКИЕ', 'КОРЗИНЫ'].map((title, i) => (
            <div key={i} className="bg-white p-10 hover:bg-black hover:text-white transition-all group cursor-pointer min-h-[400px] flex flex-col justify-between">
              <span className="text-xs font-black font-mono">/ 0{i+1}</span>
              <h3 className={`${oswald.className} text-5xl font-bold uppercase tracking-tighter leading-none`}>{title}</h3>
              <div className="flex justify-between items-end">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Смотреть серию</p>
                <Plus size={32} className="group-hover:rotate-90 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- АДРЕСА --- */}
      <section id="stores" className="py-24 px-4 md:px-10">
        <h2 className="text-xs font-black tracking-[0.4em] uppercase mb-16 underline decoration-4 underline-offset-8">
          ПАВИЛЬОНЫ / СОСНОВЫЙ БОР
        </h2>
        <div className="border-t-2 border-black">
          {STORES.map((item) => (
            <div key={item.id} className="grid md:grid-cols-12 border-b-2 border-black py-10 items-center hover:bg-stone-50 px-4 group transition-colors">
              <span className={`${oswald.className} md:col-span-1 text-2xl font-bold text-stone-300`}>{item.id}</span>
              <div className="md:col-span-7 my-4 md:my-0">
                <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:text-red-600 transition-colors">
                  {item.name}
                </h4>
              </div>
              <div className="md:col-span-3 text-xs font-black uppercase tracking-widest text-stone-400">
                {item.info}
              </div>
              <div className="md:col-span-1 flex justify-end">
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ФУТЕР --- */}
      <footer className="bg-black text-white p-6 md:p-20">
        <div className="grid lg:grid-cols-2 gap-20 items-end border-b border-white/20 pb-20">
          <h2 className={`${oswald.className} text-[15vw] font-bold leading-none tracking-tighter uppercase`}>
            БУКЕТ-СБ
          </h2>
          <div className="grid grid-cols-2 gap-10 md:gap-20 text-[10px] font-black tracking-[0.2em] uppercase">
            <div className="space-y-6">
              <p className="text-white/30">СЕРВИС</p>
              <a href="#" className="block hover:text-red-600 transition">ДОСТАВКА</a>
              <a href="#" className="block hover:text-red-600 transition">ОПЛАТА</a>
              <a href="#" className="block hover:text-red-600 transition">УХОД</a>
            </div>
            <div className="space-y-6">
              <p className="text-white/30">КОНТАКТЫ</p>
              <p>Т. 8 (911) 094-94-36</p>
              <p>ВКОНТАКТЕ</p>
              <p>ТЕЛЕГРАМ</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 text-[9px] font-bold tracking-[0.4em] uppercase text-white/40">
           <span>© 2026 ЦВЕТОЧНАЯ СЕТЬ БУКЕТ-СБ</span>
           <span className="mt-4 md:mt-0">СОСНОВЫЙ БОР / РОССИЯ</span>
        </div>
      </footer>

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 12px; }
        ::-webkit-scrollbar-track { background: #fff; }
        ::-webkit-scrollbar-thumb { background: #000; border: 3px solid #fff; }
        ::selection { background: #ff0000; color: #fff; }
      `}</style>
    </div>
  );
}