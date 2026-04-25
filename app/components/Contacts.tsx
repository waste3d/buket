export default function Contact() {
    return (
      <section className="py-32 bg-soft-green/30">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-serif mb-8">Оформить подписку <br /> на цветы</h2>
          <p className="opacity-60 mb-12 font-light">Оставьте ваши контакты, и наш флорист свяжется с вами для подбора идеального графика доставки свежих букетов.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              placeholder="Ваш телефон" 
              className="flex-grow bg-transparent border-b border-soft-text/20 py-4 focus:border-soft-text outline-none transition-colors"
            />
            <button className="bg-soft-text text-white px-12 py-4 uppercase text-[10px] tracking-widest hover:bg-black transition-colors">
              Отправить
            </button>
          </div>
        </div>
      </section>
    );
  }