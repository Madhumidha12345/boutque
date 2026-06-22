import { Sparkles } from 'lucide-react';

const messages = [
  'Complimentary shipping on all orders above ₹25,000',
  'Handcrafted by master artisans in Florence',
  'New Autumn / Winter 2026 Collection now available',
  'Members enjoy exclusive early access to capsules',
];

export default function AnnouncementBar() {
  const doubled = [...messages, ...messages];
  return (
    <div className="bg-ink-950 text-ink-100 py-3 overflow-hidden border-b border-ink-800">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((msg, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-8 text-xs font-sans tracking-[0.2em] uppercase text-ink-300"
          >
            <Sparkles size={12} className="mr-2 text-gold-400" />
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}
