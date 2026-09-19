import {
  HiOutlineClipboardCheck,
  HiOutlineCube,
  HiOutlineSparkles,
} from "react-icons/hi";

const features = [
  {
    icon: <HiOutlineClipboardCheck size={20} />,
    label: "Detailed Inspections",
  },
  { icon: <HiOutlineCube size={20} />, label: "Quality Materials" },
  { icon: <HiOutlineSparkles size={20} />, label: "Professional Workmanship" },
];

export default function WhySuperior() {
  return (
    <section id="why-superior" className="bg-charcoal-950 py-24 sm:py-28">
      <div className="container-px mx-auto grid max-w-content grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="relative h-[420px] lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1635424709961-f3a150459ad4?q=80&w=1200&auto=format&fit=crop"
            alt="A roofing crew installing new architectural shingles on a residential roof"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <svg
            className="absolute -bottom-6 -right-6 hidden h-28 w-40 text-burgundy-500 sm:block"
            viewBox="0 0 160 80"
            fill="none"
          >
            <path
              d="M2 78 L40 30 L80 55 L120 15 L158 40"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex flex-col justify-center">
          <p className="eyebrow-light">Why Superior</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-cream-50 sm:text-5xl">
            Built on craftsmanship.
            <br />
            Backed by experience.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-cream-100/70">
            Since 1990, Superior Roofing Company of Georgia has served
            homeowners across the state as a family-owned, veteran-operated
            business focused entirely on residential roofing. That focus means
            every inspection, repair, and installation gets our full attention.
          </p>

          <div className="mt-10 flex flex-col gap-5">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-4 border-t border-cream-50/10 pt-5"
              >
                <span className="text-gold-300">{feature.icon}</span>
                <span className="text-sm font-medium tracking-wide text-cream-50">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
