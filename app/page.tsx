import React from 'react';
import { Menu, Phone, MapPin, ArrowRight, Flower2, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

export default function BouquetSBLanding() {
  return (
    <div className="min-h-screen bg-[#FCF9F7] text-[#1A1A1A] selection:bg-rose-100 font-sans tracking-tight scroll-smooth">
      {/* 1. ПРЕМИАЛЬНЫЙ TOP BAR */}
      <div className="w-full bg-[#1A1A1A] py-2.5 px-6 flex justify-between items-center text-[9px] uppercase tracking-[0.3em] text-white/60">
        <div className="flex gap-8">
          <span className="flex items-center gap-2">
            <div className="w-1 h-1 bg-rose-400 rounded-full animate-pulse" /> 
            Доставка по Сосновому Бору от 60 минут
          </span>
        </div>
        <div className="hidden md:flex gap-6 italic">
          <span>Свежие поставки каждое утро</span>
        </div>
      </div>

      {/* 2. HEADER (Без поиска и корзины) */}
      <header className="sticky top-0 z-50 bg-[#FCF9F7]/80 backdrop-blur-xl border-b border-rose-100/50">
        <div className="max-w-[1600px] mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex-1">
            <nav className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
              <a href="#catalog" className="hover:text-rose-500 transition">Каталог</a>
              <a href="#pavilions" className="hover:text-rose-500 transition">Павильоны</a>
              <a href="#clients" className="hover:text-rose-500 transition">Клиентам</a>
            </nav>
            <Menu size={20} className="md:hidden cursor-pointer" />
          </div>

          <div className="text-center group cursor-pointer">
            <h1 className="text-3xl md:text-4xl font-serif tracking-[0.1em] uppercase leading-none flex items-center gap-2">
              <span className="font-light tracking-tighter">Букет</span>
              <span className="text-rose-400 italic font-medium">—</span>
              <span className="font-light tracking-tighter">СБ</span>
            </h1>
            <div className="h-[px] bg-rose-200 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>

          <div className="flex-1 flex justify-end items-center gap-4">
            <a href="tel:+79110949436" className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-rose-500 transition">
              <Phone size={14} /> +7 (911) 094 94 36
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center px-6 md:px-20 overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-[50%] h-[70%] bg-rose-200/20 rounded-[100%] blur-[120px] rotate-12" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-emerald-100/30 rounded-[100%] blur-[100px] -rotate-12" />

        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 items-center gap-12">
          <div className="md:col-span-8 z-10">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-rose-300"></span>
              <span className="text-[11px] uppercase tracking-[0.5em] text-rose-500 font-bold tracking-[0.6em]">Букет-СБ • с 2012</span>
            </div>
            <h2 className="text-6xl md:text-[110px] font-serif leading-[0.85] tracking-tight mb-12">
              Дарить <br />
              <span className="italic text-rose-400/80 font-light relative">
                радость
                <div className="absolute -right-16 top-0 text-rose-200 hidden md:block"><Sparkles size={60} /></div>
              </span> <br />
              легко
            </h2>
            <div className="flex flex-col sm:flex-row gap-10 items-start sm:items-center">
              <a href="#catalog" className="group relative bg-[#1A1A1A] text-white px-14 py-6 text-[10px] uppercase tracking-[0.4em] font-bold transition-all hover:bg-black active:scale-95">
                Выбрать букет
              </a>
              <a href="#pavilions" className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-black pb-1 hover:text-rose-500 hover:border-rose-500 transition cursor-pointer">
                Где забрать?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. КАТЕГОРИИ */}
      <section id="catalog" className="py-32 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-24">
            <h3 className="text-4xl md:text-5xl font-serif mb-4 italic">Коллекции</h3>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400">Выберите настроение вашего дня</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <CategoryCard title="Nude" subtitle="Моно-букеты" color="bg-[#F9F1EF]" textColor="text-[#A6867E]" />
            <CategoryCard title="Verde" subtitle="Зелень и декор" color="bg-[#EDF2F0]" textColor="text-[#7E968E]" />
            <CategoryCard title="Rose" subtitle="Авторские сеты" color="bg-[#FAEDF0]" textColor="text-[#967E84]" />
            <CategoryCard title="Night" subtitle="Композиции" color="bg-[#F2F2F2]" textColor="text-[#888888]" />
          </div>
        </div>
      </section>

      {/* 5. ПАВИЛЬОНЫ (АДРЕСА) */}
      <section id="pavilions" className="py-32 px-6 bg-[#FCF9F7]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-5xl font-serif mb-10 leading-tight">Мы всегда <br /><span className="italic text-rose-400">рядом с вами</span></h3>
              <div className="space-y-10">
                <LocationItem address="ул. Красных Фортов, 26" workTime="Круглосуточно" phone="+7 (911) 094 94 36" isMain />
                <LocationItem address="пр. Героев, 74 " workTime="09:00 — 21:00" phone="+7 (911) 000 00 00" />
                <LocationItem address="ул. Молодежная, 6" workTime="09:00 — 22:00" phone="+7 (911) 000 00 00" />
                <LocationItem address="ул. Петра Великого, 12" workTime="09:00 — 20:00" phone="+7 (911) 000 00 00" />
              </div>
            </div>
            <div className="bg-rose-100/30 h-[600px] rounded-t-full rounded-b-3xl border border-rose-100 flex items-center justify-center relative overflow-hidden">
                <MapPin size={80} className="text-rose-200" strokeWidth={0.5} />
                <div className="absolute bottom-10 left-10 right-10 bg-white p-6 rounded-2xl shadow-xl">
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-2 text-rose-500">Центральный офис</p>
                  <p className="text-sm font-serif italic">г. Сосновый Бор, ул. Красных Фортов, 26</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. КЛИЕНТАМ (ИНФОРМАЦИЯ) */}
      <section id="clients" className="py-32 px-6 bg-white border-y border-rose-50">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-20">
             <h3 className="text-4xl font-serif italic mb-4">Для клиентов</h3>
             <div className="w-20 h-[1px] bg-rose-300 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <InfoBlock 
              title="Доставка и Оплата" 
              items={['Принимаем карты и наличные', 'Доставка по СБ — 300₽', 'При заказе от 5000₽ — бесплатно']}
            />
            <InfoBlock 
              title="Корпоративным лицам" 
              items={['Оформление офисов и витрин', 'Работа по договору (безнал)', 'Еженедельное обновление цветов']}
            />
            <InfoBlock 
              title="Гарантия качества" 
              items={['Фото букета перед отправкой', 'Замена, если цветы несвежие', 'Инструкция по уходу в комплекте']}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1A1A] text-white pt-32 pb-12 px-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 border-b border-white/5 pb-24">
          <div>
            <h4 className="text-2xl font-serif tracking-widest uppercase mb-8">Букет-СБ</h4>
            <p className="text-[11px] text-white/40 leading-relaxed uppercase tracking-[0.2em]">
              Ваш персональный цветочный <br /> бюро в Сосновом Бору.
            </p>
          </div>
          <FooterNav title="Разделы" links={[
            {n: 'Каталог', h: '#catalog'}, 
            {n: 'Павильоны', h: '#pavilions'}, 
            {n: 'Для клиентов', h: '#clients'}
          ]} />
          <FooterNav title="Цветы" links={[
            {n: 'Розы', h: '#catalog'}, 
            {n: 'Пионы', h: '#catalog'}, 
            {n: 'Авторские сеты', h: '#catalog'}
          ]} />
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] mb-8 text-rose-400 font-bold">Связь</h5>
            <p className="text-xl font-light mb-6">+7 (911) 094 94 36</p>
            <div className="space-y-4">
              <p className="text-[10px] text-white/40 uppercase tracking-widest flex items-center gap-3">
                <MapPin size={14} className="text-rose-500" /> Сосновый Бор, ул. Красных Фортов, 26
              </p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest flex items-center gap-3">
                <Clock size={14} className="text-rose-500" /> Ежедневно 08:00 — 22:00
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto mt-12 flex justify-between items-center text-[8px] uppercase tracking-[0.5em] text-white/20 font-bold">
          <span>© 2024 BOUQUET-SB BUREAU</span>
          <span>Sbor Flower Network</span>
        </div>
      </footer>
    </div>
  );
}

