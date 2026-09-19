import { HiOutlineArrowUpRight } from 'react-icons/hi2'
import {
  HiOutlineHome,
  HiOutlineSun,
  HiOutlineShieldCheck,
  HiOutlineSearch,
} from 'react-icons/hi'
import { GiWaterDrop } from 'react-icons/gi'
import { TbLayoutGrid, TbTool } from 'react-icons/tb'
import { Service } from '../types'

const iconMap: Record<string, JSX.Element> = {
  wrench: <TbTool size={22} />,
  home: <HiOutlineHome size={22} />,
  layers: <TbLayoutGrid size={22} />,
  droplet: <GiWaterDrop size={20} />,
  sun: <HiOutlineSun size={22} />,
  shield: <HiOutlineShieldCheck size={22} />,
  search: <HiOutlineSearch size={22} />,
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <a
      href="#contact"
      className="group relative flex flex-col overflow-hidden border border-charcoal-100 bg-cream-50 transition-colors hover:border-burgundy-500/40"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-charcoal-950/25 transition-opacity group-hover:bg-charcoal-950/10" />
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-cream-50 text-burgundy-500">
          {iconMap[service.icon]}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl text-charcoal-900">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-400">
          {service.description}
        </p>
        <div className="mt-5 flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-charcoal-900">
          Learn more
          <HiOutlineArrowUpRight
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            size={14}
          />
        </div>
      </div>
    </a>
  )
}
