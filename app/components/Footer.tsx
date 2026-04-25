export default function Footer() {
    return (
      <footer className="py-12 px-6 border-t border-fl-dark/5 text-fl-dark/40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-serif tracking-widest uppercase text-fl-dark">Flora.</div>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest">
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
            <a href="#">Telegram</a>
          </div>
          <p className="text-[10px] uppercase tracking-widest">© 2024 Все права защищены</p>
        </div>
      </footer>
    );
  }