// Вспомогательные компоненты

function CategoryCard({ title, subtitle, color, textColor }: any) {
  return (
    <div className={`${color} h-[400px] p-10 flex flex-col justify-between group cursor-pointer transition-all duration-700 hover:shadow-2xl relative overflow-hidden`}>
      <div className="z-10">
        <span className={`text-[9px] uppercase tracking-[0.4em] ${textColor} font-bold opacity-60`}>{subtitle}</span>
        <h3 className={`text-4xl font-serif mt-4 ${textColor} group-hover:translate-x-2 transition-transform duration-500`}>{title}</h3>
      </div>
      <div className="z-10 flex items-center gap-4 text-[9px] uppercase tracking-[0.3em] font-bold group-hover:gap-6 transition-all duration-500">
        Смотреть <ArrowRight size={14} />
      </div>
      <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
        <Flower2 size={200} strokeWidth={0.5} />
      </div>
    </div>
  );
}

function LocationItem({ address, workTime, phone, isMain = false }: any) {
  return (
    <div className={`group border-l-2 ${isMain ? 'border-rose-400' : 'border-gray-200'} pl-8 hover:border-rose-400 transition-colors`}>
      <h4 className="text-lg font-serif italic mb-2 tracking-wide group-hover:text-rose-500 transition-colors">{address}</h4>
      <div className="flex gap-6 text-[10px] uppercase tracking-widest text-gray-400">
        <span className="flex items-center gap-2"><Clock size={12} /> {workTime}</span>
        <span className="flex items-center gap-2 hover:text-black transition-colors cursor-pointer"><Phone size={12} /> {phone}</span>
      </div>
    </div>
  );
}

function InfoBlock({ title, items }: any) {
  return (
    <div className="p-8 bg-white border border-rose-50 hover:shadow-lg transition-shadow">
      <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold text-rose-400 mb-8">{title}</h4>
      <ul className="space-y-4">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-xs leading-relaxed text-gray-500 tracking-wide">
            <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterNav({ title, links }: any) {
  return (
    <div>
      <h5 className="text-[10px] uppercase tracking-[0.4em] mb-8 text-white/30 font-bold">{title}</h5>
      <ul className="space-y-4">
        {links.map((link: any) => (
          <li key={link.n}>
            <a href={link.h} className="text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-rose-400 transition-colors">
              {link.n}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}