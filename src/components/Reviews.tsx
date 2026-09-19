import { HiOutlineBadgeCheck } from 'react-icons/hi'

const credentials = [
  'CertainTeed Master Contractor',
  'A+ BBB Rating',
  '2025 CertainTeed Diamond Approval Award',
]

export default function Reviews() {
  return (
    <section id="reviews" className="bg-charcoal-950 py-24 sm:py-28">
      <div className="container-px mx-auto max-w-content text-center">
        <p className="eyebrow-light">Reputation</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl leading-tight text-cream-50 sm:text-5xl">
          Trust is built one roof at a time.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-cream-100/70">
          Trusted by homeowners throughout Monroe and the greater Atlanta
          Metro area.
        </p>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          {credentials.map((credential) => (
            <div
              key={credential}
              className="flex flex-col items-center gap-3 border border-cream-50/10 px-6 py-8"
            >
              <HiOutlineBadgeCheck size={26} className="text-gold-300" />
              <span className="text-sm leading-snug text-cream-50">{credential}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
