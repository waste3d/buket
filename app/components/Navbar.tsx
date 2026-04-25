'use client';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference text-white">
      <div className="text-2xl font-serif tracking-widest uppercase">Flora.</div>
      
      <div className="hidden md:flex gap-8 uppercase text-[10px] tracking-[0.2em] font-medium">
        <a href="#" className="hover:text-fl-sage transition-colors">Коллекции</a>
        <a href="#" className="hover:text-fl-sage transition-colors">Доставка</a>
        <a href="#" className="hover:text-fl-sage transition-colors">Павильоны</a>
        <a href="#" className="hover:text-fl-sage transition-colors">О нас</a>
      </div>

      <div className="flex gap-4 items-center">
        <ShoppingBag size={20} strokeWidth={1.5} />
        <Menu size={20} className="md:hidden" />
      </div>
    </nav>
  );
}