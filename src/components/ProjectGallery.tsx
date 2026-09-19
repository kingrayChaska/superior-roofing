import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { galleryItems } from "../data/gallery";
import { GalleryItem } from "../types";

const categories = [
  "All",
  "Roof Replacement",
  "Roof Repair",
  "Shingles",
  "Exterior",
] as const;

const aspectClass: Record<GalleryItem["aspect"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

export default function ProjectGallery() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? galleryItems
        : galleryItems.filter((g) => g.category === active),
    [active],
  );

  const openLightbox = (id: string) => {
    const idx = filtered.findIndex((g) => g.id === id);
    setLightboxIndex(idx);
  };

  const step = (dir: 1 | -1) => {
    if (lightboxIndex === null) return;
    const next = (lightboxIndex + dir + filtered.length) % filtered.length;
    setLightboxIndex(next);
  };

  const current = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section id="our-work" className="bg-cream py-24 sm:py-28">
      <div className="container-px mx-auto max-w-content">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">Portfolio</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal-900 sm:text-5xl">
              Work that speaks for itself.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-charcoal-400">
              A closer look at residential roofing work and exterior
              transformations.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`border px-4 py-2 text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors ${
                  active === cat
                    ? "border-burgundy-500 bg-burgundy-500 text-cream-50"
                    : "border-charcoal-100 text-charcoal-600 hover:border-charcoal-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((item) => (
            <button
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className={`group relative mb-5 block w-full overflow-hidden break-inside-avoid ${aspectClass[item.aspect]}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/0 to-charcoal-950/0 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-gold-300">
                  {item.category}
                </span>
                <span className="mt-1 flex items-center gap-2 font-serif text-lg text-cream-50">
                  {item.title}
                  <HiOutlineArrowUpRight size={16} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal-950/95 p-4 sm:p-10"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute right-5 top-5 text-cream-50/80 hover:text-cream-50"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              <HiOutlineX size={28} />
            </button>

            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 text-cream-50/70 hover:text-cream-50 sm:left-6"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
            >
              <HiChevronLeft size={32} />
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-cream-50/70 hover:text-cream-50 sm:right-6"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
            >
              <HiChevronRight size={32} />
            </button>

            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-3xl"
            >
              <img
                src={current.image}
                alt={current.title}
                className="max-h-[70vh] w-full object-contain"
              />
              <div className="mt-4 text-center">
                <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-gold-300">
                  {current.category}
                </span>
                <p className="mt-1 font-serif text-xl text-cream-50">
                  {current.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
