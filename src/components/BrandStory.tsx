import { Award, Truck, ShieldCheck, Gem } from 'lucide-react';

const values = [
  {
    icon: Gem,
    title: 'Master Artisans',
    text: 'Each piece is crafted by hand in our Florence atelier, preserving centuries-old techniques.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    text: 'Only the finest materials—Italian wool, pure silk, and 18k gold—make it into our collections.',
  },
  {
    icon: Truck,
    title: 'White-Glove Delivery',
    text: 'Complimentary worldwide shipping with signature packaging and insurance.',
  },
  {
    icon: ShieldCheck,
    title: 'Lifetime Guarantee',
    text: 'We stand behind every piece with a lifetime craftsmanship guarantee.',
  },
];

export default function BrandStory() {
  return (
    <section className="py-24 md:py-32 bg-ink-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Atelier"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-ink-950 text-ink-50 p-8 hidden md:block">
              <p className="font-serif text-4xl text-gold-300">1987</p>
              <p className="text-xs tracking-[0.2em] uppercase text-ink-300 mt-1">Est. Florence</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="section-label mb-4">Our Heritage</p>
            <h2 className="heading-serif text-4xl md:text-5xl text-ink-950 mb-6">
              A Legacy of <em className="text-gold-600">Craftsmanship</em>
            </h2>
            <p className="text-ink-600 leading-relaxed mb-4">
              For nearly four decades, Maison Luxe has been synonymous with unparalleled luxury. What
              began as a small atelier in the heart of Florence has grown into a globally celebrated
              house of design—without ever compromising on the artistry that defines us.
            </p>
            <p className="text-ink-600 leading-relaxed mb-8">
              Every garment, every accessory, every detail is a testament to our unwavering
              commitment to beauty, quality, and the belief that true luxury is timeless.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-ink-200">
              <div>
                <p className="font-serif text-3xl text-gold-600">40+</p>
                <p className="text-xs tracking-wider uppercase text-ink-500 mt-1">Years</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold-600">120+</p>
                <p className="text-xs tracking-wider uppercase text-ink-500 mt-1">Artisans</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold-600">50K+</p>
                <p className="text-xs tracking-wider uppercase text-ink-500 mt-1">Clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-ink-200">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold-300 text-gold-600 mb-4 mx-auto md:mx-0">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif text-xl text-ink-900 mb-2">{v.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{v.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
