import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury fashion"
          className="w-full h-full object-cover scale-105 animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/50 via-ink-950/30 to-ink-950/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <p className="text-gold-300 text-xs md:text-sm font-sans font-medium tracking-[0.4em] uppercase mb-6 opacity-0 animate-fade-down animate-delay-300">
            Autumn / Winter 2026
          </p>
          <h1 className="font-serif font-light text-ink-50 text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-shadow-lux opacity-0 animate-fade-up animate-delay-500">
            The Art of
            <br />
            <em className="text-gold-200">Timeless</em> Elegance
          </h1>
          <p className="mt-8 text-ink-100 text-base md:text-lg max-w-xl mx-auto leading-relaxed text-shadow-lux opacity-0 animate-fade-up animate-delay-700">
            Discover a curated collection of luxury pieces, crafted by master artisans and designed to transcend seasons.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animate-delay-[900ms]">
            <Link to="/#shop" className="btn-gold group">
              Shop Collection
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/#collections"
              className="inline-flex items-center justify-center gap-2 border border-ink-50/60 text-ink-50 font-sans text-sm font-medium tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover:bg-ink-50/10 hover:border-ink-50 backdrop-blur-sm"
            >
              Explore Lookbook
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-ink-100 text-[10px] tracking-[0.3em] uppercase animate-pulse-soft">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-ink-100/80 to-transparent animate-pulse-soft" />
      </div>
    </section>
  );
}
