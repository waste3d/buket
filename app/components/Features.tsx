const features = [
    { t: "Свежесть", d: "Прямые поставки из Голландии и Эквадора дважды в неделю." },
    { t: "Стиль", d: "Авторский европейский стиль флористики без лишнего пластика." },
    { t: "Скорость", d: "Доставка в течение 60 минут в любую точку города." }
  ];
  
  export default function Features() {
    return (
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((f, i) => (
            <div key={i} className="text-center">
              <h3 className="font-serif text-2xl mb-4 italic text-fl-dark">{f.t}</h3>
              <p className="text-fl-dark/60 text-sm leading-relaxed font-light uppercase tracking-wider">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }